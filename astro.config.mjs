import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: netlify(),
});
