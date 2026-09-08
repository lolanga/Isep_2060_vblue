# Especificaciones Funcionales — Sitio Web ISeP Santa Fe

**Proyecto:** `Isep_2060_vblue`
**Versión:** 1.0.0
**Última actualización:** 7 de septiembre de 2026

---

## 1. Visión general

Sitio web institucional del **Instituto de Seguridad Pública (ISeP) de la Provincia de Santa Fe**.
SPA construida con React 19 + Vite 8 + React Router 7. 100% responsive (móvil, tablet, desktop). Lazy loading por ruta para tiempos de carga optimizados.

---

## 2. Audiencias

| Audiencia | Necesidad principal | Contenido relevante |
|---|---|---|
| **Postulantes** | Conocer requisitos, convocatorias, proceso y FAQ | Ingreso (6 páginas) + Landing de Ingreso + Landing Convocatorias con contenido real |
| **Personal en actividad** | Trámites, correo, sistemas internos | Mi ISeP, SIGEDI, Gestión Cadetes, Webmail |
| **Público general** | Información institucional y actualidad | Institucional, Noticias (con detalle), Biblioteca, Galería |
| **Profesionales de la educación** | Oferta académica y cursos | Formación, Carreras, Cursos |

---

## 3. Mapa de navegación

```
┌───────────────────────────────────────────────────────────────┐
│  NAVBAR (escudo ISeP + brand + links + buscador + Mi ISeP)   │
├──────────┬───────────────────┬──────────────┬────────────────┤
│INSTITUC. │    FORMACIÓN       │   INGRESO    │ ÚLTIMAS NOTICIAS│
├──────────┼───────────────────┼──────────────┼────────────────┤
│ El ISeP  │ Oferta Académica  │Inicio de     │                │
│ Autori-  │ Escuelas ▾        │ ingreso      │                │
│ dades    │  · Policía        │Convocatorias │                │
│ Organi-  │  · Especialidades │ vigentes     │                │
│ zación   │  · Superior       │Próximas      │                │
│ Normativa│  · Investigaciones│ convocatorias│                │
│ y Resol. │  · Ed. a Distancia│Requisitos    │                │
│ Sedes y  │ Cursos            │Proceso de    │                │
│ Contacto │ Títulos y Cert.   │ ingreso      │                │
│ Galería  │ Biblioteca Virtual│Preguntas     │                │
│          │                   │ frecuentes   │                │
└──────────┴───────────────────┴──────────────┴────────────────┘
```

### 3.1 Estructura de la barra de navegación

- **Logo ISeP** (SVG escudo) + texto "Instituto de Seguridad Pública" — enlazable al inicio.
- **Institucional** → dropdown con ícono "account_balance": El ISeP, Autoridades, Organización, Oferta Educativa, Resoluciones, Sedes y Contacto, Galería de Fotos.
- **Formación** → dropdown con ícono "school": Escuelas (submenú de 5 con escudos: Policía, Especialidades, Superior, Investigaciones, EaD), Cursos.
- **Ingreso** → dropdown con ícono "login": **Inicio de ingreso** (landing), Proceso de Selección, Requisitos, Próximas Convocatorias, FAQ.
- **Secretaría** → dropdown: Títulos y Certificaciones, Biblioteca Virtual, Cursos de Capacitación.
- **Noticias** → link directo a `/noticias` con ícono "newspaper".
- **Mi ISeP** → botón siempre visible (desktop y móvil), enlace externo a `mi.isepsantafe.edu.ar`.
- **Buscador** → ícono de lupa que abre `SearchBox` con debounce 300ms y resultados agrupados.
- **Sección activa** → el enlace de la sección actual se resalta automáticamente (`nav-is-active`) en desktop y móvil.

**Mobile:** hamburguesa a la izquierda, logo al centro, Mi ISeP + buscador a la derecha.

### 3.2 Rutas existentes (27 rutas)

| Ruta | Página | Estado |
|---|---|---|
| `/` | Home (8 secciones) | Implementada |
| `/noticias` | Listado de noticias con filtro, paginación y detalle | Implementada |
| `/noticias/:id` | Detalle de noticia individual (contenido, relacionadas) | Implementada |
| `/institucional/el-isep` | El ISeP | Implementada |
| `/institucional/autoridades` | Autoridades | Implementada |
| `/institucional/organizacion` | Organización (placeholder — Próximamente) | Implementada |
| `/institucional/oferta-educativa` | Oferta Educativa (tabs: Carreras/Cursos/Convocatorias) | Implementada |
| `/institucional/carreras` | Carreras (grid con estado de inscripción) | Implementada |
| `/institucional/resoluciones` | Resoluciones (17 documentos descargables) | Implementada |
| `/institucional/sedes-contacto` | Sedes y Contacto (Google Maps embebido) | Implementada |
| `/institucional/galeria` | Galería de Fotos (categorías, filtros, lightbox) | Implementada |
| `/escuelas/policia` | Escuela de Policía (datos oficiales) | Implementada |
| `/escuelas/superior` | Escuela Superior (datos oficiales) | Implementada |
| `/escuelas/especialidades` | Escuela de Especialidades (datos oficiales) | Implementada |
| `/escuelas/investigaciones` | Escuela de Investigaciones (datos oficiales) | Implementada |
| `/escuelas/educacion-a-distancia` | Educación a Distancia | Implementada |
| `/ingreso` | Landing de Ingreso (pasos, cronograma 2027-2028, convocatorias, requisitos, FAQ, anti-estafa) | Implementada |
| `/ingreso/proceso` | Proceso de selección | Implementada |
| `/ingreso/requisitos` | Requisitos | Implementada |
| `/ingreso/convocatorias` | Landing Convocatorias (contenido real Esc. Policía 2027–2028) | Implementada |
| `/ingreso/proximas-convocatorias` | Próximas convocatorias (2027-2028) | Implementada |
| `/ingreso/faq` | Preguntas frecuentes (12 preguntas) | Implementada |
| `/secretaria/titulos` | Títulos y Certificaciones | Implementada |
| `/secretaria/biblioteca` | Biblioteca Virtual (22 recursos bibliográficos) | Implementada |
| `/secretaria/cursos` | Cursos de Capacitación | Implementada |
| `/mapa-del-sitio` | Mapa del Sitio (guía visual de todas las rutas) | Implementada |
| `/404` | Página no encontrada | Implementada |

---

## 4. Funcionalidades implementadas (Home)

La página de inicio (`/`) está compuesta por las siguientes secciones, en orden:

