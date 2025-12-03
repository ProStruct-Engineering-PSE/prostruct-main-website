import { generateSitemapXml, getAllPages, extractPathFromUrl, formatDateForSitemap } from '@/lib/sitemap-helpers';

export async function GET() {
  const baseUrl = 'https://prostructengineering.com'; // Update with your domain
  
  // Get all pages (blog posts are automatically excluded)
  const pages = getAllPages();
  
  // Convert to sitemap items
  const items = pages.map(page => ({
    url: `${baseUrl}${extractPathFromUrl(page.link)}`,
    lastmod: formatDateForSitemap(page.modified),
    changefreq: 'monthly',
    priority: 0.8
  }));
  
  const xml = generateSitemapXml(items);
  
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
