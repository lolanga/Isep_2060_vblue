# Especificaciones Técnicas — Sitio Web ISeP Santa Fe

**Proyecto:** `Isep_2060_vblue`
**Versión:** 1.0.0
**Última actualización:** 7 de septiembre de 2026
**Stack:** React 19 + Vite 8 + React Router 7

---

## 1. Stack tecnológico

| Capa | Tecnología | Versión |
|---|---|---|
| Framework | React | ^19.2.4 |
| Build | Vite | ^8.0.8 |
| Router | react-router-dom | ^7.13.2 |
| Íconos | Google Material Symbols | — |
| Compilador | babel-plugin-react-compiler | ^1.0.0 |
| Lint | ESLint ^9.39.4 | — |
| Testing | Vitest + React Testing Library + jsdom | — |

---

## 2. Estructura de directorios

```
src/
├── main.jsx                 # Entry point + imports CSS
├── App.jsx                  # Router principal (27 rutas) + ErrorBoundary + NotFound
├── assets/                  # Escudos (EP, ES, EE, EI, EaD, ISeP)
├── components/
│   ├── Navbar.jsx           # Navegación global + SearchBox + hamburger + nav-is-active
│   ├── Hero.jsx             # Slider 3 slides + 2 CTAs + pausa por prefers-reduced-motion
│   ├── Audiencia.jsx        # Sección Home "¿Qué estás buscando?" (3 audiencias; "Soy personal" con accesos a los 4 sistemas)
│   ├── SearchBox.jsx        # Buscador global agrupado (debounce 300ms)
│   ├── News.jsx             # Sección noticias Home (datos reales + links)
│   ├── Schools.jsx          # Grid de escuelas con escudos (enlaces a /escuelas/:slug)
│   ├── CTA.jsx              # Llamado a la acción con countdown (2027-09-30)
│   ├── Footer.jsx           # Footer 3 columnas + redes sociales
│   ├── EscuelaTemplate.jsx  # Plantilla reutilizable de escuela
│   ├── FloatWhatsApp.jsx    # WhatsApp flotante (z-60)
│   ├── ScrollToTop.jsx      # Botón ir arriba (z-70, bottom-left en móvil)
│   ├── Breadcrumb.jsx       # Migas de pan con home icon
│   ├── JsonLd.jsx           # JSON-LD consolidado (EducationalOrganization + NewsArticle + BreadcrumbList)
│   ├── Countdown.jsx        # Cuenta regresiva
│   ├── Contadores.jsx       # Estadísticas animadas
│   ├── Testimonios.jsx      # Carrusel testimonios
│   ├── ShareButton.jsx      # Compartir noticia (Web Share API / clipboard)
│   ├── Placeholder.jsx      # Páginas "Próximamente"
│   ├── Skeleton.jsx         # Placeholder de carga (skeleton)
│   ├── SkipToContent.jsx    # Enlace accesible para saltar al contenido
│   ├── ErrorBoundary.jsx    # Captura de errores de render
│   ├── SEO.jsx              # Meta tags dinámicos (title, og, twitter, canonical)
│   └── Analytics.jsx        # Google Analytics 4 (gtag.js)
├── data/
│   ├── config.js            # Configuración centralizada (MI_ISEP_URL, teléfonos, emails, GA_ID, redes)
│   ├── institucional.js     # Escuelas (datos oficiales), carreras, cursos, convocatorias, cronograma, FAQ
│   ├── noticias.js          # 15 noticias (compartido, admite img: null)
│   ├── normativa.js         # 17 resoluciones (compartido)
│   └── buscador.js          # 61 entradas + buscar() + buscarAgrupado()
├── pages/
│   ├── Home.jsx             # 7 secciones (Audiencia con accesos a los sistemas)
│   ├── Noticias.jsx         # Filtro + paginación + filtro por escuela + links a detalle
│   ├── NoticiaDetalle.jsx   # Detalle de noticia individual
│   ├── MapaDelSitio.jsx     # Mapa visual de todas las rutas (27)
│   ├── Institucional/
│   │   ├── ElISeP.jsx       # Contenido completo + SEDES const
│   │   ├── Autoridades.jsx  # Contenido completo + links a escuelas
│   │   ├── Organizacion.jsx # Organización institucional
│   │   ├── OfertaEducativa.jsx  # Tabs (Carreras/Cursos/Convocatorias) + MI_ISEP_URL
│   │   ├── Carrera.jsx      # Grid de carreras con estado de inscripción
│   │   ├── Resoluciones.jsx # 17 PDFs descargables, filtros año/tipo
│   │   ├── SedesContacto.jsx # 2 sedes con Google Maps embebido
│   │   └── Galeria.jsx      # Photo grid, categorías, lightbox, responsive (FOTOS hardcodeadas)
│   ├── Escuelas/            # 5 escuelas (EscuelaTemplate)
│   │   ├── Policia.jsx
│   │   ├── Superior.jsx
│   │   ├── Especialidades.jsx
│   │   ├── Investigaciones.jsx
│   │   └── EducacionADistancia.jsx
│   ├── Ingreso/
│   │   ├── Ingreso.jsx            # Landing de ingreso: pasos, cronograma, convocatorias, anti-estafa
│   │   ├── Convocatorias.jsx     # Contenido real Esc. Policía 2027-2028
│   │   ├── ProximasConvocatorias.jsx # Próximas convocatorias 2027-2028
│   │   ├── Requisitos.jsx        # 10 requisitos reales + documentación
│   │   ├── Proceso.jsx           # Proceso de selección
│   │   └── Faq.jsx               # 12 preguntas en acordeón
│   └── Secretaria/
│       ├── Titulos.jsx           # Títulos y Certificaciones (formulario DNI, proceso 3 pasos)
│       ├── Biblioteca.jsx        # 22 recursos bibliográficos reales + filtros
│       └── Cursos.jsx            # Cursos de capacitación + badges
├── services/
│   └── api.js               # Capa de abstracción mock→backend-ready
├── utils/
│   └── analytics.js         # Utilidades de tracking GA4
└── styles/
    ├── variables.css        # Design tokens + gradiente
    ├── base.css             # Reset, tipografía, fondo global, .chip, prefers-reduced-motion global
    ├── navbar.css           # Navbar + buscador + hamburger + nav-is-active
    ├── hero.css             # Hero slider + overlays + .page-hero
    ├── news.css             # Noticias Home
    ├── noticias.css         # Página /noticias
    ├── schools-cta.css      # Escuelas + CTA
    ├── new-features.css     # contadores + últimas mejoras
    ├── oferta.css           # Cards, chips, filtros, acordeón
    ├── pages.css            # Clases reutilizables de páginas de contenido
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
| Móvil | `< 768px` | Hamburger left, logo center, Mi ISeP + search right, grids 1 columna |
| Tablet | `768px – 1023px` | Nav desktop con escudo, grids 2 columnas |
| Desktop | `≥ 1024px` | Grids 3-4+ columnas, layout completo |

### 4.2 Nav responsive
- Desktop: escudo + texto + dropdowns
- Tablet (768-1023px): solo escudo
- Mobile (<768px): hamburger left, logo center, Mi ISeP + search right
- **Sección activa:** el enlace de la página actual se resalta con la clase `nav-is-active` (detectada con `useLocation`), tanto en desktop como en móvil

---

## 5. Rutas (App.jsx) — 27 rutas

```
<BrowserRouter>
  <Navbar />
  <Routes>{/* 27 rutas con React.lazy + Suspense */}</Routes>
  <Footer />
  <FloatWhatsApp />
  <ScrollToTop />
