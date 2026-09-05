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
| Testing | Vitest + React Testing Library + jsdom | — |

---

## 2. Estructura de directorios

```
src/
├── main.jsx                 # Entry point + imports CSS
├── App.jsx                  # Router principal (24 rutas)
├── assets/                  # Escudos (EP, ES, EE, EI, EaD, ISeP)
├── components/
│   ├── Navbar.jsx           # Navegación global + SearchBox + hamburger
│   ├── Hero.jsx             # Slider 3 slides picsum.photos
│   ├── SearchBox.jsx        # Buscador global agrupado
│   ├── News.jsx             # Sección noticias Home (datos reales + links)
│   ├── Apps.jsx             # 4 apps institucionales
│   ├── Schools.jsx          # Grid de escuelas con escudos
│   ├── CTA.jsx              # Llamado a la acción con countdown
│   ├── Footer.jsx           # Footer 3 columnas + redes sociales
│   ├── EscuelaTemplate.jsx  # Plantilla reutilizable de escuela
│   ├── FloatWhatsApp.jsx    # WhatsApp flotante (z-60)
│   ├── ScrollToTop.jsx      # Botón ir arriba (z-70, tras 400px)
│   ├── Breadcrumb.jsx       # Migas de pan con home icon
│   ├── Countdown.jsx        # Cuenta regresiva
│   ├── Contadores.jsx       # Estadísticas animadas
│   ├── Testimonios.jsx      # Carrusel testimonios
│   ├── ShareButton.jsx      # Compartir noticia (Web Share API / clipboard)
│   └── Placeholder.jsx      # Páginas "Próximamente"
├── data/
│   ├── institucional.js     # Escuelas (datos oficiales), carreras, cursos, convocatorias, FAQ
│   ├── noticias.js          # 11 noticias (compartido)
│   ├── normativa.js         # 17 resoluciones (compartido)
│   └── buscador.js          # 64+ entradas + buscar() + buscarAgrupado()
├── pages/
│   ├── Home.jsx             # 7 secciones
│   ├── Noticias.jsx         # Filtro + paginación + links a detalle
│   ├── NoticiaDetalle.jsx   # Detalle de noticia individual
│   ├── Institucional/       # ElISeP, Autoridades, Organizacion, Resoluciones,
│   │                        # SedesContacto (Maps), OfertaEducativa, Carrera
│   ├── Escuelas/            # 5 escuelas (EscuelaTemplate)
│   ├── Ingreso/             # Convocatorias (contenido real), ProximasConvocatorias,
│   │                        # Requisitos, Proceso, Faq (12 preguntas)
│   └── Secretaria/          # Titulos (contenido real), Biblioteca (21 artículos), Cursos
└── styles/
    ├── variables.css        # Design tokens + gradiente
    ├── base.css             # Reset, tipografía, fondo global, .chip
    ├── navbar.css           # Navbar + buscador + hamburger
    ├── hero.css             # Hero slider + overlays + .page-hero
    ├── news.css             # Noticias Home
    ├── noticias.css         # Página /noticias
    ├── schools-cta.css      # Escuelas + CTA
    ├── apps.css             # Apps + WhatsApp
    ├── oferta.css           # Cards, chips, filtros, acordeón
    ├── footer.css           # Footer 3 columnas + bottom
    └── responsive.css       # Mobile-first
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
| `--color-start` | `#227bd1` | Inicio gradiente |
| `--color-end` | `#17be95` | Fin gradiente |

### 3.2 Chips coloreados por tipo (data-type)

| data-type | Color | Uso |
|---|---|---|
| `escuela` | `rgba(34,123,209,0.12)` | Escuela |
| `duracion` | `rgba(148,163,184,0.12)` | Duración |
| `modalidad` | `rgba(124,58,237,0.12)` | Modalidad |
| `tipo` | `rgba(180,83,9,0.12)` | Tipo de curso |
| `periodo` | `rgba(23,190,149,0.12)` | Período |
| `estado` | `rgba(148,163,184,0.12)` | Estado |
| `fecha` | `rgba(34,123,209,0.12)` | Fecha |
| `paso` | `rgba(23,190,149,0.12)` | Paso del proceso |

### 3.3 Badge-categorías (noticias)

