# ISeP Santa Fe — Sitio Web Institucional

Sitio web institucional del **Instituto de Seguridad Pública de Santa Fe**, construido como
SPA con **React 19 + Vite 8 + React Router 7** y **100% responsive**.

## Stack

- React ^19.2.4 · Vite ^8.0.8 · react-router-dom ^7.13.2
- Google Material Symbols, lucide-react, react-icons
- ESLint + babel-plugin-react-compiler

## Documentación

| Documento | Markdown | HTML |
|---|---|---|
| Especificaciones funcionales | [funcional.md](docs/funcional.md) | [funcional.html](docs/funcional.html) |
| Especificaciones técnicas | [tecnico.md](docs/tecnico.md) | [tecnico.html](docs/tecnico.html) |
| Guía de usuario | [guia-usuario.md](docs/guia-usuario.md) | [guia-usuario.html](docs/guia-usuario.html) |

## Estructura

```
src/
├── main.jsx, App.jsx
├── components/   Navbar (con buscador), Hero (slider automático), SearchBox,
│                 News, Apps, Schools, CTA, Footer, EscuelaTemplate, FloatWhatsApp
├── data/         institucional.js (escuelas, carreras, cursos, convocatorias, FAQ)
│                 buscador.js (índice de búsqueda)
├── pages/        Home, Noticias, Institucional, Escuelas, Ingreso, Secretaria
└── styles/       variables, base (fondo global), navbar (buscador), hero (slider),
                  news, noticias, schools-cta, apps, oferta, footer, responsive
```

## Funcionalidades principales

- **Hero Slider:** banner automático con 3 slides, transiciones suaves, flechas y dots.
- **Buscador funcional:** indexa escuelas, carreras, cursos, convocatorias y páginas institucionales. Resultados dinámicos con navegación por teclado.
- **Íconos en navegación:** cada sección del menú tiene un ícono de Material Symbols.
- **Fondo decorativo global:** patrón sutil con `background-attachment: fixed`, color base `#bcd8db` y gradientes radiales/lineales.
- **Escudos institucionales:** cada tarjeta de escuela muestra su escudo.
- **Plantilla de escuela reutilizable:** las 5 escuelas usan `EscuelaTemplate`.

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
```

## Páginas

- `/` — Home (Hero Slider, Noticias, Aplicaciones, Escuelas, CTA)
- `/noticias` — listado con filtro y paginación
- `/institucional/*` — secciones institucionales (El ISeP, Autoridades, Organización, Normativa y Resoluciones, Sedes y Contacto)
- `/institucional/oferta-educativa` — Oferta Académica dinámica (Carreras / Cursos / Convocatorias)
- `/institucional/carreras` — vista general de carreras
- `/escuelas/*` — 5 páginas de escuela con plantilla común (Logo, Presentación, Información, Carreras, Cursos, Noticias, Contacto)
- `/ingreso/*` — Convocatorias vigentes, Próximas, Requisitos, Proceso y Preguntas frecuentes
- `/secretaria/cursos` — Cursos con filtros por Escuela / Tipo / Estado y acceso a Mi ISeP
- `/secretaria/titulos`, `/secretaria/biblioteca` — en estado placeholder
