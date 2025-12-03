/**
 * Main sitemap.xml - Redirects to sitemap_index.xml (Yoast behavior)
 * This maintains compatibility with common sitemap URLs
 */

export async function GET() {
  const baseUrl = "https://prostructengineering.com"; // Update with your domain

  // Redirect to sitemap_index.xml
  return Response.redirect(`${baseUrl}/sitemap_index.xml`, 301);
}
