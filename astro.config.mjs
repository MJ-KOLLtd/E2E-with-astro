import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://esquareestates.com',
  redirects: {
    '/projects/oro-villas': '/projects/commonwealth/',
    '/projects/oro-villas/': '/projects/commonwealth/',
  },
});
