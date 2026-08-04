const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://portfolio.vercel.app";

export const SITE = {
  name: "Bairon Garita",
  title: "Bairon Garita — Desarrollador Web",
  description:
    "Portfolio de Bairon Garita, desarrollador web enfocado en interfaces limpias, experiencia de usuario y código mantenible.",
  author: "Bairon Garita",
  // En Vercel se resuelve automáticamente al dominio de producción.
  url: siteUrl,
  locale: "es-CR",
  email: "ingbairongarita@gmail.com",
  social: {
    github: "https://github.com/BaironGarita",
    linkedin: "https://linkedin.com/in/bairongarita",
  },
  nav: [
    { label: "Inicio", href: "#hero" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;