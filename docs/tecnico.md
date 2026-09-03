# Especificaciones Técnicas — Sitio Web ISeP Santa Fe

**Proyecto:** `Isep_2060_vblue`
**Stack:** React 19 + Vite 8 + React Router 7

---

## 1. Stack tecnológico

| Capa | Tecnología | Versión |
|---|---|---|
| Framework | React | ^19.2.4 |
| Build | Vite | ^8.0.8 |
| Router | react-router-dom | ^7.13.2 |
| Íconos | Google Material Symbols, lucide-react ^1.7.0, react-icons ^5.6.0 | — |
| Compilador | babel-plugin-react-compiler | ^1.0.0 |
| Lint | ESLint ^9.39.4 | — |

---

## 2. Estructura de directorios

```
src/
├── main.jsx                 # Entry point + imports de CSS (orden: variables→base→componentes)
├── App.jsx                  # Router principal + layout global
├── assets/                  # Imágenes (escudos: EP, ES, EE, EI, EaD, ISeP)
├── components/
│   ├── Navbar.jsx           # Navegación global (desktop + mobile)
│   ├── Hero.jsx             # Banner principal
│   ├── News.jsx             # Sección noticias del Home
│   ├── Apps.jsx             # Aplicaciones institucionales
│   ├── Schools.jsx          # Cuadrícula de escuelas (cada una con su escudo)
│   ├── CTA.jsx              # Llamado a la acción (inscripciones)
│   ├── Footer.jsx           # Pie de página global (5 bloques)
│   ├── EscuelaTemplate.jsx  # Plantilla reutilizable de escuela
│   └── FloatWhatsApp.jsx    # Botón flotante de WhatsApp
├── data/
│   └── institucional.js     # Datos mock: escuelas, carreras, cursos, convocatorias, FAQ
├── pages/
│   ├── Home.jsx
│   ├── Noticias.jsx
│   ├── Institucional/       # ElISeP, Autoridades, Organizacion, Resoluciones,
│   │                        # SedesContacto, OfertaEducativa (dinámica), Carrera
│   ├── Escuelas/            # Policia, Superior, Especialidades, Investigaciones,
│   │                        # EducacionDistancia (todas usan EscuelaTemplate)
│   ├── Ingreso/             # Convocatorias, ProximasConvocatorias, Requisitos,
│   │                        # Proceso, Faq
│   └── Secretaria/          # Titulos, Biblioteca, Cursos (dinámico)
└── styles/
    ├── variables.css        # Design tokens (incl. gradiente)
    ├── base.css             # Reset, tipografía, utilidades, .btn-cta
    ├── navbar.css           # Navegación
    ├── hero.css             # Hero + overlays + .page-hero
    ├── news.css             # Noticias (Home)
    ├── noticias.css         # Página /noticias
    ├── schools-cta.css      # Escuelas + CTA
    ├── apps.css             # Aplicaciones + WhatsApp
    ├── oferta.css           # Vistas dinámicas: cards, filtros, acordeón, plantilla escuela
    ├── footer.css           # Footer
    └── responsive.css       # Ajustes globales mobile-first
```

---

## 3. Sistema de diseño

### 3.1 Tokens de color (variables.css)

| Token | Valor | Uso |
|---|---|---|
| `--primary` | `#00254d` | Navy oscuro (marca) |
| `--primary-container` | `#003b73` | Contenedor primary |
| `--secondary` | `#0055c9` | Azul medio |
| `--secondary-container` | `#036cfb` | Azul vivo |
| `--tertiary-container` | `#004058` | Teal oscuro |
| `--on-tertiary-container` | `#00b1ed` | Cyan acento |
| `--surface` | `#f9f9ff` | Fondo de página |
| `--surface-container-low` | `#f1f3ff` | Fondo sección |
| `--gradient-primary` | `linear-gradient(90deg, #227bd1, #17be95)` | **Gradiente institucional** |
| `--gradient-glow` | `0 6px 18px #1bb4c373` | Sombra brillo |
| `--gradient-hover-lift` | `translateY(-1px)` | Elevación hover |
| `--color-start` | `#227bd1` | Inicio gradiente |
| `--color-end` | `#17be95` | Fin gradiente |

### 3.2 Gradiente institucional (uniforme)

El sistema de gradiente se centraliza en `--gradient-primary` y se aplica a:

