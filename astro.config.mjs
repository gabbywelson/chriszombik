import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import remarkGfm from "remark-gfm";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://chriszombik.com',
  integrations: [tailwind(), sitemap()],
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkGfm],
    drafts: true
  }
});