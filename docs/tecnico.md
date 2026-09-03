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
├── main.jsx                 # Entry point + imports de CSS
├── App.jsx                  # Router principal + layout global (22 rutas)
├── assets/                  # Imágenes (escudos: EP, ES, EE, EI, EaD, ISeP, webmail.svg)
├── components/
│   ├── Navbar.jsx           # Navegación global con escudo ISeP responsive
│   ├── Hero.jsx             # Banner principal con slider automático (3 slides Unsplash)
│   ├── SearchBox.jsx        # Buscador global con resultados agrupados por tipo
│   ├── News.jsx             # Sección noticias del Home
│   ├── Apps.jsx             # Aplicaciones institucionales (Mi ISeP, SIGEDI, Webmail)
│   ├── Schools.jsx          # Cuadrícula de escuelas (cada una con su escudo)
│   ├── CTA.jsx              # Llamado a la acción con countdown
│   ├── Footer.jsx           # Pie de página global + botón "Ir Arriba"
│   ├── EscuelaTemplate.jsx  # Plantilla reutilizable de escuela
│   ├── FloatWhatsApp.jsx    # Botón flotante de WhatsApp
│   ├── Breadcrumb.jsx       # Navegación de migas de pan
│   ├── Countdown.jsx        # Cuenta regresiva hasta fecha objetivo
│   ├── Contadores.jsx       # Estadísticas animadas (IntersectionObserver)
│   ├── Testimonios.jsx      # Carrusel de testimonios de egresados
│   └── Placeholder.jsx      # Componente reutilizable para páginas "Próximamente"
├── data/
│   ├── institucional.js     # Datos mock: escuelas, carreras, cursos, convocatorias, FAQ (12 preguntas)
│   └── buscador.js          # Índice de búsqueda (58 entradas) + función buscarAgrupado()
├── pages/
│   ├── Home.jsx             # Landing completa (7 secciones)
│   ├── Noticias.jsx         # Filtro por categoría + share + paginación
│   ├── Institucional/       # ElISeP, Autoridades, Organizacion, Resoluciones (descargable),
│   │                        # SedesContacto (Google Maps), OfertaEducativa (dinámica), Carrera (grid hits)
│   ├── Escuelas/            # 5 escuelas usando EscuelaTemplate
│   ├── Ingreso/             # Convocatorias (landing dedicada), ProximasConvocatorias, Requisitos,
│   │                        # Proceso, Faq (12 preguntas)
│   └── Secretaria/          # Titulos, Biblioteca, Cursos (dinámico)
└── styles/
    ├── variables.css        # Design tokens (incl. gradiente)
    ├── base.css             # Reset, tipografía, fondo global (grilla 32px)
    ├── navbar.css           # Navegación + buscador agrupado + hamburger
    ├── hero.css             # Hero slider + overlays + .page-hero
    ├── news.css             # Noticias (Home)
    ├── noticias.css         # Página /noticias
    ├── schools-cta.css      # Escuelas + CTA con countdown
    ├── apps.css             # Aplicaciones + WhatsApp
    ├── oferta.css           # Cards, chips, filtros, acordeón, .escuela-seccion
    ├── footer.css           # Footer 3 columnas + bottom
    └── responsive.css       # Ajustes mobile-first
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

### 3.2 Gradiente institucional (uniforme)

El sistema de gradiente se centraliza en `--gradient-primary` y se aplica a:
- Botones, interactive/activos, hover de navegación, hover de cards, overlays de imagen.

### 3.3 Chips coloreados por tipo (data-type)

| data-type | Color de fondo | Uso |
|---|---|---|
| `escuela` | `rgba(34,123,209,0.12)` | Escuela |
| `duracion` | `rgba(148,163,184,0.12)` | Duración |
| `modalidad` | `rgba(124,58,237,0.12)` | Modalidad |
| `tipo` | `rgba(180,83,9,0.12)` | Tipo de curso |
| `periodo` | `rgba(23,190,149,0.12)` | Período |
| `estado` | `rgba(148,163,184,0.12)` | Estado |
| `fecha` | `rgba(34,123,209,0.12)` | Fecha |
| `paso` | `rgba(23,190,149,0.12)` | Paso del proceso |

---

## 4. Responsive (obligatorio)

### 4.1 Breakpoints

| Breakpoint | Ancho | Comportamiento |
|---|---|---|
| Móvil | `< 768px` | Menú hamburguesa, grids de 1 columna, botones full-width |
| Tablet | `768px – 1023px` | Nav desktop con escudo ISeP, grids de 2 columnas |
| Desktop | `≥ 1024px` | Grids de 3-4+ columnas, layout completo |

