/**
 * Fuente única de verdad para los datos del sitio.
 * La URL absoluta se deriva de `site`/`base` en astro.config.mjs (Astro.site).
 */
const base = import.meta.env.BASE_URL;

export const SITE = {
  name: "Bairon Garita",
  title: "Bairon Garita — Desarrollador Web",
  description:
    "Portafolio de Bairon Garita, desarrollador web de Costa Rica. Interfaces limpias, accesibles y de alto rendimiento con Astro, React y TypeScript.",
  author: "Bairon Garita",
  jobTitle: "Desarrollador Web",
  locale: "es-CR",
  email: "ingbairongarita@gmail.com",
  social: {
    github: "https://github.com/BaironGarita",
    linkedin: "https://linkedin.com/in/bairongarita",
  },
  themeColor: "#0a0f1e",
  ogImage: "og/og-default.png",
  nav: [
    { label: "Inicio", href: `${base}#hero`, hash: "#hero" },
    { label: "Sobre mí", href: `${base}#sobre-mi`, hash: "#sobre-mi" },
    { label: "Proyectos", href: `${base}#proyectos`, hash: "#proyectos" },
    { label: "Habilidades", href: `${base}#habilidades`, hash: "#habilidades" },
    { label: "Blog", href: `${base}blog/`, hash: "" },
    { label: "Contacto", href: `${base}#contacto`, hash: "#contacto" },
  ],
  knowsAbout: [
    "Desarrollo Web",
    "Frontend",
    "TypeScript",
    "React",
    "Astro",
    "UI/UX",
  ],
} as const;
