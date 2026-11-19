// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Fuente única de verdad para la URL del sitio.
// GitHub Pages de proyecto sirve en /<nombre-del-repo>: el repo es `portfolio`.
const site = "https://bairongarita.github.io";
const base = "/portfolio";

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  integrations: [
    mdx(),
    sitemap({
      // No se indexan páginas de error ni el robots.txt generado.
      filter: (page) => !page.includes("/404"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
