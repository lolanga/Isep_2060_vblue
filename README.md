# ISeP Santa Fe — Sitio Web Institucional

Sitio web institucional del **Instituto de Seguridad Pública de Santa Fe**, construido como
SPA con **React 19 + Vite 8 + React Router 7** y **100% responsive**.

## Stack

- React ^19.2.4 · Vite ^8.0.8 · react-router-dom ^7.13.2
- Google Material Symbols
- ESLint + babel-plugin-react-compiler + Vitest / React Testing Library

## Documentación

| Documento | Markdown | HTML |
|---|---|---|
| Especificaciones funcionales | [funcional.md](docs/funcional.md) | [funcional.html](docs/funcional.html) |
| Especificaciones técnicas | [tecnico.md](docs/tecnico.md) | [tecnico.html](docs/tecnico.html) |
| Guía de usuario | [guia-usuario.md](docs/guia-usuario.md) | [guia-usuario.html](docs/guia-usuario.html) |

## Estructura

```
src/
├── main.jsx, App.jsx (router con lazy loading)
├── components/   Navbar (con buscador), Hero (slider + 2 CTAs), Audiencia,
│                 SearchBox, News, Tramites, Schools, CTA, Footer, EscuelaTemplate,
│                 FloatWhatsApp, Breadcrumb, JsonLd, Countdown, Contadores,
│                 Testimonios, ShareButton, Placeholder, Skeleton, SkipToContent,
│                 ErrorBoundary, SEO, Analytics
├── data/         config.js (configuración centralizada), institucional.js
│                 (escuelas, carreras, cursos, convocatorias, cronograma, FAQ), noticias.js,
│                 normativa.js, buscador.js (índice de búsqueda)
├── services/     api.js (capa mock→backend-ready)
├── utils/        analytics.js (GA4)
├── pages/        Home, Noticias, Institucional (8), Escuelas (5), Ingreso (6),
│                 Secretaria (3), NotFound
└── styles/       variables, base, navbar, hero, news, noticias, schools-cta,
                  new-features, oferta, pages, footer, responsive
```

## Funcionalidades principales

- **Hero Slider:** banner automático con 3 slides, 2 CTAs ("Conoce nuestras propuestas" y "Inscripciones 2027"), transiciones suaves, flechas y dots. Pausa autoplay con `prefers-reduced-motion`.
- **Buscador funcional:** indexa escuelas, carreras, cursos, convocatorias, noticias, normativa y páginas institucionales. Resultados dinámicos con navegación por teclado.
- **Trámites y Sistemas:** accesos a Mi ISeP, SIGEDI, Gestión Cadetes y Webmail.
- **CTA de inscripciones** con countdown al 30 de septiembre de 2027.
- **Íconos en navegación:** cada sección del menú tiene un ícono de Material Symbols.
- **Fondo decorativo global:** patrón sutil con `background-attachment: fixed`, color base `#bcd8db` y gradientes radiales tenues.
- **Escudos institucionales:** cada tarjeta de escuela muestra su escudo.
- **Plantilla de escuela reutilizable:** las 5 escuelas usan `EscuelaTemplate`.
- **Galería de fotos** con categorías, filtros y lightbox.
- **Mapa del sitio** (`/mapa-del-sitio`) con guía visual de todas las rutas.
- **Compartir noticias** con Web Share API / portapapeles (ShareButton).
- **Accesibilidad:** SkipToContent, foco visible, `prefers-reduced-motion`, alt text descriptivos.
- **SEO:** JSON-LD (EducationalOrganization, NewsArticle, BreadcrumbList), Open Graph, canonical dinámico, sitemap.xml.
- **PWA:** manifest.json + robots.txt (instalable en móviles/desktop).

## Sistema de diseño

El gradiente institucional se centraliza en `--gradient-primary`
(`linear-gradient(90deg, #227bd1, #17be95)`) en `styles/variables.css` y se aplica de forma
uniforme a botones, cards, hover de navegación y overlays (combinado con scrim oscuro para
garantizar contraste legible del texto).

## Comandos

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo (puerto 5173)
npm run build   # build de producción
npm run preview # previsualizar build
npm run lint    # eslint
npm run test    # tests (Vitest + React Testing Library)
```

## Páginas

- `/` — Home (Hero Slider, ¿Qué estás buscando? por audiencia, Últimas Noticias, Trámites y Sistemas, CTA Inscripciones, Nuestras Escuelas, Contadores, Testimonios)
- `/noticias` — listado con filtro, paginación y detalle (`/noticias/:id`)
- `/institucional/*` — El ISeP, Autoridades, Organización, Oferta Educativa, Carreras, Normativa y Resoluciones (17 docs), Sedes y Contacto, Galería de Fotos
- `/institucional/oferta-educativa` — Oferta Educativa (tabs: Carreras, Cursos, Convocatorias)
- `/institucional/galeria` — Galería de fotos con filtros y lightbox
- `/escuelas/*` — 5 páginas de escuela con plantilla común (Logo, Presentación, Información, Carreras, Cursos, Noticias, Contacto)
- `/ingreso` — Landing de ingreso (pasos, cronograma 2027–2028, convocatorias, requisitos, FAQ, aviso anti-estafa)
- `/ingreso/*` — Convocatorias vigentes (contenido real Esc. Policía 2027–2028), Próximas, Requisitos (10 items), Proceso y Preguntas frecuentes
- `/secretaria/titulos` — Títulos y Certificaciones (consulta por DNI, proceso 3 pasos, descargas)
- `/secretaria/biblioteca` — Biblioteca Virtual (22 artículos reales con links PDF)
- `/secretaria/cursos` — Cursos con filtros por Escuela / Tipo / Estado y acceso a Mi ISeP
- `/mapa-del-sitio` — Mapa visual con todas las rutas
