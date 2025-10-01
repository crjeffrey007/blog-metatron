import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // rama principal de tu repo
  clientId: "<bd668dc2-9cd9-4925-ad72-63c50207d18b>", // lo copias de tu dashboard TinaCMS
  token: "<67340c1c4183511fcba9a5d77c8201ea7ec19a27>", // lo copias de tu dashboard TinaCMS
  build: {
    outputFolder: "admin",
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
        label: "Posts",
        name: "post",
        path: "posts",
        fields: [
          {
            type: "string",
            label: "Título",
            name: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            label: "Fecha",
            name: "date",
            ui: {
              dateFormat: "DD/MM/YYYY",
            },
          },
          {
            type: "rich-text",
            label: "Contenido",
            name: "body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
