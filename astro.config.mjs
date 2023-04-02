import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import remarkGfm from "remark-gfm"

export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkGfm],
    drafts: true,
  },
});