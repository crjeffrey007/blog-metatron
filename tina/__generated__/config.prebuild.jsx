// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    // carpeta donde se genera el panel
    publicFolder: "public"
    // carpeta pública de tu proyecto
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      // subcarpeta dentro de /public para imágenes
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "posts",
        format: "mdx",
        // 👈 usar mdx en lugar de md
        fields: [
          {
            type: "string",
            name: "title",
            label: "T\xEDtulo",
            isTitle: true,
            required: true
          },
          {
            type: "image",
            name: "cover",
            label: "Imagen de portada"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenido",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