### 4.2 Nav responsive
- Brand en desktop: escudo ISeP + texto
- Brand en tablet (768-1023px): solo escudo
- Brand en mobile (<768px): solo texto

---

## 5. Componentes nuevos

### 5.1 Breadcrumb (`src/components/Breadcrumb.jsx`)
- Navegación de migas de pan con ícono home
- Fondo `#f8fafc` con borde `#eef2f7`
- Links en color `--primary`, último elemento en negrita

### 5.2 Countdown (`src/components/Countdown.jsx`)
- Cuenta regresiva hasta fecha ISO
- Bloques con fondo semitransparente + backdrop-filter
- Expired: muestra "¡Las inscripciones están abiertas!"

### 5.3 Contadores (`src/components/Contadores.jsx`)
- 4 estadísticas: Docentes (2200+), Cadetes (1100+), Personal (800+), Aulas (500+)
- Animación de conteo con `IntersectionObserver` (easing cúbico)
- Hover con elevación

### 5.4 Testimonios (`src/components/Testimonios.jsx`)
- Carrusel de 3 testimonios con foto, nombre, promoción y texto
- Navegación por flechas y dots

### 5.5 Placeholder (`src/components/Placeholder.jsx`)
- Componente reutilizable para páginas "Próximamente"
- Muestra: badge, título, descripción, lista de features próximas

---

## 6. Datos (mock)

### 6.1 institucional.js

| Export | Contenido |
|---|---|
| `escuelas` | 5 escuelas con id, nombre, logo, presentación, información |
| `carreras` | 4 carreras con inscripciones (abiertas/próximamente/cerradas), fechaInscripcion |
| `cursos` | 6+ cursos con tipo, período, estado y escuela |
| `convocatorias` | Convocatorias con estado (vigente/próxima), tipo, fecha |
| `preguntasFrecuentes` | 12 preguntas y respuestas para el ingreso |
| `escuelaPorId` / `carrerasDeEscuela` / `cursosDeEscuela` | Helpers |

### 6.2 buscador.js

| Function | Descripción |
|---|---|
| `buscar(query, max)` | Busca en el índice, devuelve resultados ordenados por relevancia |
| `buscarAgrupado(query, maxPorGrupo)` | Busca y agrupa por tipo (Escuela, Carrera, Curso, etc.) |

**Índice:** 58 entradas (5 escuelas + 4 carreras + 6 cursos + 3 convocatorias + 11 noticias + 11 resoluciones + 12 páginas)

---

## 7. Búsqueda global

### 7.1 Índice de búsqueda (`src/data/buscador.js`)

Incluye: escuelas, carreras, cursos, convocatorias, noticias, normativa y páginas institucionales.

### 7.2 Componente SearchBox (`src/components/SearchBox.jsx`)

- **Resultados agrupados por tipo:** header con ícono + label por grupo
- **Scoring:** +3 título, +2 tipo, +1 keyword
- **Navegación por teclado:** ArrowUp/ArrowDown/Enter/Escape
- **Contador de resultados** y hints de teclado

---

## 8. Hero slider

- **3 slides** con fotos Unsplash (stock policial/educación)
- **Automático:** cada 6 segundos
- **Pausa:** al pasar el cursor
- **Navegación:** flechas + dots
- **Altura:** `100svh` con `align-items: center` (centrado vertical)

---

## 9. Fondo decorativo global

```css
background-attachment: fixed;
background-color: #bcd8db;
background-image:
  linear-gradient(90deg, #ffffff40 1px, #0000 0),
  linear-gradient(180deg, #ffffff40 1px, #0000 0),
  radial-gradient(circle at 10% 20%, #208caf59 0, #0000 45%),
  radial-gradient(circle at 90% 80%, #00c3964d 0, #0000 45%);
```

---

## 10. Build stats

| Archivo | Tamaño |
|---|---|
| `index.html` | 0.72 kB |
| `index.css` | 38.58 kB (gzip: 7.56 kB) |
| `index.js` | 370.56 kB (gzip: 108.57 kB) |
| Módulos | 81 |
| Build time | ~7-10s |

---

## 11. Comandos

| Comando | Descripción |
|---|---|
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor de desarrollo (Vite, puerto 5173) |
| `npm run build` | Build de producción |
| `npm run preview` | Previsualiza el build |
| `npm run lint` | Ejecuta ESLint |