- **Botones:** `.btn-cta`, `.btn-cta-light`, `.btn-isep`, `.btn-download`.
- **Interactive/activos:** `.filtro-btn--active`, `.pag-num--active`, `.oferta-tab--active`.
- **Hover de navegación:** `.nav-link:hover`, `.nav-dropdown__trigger:hover`, `.dropdown-item:hover` (fondo gradiente + texto blanco + glow).
- **Hover de cards:** `.school-card:hover`, `.app-card:hover`, `.card:hover`, `.mini-card:hover`, `.hcard:hover` (sombra + borde gradiente).
- **Overlays de imagen:** se combina el gradiente con un **scrim oscuro** (navy) para garantizar el contraste del texto.

### 3.3 Overlays y contraste

Para que el texto blanco se lea sobre imágenes brillantes, los overlays combinan dos capas:

```
background:
  linear-gradient(to right, rgba(0,21,43,0.88), ...),   ← scrim oscuro (legibilidad)
  var(--gradient-primary);                                ← gradiente institucional (paleta)
```

- `.hero-overlay` → textura oscura a la izquierda (donde vive el texto).
- `.np-img-overlay` → para la noticia principal.
- `.hcard-overlay` → para tarjetas de historial.
- `.page-hero` → hero de páginas interiores (placeholders y vistas implementadas) con scrim oscuro.
- `.escuela-hero` → banner de cada escuela.

---

## 4. Responsive (obligatorio)

### 4.1 Breakpoints

| Breakpoint | Ancho | Comportamiento |
|---|---|---|
| Móvil | `< 768px` | Menú hamburguesa, grids de 1 columna, botones full-width |
| Tablet | `768px – 1023px` | Nav desktop, grids de 2 columnas |
| Desktop | `≥ 1024px` | Grids de 3-4+ columnas, layout completo |

### 4.2 Principios aplicados (responsive.css)

- **Tipografía fluida** con `clamp()` (p. ej. `hero-title`).
- **Hero con `100svh`** + `min-height` y `max-height` para no exceder en pantallas grandes.
- **Paddings y títulos reducidos** en móvil (`≤ 640px`).
- **Botones CTA full-width** en móvil para objetivo táctil (`≤ 480px`).
- **Grids nativos CSS** (`repeat(auto/1fr/2/4)`) que colapsan de forma natural.

### 4.3 Nav en móvil

- Hamburger visible solo en móvil; menú desplegable con acordeones.
- **Mi ISeP siempre visible** (`.btn-isep` con `white-space: nowrap` y padding compacto).
- **Logo ISeP visible y enlazable** en móvil y desktop (vuelve a `/`).
- Dropdowns desktop con panel `top: calc(100% + 1.25rem)` (separado del header).

---

## 5. Rutas (App.jsx)

Todas las rutas se declaran en `App.jsx` dentro de `<BrowserRouter>`. El `Navbar`, `Footer` y `FloatWhatsApp` son globales (se renderizan en todas las páginas).

```jsx
<BrowserRouter>
  <Navbar />
  <Routes>{/* ... rutas ... */}</Routes>
  <Footer />
  <FloatWhatsApp />
</BrowserRouter>
```

Rutas registradas: Home, Noticias, 6 Institucional, 5 Escuelas, 5 Ingreso y 3 Secretaría (20 rutas totales).

---

## 6. Datos (mock)

Los datos de la sección académica son **simulados** y viven en `src/data/institucional.js`. En una etapa futura se reemplazarán por consultas a un backend.

| Export | Contenido |
|---|---|
| `escuelas` | 5 escuelas (id, nombre, logo, presentación, información de contacto). |
| `carreras` | Carreras con escuela, descripción, duración, modalidad, requisitos y documentos. |
| `cursos` | Cursos con tipo, información, período, estado (actual/próximo/finalizado) y escuela. |
| `convocatorias` | Convocatorias con estado (vigente/próxima), tipo, fecha y escuela. |
| `preguntasFrecuentes` | Preguntas y respuestas para el ingreso (FAQ). |
| `escuelaPorId` / `carrerasDeEscuela` / `cursosDeEscuela` | Helpers de búsqueda. |

Los escudos institucionales se importan desde `src/assets/` (escudo_EP, ES, EE, EI, EaD, ISeP).

---

## 7. Plantilla de escuela (EscuelaTemplate)

`src/components/EscuelaTemplate.jsx` recibe `escuelaId` y renderiza:
Logo, Presentación, Información, Carreras, Cursos actuales (con acceso a Mi ISeP), Noticias y Contacto.
Las 5 páginas de `/escuelas/*` son wrappers que delegan en esta plantilla.

---

## 8. Comandos

| Comando | Descripción |
|---|---|
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor de desarrollo (Vite, puerto 5173) |
| `npm run build` | Build de producción |
| `npm run preview` | Previsualiza el build |
| `npm run lint` | Ejecuta ESLint |
