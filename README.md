# portfolio

Portafolio personal de Bairon Garita — desarrollador web enfocado en interfaces limpias, experiencia de usuario y código mantenible.

## 🚀 Tecnologías

- [Astro](https://astro.build)
- Tailwind CSS
- Motion (animaciones)

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                    | Acción                                        |
| :------------------------- | :-------------------------------------------- |
| `pnpm install`             | Instala las dependencias                      |
| `pnpm dev`                 | Inicia el servidor local en `localhost:4321`  |
| `pnpm build`               | Genera el sitio de producción en `./dist/`    |
| `pnpm preview`             | Previsualiza el build localmente              |
| `pnpm astro ...`           | Comandos CLI como `astro add`, `astro check`  |

## ☁️ Despliegue en Vercel

El proyecto está configurado para desplegarse en [Vercel](https://vercel.com):

1. Importa el repositorio en Vercel.
2. Vercel detecta Astro automáticamente (build: `pnpm build`, output: `dist`).
3. En *Settings → General → Node.js Version*, usa Node.js 22 o superior.

> Nota: tras el primer despliegue, actualiza `src/site.config.ts` y `public/robots.txt`
> con tu dominio real de Vercel (p. ej. `https://portfolio.vercel.app`).
