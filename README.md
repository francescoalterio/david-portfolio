# Portafolio de David Barrientos

Estructura simple en HTML, CSS y JavaScript para mostrar proyectos de arquitectura.

## Estructura

```
index.html                # Página principal (grid de proyectos)
about.html                # Sección sobre mí
projects/                 # Páginas individuales de proyectos
  proyecto-ejemplo.html   # Ejemplo base
templates/
  project-template.html   # Plantilla para nuevos proyectos
css/
  styles.css              # Estilos globales
js/
  main.js                 # Interactividad básica
images/                   # Coloca aquí tus imágenes
```

## Cómo añadir un nuevo proyecto

1. Copia `templates/project-template.html` dentro de `projects/` y nómbralo (ej: `vivienda-social.html`).
2. Abre el archivo copiado y reemplaza los comentarios `<!-- ... -->` con la información real del proyecto.
3. Guarda las imágenes en `images/` (usa nombres simples, sin espacios). Añade más `<figure>` dentro de la galería si lo necesitas.
4. Edita `index.html` y duplica un bloque `<article class="project-card">`. Cambia:
   - `data-project`
   - `href` del `<a>` a la nueva página
   - `src` y `alt` de la imagen
   - Título y descripción breve dentro de `<figcaption>`
5. Verifica accesibilidad: cada imagen debe tener un `alt` claro y conciso.

## Tipografía

- Roboto 100 (Thin) para subtítulos y descripciones.
- Roboto 300 (Light) para párrafos.
- Roboto 700 (Bold) para títulos.
- Nimbus Sans: usar como fallback local si está instalada (aplicada en los overlays). Si no, se usa Roboto.

## SEO Básico

- Añade una `meta description` personalizada en cada página de proyecto.
- Usa textos `alt` descriptivos en todas las imágenes.
- Títulos únicos (`<title>`) combinando nombre del proyecto + "| David Barrientos".

## Responsive

- El grid se adapta automáticamente.
- En dispositivos táctiles (sin hover) la información de la card siempre es visible.

## Accesibilidad

- Navegación por teclado habilitada en las tarjetas.
- Etiquetas `aria-label` y estructura semántica (`main`, `nav`, `footer`).

## Sugerencias de Optimización

- Comprimir imágenes antes de subirlas (ej: 1600px lado mayor, formato JPG/WebP ~70-80% calidad).
- Usar `loading="lazy"` (ya aplicado) para imágenes no críticas.

## Licencia

Uso personal / educativo. Ajustar según necesidades.