1. **Hero Slider** — Banner principal con slider automático (3 slides), transiciones suaves, flechas de navegación y indicadores (dots). Dos CTAs: "Conoce nuestras propuestas" → `/institucional/oferta-educativa` y "Inscripciones 2027" → `/ingreso/convocatorias`.
2. **¿Qué estás buscando? (Elegí tu camino)** — sección por audiencia (`Audiencia.jsx`) con 3 tarjetas: **Quiero ingresar** (pre-inscripción, requisitos, cronograma, FAQ → `/ingreso`), **Soy personal** (Mi ISeP, SIGEDI, Gestión Cadetes, Webmail) y **Ciudadano** (noticias, oferta educativa, biblioteca, galería).
3. **Últimas Noticias** — Noticia destacada + sidebar de noticias recientes con ShareButton y promo **"Calendario Académico"** (botón DESCARGAR PDF). Links a `/noticias/:id`.
4. **Trámites y Sistemas** — 4 tarjetas de acceso a los sistemas del ISeP: Mi ISeP, SIGEDI, Gestión Cadetes, Webmail. Cada una con audiencia y descripción de qué hace.
5. **CTA Inscripciones** — Bloque con título "Inscripciones Abiertas 2027", countdown configurable (fecha objetivo: 2027-09-30) + botones "Pre-Inscripción Online" (`/ingreso/convocatorias`) y "Ver Requisitos" (`/ingreso/requisitos`).
6. **Nuestras Escuelas** — Cuadrícula de las 4 escuelas principales (Policía, Superior, Especialidades, Investigaciones) con escudos. Tarjetas enlaces clickeables a `/escuelas/:slug`. La 5ta escuela (EaD) se accede desde el menú Formación.
7. **Contadores** — Estadísticas animadas: Docentes (2200+), Cadetes activos (1100+), Personal formándose (800+), Aulas virtuales (500+).
8. **Testimonios** — Carrusel de 3 testimonios de egresados con flechas y dots.

> **Nota:** Contadores y Testimonios se ocultan en móvil (`hide-mobile`).

### 4.1 Hero Slider

- **Slides:** 3 slides con imagen, badge, título y descripción.
- **Automático:** cambia cada 6 segundos.
- **Pausa:** al pasar el cursor.
- **Navegación:** flechas + dots.
- **Transiciones:** fade suave (1s ease-in-out).
- **Altura:** `100svh`.
- **CTAs:** botón principal "Conoce nuestras propuestas" (`/institucional/oferta-educativa`) + botón secundario "Inscripciones 2027" (`/ingreso/convocatorias`).
- **Accesibilidad:** respeta `prefers-reduced-motion` — si el usuario pidió reducir movimiento, el autoplay se pausa (ver tecnico.md §15.1).

### 4.2 Sección Trámites y Sistemas (Home)

| App | Descripción | Audiencia |
|---|---|---|
| **Mi ISeP** | Acceso a aulas virtuales, material de cursado, notas y asistencia | Docentes, personal policial cursante y postulantes inscriptos |
| **SIGEDI** | Sistema de gestión de expedientes internos | Solo personal interno del ISeP |
| **Gestión Cadetes** | Control y notificaciones del cursado | Cadetes de 1° y 2° año |
| **Webmail** | Correo electrónico institucional | Todo el personal del ISeP |

### 4.3 Sección Noticias del Home (`News.jsx`)

- Noticia destacada (tarjeta grande) con **link a `/noticias/:id`**.
- Sidebar de 3 mini-cards con **links a `/noticias/:id`**.
- **Promo "Calendario Académico"** al final del sidebar (ícono escudo + botón "DESCARGAR PDF").
- **ShareButton** en cada card de noticia para compartir directamente.
- **"Ver todas las noticias"** apunta a `/noticias`.
- Alimentado desde `src/data/noticias.js`.
- **Imágenes opcionales:** si un registro tiene `img: null`, se muestra un placeholder con ícono.

### 4.4 Página de Noticias (`/noticias`)

- **Filtro por categorías:** Todas, Institucional, Académica, Escuelas, Eventos, Convenios.
- **Filtro por escuela:** permite filtrar noticias por escuela asociada (Policía, Superior, Especialidades, Investigaciones, EaD).
- **Botón compartir:** cada noticia tiene `ShareButton` (Web Share API o clipboard).
- **Noticia principal:** última publicación con imagen, fecha, título y extracto → **link a `/noticias/:id`**.
- **Historial:** grid de tarjetas con **links a `/noticias/:id`** y paginación (10 por página).
- **Breadcrumb** para navegación.
- **15 noticias** publicadas.

### 4.5 Detalle de Noticia (`/noticias/:id`)

- **Hero de imagen** con overlay gradiente y badge de categoría.
- **Breadcrumb:** Inicio → Noticias → Título de la noticia.
- **Contenido completo:** excerpt destacado + cuerpo de texto.
- **NewsArticleLd** (JSON-LD) para rich results de Google.
- **ShareButton** para compartir.
- **Noticias relacionadas** (misma categoría, max 3).
- **Botón "Volver a noticias"**.
- **Estado 404:** si el ID no existe, muestra mensaje y enlace de retorno.

### 4.6 Galería de Fotos (`/institucional/galeria`)

- **Grid de fotos** con diseño responsive (1-4 columnas según dispositivo).
- **Filtros por categoría:** Eventos, Formación, Instalaciones, Graduaciones.
- **Lightbox** al hacer clic en una imagen (visualización ampliada con navegación).
- **Imágenes almacenadas** en `public/img/galeria/`.
- **Diseño adaptable** que se ajusta a diferentes tamaños de pantalla.

---

## 5. Formación

### 5.1 Oferta Educativa (`/institucional/oferta-educativa`)

Vista dinámica con pestañas:

| Pestaña | Contenido |
|---|---|
| **Carreras** | Cards con nombre, descripción, escuela, duración, modalidad |
| **Cursos** | Cards con nombre, tipo, período + botón "Acceso a Mi ISeP" |
| **Convocatorias** | Cards con estado (Vigente/Próxima), escuela y fecha |

Las tarjetas de escuelas en Oferta Educativa muestran **imágenes de escudos** (no cajas de color con abreviaciones).
El botón de acceso usa `MI_ISEP_URL` desde `config.js`.

### 5.2 Carreras (`/institucional/carreras`)

Grid de tarjetas mejoradas:
- Header coloreado según la escuela
- Chips de duración, modalidad y escuela
- **Estado de inscripción** (abiertas / próximamente / cerradas) con indicador de color
- Fecha de inscripción
- Hover animado (elevación)

### 5.3 Cursos (`/secretaria/cursos`)

- Filtros por Escuela, Tipo y Estado
- Acordeón/desplegable por curso
- Botón "Acceso a Mi ISeP"

### 5.4 Páginas de escuela (plantilla `EscuelaTemplate`)

5 escuelas con datos oficiales (presentación, email de contacto, sede):
- **Policía:** formación inicial Ley 12.333, email `escueladepolicia@isepsantafe.edu.ar` — **única que muestra la sección "Carreras"**
- **Superior:** perfeccionamiento Dirección/Supervisión, email `divestudio-essp@santafe.gov.ar`
- **Especialidades:** perfeccionamiento Coordinación/Ejecución, email `escueladeespecialidades@isepsantafe.edu.ar`
- **Investigaciones:** análisis criminal e investigación, email `escueladeinvestigacion@isepsantafe.edu.ar`
- **EaD:** educación a distancia

> **Nota:** Solo la Escuela de Policía incluye la sección "Carreras". Las demás escuelas no muestran esta sección.

---

## 6. Ingreso

### 6.1 Landing de Ingreso (`/ingreso`)

