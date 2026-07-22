import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://jankuchnia.github.io',
  base: '/tss-plytki',
  output: 'static',
  integrations: [react()]
});
