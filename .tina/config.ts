import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
const clientId = process.env.TINA_CLIENT_ID || null
const clientToken = process.env.TINA_CLIENT_TOKEN || null

export default defineConfig({
  branch,
  clientId: clientId, // Get this from tina.io
  token: clientToken, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Pub Date"
          },
          {
            type: "image",
            name: "coverImage",
            label: "Cover Image"
          },
          {
            type: "string",
            name: "coverImageAlt",
            label: "Cover Image Alt Text"
          },
          {
            label: "Tags",
            name: "tags",
            type: "string",
            list: true
          }
        ],
      },
    ],
  },
});
