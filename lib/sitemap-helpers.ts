/**
 * Simplified Sitemap Helper Functions
 * Uses blog.json to identify blog posts, treats rest as pages
 */

import * as fs from "fs";
import * as path from "path";

interface SitemapItem {
  url: string;
  lastmod: string;
  priority: number;
  changefreq?: string;
}

interface SitemapIndexItem {
  loc: string;
  lastmod: string;
}

interface WordPressPage {
  id: number;
  title: string;
  slug: string;
  link: string;
  parent: number;
  template: string;
  date: string;
  modified: string;
}

interface WordPressPost {
  id: number;
  title: string;
  slug: string;
  link: string;
  date: string;
  modified: string;
  categories: number[];
  tags: number[];
}

interface WordPressData {
  pages: WordPressPage[];
  posts: WordPressPost[];
  stats: {
    totalPages: number;
    totalPosts: number;
    total: number;
  };
}

interface BlogData {
  blogPosts: string[];
}

/**
 * Generate sitemap XML from items
 */
export function generateSitemapXml(items: SitemapItem[]): string {
  const urls = items
    .map(
      (item) => `\t<url>
\t\t<loc>${escapeXml(item.url)}</loc>
\t\t<lastmod>${item.lastmod}</lastmod>
${
  item.changefreq ? `\t\t<changefreq>${item.changefreq}</changefreq>\n` : ""
}\t\t<priority>${item.priority}</priority>
\t</url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

/**
 * Generate sitemap index XML
 */
export function generateSitemapIndexXml(sitemaps: SitemapIndexItem[]): string {
  const sitemapEntries = sitemaps
    .map(
      (sitemap) => `\t<sitemap>
\t\t<loc>${escapeXml(sitemap.loc)}</loc>
\t\t<lastmod>${sitemap.lastmod}</lastmod>
\t</sitemap>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`;
}

/**
 * Escape XML special characters
 */
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Format date for sitemap (ISO 8601)
 */
export function formatDateForSitemap(date: string | Date): string {
  return new Date(date).toISOString();
}

/**
 * Extract clean path from WordPress URL
 */
export function extractPathFromUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.pathname;
  } catch {
    return url;
  }
}

/**
 * Load blog post slugs from blog.json
 */
export function loadBlogPosts(): string[] {
  try {
    const blogPath = path.join(process.cwd(), "blog.json");
    const data: BlogData = JSON.parse(fs.readFileSync(blogPath, "utf-8"));
    return data.blogPosts || [];
  } catch (error) {
    console.error("Error loading blog.json:", error);
    return [];
  }
}

/**
 * Load all WordPress data
 */
export function loadWordPressData(): WordPressData {
  try {
    const dataPath = path.join(process.cwd(), "wordpress-data.json");
    const data: WordPressData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    return data;
  } catch (error) {
    console.error("Error loading WordPress data:", error);
    return {
      pages: [],
      posts: [],
      stats: { totalPages: 0, totalPosts: 0, total: 0 },
    };
  }
}

/**
 * Check if a slug is a blog post
 */
export function isBlogPost(slug: string): boolean {
  const blogPosts = loadBlogPosts();
  return blogPosts.includes(slug);
}

/**
 * Get all pages (excluding blog posts)
 */
export function getAllPages(): WordPressPage[] {
  const data = loadWordPressData();
  const blogSlugs = loadBlogPosts();

  // Filter out blog posts from pages list
  return data.pages.filter((page) => {
    const slug = extractPathFromUrl(page.link).split("/").filter(Boolean).pop();
    return !blogSlugs.includes(slug || "");
  });
}

/**
 * Get all blog posts with metadata
 */
export function getAllBlogPosts(): WordPressPost[] {
  const data = loadWordPressData();
  const blogSlugs = loadBlogPosts();

  // Find posts by matching slugs
  return data.posts.filter((post) => blogSlugs.includes(post.slug));
}
