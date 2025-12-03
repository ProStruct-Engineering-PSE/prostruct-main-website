import { generateSitemapIndexXml, getAllPages, getAllBlogPosts, formatDateForSitemap } from '@/lib/sitemap-helpers';

export async function GET() {
  const baseUrl = 'https://prostructengineering.com'; // Update with your domain
  
  // Get most recent modification dates
  const pages = getAllPages();
  const posts = getAllBlogPosts();
  
  let pagesLastMod = new Date();
  let postsLastMod = new Date();
  
  if (pages.length > 0) {
    const pagesDates = pages.map(p => new Date(p.modified));
    pagesLastMod = new Date(Math.max(...pagesDates));
  }
  
  if (posts.length > 0) {
    const postsDates = posts.map(p => new Date(p.modified));
    postsLastMod = new Date(Math.max(...postsDates));
  }
  
  // List of all sub-sitemaps (Yoast style)
  const sitemaps = [
    {
      loc: `${baseUrl}/page-sitemap.xml`,
      lastmod: formatDateForSitemap(pagesLastMod)
    },
    {
      loc: `${baseUrl}/post-sitemap.xml`,
      lastmod: formatDateForSitemap(postsLastMod)
    }
  ];
  
  const xml = generateSitemapIndexXml(sitemaps);
  
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
