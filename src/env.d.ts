/// <reference types="astro/client" />

// Declaración mínima de `process` para poder leer variables de entorno
// de Vercel en el build (src no incluye @types/node).
declare var process: {
  env: Record<string, string | undefined>;
};