| Clase | Uso |
|---|---|
| `badge-categoria--highlight` | "ÚLTIMA PUBLICACIÓN" (fondo gradiente) |
| `badge-categoria--institucional` | Noticias institucionales |
| `badge-categoria--academica` | Noticias académicas |
| `badge-categoria--escuelas` | Noticias de escuelas |
| `badge-categoria--eventos` | Eventos |
| `badge-categoria--convenios` | Convenios |

---

## 4. Responsive

### 4.1 Breakpoints

| Breakpoint | Ancho | Comportamiento |
|---|---|---|
| Móvil | `< 768px` | Hamburger, grids 1 columna, botones full-width |
| Tablet | `768px – 1023px` | Nav desktop con escudo, grids 2 columnas |
| Desktop | `≥ 1024px` | Grids 3-4+ columnas, layout completo |

### 4.2 Nav responsive
- Desktop: escudo + texto + dropdowns
- Tablet (768-1023px): solo escudo
- Mobile (<768px): solo texto + hamburger

---

## 5. Componentes clave

### 5.1 Breadcrumb (`Breadcrumb.jsx`)
- Fondo `#f8fafc`, borde `#eef2f7`
- Margen superior: 2rem
- Links color `--primary`, último en negrita

### 5.2 Countdown (`Countdown.jsx`)
- Bloques semitransparentes + backdrop-filter
- Expired: "¡Las inscripciones están abiertas!"

### 5.3 Contadores (`Contadores.jsx`)
- 4 estadísticas con `IntersectionObserver` (easing cúbico)

### 5.4 Testimonios (`Testimonios.jsx`)
- Carrusel de 3 testimonios con flechas y dots

### 5.5 ShareButton (`ShareButton.jsx`)
- Web Share API (móviles) o clipboard (desktop)
- Feedback visual: check verde + "¡Copiado!"

### 5.6 Placeholder (`Placeholder.jsx`)
- Badge, título, descripción, features para páginas "Próximamente"

---

## 6. Datos mock

### 6.1 institucional.js

| Export | Contenido |
|---|---|
| `escuelas` | 5 escuelas con datos oficiales + emails de contacto |
| `carreras` | 4 carreras con datos oficiales del sitio |
| `cursos` | 6+ cursos con tipo, período, estado |
| `convocatorias` | Convocatorias con estado, tipo, fecha |
| `preguntasFrecuentes` | 12 preguntas y respuestas |
| `escuelaPorId` / `carrerasDeEscuela` / `cursosDeEscuela` | Helpers |

### 6.2 noticias.js

11 noticias con: id, titulo, categoria, fecha, fechaCorta, excerpt, img.

### 6.3 normativa.js

17 resoluciones con: id, titulo, tipo, fecha, tamano, url.

### 6.4 buscador.js

64+ entradas agrupadas por tipo. Funciones: `buscar()`, `buscarAgrupado()`.

---

## 7. Búsqueda global

### 7.1 SearchBox (`SearchBox.jsx`)
- Resultados agrupados por tipo (headers con ícono + label)
- Scoring: +3 título, +2 tipo, +1 keyword
- Navegación: ArrowUp/ArrowDown/Enter/Escape
- Enter en campo → abre primer resultado

---

## 8. Hero slider

- 3 slides picsum.photos, automático (6s), pausa en hover
- Flechas + dots, altura `100svh`

---

## 9. Fondo decorativo global

```css
background-attachment: fixed;
background-color: #bcd8db;
background-image:
  /* linear-gradient(90deg, #ffffff40 1px, #0000 0),
  linear-gradient(180deg, #ffffff40 1px, #0000 0), */
  radial-gradient(circle at 10% 20%, #208caf15 0, #0000 45%),
  radial-gradient(circle at 90% 80%, #00c39612 0, #0000 45%);
```

---

## 10. Build stats

| Archivo | Tamaño |
|---|---|
| `index.html` | 0.72 kB |
| `index.css` | 80.42 kB (gzip: 13.98 kB) |
| `index.js` | 212.65 kB (gzip: 66.45 kB) |
| Módulos | 90 |
| Lazy chunks | Rutas bajo demanda (React.lazy) |
| Build time | ~6-10s |

---

## 11. Comandos

| Comando | Descripción |
|---|---|
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor de desarrollo (puerto 5173) |
| `npm run build` | Build de producción |
| `npm run preview` | Previsualiza el build |
| `npm run lint` | Ejecuta ESLint |
| `npm run test` | Ejecuta tests con Vitest |