Punto de entrada único para el postulante. **Resume todo el trayecto en una pantalla:**
- **Hero** con badge "Ciclo Lectivo 2027–2028" y CTAs a Pre-Inscripción Online (`/ingreso/convocatorias`) y Requisitos (`/ingreso/requisitos`)
- **Alerta anti-estafa** — "el trámite es gratuito y personal; ningún gestor ni intermediario interviene" con contacto de prensa
- **Pasos del proceso** (4 tarjetas): crear usuario → completar inscripción → superar etapas → incorporación
- **Cronograma 2027–2028** (timeline desde `data/institucional.js` → `cronograma`): pre-inscripción (en curso) → listado de presentación → exámenes premédico/psicológico/intelectual/físico/socioambiental → propedéutico → incorporación, cada etapa con estado y fecha
- **Convocatorias abiertas** (cards desde `convocatorias`)
- **Requisitos principales** (top 5) con enlace al listado completo
- **FAQ destacadas** (3) con enlace al FAQ completo
- **CTA final** a MI ISEP y consultas por email

### 6.2 Landing de Convocatorias (`/ingreso/convocatorias`)

**Contenido real** del proceso de selección — Escuela de Policía — Ciclo 2027–2028:
- **Hero con countdown** y enlace directo a MI ISEP
- **Alerta de presentación** (09:00 hs, tolerancia 20 min)
- **Documentación:** título secundario + DNI
- **Vestimenta y elementos** a presentar
- **Cómo inscribirte** en MI ISEP (4 pasos)
- **Formularios obligatorios** (4 Declaraciones Juradas)
- **Edad requerida** (18-30 años al 02/02/2027)
- **Etapas del proceso** (4 etapas)
- **Requisitos** (10 items)
- **Consultas:** prensaydifusion@isepsantafe.edu.ar
- **Link al listado de presentación** (PDF externo)

### 6.3 Próximas Convocatorias (`/ingreso/proximas-convocatorias`)

Aperturas para el ciclo 2027-2028.

### 6.4 Requisitos (`/ingreso/requisitos`)

10 requisitos reales del sitio + documentación requerida + formularios obligatorios.

### 6.5 Proceso de Selección (`/ingreso/proceso`)

Pasos detallados del proceso de ingreso.

### 6.6 Preguntas Frecuentes (`/ingreso/faq`)

12 preguntas y respuestas en formato acordeón.

---

## 7. Secretaría

### 7.1 Títulos y Certificaciones (`/secretaria/titulos`)

- **Consulta de Certificados** — Formulario de búsqueda por DNI con feedback visual
- **Títulos y Registros** — Proceso de 3 pasos (verificar título, escanear documentos, formulario online)
- **Links externos:** santafe.gov.ar (verificar título), Google Forms (formulario de solicitud)
- **Títulos para retirar** — 2 links de descarga (formato nuevo y anterior) de Google Drive
- **Contacto:** Sección Títulos y Registros, tel 0341-4728526, correo titulosisep@isepsantafe.edu.ar
- **Sedes:** Rosario y Recreo con direcciones

### 7.2 Biblioteca Virtual (`/secretaria/biblioteca`)

- **22 artículos reales del ISeP** con categorías: Normativa, Protocolos, Formación, Institucional
- Chips coloreados por tipo
- Botón de descarga por recurso (enlaces directos a PDFs de isepsantafe.edu.ar)
- Filtros por categoría

### 7.3 Cursos de Capacitación (`/secretaria/cursos`)

- Cursos con badges de estado
- Botón "Acceso a Mi ISeP" usando `MI_ISEP_URL` desde `config.js`

---

## 8. Búsqueda global

- **Ubicación:** ícono de lupa en el navbar, al lado de "Mi ISeP".
- **Debounce:** 300ms para evitar búsquedas excesivas.
- **Índice:** 61 entradas (5 escuelas + 4 carreras + 6 cursos + 3 convocatorias + 15 noticias + 17 normativa + 11 páginas).
- **Resultados agrupados por tipo:** Escuelas → Carreras → Cursos → Convocatorias → Noticias → Normativa → Páginas → Misceláneas.
- **Navegación por teclado:** ↑↓, Enter, Escape.
- **Contador de resultados** y hints de teclado.
- **Enter** en el campo abre el primer resultado.

---

## 9. Normativa y Resoluciones (`/institucional/resoluciones`)

- **17 documentos** oficiales descargables
- **Filtros por año** (Todos, 2026, 2025, 2024, 2023, 2022)
- **Filtros por tipo** (Resolución, Convenio, Plan Estratégico, Estatuto)
- Chips coloreados por tipo, botón Descargar, Breadcrumb

---

## 10. Sedes y Contacto (`/institucional/sedes-contacto`)

2 sedes con **Google Maps embebido**:
- **D.Z.S – Rosario:** Leandro N. Alem 2050, tel 341-4728526
- **DZCN – Recreo:** RN11, km 482, tel 342-4815570
- Canales de contacto y redes sociales

---

## 11. Mapa del Sitio (`/mapa-del-sitio`)

Guía visual de todas las rutas del sitio organizadas por sección:
- Arbol jerárquico con todas las 27 rutas
- Enlaces directos a cada página
- Navegación visual para encontrar rápidamente cualquier contenido

---

## 12. Accesos flotantes y redes

### 12.1 WhatsApp
- Botón flotante verde, siempre visible (z-index 60).
- Enlace a `wa.me/5493424579000` (tel: +54 342 457-9000).

### 12.2 ScrollToTop
- Botón flotante con SVG flecha (z-index 70).
- Visible tras 400px de scroll, `bottom: 5.5rem`.
- En móvil, se posiciona en la esquina inferior izquierda para no superponerse con el botón de WhatsApp.
- Scroll suave al inicio.

### 12.3 Redes sociales (Footer)
- **Facebook:** `facebook.com/isepsantafe/`
- **YouTube:** `youtube.com/c/InstitutodeSeguridadPúblicaDeSantaFe`
- **Instagram:** `instagram.com/isepsantafe`
- **TikTok:** `tiktok.com/@isepsantafe`

### 12.4 Footer
- Fondo sólido `#00254d`, grid 3 columnas.
- Bottom 1 línea: "Departamento Desarrollo, Tecnología e Innovación" + fecha dinámica.

---

## 13. Breadcrumb

Componente `Breadcrumb.jsx`:
- Fondo `#f8fafc`, borde `#eef2f7`, margen superior 2rem respecto al contenido
- Ícono home enlazable, separadores "/"
- Último elemento en negrita
- **BreadcrumbLd** (JSON-LD) en todas las páginas con breadcrumb

---

## 14. Contadores

4 estadísticas animadas con `IntersectionObserver`:
- Docentes 2200+, Cadetes 1100+, Personal 800+, Aulas 500+

---

## 15. Testimonios

Carrusel de 3 egresados con foto, nombre, promoción y texto. Flechas y dots.

---

## 16. Requisitos funcionales

1. **Responsive obligatorio** (móvil, tablet, desktop)
2. **Contraste legible** (overlays + scrim)
3. **Mi ISeP siempre visible**
4. **Logo ISeP enlazable** al inicio
5. **Consistencia visual** (gradiente, glow)
6. **Fondo decorativo global** (`background-attachment: fixed`)
7. **Favicon:** escudo ISeP
8. **SkipToContent** + `id="main-content"` en todos los `<main>`

---

## 17. Disponibilidad

- **Desarrollo:** `npm run dev` (localhost:5173)
- **Build:** `npm run build` → `npm run preview`
- **Lint:** `npm run lint`
- **Tests:** `npm run test`

