/**
 * robots.txt route
 * Points to the Yoast-style sitemap_index.xml
 */

export async function GET() {
  const baseUrl = "https://prostructengineering.com"; // Update with your domain

  const robotsTxt = `User-agent: *
Disallow: 

Sitemap: ${baseUrl}/sitemap_index.xml
`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
