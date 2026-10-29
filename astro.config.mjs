import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://teamvaxor.es',
  trailingSlash: 'never',
  build: { format: 'file' },
});
