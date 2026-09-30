import { defineConfig } from 'astro/config';

// Static output: deploys straight to Cloudflare Pages (build command: npm run build, output dir: dist)
export default defineConfig({
  site: 'https://leakdetectionthousandoaksca.com',
  output: 'static',
});
