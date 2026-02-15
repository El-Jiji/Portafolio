# Portafolio Web - Desarrollo para Negocios Locales

Portafolio profesional con React + Vite, Tailwind CSS y Framer Motion. Diseñado para ofrecer servicios de desarrollo web a negocios locales.

## Stack

- **React 18** + **Vite**
- **Tailwind CSS** (estilos, mobile-first)
- **Framer Motion** (animaciones)
- **Formspree** (formulario de contacto)
- **Deploy:** Vercel

## Estructura

- **Hero:** presentación y CTA a contacto
- **Sobre mí:** experiencia y ubicación
- **Proyectos:** cards con título, descripción, problema resuelto, stack, enlaces GitHub/demo
- **Cómo trabajo:** reunión → propuesta → desarrollo → entrega
- **Contacto:** formulario con validación

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Formulario de contacto (Formspree)

1. Crea una cuenta en [Formspree](https://formspree.io).
2. Crea un nuevo formulario y copia el endpoint (ej: `https://formspree.io/f/xxxxxxxx`).
3. Crea un archivo `.env` en la raíz con:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/TU_ID
   ```
4. O edita directamente en `src/components/Contact.jsx` la constante `FORMSPREE_ENDPOINT`.

## Proyectos (datos)

Edita `src/data/projects.js` para:

- Añadir URLs reales de GitHub y demo
- Cambiar textos y stack
- Añadir imágenes: coloca archivos en `public/` y usa rutas como `/nombre-imagen.jpg` en `image`

## Build y deploy (Vercel)

```bash
npm run build
```

En [Vercel](https://vercel.com): importa el repositorio, deja el comando de build por defecto (`npm run build`) y en **Environment Variables** añade `VITE_FORMSPREE_ENDPOINT` si usas variables de entorno.

## Responsive y performance

- Diseño mobile-first con Tailwind
- Animaciones ligeras con Framer Motion
- Imágenes: usa `loading="lazy"` (ya aplicado en las cards)
- Fuentes: Google Fonts (DM Sans, Outfit) cargadas en `index.css`
