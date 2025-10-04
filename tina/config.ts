import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",  // 📂 Panel de Tina se generará en /admin
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "posts",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Título", isTitle: true, required: true },
          { type: "image", name: "cover", label: "Imagen de portada" },
          { type: "rich-text", name: "body", label: "Contenido", isBody: true },
        ],
      },
    ],
  },
});