### 17.1 Testing automatizado

Suite de tests con **Vitest** + **React Testing Library** + **jsdom**:
- 48 tests en 9 archivos, cubriendo tanto la capa de datos como componentes UI:
- `datos.test.js` (9): valida estructura de noticias (IDs únicos, campos requeridos, categorías válidas, imágenes admisibles como `null`) + cronograma de ingreso (etapas con estado válido)
- `institucional.test.js` (7): valida estructura de escuelas, carreras, cursos y convocatorias
- `buscador.test.js` (5): valida funcionalidad de búsqueda y resultados agrupados
- `navbar.test.jsx` (6): navegación desktop/móvil, enlaces privados y dropdown Ingreso (primer destino `/ingreso`)
- `hero.test.jsx` (5): render de slides, CTAs y navegación
- `news.test.jsx` (2): render de noticias destacadas con y sin imagen
- `ingreso.test.jsx` (7): render de la landing `/ingreso` (hero, anti-estafa, pasos, cronograma, convocatorias, FAQ, enlaces)
- `audiencia.test.jsx` (4): sección por audiencia del Home (tres audiencias y sus enlaces)
- `sharebutton.test.jsx` (3): copiar al portapapeles, Web Share API y feedback "¡Copiado!"
- Tests ejecutados automáticamente en CI (GitHub Actions) en cada push
- Ejecutar localmente con `npm run test`

### 17.2 CI/CD

GitHub Actions ejecuta en cada push:
- Lint → Build → Test
- Si cualquier paso falla, el push se bloquea

---

## 18. Publicación de noticias — Guía paso a paso

> **¿Querés editar otra sección del sitio (imágenes, hero, escuelas, carreras, convocatorias, cronograma, contadores, testimonios, config, etc.)?** Las guías paso a paso de edición están en este mismo documento: §20 (imágenes), §21 (hero) y §22 (todos los componentes).

### 18.1 Estructura de datos de una noticia

Cada noticia se define en `src/data/noticias.js` con la siguiente estructura:

```javascript
{
  id: 1,
  titulo: "Título de la noticia",
  categoria: "Institucional",  // Institucional | Academica | Escuelas | Eventos | Convenios
  fecha: "24 DE MAYO, 2025",   // Formato largo
  fechaCorta: "24 MAY",        // Formato corto (para cards)
  excerpt: "Extracto breve de la noticia...",
  img: "/img/noticias/imagen.jpg",  // URL de imagen (local, externa) o null
  escuelas: ["policia"],            // (opcional) IDs de escuelas asociadas
  adjuntos: [                          // (opcional) documentos adjuntos
    { nombre: "Nombre del archivo.pdf", url: "/docs/archivo.pdf" },
  ],
  contenido: "Primer párraco.\n\nSegundo párrafo.",  // (opcional) cuerpo completo
}
```

> **Campo `img`:** puede ser una URL de imagen (local o externa) o `null`. Si es `null`, se muestra un placeholder con ícono de material symbols.
> **Campo `contenido`:** soporta HTML (h2, h3, p, ul/ol, li, strong, a, img, blockquote, .btn-inscripcion, .info-box). Si el contenido empieza con `<`, se renderiza como HTML.
> **Campo `adjuntos`:** lista de archivos para descargar (PDF, Excel, JPG, PNG, etc.). Colocar archivos en `public/docs/`.
> **Campo `escuelas`:** array con IDs de escuelas (`policia`, `superior`, `especialidades`, `investigaciones`, `ead`). La noticia aparece en las páginas de esas escuelas.

### 18.2 Pasos para publicar una noticia nueva

#### Paso 1: Preparar la imagen alusiva

**Opción A: Imagen local (recomendada)**
1. Crear la carpeta `public/img/noticias/` si no existe
2. Copiar ahí la imagen (ej: `formacion-seguridad.jpg`)
3. Referenciarla en `noticias.js`:
   ```javascript
   img: "/img/noticias/formacion-seguridad.jpg",
   ```

**Opción B: URL externa**
```javascript
img: "https://isepsantafe.edu.ar/images/noticias/mi-noticia.jpg",
```

**Opción C: Placeholder (picsum.photos)**
```javascript
img: "https://picsum.photos/seed/mi-noticia/800/450",
```

**Opción D: Sin imagen (null)**
```javascript
img: null,
```
> Se muestra un placeholder con ícono de material symbols. Ideal para noticias sin foto alusiva.

**Especificaciones:** ratio 16:9 (la card destacada muestra 900×500 y las mini-cards 400×225; picsum usa 800×450), JPG/PNG, máximo 200 KB.

#### Paso 2: Definir la categoría

| Categoría | Uso |
|---|---|
| `Institucional` | Noticias oficiales del ISeP, resoluciones, aperturas |
| `Academica` | Capacitaciones, conferencias, ciclos de estudio |
| `Escuelas` | Noticias de las 5 escuelas del ISeP |
| `Eventos` | Eventos deportivos, ceremonias, actos |
| `Convenios` | Convenios con otras instituciones |

#### Paso 3: Agregar archivos adjuntos (opcional)

Si la noticia tiene documentos para descargar:
1. Copiar los archivos a `public/docs/`
2. Agregar el campo `adjuntos` al objeto de la noticia:
   ```javascript
   adjuntos: [
     { nombre: "Nombre para mostrar.pdf", url: "/docs/archivo.pdf" },
   ],
   ```

#### Paso 4: Agregar el registro en `src/data/noticias.js`

```javascript
{
  id: 16,  // Siguiente ID disponible (máximo actual 15)
  titulo: "Título descriptivo de la noticia",
  categoria: "Institucional",
  fecha: "7 DE SEPTIEMBRE, 2026",   // formato largo
  fechaCorta: "7 SEP",              // formato corto para cards
  excerpt: "Extracto de 1 a 2 oraciones.",
  img: "/img/noticias/mi-imagen.jpg",  // colocar en public/img/noticias/
  escuelas: ["policia"],               // opcional: policia, superior, especialidades, investigaciones, ead
  adjuntos: [
    { nombre: "Protocolo PDF", url: "/docs/protocolo.pdf" },  // colocar en public/docs/
  ],
  contenido: `
    <p><strong>Texto en negrita.</strong> Párrafo normal.</p>

    <h2>Sección</h2>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>

    <a href="https://forms.google.com/..." class="btn-inscripcion" target="_blank">
      INSCRIBIRSE
    </a>

    <blockquote>Cita destacada</blockquote>

    <div class="info-box">
      <strong>Info importante</strong>
    </div>
  `
}
```

> **Importante:** el `id` debe ser único (usar el máximo actual + 1). El campo `contenido` se escribe con backticks y acepta el HTML indicado en 18.1 (`h2`, `p`, `ul/ol`, `strong`, `a`, `.btn-inscripcion`, `blockquote`, `img`, `.info-box`). Si se asignan `escuelas`, la noticia también aparece en las páginas `/escuelas/:id` correspondientes.

#### Paso 5: Verificar el buscador

`src/data/buscador.js` importa directamente de `noticias.js`, la noticia aparecerá automáticamente en el buscador global y en `/noticias` sin ningún paso extra.

#### Paso 6: Verificar el contenido

