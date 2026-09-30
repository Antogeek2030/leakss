import type { APIRoute } from 'astro';
import { SITE } from '../config';
import { SERVICES } from '../data/services';
import { POSTS } from '../data/posts';

export const GET: APIRoute = () => {
  const paths = [
    '/', '/service-areas/', '/blog/', '/contact/',
    ...SERVICES.map((s) => `/services/${s.slug}/`),
    ...POSTS.map((p) => `/blog/${p.slug}/`),
  ];
  const today = new Date().toISOString().slice(0, 10);
  const urls = paths
    .map((p) => `  <url><loc>${SITE.url}${p}</loc><lastmod>${today}</lastmod></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