</BrowserRouter>
```

Navbar, Footer, FloatWhatsApp y ScrollToTop son globales. Todas las rutas usan lazy loading.

---

## 6. Datos

### 6.1 institucional.js

| Export | Contenido |
|---|---|
| `escuelas` | 5 escuelas con datos oficiales + emails de contacto |
| `carreras` | 4 carreras con inscripciones/fechaInscripcion |
| `cursos` | 6+ cursos con tipo, período, estado |
| `convocatorias` | Convocatorias con estado, tipo, fecha |
| `cronograma` | Etapas del proceso de ingreso con estado y fecha (ciclo 2027-2028) |
| `preguntasFrecuentes` | 12 preguntas y respuestas |
| `escuelaPorId` / `carrerasDeEscuela` / `cursosDeEscuela` | Helpers |

### 6.2 noticias.js

15 noticias con: id, titulo, categoria, fecha, fechaCorta, excerpt, img (admite `null`), adjuntos, escuelas, contenido.

### 6.3 normativa.js

17 resoluciones con: id, titulo, tipo, fecha, tamano, url.

### 6.4 Galeria.jsx (fotos de galería)

Las fotos están **hardcodeadas** en el componente `src/pages/Institucional/Galeria.jsx` (constante `FOTOS`), con categorías: Eventos, Formación, Instalaciones, Graduaciones. No existe `src/data/galeria.js`.

### 6.5 buscador.js

61 entradas agrupadas por tipo. Funciones: `buscar()`, `buscarAgrupado()`.

---

## 7. Búsqueda global

### 7.1 SearchBox (`SearchBox.jsx`)
- Resultados agrupados por tipo (headers con ícono + label)
- Scoring: +3 título, +2 tipo, +1 keyword
- Navegación: ArrowUp/ArrowDown/Enter/Escape
- Enter en campo → abre primer resultado
- **Debounce** de 300ms
- Cierre automático al hacer clic fuera

---

## 8. Hero slider

- 3 slides, automático (6s), pausa en hover
- Flechas + dots, altura `100svh`
- Transiciones: fade suave (1s ease-in-out)
- 2 CTAs: "Conoce nuestras propuestas" (`/institucional/oferta-educativa`) + "Inscripciones 2027" (`/ingreso/convocatorias`)
- Autoplay se pausa con `prefers-reduced-motion` (ver §15.1)

---

## 9. Fondo decorativo global

```css
background-attachment: fixed;
background-color: #bcd8db;
background-image:
  radial-gradient(circle at 10% 20%, #208caf15 0, #0000 45%),
  radial-gradient(circle at 90% 80%, #00c39612 0, #0000 45%);
```

---

## 10. Build stats

| Archivo | Tamaño |
|---|---|
| `index.html` | 2.09 kB |
| `index.css` | ~82 kB (gzip: ~14 kB) |
| `index.js` | ~212 kB (gzip: ~66 kB) |
| Módulos | 96 |
| Lazy chunks | Todas las rutas bajo demanda (React.lazy) |
| Build time | ~0.8-1s |

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

> Esta sección documenta la **estructura de datos y archivos** del sistema de noticias. El **paso a paso operativo** (cómo publicar una noticia nueva) está en **funcional.md §18**.

### 12.1 Estructura de datos

```typescript
interface Noticia {
  id: number;            // Único, incremental
  titulo: string;
  categoria: "Institucional" | "Academica" | "Escuelas" | "Eventos" | "Convenios";
  fecha: string;         // "3 DE SEPTIEMBRE, 2026"
  fechaCorta: string;    // "3 SEP"
  excerpt: string;
  img: string | null;    // URL de imagen (16:9) o null
  escuelas?: ("policia" | "superior" | "especialidades" | "investigaciones" | "ead")[];
  adjuntos?: { nombre: string; url: string; }[];
  contenido?: string;    // HTML o texto plano (\n\n para párrafos)
}
```

### 12.2 Archivos a modificar

| Archivo | Acción |
|---|---|
| `src/data/noticias.js` | Agregar objeto al array `noticias` |
| `src/data/buscador.js` | Automático (importa de noticias.js) |
| `public/docs/` | Colocar archivos adjuntos |

### 12.3 Imagen alusiva

- **Opción A (recomendada):** Imagen local en `public/img/noticias/`
- **Opción B:** URL externa
- **Opción C:** Placeholder: `https://picsum.photos/seed/{nombre}/800/450`
- **Opción D:** Sin imagen: `img: null` — placeholder con ícono
- **Dimensiones:** ratio 16:9 (la destacada muestra 900×500; picsum usa 800×450), JPG/PNG, <200 KB

### 12.4 Documentos adjuntos

- **Carpeta:** `public/docs/`
- **Formatos:** PDF, Excel, JPG, PNG, etc.
- **Render:** `NoticiaDetalle.jsx` muestra botones de descarga

### 12.5 Sistema de imágenes

#### Arquitectura

| Nivel | Ubicación | Uso |
|---|---|---|
| **Assets locales** | `src/assets/` | Escudos, logos (importados vía ES modules) |
| **Imágenes públicas** | `public/img/` | Fotos de slider, noticias, testimonios, banners, galería |

#### Estructura de carpetas

```
public/img/
├── hero/              ← Slider principal (3 slides, 1600×700)
├── noticias/          ← Fotos de noticias (900×500)
├── testimonios/       ← Avatares de egresados (120×120)
├── banners/           ← Banners de páginas (1600×600)
└── galeria/           ← Fotos de la galería (varios tamaños)
```

#### Formatos y optimización

| Tipo | Dimensiones | Formato | Max KB |
|---|---|---|---|
| Hero slider | 1600×700 | JPG | 300 |
| Banners | 1600×600 | JPG | 250 |
| Testimonios | 120×120 | JPG | 50 |
| Noticias | 900×500 | JPG/PNG | 200 |

#### Patrón de implementación

```jsx
{noticia.img ? (
  <img src={noticia.img} alt={noticia.titulo} loading="lazy" />
) : (
  <div className="placeholder-class">
    <span className="material-symbols-outlined">article</span>
  </div>
)}
```

Clases de placeholder disponibles en `pages.css`:
- `.card-img-placeholder` — tarjetas grandes del Home
- `.mini-img-placeholder` — mini-cards del sidebar
- `.np-img-placeholder` — hero de página de noticias
- `.hcard-img-placeholder` — tarjetas del historial
- `.news-hero__placeholder` — hero de detalle de noticia
- `.related-card__placeholder` — noticias relacionadas
- `.escuela-news-placeholder` — noticias en página de escuela

### 12.6 Diagrama de componentes

```
Noticias.jsx ──── noticias[] ──── Link a /noticias/:id
                                        │
News.jsx ────────── noticias[0..3] ──── Link a /noticias/:id
                                        │
                                        ▼
                                  NoticiaDetalle.jsx
                                  ├── Hero (imagen + overlay)
                                  ├── Breadcrumb
                                  ├── NewsArticleLd (JSON-LD)
                                  ├── ShareButton
                                  ├── Contenido
                                  ├── Noticias relacionadas
                                  └── Botón volver
```

---

## 13. Mejoras de Calidad

### 13.1 Lazy Loading
Cada ruta se carga bajo demanda con `React.lazy()` + `Suspense`. 96 módulos totales. Todas las páginas incluidas (incluyendo Secretaría).

### 13.2 Testing
Suite de tests con **Vitest** + **React Testing Library** + **jsdom**. **49 tests en 9 archivos**. Configuración en `vitest.config.js` (ambiente `jsdom`, globals, `setup.js` y `css: false`).

| Archivo | Qué valida | Tests |
|---|---|---|
| `datos.test.js` | IDs únicos, campos requeridos, categorías válidas, imágenes `null`, cronograma | 9 |
| `institucional.test.js` | Escuelas, carreras, cursos, convocatorias | 7 |
| `buscador.test.js` | Búsqueda y resultados agrupados | 5 |
| `navbar.test.jsx` | Navegación desktop/móvil, enlaces, dropdown Ingreso | 6 |
| `hero.test.jsx` | Render de slides, CTAs, navegación | 5 |
| `news.test.jsx` | Noticia destacada y sin imagen | 2 |
| `ingreso.test.jsx` | Render de la landing `/ingreso` (hero, anti-estafa, cronograma, enlaces) | 7 |
| `audiencia.test.jsx` | Sección por audiencia del Home (3 audiencias y enlaces) | 4 |
| `sharebutton.test.jsx` | Copiar, Web Share API, feedback "¡Copiado!" | 3 |

### 13.3 GitHub Actions
CI automatizado: Lint → Build → Test en cada push. Archivo: `.github/workflows/ci.yml`.

### 13.4 SEO
- **JSON-LD:** `EducationalOrganization`, `NewsArticle`, `BreadcrumbList` (consolidados en `JsonLd.jsx`)
- **Meta tags dinámicos:** título, descripción, imagen, tipo, locale (Open Graph + Twitter Card)
- **Canonical:** `SEO.jsx` genera `<link rel="canonical">` dinámico con `origin` + `pathname`
- **sitemap.xml:** 22 URLs
- **robots.txt:** permisos para crawlers

### 13.5 Configuración Centralizada

`src/data/config.js`:

```javascript
export const MI_ISEP_URL = "https://mi.isepsantafe.edu.ar/";
export const GESTION_URL = "https://gestion.isepsantafe.edu.ar";
export const CADETES_URL = "https://cadetes.isepsantafe.edu.ar/";
export const WEBMAIL_URL = "https://webmail.isepsantafe.edu.ar";
export const TELEFONO_ISR = "+54 342 457-9000";
export const EMAIL_CONTACTO = "prensaydifusion@isepsantafe.edu.ar";
export const WHATSAPP_URL = "https://wa.me/5493424579000";
export const GA_ID = "G-XXXXXXXXXX";  // Placeholder
// ... más constantes con JSDoc
```

### 13.6 Analytics
Google Analytics 4 (`gtag.js`): carga asíncrona, solo en producción. Archivos: `Analytics.jsx`, `analytics.js`. Estado: placeholder.

### 13.7 CSS Architecture
- **0 inline styles** en componentes
- `pages.css` con ~200+ clases reutilizables
- Separación: tokens → base → componentes → páginas → responsive
- **Mobile-first** con `responsive.css`

### 13.8 Accesibilidad
- **SkipToContent:** enlace para saltar al contenido principal (`id="main-content"`)
- **focus-visible:** indicadores de foco solo con teclado
- **sr-only:** contenido para lectores de pantalla
- **prefers-reduced-motion:** ver §15.1 (pausa autoplay + desactivación de animaciones)

### 13.9 Error Handling
- **ErrorBoundary global:** captura errores de render
- **NotFound (404):** página dedicada para rutas inexistentes
- Ambos en `App.jsx` como wrappers del router

### 13.10 API Layer
`src/services/api.js`: capa de abstracción mock→backend-ready. Preparada para conectar a API real.

### 13.11 Galería de Fotos
`src/pages/Institucional/Galeria.jsx`: fotos hardcodeadas con categorías (Eventos, Formación, Instalaciones, Graduaciones). Grid responsive, filtros, lightbox. (No existe `src/data/galeria.js`.)

### 13.12 PWA
`manifest.json` + `robots.txt` en `public/`. Permite instalar como Progressive Web App.

---

## 14. Auditoría y Optimización

### 14.1 Auditoría de código

| Aspecto | Antes | Después |
|---|---|---|
| Inline styles | 523 | 0 (29 archivos migrados a CSS) |
| Código muerto | — | Se mantuvieron en uso: analytics.js (GA4), api.js (capa mock→backend-ready), Skeleton.jsx, SEO.jsx — todos siguen existiendo |
| Consolidación JSON-LD | — | EducationalOrganizationLd + NewsArticleLd + BreadcrumbLd → un solo `JsonLd.jsx` |
| Dependencias no usadas eliminadas | — | react-icons, lucide-react |
| Bugs corregidos | — | Resoluciones.jsx TIPO_ICONS, Carrera.jsx link a ruta inexistente |

### 14.2 Optimización de carga

| Aspecto | Cambio |
|---|---|
| Imágenes | `loading="lazy"` + `width`/`height` en todas las imágenes |
| Fuentes | Inter optimizado de 7 a 4 pesos (400, 600, 700, 800) |
| Material Symbols | `display=swap` (eliminó FOIT) |
| Font preload | Preload hint para Inter woff2 |
| Lazy search index | buscador.js construye índice solo en primera llamada |

### 14.3 Optimización React

| Hook | Componente | Descripción |
|---|---|---|
| `React.memo` | StatCard (Contadores.jsx) | Evita re-renderizado innecesario |
| `useMemo` | EscuelaTemplate, NoticiaDetalle | cursos/noticiasEscuela, relacionadas |
| `useCallback` | Testimonios | siguiente/anterior |
| Hooks rules | EscuelaTemplate, NoticiaDetalle | Corregidos hooks condicionales |

### 14.4 Limpieza CSS

- **Dead CSS classes eliminadas:** ~15 clases nunca usadas en JSX
- **Duplicados eliminados:** `.chip`, `.filtro-btn`, `.badge`, `.hero-title`, `.hero-description`, `.page-hero`, `.page-hero__inner`, `.skeleton-*`, `.skip-to-content`, `@keyframes skeleton-pulse`
- **pages.css:** reducido de 3280 a ~2935 líneas

### 14.5 Comentarios JSDoc

- Todos los componentes JSX documentados con JSDoc
- Todos los archivos CSS con sección dividers
- Archivos de datos con documentación de funciones

---

## 15. Accesibilidad de movimiento, Canonical y Preconnect

### 15.1 prefers-reduced-motion (accesibilidad de movimiento)

**Qué es:** media query de CSS que expone si el usuario pidió reducir el movimiento de la interfaz (configuración del sistema operativo/buscador). Se puede leer desde CSS (`@media (prefers-reduced-motion: reduce)`) o desde JS (`window.matchMedia`).

**Para qué sirve:** evita mareos/convulsiones en usuarios sensibles al movimiento. WCAG 2.2 Criterio 2.3.3 ("Animation from Interactions") recomienda permitir desactivar animaciones.

**Cómo se implementa — dos niveles:**

1. **CSS global (`src/styles/base.css`):** media query que anula animaciones y transiciones en todo el sitio:
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
       scroll-behavior: auto !important;
     }
   }
   ```

2. **JS en Hero (`src/components/Hero.jsx`):** el autoplay del slider se pausa si el usuario pidió reducir movimiento. Implementado con el hook `usePrefersReducedMotion()` basado en `useSyncExternalStore` (patrón React que reactúa a `matchMedia` sin setState en efecto):
   ```jsx
   function usePrefersReducedMotion() {
     return useSyncExternalStore(subscribeMatchMedia, () =>
       matchMedia("(prefers-reduced-motion: reduce)").matches
     );
   }
   ```

**Dónde está alojado:** `Hero.jsx` (hook + pausa autoplay), `src/styles/base.css` (media query global).

**Qué rutas afecta:** el autoplay del slider solo existe en la página de inicio `/` (Hero). La regla CSS es global (todas las rutas).

**Por qué no se usa setState en un efecto:** la regla `react-hooks/set-state-in-effect` del linter prohíbe actualizar estado directamente dentro de `useEffect`; `useSyncExternalStore` es la alternativa oficial que además evita el parpadeo (flicker) del primer render.

### 15.2 Canonical URL

**Qué es:** `<link rel="canonical">` indica a los buscadores la URL canónica (principal) de una página, útil para evitar contenido duplicado (ej: parámetros de tracking, variaciones de `www`).

**Para qué sirve:** consolida la autoridad SEO en una sola URL por página.

**Cómo se implementa (`src/components/SEO.jsx`):** se genera dinámicamente a partir de la URL actual:
```jsx
useEffect(() => {
  const url = `${window.location.origin}${window.location.pathname}`;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = url;
}, [pathname]);
```

**Dónde está alojado:** `SEO.jsx` (se recalcula en cada cambio de ruta vía `useEffect([pathname])`).

**Qué rutas usa:** todas — el componente `SEO` se monta en `App.jsx` y se actualiza en cada navegación.

### 15.3 Preconnect (fuentes)

**Qué es:** hint al navegador para establecer conexión temprana (DNS + TCP + TLS) con un origen antes de que se necesite un recurso.

**Para qué sirve:** reduce el tiempo de carga de las fuentes de Google Fonts (Inter y Material Symbols).

**Cómo se implementa (`index.html`):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

**Dónde está alojado:** `<head>` de `index.html`.

**Qué rutas usa:** el sitio completo — la conexión se establece al cargar la primera página y las fuentes (que se usan en todas las rutas) se reutilizan.
