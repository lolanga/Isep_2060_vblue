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
├── components/   Navbar, Hero, News, Apps, Schools, CTA, Footer, FloatWhatsApp
├── data/         escuelas, cursos, noticias
├── pages/        Home, Noticias, Institucional, Escuelas, Ingreso, Secretaria
└── styles/       variables, base, navbar, hero, news, noticias,
                  schools-cta, apps, footer, responsive
```

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

- `/` — Home (Hero, Noticias, Aplicaciones, Escuelas, CTA)
- `/noticias` — listado con filtro y paginación
- `/institucional/*`, `/escuelas/*`, `/ingreso/*`, `/secretaria/*` — páginas internas
  (algunas en estado placeholder "Próximamente")
