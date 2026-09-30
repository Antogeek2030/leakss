# Thousand Oaks Leak Detection (Astro + Cloudflare Pages)

Static Astro site for leakdetectionthousandoaksca.com.

## Cloudflare deploy
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy` (reads `wrangler.json`, uploads `dist/` as static assets)
- Node version: 22 (set in `.node-version`)

## Edit content
- Business info, phone, address, map, service areas: `src/config.ts`
- Services: `src/data/services.ts` (each entry becomes a page)
- Blog posts: `src/data/posts.ts` (each entry becomes a page)
- Styles: `src/styles/global.css`

`/sitemap.xml` is generated at build time and `public/robots.txt` points to it.

## Local
`npm install && npm run dev`