Al hacer clic en una card de noticia, se abre `/noticias/:id` con:
- Hero de imagen con overlay gradiente
- Badge de categoría y fecha
- Extracto destacado con borde izquierdo
- Cuerpo de la noticia
- Documentos adjuntos con botones de descarga
- Noticias relacionadas
- Breadcrumb y botón de volver

#### Paso 7: Probar visualmente

1. Ejecutar `npm run dev`
2. Ir a la página de inicio → verificar que la noticia aparece en "Últimas Noticias"
3. Ir a `/noticias` → verificar que aparece en el listado y se puede filtrar
4. Hacer clic en la noticia → verificar detalle con imagen, contenido y relacionadas
5. Verificar el botón de compartir
6. Ejecutar `npm run build` y `npm run lint`

### 18.3 Resumen del flujo de publicación

| Paso | Archivo | Acción |
|---|---|---|
| 1 | Imagen | Preparar imagen 16:9 (ej. 900×500, JPG/PNG) |
| 2 | — | Definir categoría |
| 3 | `public/docs/` | Colocar archivos adjuntos (si aplica) |
| 4 | `src/data/noticias.js` | Agregar objeto al array |
| 5 | `src/data/buscador.js` | Automático (importa de noticias.js) |
| 6 | `npm run dev` | Verificar visualmente |
| 7 | `npm run build` | Confirmar build limpio |

---

## 19. Infraestructura SEO y Analytics

### 19.1 JSON-LD (Structured Data)

Se implementan 3 tipos de structured data según la página:

| Tipo | Página | Contenido |
|---|---|---|
| `EducationalOrganization` | Home (`/`) | Datos del ISeP: nombre, dirección, redes sociales, logo |
| `NewsArticle` | Detalle de noticia (`/noticias/:id`) | Título, autor, fecha, imagen, excerpt |
| `BreadcrumbList` | Todas las páginas con Breadcrumb | Ruta de navegación jerárquica (BreadcrumbLd) |

- Se renderizan como `<script type="application/ld+json">` inline en cada componente de página.
- Validar con Google Rich Results Test.

### 19.2 Meta Tags dinámicos

El componente `SEO.jsx` gestiona meta tags por página:

| Meta tag | Fuente |
|---|---|
| `<title>` | Título de la página + " — ISeP Santa Fe" |
| `<meta name="description">` | Descripción breve (150–160 chars) |
| `<meta property="og:title">` | Título para redes sociales |
| `<meta property="og:description">` | Descripción para redes sociales |
| `<meta property="og:image">` | Imagen representativa |
| `<meta property="og:type">` | website / article |
| `<meta property="og:locale">` | es_AR |
| `<meta name="twitter:card">` | summary_large_image |
| `<link rel="canonical">` | URL canónica dinámica (`origin` + `pathname`) |

- Se actualizan dinámicamente con `useEffect` al cambiar de ruta.

### 19.3 Sitemap.xml

- **22 URLs** con frecuencias y prioridades.
- Incluye: Home, 5 escuelas, noticias, normativa, biblioteca, ingreso, institucional, secretaría.
- Disponible en `/sitemap.xml`.

### 19.4 Google Analytics 4

- **Herramienta:** `gtag.js` (Google Analytics 4).
- **Carga:** asíncrona, no bloquea el render.
- **Modo:** solo producción (desactivado en `npm run dev`).
- **ID configurable:** en `src/components/Analytics.jsx` y `src/data/config.js`.
- **Estado actual:** placeholder (`G-XXXXXXXXXX`). Para activar: reemplazar con un Measurement ID real.

### 19.5 PWA

- **`manifest.json`:** configuración de Progressive Web App (nombre, colores, iconos).
- **`robots.txt`:** permisos para crawlers (allow: `/`, Disallow: `/api/`).
- Permite instalar el sitio como app en móviles y escritorio.

### 19.6 Accesibilidad

| Característica | Descripción |
|---|---|
| `SkipToContent` | Enlace invisible al inicio que aparece con Tab, salta al contenido principal (`id="main-content"` en todos los `<main>`) |
| `focus-visible` | Indicadores de foco visibles solo con navegación por teclado |
| `sr-only` | Contenido exclusivo para lectores de pantalla |
| `skeleton-pulse` | Placeholder animado mientras cargan datos |
| **Labels en formularios** | Campos con `<label htmlFor>` vinculados al input correspondiente |

### 19.7 Error Handling

- **ErrorBoundary global:** captura errores de render y muestra pantalla amigable.
- **NotFound (404):** página dedicada para rutas inexistentes con enlace de retorno al inicio.
- Ambos implementados en `App.jsx` como wrappers del router.

### 19.8 CSS Architecture

| Principio | Detalle |
|---|---|
| **0 inline styles** | Todos los estilos en archivos CSS externos |
| **pages.css** | ~200+ clases reutilizables para páginas de contenido |
| **Separación** | tokens → base → componentes → páginas → responsive |
| **Design tokens** | Variables CSS (`--primary`, `--gradient-primary`, etc.) en `variables.css` |
| **Mobile-first** | `responsive.css` con media queries ascendentes |

### 19.9 Configuración Centralizada

El archivo `src/data/config.js` centraliza datos usados en múltiples componentes:

| Constante | Descripción |
|---|---|
| `MI_ISEP_URL` | URL del portal Mi ISeP |
| `GESTION_URL` | URL de SIGEDI |
| `CADETES_URL` | URL de Gestión Cadetes |
| `WEBMAIL_URL` | URL del correo institucional |
| `TELEFONO_ISR` / `TELEFONO_LIMPIO` | Números de teléfono institucionales |
| `EMAIL_CONTACTO` / `EMAIL_PRENSA` / `EMAIL_TITULOS` | Direcciones de correo electrónico |
| `WHATSAPP_URL` | Enlace de WhatsApp |
| `REDES_SOCIALES` | URLs de redes sociales (Facebook, YouTube, Instagram, TikTok) |
| `GA_ID` | ID de Google Analytics (placeholder actualmente) |
| `CONTACT_EMAIL` | Email de contacto general |
| `PHONE` | Teléfono principal |

### 19.10 API Service Layer

`src/services/api.js`: capa de abstracción mock→backend-ready. Actualmente usa datos mock, preparada para conectar a API real sin cambiar componentes.

---

## 20. Imágenes del sitio (edición paso a paso)

Todas las imágenes del sitio se organizan en carpetas dentro de `public/img/`.

### 20.1 Estructura de carpetas

```
public/img/
├── hero/              ← Imágenes del slider principal (3 slides)
├── noticias/          ← Imágenes de noticias
├── testimonios/       ← Fotos de egresados (avatares)
├── banners/           ← Banners de páginas
└── galeria/           ← Fotos de la galería
```

### 20.2 Mapa de imágenes por sección

| Sección del sitio | Carpeta | Archivo esperado | Estado actual |
|---|---|---|---|
| **Hero Slider — Slide 1** | `hero/` | `slide-formacion.jpg` | Placeholder (picsum) |
| **Hero Slider — Slide 2** | `hero/` | `slide-escuelas.jpg` | Placeholder (picsum) |
| **Hero Slider — Slide 3** | `hero/` | `slide-oferta.jpg` | Placeholder (picsum) |
| **Banner página Noticias** | `banners/` | `hero-noticias.jpg` | Placeholder (picsum) |
| **Testimonio 1** | `testimonios/` | `egresado-1.jpg` | Placeholder (picsum) |
| **Testimonio 2** | `testimonios/` | `egresado-2.jpg` | Placeholder (picsum) |
| **Testimonio 3** | `testimonios/` | `egresado-3.jpg` | Placeholder (picsum) |

