// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages 프로젝트 사이트: https://hsc142857.github.io/blogpilot/
export default defineConfig({
  site: 'https://hsc142857.github.io',
  base: '/blogpilot',
  integrations: [sitemap()],
});
