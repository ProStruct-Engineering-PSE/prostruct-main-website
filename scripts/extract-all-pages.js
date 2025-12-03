/**
 * Bulk Extract All Page Data from WordPress XML
 *
 * This script extracts ACF data for all 38 page templates
 *
 * Usage: node scripts/extract-all-pages.js
 */

const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");

// Paths
const XML_FILE = path.join(__dirname, "../../prostruct.xml");
const OUTPUT_DIR = path.join(__dirname, "../data/pages");

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

    // Filter for published pages with templates
    const pages = items.filter((item) => {
      return item["wp:post_type"] === "page" && item["wp:status"] === "publish";
    });

    console.log(`📄 Found ${pages.length} published pages\n`);

    // Build a map of page ID to page data
    const pageDataMap = {};
    let pagesWithACF = 0;

    pages.forEach((page) => {
      const pageId = page["wp:post_id"];
      const template = page["wp:postmeta"]?.find(
        (meta) => meta["wp:meta_key"] === "_wp_page_template"
      )?.["wp:meta_value"];

      // Only process pages with templates in page-templates folder
      if (!template || !template.includes("page-templates/")) {
        return;
      }

      // Extract template name
      const templateName = template
        .replace("page-templates/", "")
        .replace(".php", "");

      // Extract all postmeta
      const postmeta = page["wp:postmeta"];
      const acfFields = {};

      if (postmeta) {
        const metaArray = Array.isArray(postmeta) ? postmeta : [postmeta];

        metaArray.forEach((meta) => {
          const key = meta["wp:meta_key"];
          const value = meta["wp:meta_value"];

          // Skip WordPress internal fields and ACF field references
          if (
            key &&
            !key.startsWith("_") &&
            !key.startsWith("yoast") &&
            value !== null &&
            value !== undefined &&
            value !== ""
          ) {
            acfFields[key] = value;
          }
        });
      }

      // Only save if page has ACF fields
      if (Object.keys(acfFields).length > 0) {
        pageDataMap[pageId] = {
          page_id: pageId,
          title: page.title || "Untitled",
          slug: page["wp:post_name"] || "",
          template: templateName,
          url: page.link || "",
          featured_media: page["wp:post_parent"] || null,
          acf: acfFields,
        };
        pagesWithACF++;
      }
    });

    console.log(`📊 Found ${pagesWithACF} pages with ACF data\n`);

    // Build repeater fields
    console.log("🔧 Processing repeater fields...\n");

    Object.values(pageDataMap).forEach((pageData) => {
      const acf = pageData.acf;
      const repeaterFields = {};

      // Find all repeater fields (they have a count field)
      Object.keys(acf).forEach((key) => {
        // If the value is a number and there are fields like key_0_subfield
        const value = acf[key];
        if (
          !isNaN(value) &&
          parseInt(value) > 0 &&
          Object.keys(acf).some((k) => k.startsWith(`${key}_0_`))
        ) {
          // This is a repeater field
          const count = parseInt(value);
          const items = [];

          for (let i = 0; i < count; i++) {
            const item = {};
            Object.keys(acf).forEach((fieldKey) => {
              if (fieldKey.startsWith(`${key}_${i}_`)) {
                const subField = fieldKey.replace(`${key}_${i}_`, "");
                item[subField] = acf[fieldKey];
              }
            });
            if (Object.keys(item).length > 0) {
              items.push(item);
            }
          }

          repeaterFields[key] = items;

          // Remove individual repeater items from main ACF object
          Object.keys(acf).forEach((fieldKey) => {
            if (fieldKey.startsWith(`${key}_`) && fieldKey !== key) {
              delete acf[fieldKey];
            }
          });

          // Replace count with actual array
          acf[key] = items;
        }
      });
    });

    // Group pages by template type
    const templateGroups = {};

    Object.values(pageDataMap).forEach((pageData) => {
      const template = pageData.template;
      if (!templateGroups[template]) {
        templateGroups[template] = [];
      }
      templateGroups[template].push(pageData);
    });

    console.log(`📋 Pages grouped by template:\n`);
    Object.keys(templateGroups).forEach((template) => {
      console.log(`   - ${template}: ${templateGroups[template].length} pages`);
    });
    console.log("");

    // Save each page to a separate file
    console.log("💾 Saving page data to files...\n");

    let savedCount = 0;

    Object.values(pageDataMap).forEach((pageData) => {
      // Create safe filename from slug
      const filename = `${pageData.slug || `page-${pageData.page_id}`}.json`;
      const filepath = path.join(OUTPUT_DIR, filename);

      fs.writeFileSync(filepath, JSON.stringify(pageData, null, 2));

      savedCount++;
      console.log(
        `   ✅ Saved: ${filename} (${Object.keys(pageData.acf).length} fields)`
      );
    });

    console.log(`\n🎉 All ${savedCount} pages extracted successfully!\n`);
    console.log(`📁 Pages saved to: ${OUTPUT_DIR}\n`);

    // Create a summary file
    const summary = {
      extracted_date: new Date().toISOString(),
      total_pages: savedCount,
      templates: Object.keys(templateGroups).map((template) => ({
        template,
        pages: templateGroups[template].map((p) => ({
          id: p.page_id,
          title: p.title,
          slug: p.slug,
          file: `${p.slug || `page-${p.page_id}`}.json`,
          fields_count: Object.keys(p.acf).length,
        })),
      })),
    };

    fs.writeFileSync(
      path.join(OUTPUT_DIR, "_pages-summary.json"),
      JSON.stringify(summary, null, 2)
    );

    console.log("📊 Summary saved to: _pages-summary.json\n");

    // Create template index
    const templateIndex = {
      "home-page": templateGroups["home-page"] || [],
      "home-page-state": templateGroups["home-page-state"] || [],
      "service-state-adu-page": templateGroups["service-state-adu-page"] || [],
      "service-state-new-custom-home":
        templateGroups["service-state-new-custom-home"] || [],
      "service-state-home-addition-remodel":
        templateGroups["service-state-home-addition-remodel"] || [],
      "about-page": templateGroups["about-page"] || [],
      "about-page-state": templateGroups["about-page-state"] || [],
      "service-page": templateGroups["service-page"] || [],
      // Add more as needed
    };

    fs.writeFileSync(
      path.join(OUTPUT_DIR, "_template-index.json"),
      JSON.stringify(templateIndex, null, 2)
    );

    console.log("📑 Template index saved to: _template-index.json\n");

    // Summary stats
    console.log("=" + "=".repeat(50) + "\n");
    console.log("📊 EXTRACTION COMPLETE!\n");
    console.log(`   Total pages extracted: ${savedCount}`);
    console.log(`   Total templates: ${Object.keys(templateGroups).length}`);
    console.log(
      `   Total ACF fields: ${Object.values(pageDataMap).reduce(
        (sum, p) => sum + Object.keys(p.acf).length,
        0
      )}`
    );
    console.log("\n" + "=" + "=".repeat(50) + "\n");
  } catch (error) {
    console.error("❌ Error processing XML:", error);
    console.error(error.stack);
  }
});