### 20.3 Formato recomendado

| Tipo de imagen | Dimensiones | Formato | Tamaño máximo |
|---|---|---|---|
| Hero slider | 1600 × 700 px | JPG | < 300 KB |
| Banners | 1600 × 600 px | JPG | < 250 KB |
| Testimonios (avatars) | 120 × 120 px (cuadrada) | JPG | < 50 KB |
| Noticias | 900 × 500 px | JPG o PNG | < 200 KB |

### 20.4 Cómo cambiar una imagen (paso a paso)

1. **Prepará la imagen** con las dimensiones recomendadas
2. **Guardála** en la carpeta correspondiente: `public/img/hero/slide-formacion.jpg`
3. **Abrí el archivo** que usa esa imagen (ej: `src/components/Hero.jsx`)
4. **Reemplazá la URL** de picsum por la ruta local: `src="/img/hero/slide-formacion.jpg"`
5. **Guardá** y verificá

### 20.5 Referencia rápida

| Si querés cambiar... | Abrí este archivo | Reemplazá esta línea |
|---|---|---|
| Slide 1 del hero | `src/components/Hero.jsx:18` | `src="https://picsum.photos/seed/isep-formacion/1600/700"` |
| Slide 2 del hero | `src/components/Hero.jsx:26` | `src="https://picsum.photos/seed/isep-escuelas/1600/700"` |
| Slide 3 del hero | `src/components/Hero.jsx:34` | `src="https://picsum.photos/seed/isep-oferta/1600/700"` |
| Banner de Noticias | `src/pages/Noticias.jsx:63` | `src="https://picsum.photos/seed/isephero/1600/600"` |
| Foto del egresado 1 | `src/components/Testimonios.jsx:13` | `src="https://picsum.photos/seed/eg1/120/120"` |
| Foto del egresado 2 | `src/components/Testimonios.jsx:20` | `src="https://picsum.photos/seed/eg2/120/120"` |
| Foto del egresado 3 | `src/components/Testimonios.jsx:27` | `src="https://picsum.photos/seed/eg3/120/120"` |
| Agregar imagen a noticia | `src/data/noticias.js` | Cambiar `img: null` por `img: "/img/noticias/tu-archivo.jpg"` |

---

## 21. Workflow: agregar un slide al Hero

### Paso 1 — Imagen

| Tipo | Ruta | Formato recomendado |
|---|---|---|
| Imagen del slide | `public/img/hero/` o URL externa | 1600×700px, JPG/WebP |

Para imagen local: `public/img/hero/mi-slide.jpg` → se usa `/img/hero/mi-slide.jpg`

### Paso 2 — Agregar en `src/components/Hero.jsx` (array `SLIDES`)

```js
{
  id: 4,  // siguiente incremental
  badge: "Nuevo Curso",
  title: "Capacitación en ",
  highlight: "Seguridad Vial",
  description: "Curso intensivo para personal policial en actividad.",
  img: "/img/hero/mi-slide.jpg",  // o picsum: "https://picsum.photos/seed/mi-slide/1600/700"
}
```

### Campos

| Campo | Uso | Ejemplo |
|---|---|---|
| `badge` | Etiqueta small sobre el título | `"Excelencia Académica"` |
| `title` | Texto antes del span (parte normal) | `"Formación en "` |
| `highlight` | Texto dentro del `<span>` (color primario) | `"Seguridad Pública"` |
| `description` | Párrafo debajo del título | `"Curso intensivo..."` |
| `img` | Imagen de fondo (1600×700) | `"/img/hero/slide.jpg"` |

### Paso 3 — Build

```
npx vite build
```

El slide se agrega automáticamente al slider (rotación cada 6s, pausa al hover, flechas + dots de navegación).

---

## 22. Cómo editar el contenido del sitio (paso a paso)

Todo lo que se ve en la web (textos, números, imágenes, enlaces, fechas) se guarda en archivos de texto dentro de la carpeta `src/`. **No hace falta saber programar**: solo hay que saber *qué archivo* editar, *qué línea* cambiar y guardar. Esta sección es la referencia completa: cada sección del sitio = un archivo = pasos concretos.

### 22.1 Reglas generales (leer primero)

**Rutina en 5 pasos:**

1. Abrí el proyecto en **VS Code** (Archivo → Abrir carpeta → `Isep_2060_vblue`).
2. Abrí el archivo que corresponde a la sección que querés cambiar (ver tabla en 22.2).
3. Hacé el cambio imitando el formato de los ejemplos.
4. Guardá (**Ctrl+S**). Si `npm run dev` está corriendo, el navegador se actualiza solo.
5. Verificá en el navegador y, si quedó bien, publicá (ver 22.22).

**Formato (importante para no romper la web):**

- Los textos van entre comillas `"..."`.
- Cada ítem de datos es un bloque `{ ... }`; los campos se separan con comas.
- Cuando agregás un ítem nuevo, el ítem anterior debe terminar con coma (`},`).
- Nunca borres la línea de cierre `];` ni el texto que no estás tocando.
- Los acentos y la ñ funcionan normalmente.
- Si un archivo quedó "roto" (color rojo en VS Code), apretá **Ctrl+Z** para deshacer.

### 22.2 Referencia rápida: archivo → sección del sitio

| Archivo | Secciones del sitio que alimenta |
|---|---|
| `src/data/config.js` | Teléfonos, emails, URLs (Mi ISeP, SIGEDI…), WhatsApp, redes, Google Analytics |
| `src/data/institucional.js` | Escuelas, carreras, cursos, convocatorias, cronograma de ingreso, preguntas frecuentes |
| `src/data/noticias.js` | Noticias (Home y `/noticias`) |
| `src/data/normativa.js` | Resoluciones (`/institucional/resoluciones`) |
| `src/data/buscador.js` | Entradas "a mano" del buscador global |
| `src/components/Hero.jsx` | Slider de la portada |
| `src/components/Audiencia.jsx` | "¿Qué estás buscando? / Elegí tu camino" (Home) |
| `src/components/Tramites.jsx` | "Trámites y Sistemas" (Home) |
| `src/components/CTA.jsx` | Banner "Inscripciones Abiertas" + fecha de cierre (Home) |
| `src/components/Contadores.jsx` | Los 4 números grandes del Home |
| `src/components/Testimonios.jsx` | Carrusel de testimonios (Home) |
| `src/pages/Noticias.jsx` | Título/banner de la página `/noticias` |
| `src/pages/Secretaria/Biblioteca.jsx` | Biblioteca virtual (`/secretaria/biblioteca`) |
| `src/pages/Institucional/Galeria.jsx` | Galería de fotos (`/institucional/galeria`) |
| `src/components/Footer.jsx` | Accesos del pie de página |

### 22.3 Noticias

La guía paso a paso completa para publicar, editar y borrar noticias está en la §18 de este documento. Resumen: los datos viven en `src/data/noticias.js` (campos: `id`, `titulo`, `categoria`, `fecha`, `fechaCorta`, `excerpt`, `img`, `escuelas` opcional, `adjuntos`, `contenido`).

