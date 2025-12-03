/**
 * Extract WordPress Menus from XML Export
 *
 * This script parses the prostruct.xml file and extracts all navigation menus
 * into structured JSON files for Next.js.
 *
 * Usage: node scripts/extract-menus-from-xml.js
 */

const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");

// Path to your XML file
const XML_FILE = path.join(__dirname, "../../prostruct.xml");
const OUTPUT_DIR = path.join(__dirname, "../data/menus");

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log("🔍 Reading WordPress XML export...\n");

// Read XML file
const xmlContent = fs.readFileSync(XML_FILE, "utf8");

console.log("📦 Parsing XML (this may take a moment)...\n");

// Parse XML
const parser = new xml2js.Parser({
  explicitArray: false,
  mergeAttrs: true,
});

parser.parseString(xmlContent, (err, result) => {
  if (err) {
    console.error("❌ Error parsing XML:", err);
    return;
  }

  console.log("✅ XML parsed successfully!\n");

  try {
    const items = result.rss.channel.item;

    // Find all menu items
    const menuItems = items.filter((item) => {
      return (
        item["wp:post_type"] === "nav_menu_item" &&
        item["wp:status"] === "publish"
      );
    });

    console.log(`📋 Found ${menuItems.length} menu items\n`);

    // Group menu items by menu (nav_menu category)
    const menuGroups = {};

    menuItems.forEach((item) => {
      // Get menu category
      const categories = Array.isArray(item.category)
        ? item.category
        : [item.category];
      const navMenuCat = categories?.find((cat) => cat.domain === "nav_menu");

      if (!navMenuCat) return;

      const menuSlug = navMenuCat.nicename;

      if (!menuGroups[menuSlug]) {
        menuGroups[menuSlug] = [];
      }

      // Extract menu item data
      const postmeta = item["wp:postmeta"];
      const metaObj = {};

      if (postmeta) {
        const metaArray = Array.isArray(postmeta) ? postmeta : [postmeta];
        metaArray.forEach((meta) => {
          const key = meta["wp:meta_key"];
          const value = meta["wp:meta_value"];
          metaObj[key] = value;
        });
      }

      menuGroups[menuSlug].push({
        id: item["wp:post_id"],
        title: item.title || "",
        menu_order: item["wp:menu_order"] || 0,
        parent: metaObj["_menu_item_menu_item_parent"] || "0",
        object: metaObj["_menu_item_object"] || "",
        object_id: metaObj["_menu_item_object_id"] || "",
        type: metaObj["_menu_item_type"] || "",
        url: metaObj["_menu_item_url"] || "",
        classes: metaObj["_menu_item_classes"] || "",
        target: metaObj["_menu_item_target"] || "",
      });
    });

    console.log(`📊 Found ${Object.keys(menuGroups).length} menus:\n`);
    Object.keys(menuGroups).forEach((slug) => {
      console.log(`   - ${slug}: ${menuGroups[slug].length} items`);
    });
    console.log("");

    // Now we need to get page/post titles for the object_ids
    // Let's extract all pages first
    const pages = items.filter(
      (item) =>
        item["wp:post_type"] === "page" && item["wp:status"] === "publish"
    );
    const pageMap = {};

    pages.forEach((page) => {
      pageMap[page["wp:post_id"]] = {
        title: page.title,
        slug: page["wp:post_name"],
        link: page.link,
      };
    });

    console.log(`📄 Mapped ${Object.keys(pageMap).length} pages\n`);

    // Build structured menus
    const structuredMenus = {};

    Object.keys(menuGroups).forEach((menuSlug) => {
      const items = menuGroups[menuSlug];

      // Sort by menu_order
      items.sort((a, b) => parseInt(a.menu_order) - parseInt(b.menu_order));

      // Build menu structure with parent-child relationships
      const menuStructure = [];
      const itemMap = {};

      // First pass: create all items
      items.forEach((item) => {
        const pageData = pageMap[item.object_id];

        // Parse PHP serialized classes or default to empty array
        let parsedClasses = [];
        if (item.classes) {
          try {
            // Try to parse PHP serialized array (e.g., a:1:{i:0;s:10:"about-menu";})
            const match = item.classes.match(/s:\d+:"([^"]+)"/g);
            if (match) {
              parsedClasses = match.map((m) => m.match(/s:\d+:"([^"]+)"/)[1]);
            }
          } catch (e) {
            // If parsing fails, leave as empty array
            parsedClasses = [];
          }
        }

        const menuItem = {
          id: parseInt(item.id),
          title: item.title || (pageData ? pageData.title : "Unknown"),
          url: item.url || (pageData ? "/" + pageData.slug : "#"),
          classes: parsedClasses,
          children: [],
        };

        itemMap[item.id] = menuItem;

        // If no parent, add to root
        if (item.parent === "0") {
          menuStructure.push(menuItem);
        }
      });

      // Second pass: attach children to parents
      items.forEach((item) => {
        if (item.parent !== "0" && itemMap[item.parent]) {
          itemMap[item.parent].children.push(itemMap[item.id]);
        }
      });

      // Remove empty children arrays
      const cleanMenu = (items) => {
        return items.map((item) => {
          if (item.children.length === 0) {
            delete item.children;
          } else {
            item.children = cleanMenu(item.children);
          }
          return item;
        });
      };

      structuredMenus[menuSlug] = cleanMenu(menuStructure);
    });

    // Save each menu to a separate file
    console.log("💾 Saving menus to files...\n");

    Object.keys(structuredMenus).forEach((menuSlug) => {
      const filename = `${menuSlug}.json`;
      const filepath = path.join(OUTPUT_DIR, filename);

      fs.writeFileSync(
        filepath,
        JSON.stringify(structuredMenus[menuSlug], null, 2)
      );

      console.log(
        `   ✅ Saved: ${filename} (${structuredMenus[menuSlug].length} root items)`
      );
    });

    console.log("\n🎉 All menus extracted successfully!\n");
    console.log(`📁 Menus saved to: ${OUTPUT_DIR}\n`);

    // Create a summary file
    const summary = {
      extracted_date: new Date().toISOString(),
      total_menus: Object.keys(structuredMenus).length,
      menus: Object.keys(structuredMenus).map((slug) => ({
        slug,
        file: `${slug}.json`,
        items_count: structuredMenus[slug].length,
      })),
    };

    fs.writeFileSync(
      path.join(OUTPUT_DIR, "_menu-summary.json"),
      JSON.stringify(summary, null, 2)
    );

    console.log("📊 Summary saved to: _menu-summary.json\n");
  } catch (error) {
    console.error("❌ Error processing XML:", error);
  }
});
