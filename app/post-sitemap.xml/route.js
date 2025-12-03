import { generateSitemapXml, getAllBlogPosts, formatDateForSitemap } from '@/lib/sitemap-helpers';

export async function GET() {
  const baseUrl = 'https://prostructengineering.com'; // Update with your domain
  
  // Get all blog posts from blog.json
  const posts = getAllBlogPosts();
  
  // Convert to sitemap items (posts are at root level)
  const items = posts.map(post => ({
    url: `${baseUrl}/${post.slug}/`,
    lastmod: formatDateForSitemap(post.modified),
    changefreq: 'weekly',
    priority: 0.6
  }));
  
  const xml = generateSitemapXml(items);
  
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