### 22.4 Hero (slider de la portada)

El paso a paso para cambiar o agregar slides está en §21 de este documento. Resumen: editá el array `SLIDES` de `src/components/Hero.jsx` (campos: `id`, `badge`, `title`, `highlight`, `description`, `img`).

### 22.5 Sección "Elegí tu camino" (por audiencia)

- **Archivo:** `src/components/Audiencia.jsx` (constante `audiencias`).
- **Dónde aparece:** Home, segunda sección (inmediatamente después del Hero).

Pasos:

1. Abrí `src/components/Audiencia.jsx`.
2. Buscá `const audiencias = [`.
3. Para **agregar una tarjeta**: copiá un bloque completo existente (desde `{` hasta `},`), pegalo antes del cierre `];` y cambiá cada campo.
4. Para **editar un texto**: cambiá el valor entre comillas de cualquier campo (`titulo`, `descripcion`, `label`…).
5. Para **quitar una tarjeta**: borrá su bloque completo (desde `{` hasta `},`). No borres la coma del anterior.
6. Guardá y verificá.

Campos por tarjeta:

| Campo | Qué es | Ejemplo |
|---|---|---|
| `key` | identificador interno (único) | `"ingresar"` |
| `titulo` | título de la tarjeta | `"Quiero ingresar"` |
| `descripcion` | texto debajo del título | `"¿Querés ser parte de la Policía…?"` |
| `icon` | ícono de la cabecera | `"login"` |
| `className` | color de la tarjeta (no tocar) | `"audiencia-card--primary"` |
| `links` | lista de accesos: `label`, `icon`, `to` (ruta interna) y `external: true` si es URL externa | `{ label: "Requisitos de ingreso", icon: "checklist", to: "/ingreso/requisitos" }` |
| `cta` | botón inferior: `label`, `to`, `external` | `{ label: "Empezar mi ingreso", to: "/ingreso", external: false }` |

Los íconos son nombres del set **Material Symbols** (`login`, `badge`, `groups`, `how_to_reg`, `checklist`, `event_note`, `help`, `newspaper`, `school`, `library_books`, `photo_library`).

### 22.6 Trámites y Sistemas

- **Archivo:** `src/components/Tramites.jsx` (constante `tramites`).
- **Dónde aparece:** Home (sección "Trámites y Sistemas").

Pasos:

1. Abrí `src/components/Tramites.jsx`.
2. Buscá `const tramites = [`.
3. Editá los campos de cada tarjeta: `name`, `icon`, `paraQuien`, `queHace`. El campo `url` usa una constante de `src/data/config.js` (ver 22.20) para que los enlaces estén centralizados.
4. Para **agregar un sistema nuevo**: copiá un bloque existente, pegalo antes de `];` y definí su URL. Si el sistema tiene URL propia, agregá la constante en `config.js` y usala acá.
5. Guardá y verificá.

### 22.7 Banner "Inscripciones Abiertas" + fecha de cierre (CTA)

- **Archivo:** `src/components/CTA.jsx`.
- **Dónde aparece:** Home, sección con countdown y botones de inscripción.

Pasos:

1. Abrí `src/components/CTA.jsx`.
2. Para **cambiar la fecha límite** del countdown: editá la línea `const FECHA_CIERRE = "2027-09-30T23:59:59";` con el nuevo año, mes, día y hora **en el formato `AAAA-MM-DDTHH:MM:SS`** (ej: `"2028-03-15T18:00:00"`).
3. Para **cambiar el título**: editá la línea `<h2 className="cta-title">Inscripciones Abiertas 2027</h2>`.
4. Guardá y verificá (el countdown y los botones se actualizan solos).

### 22.8 Nuestras Escuelas + páginas de escuela

- **Archivo:** `src/data/institucional.js` (array `escuelas`).
- **Dónde aparece:** Home ("Nuestras Escuelas") y cada página `/escuelas/{id}`.

Pasos:

1. Abrí `src/data/institucional.js`.
2. Buscá `export const escuelas = [`.
3. Editá los campos de cada escuela: `id` (no cambiar, se usa en las rutas), `nombre`, `resumen`, `presentacion`, y dentro de `informacion`: `categoria`, `duracion`, `modalidad`, `sede`, `contacto`.
4. Para **agregar una escuela nueva**: copiá un bloque y pegálo antes de `];`. Para el `logo` usá un escudo existente o importá una imagen nueva (ver 22.21).
5. Guardá y verificá. La escuela nueva aparece sola en el Home, en `/institucional/oferta-educativa`, en el buscador y en `/escuelas/{nuevo-id}`.

### 22.9 Carreras

- **Archivo:** `src/data/institucional.js` (array `carreras`).
- **Dónde aparece:** `/institucional/carreras` y tarjeta en el Home/escuela.

Pasos:

1. Abrí `src/data/institucional.js` y buscá `export const carreras = [`.
2. Editá los campos: `id` (incremental, no repetir), `nombre`, `escuela` (un `id` de escuelas: `policia`, `superior`, `especialidades`, `investigaciones`, `ead`), `descripcion`, `duracion`, `modalidad`, `inscripciones` (`"abiertas"` o `"proximamente"`), `fechaInscripcion`, `requisitos` (lista entre corchetes, un texto por línea), `documentos`.
3. Guardá y verificá en `/institucional/carreras` y en el buscador (se indexa sola).

### 22.10 Cursos

- **Archivo:** `src/data/institucional.js` (array `cursos`).
- **Dónde aparece:** `/secretaria/cursos`.

Pasos:

1. Abrí `src/data/institucional.js` y buscá `export const cursos = [`.
2. Editá los campos: `id`, `nombre`, `tipo`, `informacion`, `periodo`, `estado` (`"actual"`, `"proximo"` o `"finalizado"`), `escuela`.
3. Guardá y verificá.

### 22.11 Contadores (números del Home)

- **Archivo:** `src/components/Contadores.jsx` (constante `STATS`).
- **Dónde aparece:** Home, sección de los 4 números grandes.

Pasos:

1. Abrí `src/components/Contadores.jsx`.
2. Buscá `const STATS = [`.
3. Editá, por cada contador, `label` (texto), `value` (número), `suffix` (`"+"` u otro sufijo, o `""`), `icon` y `color`. No repitas `icon` ni `color` si querés diferenciarlos.
4. Para **agregar un contador**: copiá un bloque, pegálo antes de `];` con `value` numérico.
5. Guardá y verificá (la animación de conteo se adapta sola al número).

### 22.12 Testimonios

- **Archivo:** `src/components/Testimonios.jsx` (constante `TESTIMONIOS`).
- **Dónde aparece:** Home, carrusel de testimonios.

Pasos:

1. Abrí `src/components/Testimonios.jsx`.
2. Buscá `const TESTIMONIOS = [`.
3. Editá los campos de cada testimonio: `id`, `nombre`, `promocion`, `texto` (y `img` si querés foto del egresado, ver 22.21).
4. Para **agregar uno**: copiá un bloque, pegálo antes de `];`.
5. Guardá y verificá.

### 22.13 Convocatorias

