import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';          // 추가 ✅

export default defineConfig({
  integrations: [react()],                   // 추가 ✅
  vite: { plugins: [tailwindcss()] },
  adapter: netlify(),
});
