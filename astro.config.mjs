import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://esquareestates.com', // TODO: update with your real domain
  integrations: [sitemap()],
});