- **Archivo:** `src/data/institucional.js` (array `convocatorias`).
- **Dónde aparece:** `/ingreso`, `/ingreso/convocatorias`, `/ingreso/proximas-convocatorias` y en la tarjeta de ingreso del Home.

Pasos:

1. Abrí `src/data/institucional.js` y buscá `export const convocatorias = [`.
2. Editá los campos: `id`, `nombre`, `estado` (`"vigente"` o `"proxima"`), `tipo`, `descripcion`, `fecha`, `escuela`.
3. Estado: las **vigentes** aparecen como convocatorias activas; las **próximas** se listan como próximas.
4. Guardá y verificá. El buscador y las páginas de ingreso se actualizan solos.

### 22.14 Cronograma del proceso de ingreso

- **Archivo:** `src/data/institucional.js` (array `cronograma`).
- **Dónde aparece:** la landing `/ingreso` (timeline del ciclo).

Pasos:

1. Abrí `src/data/institucional.js` y buscá `export const cronograma = [`.
2. Editá los campos de cada etapa: `id`, `etapa` (título de la etapa), `detalle` (explicación), `fecha`, `estado` (`"en-curso"` o `"proximo"`).
3. Estado: las etapas `en-curso` se muestran como "En curso" (marca resaltada) y las `proximo` como próximas.
4. Guardá y verificá en `/ingreso`.

### 22.15 Preguntas frecuentes

- **Archivo:** `src/data/institucional.js` (array `preguntasFrecuentes`).
- **Dónde aparece:** `/ingreso` (FAQ destacada) y `/ingreso/faq`.

Pasos:

1. Abrí `src/data/institucional.js` y buscá `preguntasFrecuentes`.
2. Editá cada pregunta/respuesta (y `categoria` si hay filtro). Para agregar, copiá un bloque antes de `];`.
3. Guardá y verificá.

### 22.16 Resoluciones (Normativa)

- **Archivo:** `src/data/normativa.js` (array `resoluciones`).
- **Dónde aparece:** `/institucional/resoluciones`.

Pasos:

1. Abrí `src/data/normativa.js` y buscá `export const resoluciones = [`.
2. Editá los campos de cada resolución (ej: `numero`, `titulo`, `tipo`, `anio`, `fecha`, `archivo`/URL del PDF).
3. Guardá y verificá. Se indexa sola en el buscador (17 resoluciones).

### 22.17 Biblioteca virtual

- **Archivo:** `src/pages/Secretaria/Biblioteca.jsx` (constante `ARTICULOS`, categorías en `CATEGORIAS`).
- **Dónde aparece:** `/secretaria/biblioteca`.

Pasos:

1. Abrí `src/pages/Secretaria/Biblioteca.jsx`.
2. Buscá `const ARTICULOS = [`.
3. Editá los campos de cada artículo (título, autor, categoría, descripción, URL/PDF). En `const BASE` está la URL base de la biblioteca del sitio oficial.
4. Para **agregar una categoría nueva**: usala en un artículo y **regenerá** la lista de categorías editando `const CATEGORIAS = [...]` (o dejá que se arme sola con `...new Set(...)` si está así configurado).
5. Guardá y verificá.

### 22.18 Galería de fotos

- **Archivo:** `src/pages/Institucional/Galeria.jsx` (lista de fotos, p. ej. `FOTOS`).
- **Dónde aparece:** `/institucional/galeria`.

Pasos:

1. Abrí `src/pages/Institucional/Galeria.jsx`.
2. Buscá la lista de fotos (constante con las imágenes).
3. Editá/agregá/quitá elementos con la **ruta de imagen** y el **texto alternativo/título**. Ejemplo de entrada: `{ src: "/img/galeria/foto1.jpg", alt: "Formación de cadetes" }`.
4. Colocá el archivo de imagen en `public/img/galeria/` (ver §20).
5. Guardá y verificá.

### 22.19 Buscador global (entradas a mano)

- **Archivo:** `src/data/buscador.js`.
- **Dónde aparece:** buscador de la barra superior.

El índice se construye **solo**: escuelas, carreras, cursos, convocatorias, noticias y resoluciones salen automáticamente desde sus datos (61 entradas en total). Solo hay que editar a mano la sección de **páginas** (11 entradas con `id: "…"` en texto).

Pasos:

1. Abrí `src/data/buscador.js`.
2. Buscá la sección de las entradas con `id: "inst-…"`, `id: "sec-…"`, etc.
3. Para **agregar el buscado a una página**: copiá una entrada y cambiá `id`, `title`, `subtitle`, `categoria`, `tipo`, `ruta` y `keywords` (palabras con las que aparecerá al buscar).
4. Guardá y verificá escribiendo en el buscador.

### 22.20 Configuración general (teléfonos, emails, URLs, redes, Analytics)

- **Archivo:** `src/data/config.js`.
- **Dónde aparece:** pie de página, contacto, accesos de sistemas, WhatsApp, redes, Analytics de todo el sitio.

Pasos:

1. Abrí `src/data/config.js`. Cada constante tiene su comentario explicando qué cambiar.
2. Constantes principales:

| Constante | Qué cambia |
|---|---|
| `TELEFONO_ISR` | teléfono que se muestra en el sitio |
| `TELEFONO_LIMPIO` | teléfono sin espacios ni guiones (se usa para WhatsApp) |
| `EMAIL_CONTACTO` | email de contacto general |
| `EMAIL_PRENSA` | email de prensa |
| `EMAIL_TITULOS` | email de títulos y certificaciones |
| `MI_ISEP_URL` | URL de "Mi ISeP" |
| `GESTION_URL` | URL de SIGEDI |
| `CADETES_URL` | URL de Gestión Cadetes |
| `WEBMAIL_URL` | URL del Webmail |
| `WHATSAPP_URL` | se arma sola con `TELEFONO_LIMPIO` (no tocar salvo excepción) |
| `REDES_SOCIALES` | URLs de Facebook, YouTube, Instagram y TikTok |
| `GA_ID` | ID de Google Analytics 4 (reemplazar el placeholder `G-XXXXXXXXXX`) |

3. **Importante:** si cambiás un teléfono, también actualizá `TELEFONO_LIMPIO` (sin espacios/guiones) para que el WhatsApp siga funcionando.
4. Guardá y verificá (los cambios aplican en todo el sitio).

### 22.21 Imágenes

Todo el manejo de imágenes (carpetas, formato recomendado y cómo reemplazar una) está en **§20**. No olvides: las imágenes del sitio viven en `public/img/…` y se referencian con ruta `/img/…`.

### 22.22 Verificación final y publicación

1. **Revisá en el navegador** cada sección que tocaste (`npm run dev`).
2. **Corré los chequeos** en la terminal (carpeta `Isep_2060_vblue`):
   - Lint: `npm run lint`
   - Tests: `npm test`
   - Build: `npm run build`
3. Si todo da **OK**, subí los cambios a GitHub:
   - `git add -A`
   - `git commit -m "descripción del cambio"`
   - `git push`
4. Esperá a que la **CI** (GitHub Actions) termine en verde. El sitio se actualiza automáticamente.

> Si te traba un archivo y no sabés qué pasó, guardá una copia antes de tocar (`Ctrl+A`, copiar, pegar en un `.txt` aparte) y ante dudas deshacé con **Ctrl+Z**.
