# Portafolio — Bairon Garita

Portafolio personal de Bairon Garita, desarrollador web enfocado en interfaces limpias, accesibilidad y rendimiento.

Sitio estático generado con [Astro](https://astro.build), desplegado en **GitHub Pages**
(`https://bairongarita.github.io/portfolio/`).

## Stack

| Capa           | Tecnología                                     |
| :------------- | :--------------------------------------------- |
| Framework      | Astro (salida estática)                        |
| Estilos        | Tailwind CSS v4                                |
| Contenido      | Content Collections con MDX (proyectos y blog) |
| Tipografía     | Inter, subset `latin` self-hosted              |
| Interactividad | JS propio mínimo (sin librerías de animación)  |

## Comandos

| Comando        | Acción                                                     |
| :------------- | :--------------------------------------------------------- |
| `pnpm install` | Instala dependencias                                       |
| `pnpm dev`     | Servidor de desarrollo en `localhost:4321` (en background) |
| `pnpm dev:fg`  | Servidor de desarrollo en primer plano                     |
| `pnpm build`   | Genera el sitio de producción en `./dist/`                 |
| `pnpm preview` | Previsualiza el build                                      |
| `pnpm check`   | Verificación de tipos y plantillas (`astro check`)         |
| `pnpm lint`    | ESLint (flat config, incluye `eslint-plugin-astro`)        |
| `pnpm format`  | Formatea con Prettier                                      |

El servidor en background se gestiona con `astro dev status`, `astro dev logs` y `astro dev stop`.

## Estructura

```
src/
├─ data/skills.ts        # stack y habilidades (fuente única)
├─ site.config.ts        # datos del sitio y navegación
├─ layouts/BaseLayout    # <head>, SEO/Open Graph, JSON-LD, revelados
├─ components/           # secciones de la portada y UI compartida
├─ content/              # proyectos y blog (MDX)
└─ pages/
   ├─ index.astro         # portada
   ├─ proyectos/[id]      # caso de estudio de cada proyecto
   ├─ blog/index          # listado de artículos
   ├─ blog/[id]           # artículo
   ├─ robots.txt.ts       # robots.txt generado con la URL del sitio
   └─ 404.astro           # página no encontrada (noindex)
```

## Contenido

Los proyectos viven en `src/content/projects/*.mdx` y los artículos en `src/content/blog/*.mdx`.
Los esquemas (frontmatter) están en `src/content.config.ts` y se validan en cada build.

## Despliegue

`site` y `base` se definen únicamente en `astro.config.mjs`. El workflow
`.github/workflows/deploy.yml` ejecuta `check`, `lint` y `build` con Node 22 y publica
`dist/` en GitHub Pages en cada push a `main`.

Para usar un dominio propio: cambia `site` en `astro.config.mjs`, elimina `base` y
ajusta `start_url`/`scope` en `public/site.webmanifest`.