---

## 12. Publicación de noticias — Especificación técnica

### 12.1 Estructura de datos

```typescript
interface Noticia {
  id: number;            // Único, incremental
  titulo: string;        // Título de la noticia
  categoria: "Institucional" | "Academica" | "Escuelas" | "Eventos" | "Convenios";
  fecha: string;         // "3 DE SEPTIEMBRE, 2026"
  fechaCorta: string;    // "3 SEP"
  excerpt: string;       // Extracto (1-2 oraciones)
  img: string;           // URL de imagen (900×500 px)
  escuelas?: string[];   // (Opcional) IDs: "policia" | "superior" | "especialidades" | "investigaciones" | "ead"
  adjuntos?: {           // (Opcional) documentos adjuntos
    nombre: string;      // Nombre para mostrar
    url: string;         // Ruta relativa: /docs/archivo.pdf
  }[];
  contenido?: string;    // (Opcional) HTML o texto plano (\n\n para párrafos)
}
```

### 12.2 Archivos a modificar

| Archivo | Acción |
|---|---|
| `src/data/noticias.js` | Agregar objeto al array `noticias` |
| `src/data/buscador.js` | Automático (importa de noticias.js) |
| `public/docs/` | Colocar archivos adjuntos (PDF, Excel, JPG, PNG) |

### 12.3 Imagen alusiva

**Opción A (recomendada):** Imagen local en `public/img/noticias/`
**Opción B:** URL externa
**Opción C:** Placeholder: `https://picsum.photos/seed/{nombre}/900/500`

- **Dimensiones:** 900×500 px (ratio 16:9)
- **Formato:** JPG/PNG, <200 KB

### 12.4 Documentos adjuntos

- **Carpeta:** `public/docs/`
- **Formatos:** PDF, Excel, JPG, PNG, etc.
- **Render:** `NoticiaDetalle.jsx` muestra botones de descarga

## 13. Mejoras de Calidad

### 13.1 Lazy Loading
Cada ruta se carga bajo demanda con `React.lazy()` + `Suspense`. El usuario solo descarga el JS de las páginas que visita, mejorando el tiempo de carga inicial.

### 13.2 Testing
Suite de tests con **Vitest** + **React Testing Library** + **jsdom**. 18 tests cubriendo:
- Buscador global (SearchBox)
- Páginas institucionales
- Renderizado de datos

Comando: `npm run test`

### 13.3 GitHub Actions
CI automatizado con GitHub Actions que ejecuta en cada push:
- Lint (`npm run lint`)
- Build (`npm run build`)
- Tests (`npm run test`)

### 13.4 SEO
- **JSON-LD:** Structured data con `EducationalOrganization`, `NewsArticle`, `BreadcrumbList`
- **Meta tags dinámicos:** título, descripción e imagen por página (Open Graph)
- **sitemap.xml:** mapa del sitio para motores de búsqueda

### 13.5 Analytics
Google Analytics 4 (`gtag.js`):
- Carga asíncrona (no bloquea render)
- Solo en producción (desactivado en dev)
- Configuración en `src/components/Analytics.jsx`

### 13.6 CSS Architecture
- **0 inline styles** en componentes
- `pages.css` con ~200+ clases reutilizables
- Separación clara: tokens → base → componentes → páginas → responsive

### 13.7 Accesibilidad
- **SkipToContent:** enlace para saltar al contenido principal
- **focus-visible:** indicadores de foco solo con teclado
- **sr-only:** contenido exclusivo para lectores de pantalla

### 13.8 Error Handling
- **ErrorBoundary global:** captura errores de render y muestra fallback amigable
- **NotFound page:** página 404 para rutas inexistentes

### 13.9 API Layer
`src/services/api.js`: capa de abstracción mock→backend-ready. Actualmente usa datos mock, preparada para conectar a API real sin cambiar componentes.

---

### 12.4 Distribución de componentes

```
Noticias.jsx ─── noticias[] ──── Link a /noticias/:id
                                    │
News.jsx ──────── noticias[0..3] ── Link a /noticias/:id
                                    │
                                    ▼
                              NoticiaDetalle.jsx
                              ├── Hero (imagen + overlay)
                              ├── Breadcrumb
                              ├── ShareButton
                              ├── Contenido
                              ├── Noticias relacionadas
                              └── Botón volver
```
