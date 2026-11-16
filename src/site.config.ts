export const SITE = {
  name: "Bairon Garita",
  title: "Bairon Garita — Desarrollador Web",
  description:
    "Portfolio de Bairon Garita, desarrollador web enfocado en interfaces limpias, experiencia de usuario y código mantenible.",
  author: "Bairon Garita",
  url: "https://bairongarita.github.io/portafolio",
  locale: "es-CR",
  email: "ingbairongarita@gmail.com",
  social: {
    github: "https://github.com/BaironGarita",
    linkedin: "https://linkedin.com/in/bairongarita",
  },
  nav: [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Blog", href: `${import.meta.env.BASE_URL}blog/` },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;
