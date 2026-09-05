# Especificaciones Funcionales — Sitio Web ISeP Santa Fe

**Proyecto:** `Isep_2060_vblue`
**Versión:** 0.0.0
**Última actualización:** Septiembre 2026 (actualización de documentación)

---

## 1. Visión general

Sitio web institucional del **Instituto de Seguridad Pública (ISeP) de la Provincia de Santa Fe**.
SPA construida con React 19 + Vite 8 + React Router 7. 100% responsive (móvil, tablet, desktop). Lazy loading por ruta para tiempos de carga optimizados.

---

## 2. Audiencias

| Audiencia | Necesidad principal | Contenido relevante |
|---|---|---|
| **Postulantes** | Conocer requisitos, convocatorias, proceso y FAQ | Ingreso (5 páginas) + Landing Convocatorias con contenido real |
| **Personal en actividad** | Trámites, correo, sistemas internos | Mi ISeP, SIGEDI, Gestión Cadetes, Webmail |
| **Público general** | Información institucional y actualidad | Institucional, Noticias (con detalle), Biblioteca |
| **Profesionales de la educación** | Oferta académica y cursos | Formación, Carreras, Cursos |

---

## 3. Mapa de navegación

```
┌───────────────────────────────────────────────────────────────┐
│  NAVBAR (escudo ISeP + brand + links + buscador + Mi ISeP)   │
├──────────┬───────────────────┬──────────────┬────────────────┤
│INSTITUC. │    FORMACIÓN       │   INGRESO    │ ÚLTIMAS NOTICIAS│
├──────────┼───────────────────┼──────────────┼────────────────┤
│ El ISeP  │ Oferta Académica  │Convocatorias │                │
│ Autori-  │ Escuelas ▾        │ vigentes     │                │
│ dades    │  · Policía        │Próximas      │                │
│ Organi-  │  · Especialidades │ convocatorias│                │
│ zación   │  · Superior       │Requisitos    │                │
│ Normativa│  · Investigaciones│Proceso de    │                │
│ y Resol. │  · Ed. a Distancia│ ingreso      │                │
│ Sedes y  │ Títulos y         │Preguntas     │                │
│ Contacto │ Certificaciones   │ frecuentes   │                │
│          │ Biblioteca Virtual│              │                │
└──────────┴───────────────────┴──────────────┴────────────────┘
```

### 3.1 Estructura de la barra de navegación

- **Institucional** → dropdown con ícono "account_balance": El ISeP, Autoridades, Organización, Normativa y Resoluciones, Sedes y Contacto.
- **Formación** → dropdown con ícono "school": Oferta Académica, **Escuelas** (submenú de 5 con escudos), Títulos y Certificaciones, Biblioteca Virtual.
- **Ingreso** → dropdown con ícono "login": Convocatorias vigentes, Próximas convocatorias, Requisitos, Proceso de ingreso, Preguntas frecuentes.
- **Últimas noticias** → link directo a `/noticias` con ícono "newspaper".
- **Mi ISeP** → botón siempre visible (desktop y móvil) con ícono "person".
- **Buscador** → ícono de lupa que abre `SearchBox` con resultados agrupados.

### 3.2 Rutas existentes

| Ruta | Página | Estado |
|---|---|---|
| `/` | Home (7 secciones) | Implementada |
| `/noticias` | Listado de noticias con filtro, paginación y detalle | Implementada |
| `/noticias/:id` | Detalle de noticia individual (contenido, relacionadas) | Implementada |
| `/institucional/el-isep` | El ISeP | Implementada |
| `/institucional/autoridades` | Autoridades | Implementada |
| `/institucional/organizacion` | Organización | Placeholder |
| `/institucional/resoluciones` | Normativa y Resoluciones (17 documentos descargables) | Implementada |
| `/institucional/sedes-contacto` | Sedes y Contacto (Google Maps embebido) | Implementada |
| `/institucional/oferta-educativa` | Oferta Académica (dinámica: Carreras/Cursos/Convocatorias) | Implementada |
| `/institucional/carreras` | Carreras (grid hits con estado inscripción) | Implementada |
| `/escuelas/policia` | Escuela de Policía (datos oficiales) | Implementada |
| `/escuelas/superior` | Escuela Superior (datos oficiales) | Implementada |
| `/escuelas/especialidades` | Escuela de Especialidades (datos oficiales) | Implementada |
| `/escuelas/investigaciones` | Escuela de Investigaciones (datos oficiales) | Implementada |
| `/escuelas/educacion-a-distancia` | Educación a Distancia | Implementada |
| `/ingreso/convocatorias` | Landing Convocatorias (contenido real Esc. Policía 2027–2028) | Implementada |
| `/ingreso/proximas-convocatorias` | Próximas convocatorias | Implementada |
| `/ingreso/requisitos` | Requisitos | Implementada |
| `/ingreso/proceso` | Proceso de ingreso | Implementada |
| `/ingreso/faq` | Preguntas frecuentes (12 preguntas) | Implementada |
| `/secretaria/titulos` | Títulos y Certificaciones | Implementada |
| `/secretaria/biblioteca` | Biblioteca Virtual (22 recursos bibliográficos reales del ISeP) | Implementada |
| `/secretaria/cursos` | Cursos (dinámico con filtros) | Implementada |

---

## 4. Funcionalidades implementadas (Home)

La página de inicio (`/`) está compuesta por las siguientes secciones, en orden:

1. **Hero Slider** — Banner principal con slider automático (3 slides con imagen de picsum.photos), transiciones suaves, flechas de navegación y indicadores (dots).
2. **Aplicaciones Institucionales** — 4 accesos: Mi ISeP, SIGEDI, Gestión Cadetes, Webmail.
3. **Contadores** — Estadísticas animadas: Docentes (2200+), Cadetes activos (1100+), Personal formándose (800+), Aulas virtuales (500+).
4. **CTA Inscripciones** — Bloque con countdown configurable (fecha en `src/components/CTA.jsx`, variable `FECHA_CIERRE`) + botones.
5. **Últimas Noticias** — Noticia destacada + sidebar de noticias recientes con **links a contenido de ejemplo**.
6. **Nuestras Escuelas** — Cuadrícula de las 5 escuelas con escudos.
7. **Testimonios** — Carrusel de 3 testimonios de egresados con flechas y dots.

### 4.1 Hero Slider

- **Slides:** 3 slides con imagen, badge, título y descripción.
- **Automático:** cambia cada 6 segundos.
- **Pausa:** al pasar el cursor.
- **Navegación:** flechas + dots.
- **Transiciones:** fade suave (1s ease-in-out).
- **Altura:** `100svh`.

### 4.2 Sección Noticias del Home (`News.jsx`)

- Noticia destacada (tarjeta grande) con **link a `/noticias/:id`**.
- Sidebar de 3 mini-cards con **links a `/noticias/:id`**.
- **"Ver todas las noticias"** apunta a `/noticias`.
- Bloque de Calendario Académico (promo).
- Alimentado desde `src/data/noticias.js`.
- **Imágenes opcionales:** si un registro tiene `img: null`, se muestra un placeholder con ícono en lugar de la imagen. Esto permite publicar noticias sin foto alusiva.

### 4.3 Página de Noticias (`/noticias`)

- **Filtro por categorías:** Todas, Institucional, Académica, Escuelas, Eventos, Convenios.
- **Padding en filtros:** separados del borde con `padding: 0 2rem`.
- **Botón compartir:** cada noticia tiene `ShareButton` (Web Share API o clipboard).
- **Noticia principal:** última publicación con imagen, fecha, título y extracto → **link a `/noticias/:id`**.
- **Historial:** grid de tarjetas con **links a `/noticias/:id`** y paginación (10 por página).
- **Breadcrumb** para navegación.

### 4.4 Detalle de Noticia (`/noticias/:id`)

- **Hero de imagen** con overlay gradiente y badged de categoría.
- **Breadcrumb:** Inicio → Noticias → Título de la noticia.
- **Contenido completo:** excerpt destacado + cuerpo de texto de ejemplo.
- **ShareButton** para compartir.
- **Noticias relacionadas** (misma categoría, max 3).
- **Botón "Volver a noticias"**.
- **Estado 404:** si el ID no existe, muestra mensaje y enlace de retorno.

---

## 5. Formación

### 5.1 Oferta Académica (`/institucional/oferta-educativa`)

Vista dinámica con pestañas:

| Pestaña | Contenido |
|---|---|
| **Carreras** | Cards con nombre, descripción, escuela, duración, modalidad |
| **Cursos** | Cards con nombre, tipo, período + botón "Acceso a Mi ISeP" |
| **Convocatorias** | Cards con estado (Vigente/Próxima), escuela y fecha |

Las tarjetas de escuelas en Oferta Educativa muestran **imágenes de escudos** (no cajas de color con abreviaciones).

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

> **Nota:** Solo la Escuela de Policía incluye la sección "Carreras". Las demás escuelas (Superior, Especialidades, Investigaciones y EaD) no muestran esta sección.

---

## 6. Ingreso

### 6.1 Landing de Convocatorias (`/ingreso/convocatorias`)

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

### 6.2 Otras páginas de ingreso

| Página | Contenido |
|---|---|
| **Próximas convocatorias** | Aperturas anunciadas |
| **Requisitos** | 10 requisitos reales del sitio + documentación + formularios obligatorios |
| **Proceso de ingreso** | Pasos detallados |
| **Preguntas frecuentes** | 12 preguntas en acordeón |

---

## 7. Búsqueda global

- **Ubicación:** ícono de lupa en el navbar, al lado de "Mi ISeP".
- **Índice:** 48 entradas (5 escuelas + 4 carreras + 6 cursos + 3 convocatorias + 11 noticias + 17 normativa + 10 páginas + 6 Misceláneas).
- **Resultados agrupados por tipo:** Escuelas → Carreras → Cursos → Convocatorias → Noticias → Normativa → Páginas → Misceláneas.
- **Navegación por teclado:** ↑↓, Enter, Escape.
- **Contador de resultados** y hints de teclado.
- **Enter** en el campo abre el primer resultado.

---

## 8. Normativa y Resoluciones (`/institucional/resoluciones`)

- **17 documentos** oficiales descargables
- **Filtros por año** (Todos, 2026, 2025, 2024, 2023, 2022)
- **Filtros por tipo** (Resolución, Convenio, Plan Estratégico, Estatuto)
- Chips coloreados por tipo, botón Descargar, Breadcrumb

---

## 9. Biblioteca Virtual (`/secretaria/biblioteca`)

- **22 artículos reales del ISeP** con categorías: Normativa, Protocolos, Formación, Institucional
- Chips coloreados por tipo
- Botón de descarga por recurso (enlaces directos a PDFs de isepsantafe.edu.ar)

---

## 9.1 Títulos y Certificaciones (`/secretaria/titulos`)

- **Consulta de Certificados** — Formulario de búsqueda por DNI con feedback visual
- **Títulos y Registros** — Proceso de 3 pasos (verificar título, escanear documentos, formulario online)
- **Links externos:** santafe.gov.ar (verificar título), Google Forms (formulario de solicitud)
- **Títulos para retirar** — 2 links de descarga (formato nuevo y anterior) de Google Drive
- **Contacto:** Sección Títulos y Registros, tel 0341-4728526, correo titulosisep@isepsantafe.edu.ar
- **Sedes:** Rosario y Recreo con direcciones

---

## 10. Sedes y Contacto (`/institucional/sedes-contacto`)

2 sedes con **Google Maps embebido**:
- **D.Z.S – Rosario:** Leandro N. Alem 2050, tel 341-4728526
- **DZCN – Recreo:** RN11, km 482, tel 342-4815570
- Canales de contacto y redes sociales

---

## 11. Aplicaciones institucionales

Sección "Aplicaciones Institucionales" en el home (4 apps):

| App | URL | Destino |
|---|---|---|
| **Mi ISeP** | `https://mi.isepsantafe.edu.ar/` | Portal personal |
| **SIGEDI** | `https://gestion.isepsantafe.edu.ar` | Gestión Educativa |
| **Gestión Cadetes** | `https://cadetes.isepsantafe.edu.ar/` | Control de asistencia |
| **Webmail** | `https://webmail.isepsantafe.edu.ar` | Correo institucional |

---

## 12. Accesos flotantes y redes

### 12.1 WhatsApp
- Botón flotante verde, siempre visible (z-index 60).
- Enlace a `wa.me/5493424579000` (tel: +54 342 457-9000).

### 12.2 ScrollToTop
- Botón flotante con SVG flecha (z-index 70).
- Visible tras 400px de scroll, `bottom: 5.5rem`.
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

---

## 17. Disponibilidad

- **Desarrollo:** `npm run dev` (localhost:5173)
- **Build:** `npm run build` → `npm run preview`
- **Lint:** `npm run lint`
- **Tests:** `npm run test`

### 17.1 Testing automatizado

Suite de tests con **Vitest** + **React Testing Library** + **jsdom**:
- 18 tests en 3 archivos, cubriendo la capa de datos (no los componentes UI)
- `datos.test.js`: valida estructura de noticias (IDs únicos, campos requeridos, categorías válidas, imágenes admisibles como `null`)
- `institucional.test.js`: valida estructura de escuelas, carreras, cursos y convocatorias
- `buscador.test.js`: valida funcionalidad de búsqueda y resultados agrupados
- Tests ejecutados automáticamente en CI (GitHub Actions) en cada push
- Ejecutar localmente con `npm run test`

### 17.2 CI/CD

GitHub Actions ejecuta en cada push:
- Lint → Build → Test
- Si cualquier paso falla, el push se bloquea

---

## 18. Publicación de noticias — Guía paso a paso

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

> **Campo `img`:** puede ser una URL de imagen (local o externa) o `null`. Si es `null`, se muestra un placeholder con ícono de material symbols en lugar de la imagen. Esto permite publicar noticias sin foto alusiva. Todos los componentes de noticias y escuelas manejan este caso.
> **Campo `contenido`:** soporta HTML (h2, h3, p, ul/ol, li, strong, a, img, blockquote, .btn-inscripcion, .info-box). Si el contenido empieza con `<`, se renderiza como HTML. Si no, se trata como texto plano con párrafos separados por `\n\n`.
> **Campo `adjuntos`:** lista de archivos para descargar (PDF, Excel, JPG, PNG, etc.). Colocar archivos en `public/docs/`.
> **Campo `escuelas`:** array con IDs de escuelas (`policia`, `superior`, `especialidades`, `investigaciones`, `ead`). Si se define, la noticia aparece en las páginas de esas escuelas. En `/noticias` se muestran todas las noticias sin importar este campo.

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
img: "https://picsum.photos/seed/mi-noticia/900/500",
```

**Opción D: Sin imagen (null)**
```javascript
img: null,
```
> Se muestra un placeholder con ícono de material symbols. Ideal para noticias sin foto alusiva.

**Especificaciones:** 900×500 px (ratio 16:9), JPG/PNG, máximo 200 KB.

#### Paso 2: Definir la categoría
Categorías disponibles:
| Categoría | Uso |
|---|---|
| `Institucional` | Noticias oficiales del ISeP, resoluciones, aperturas |
| `Academica` | Capacitaciones, conferencias, ciclos de estudio |
| `Escuelas` | Noticias de las 5 escuelas del ISeP |
| `Eventos` | Eventos deportivos, ceremonias, actos |
| `Convenios` | Convenios con otras instituciones |

#### Paso 3: Agregar archivos adjuntos (opcional)

Si la noticia tiene documentos para descargar (PDF, Excel, etc.):

1. Copiar los archivos a `public/docs/`
2. Agregar el campo `adjuntos` al objeto de la noticia:
   ```javascript
   adjuntos: [
     { nombre: "Nombre para mostrar.pdf", url: "/docs/archivo.pdf" },
   ],
   ```

#### Paso 4: Agregar el registro en `src/data/noticias.js`

Abrir el archivo `src/data/noticias.js` y agregar un nuevo objeto al array `noticias`:

```javascript
{
  id: 14,  // Siguiente ID disponible
  titulo: "Título descriptivo de la noticia",
  categoria: "Institucional",
  fecha: "4 DE SEPTIEMBRE, 2026",
  fechaCorta: "4 SEP",
  excerpt: "Extracto de 1 a 2 oraciones que resuma el contenido principal.",
  img: "/img/noticias/mi-imagen.jpg",
  adjuntos: [
    { nombre: "Documento.pdf", url: "/docs/documento.pdf" },
  ],
  contenido: `Primer párrafo del cuerpo de la noticia.

Segundo párrafo con más detalle.

Tercer párrafo con información adicional.`,
}
```

> **Importante:** el `id` debe ser único. Verificar el último ID existente antes de agregar. El campo `contenido` usa backticks y se separan párrafos con `\n\n`. Los `adjuntos` son opcionales.

#### Paso 5: Verificar el buscador

El archivo `src/data/buscador.js` importa directamente de `noticias.js`, por lo que la noticia aparecerá automáticamente en las búsquedas. No es necesario agregar nada manualmente.

#### Paso 6: Verificar el contenido

Al hacer clic en una card de noticia, se abre `/noticias/:id` con:
- Hero de imagen con overlay gradiente
- Badge de categoría y fecha
- Extracto destacado con borde izquierdo
- **Cuerpo de la noticia** (campo `contenido` si existe, o texto generado)
- **Documentos adjuntos** con botones de descarga (si existen `adjuntos`)
- Noticias relacionadas (misma categoría)
- Breadcrumb y botón de volver

#### Paso 7: Probar visualmente

1. Ejecutar `npm run dev`
2. Ir a la página de inicio → verificar que la noticia aparece en "Últimas Noticias"
3. Ir a `/noticias` → verificar que aparece en el listado y se puede filtrar por categoría
4. Hacer clic en la noticia → verificar que se abre el detalle con imagen, contenido y relacionadas
5. Verificar el botón de compartir (copia enlace al portapapeles)
7. Ejecutar `npm run build` y `npm run lint` para confirmar que no hay errores

### 18.3 Documentos adjuntos y links

Para agregar documentos adjuntos o links externos a una noticia:

1. **Subir el documento** al directorio `public/docs/` (o usar una URL externa).
2. **Agregar un campo `adjuntos`** al objeto de la noticia:
   ```javascript
   adjuntos: [
     { nombre: "Resolución 123/2026", url: "/docs/resolucion-123-2026.pdf" },
     { nombre: "Anexo", url: "https://externo.gov.ar/anexo.pdf" },
   ]
   ```
3. **Modificar `NoticiaDetalle.jsx`** para renderizar la sección de adjuntos:
   ```jsx
   {noticia.adjuntos && noticia.adjuntos.length > 0 && (
     <section style={{ marginTop: "2rem" }}>
       <h3>Documentos adjuntos</h3>
       {noticia.adjuntos.map((adj, i) => (
         <a key={i} href={adj.url} target="_blank" rel="noreferrer">
           📄 {adj.nombre}
         </a>
       ))}
     </section>
   )}
   ```

### 18.4 Resumen del flujo de publicación

| Paso | Archivo | Acción |
|---|---|---|
| 1 | Imagen | Preparar 900×500 px (JPG/PNG) |
| 2 | — | Definir categoría |
| 3 | `src/data/noticias.js` | Agregar objeto al array |
| 4 | `src/data/buscador.js` | Agregar entrada de búsqueda |
| 5 | `npm run dev` | Verificar visualmente |
| 6 | `npm run build` | Confirmar build limpio |

---

## 19. Infraestructura SEO y Analytics

### 19.1 JSON-LD (Structured Data)

Se implementan 3 tipos de structured data según la página:

| Tipo | Página | Contenido |
|---|---|---|
| `EducationalOrganization` | Home (`/`) | Datos del ISeP: nombre, dirección, redes sociales, logo |
| `NewsArticle` | Detalle de noticia (`/noticias/:id`) | Título, autor, fecha, imagen, excerpt |
| `BreadcrumbList` | Todas las páginas | Ruta de navegación jerárquica |

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

- Se actualizan dinámicamente con `useEffect` al cambiar de ruta.

### 19.3 Sitemap.xml

- **22 URLs** con frecuencias y prioridades.
- Incluye: Home, 5 escuelas, noticias, normativa, biblioteca, ingreso, institucional, secretaría.
- Frecuencia de actualización: `weekly` (home, noticias) / `monthly` (institucional, escuelas).
- Disponible en `/sitemap.xml`.

### 19.4 Google Analytics 4

- **Herramienta:** `gtag.js` (Google Analytics 4).
- **Carga:** asíncrona, no bloquea el render.
- **Modo:** solo producción (desactivado en `npm run dev`).
- **ID configurable:** en `src/components/Analytics.jsx` (variable `GA_ID`) y `src/utils/analytics.js`.
- **Estado actual:** el ID es un placeholder (`G-XXXXXXXXXX`). En modo desarrollo, el componente Analytics retorna `null` (no carga nada). En producción, gtag.js se carga pero con el ID placeholder no se recolectan datos reales.
- **Para activar Analytics:** reemplazar el ID placeholder con un Measurement ID real de GA4. Ver sección 19.4.1.

#### 19.4.1 Configuración de GA4 (cuando esté disponible)

Para activar el tracking de Analytics se deben seguir estos pasos:

1. **Obtener el Measurement ID:** crear una propiedad en Google Analytics 4 y copiar el ID (formato `G-XXXXXXXXXX`).
2. **Reemplazar el ID en dos archivos:**
   - `src/components/Analytics.jsx` → variable `GA_ID`
   - `src/utils/analytics.js` → variable `GA_ID`
3. **Activar page_view en cambios de ruta:** en `Analytics.jsx`, cuando `loadGA()` ejecuta `window.gtag`, enviar un evento `page_view` con la ruta actual:
   ```javascript
   gtag("event", "page_view", { page_path: window.location.pathname });
   ```
   Alternativamente, usar la función `trackPageView()` de `utils/analytics.js` en el componente `TrackPageView`.
4. **Configuración adicional:** asegurarse de que `send_page_view` no esté en `false` en la configuración de gtag.

### 19.5 PWA

- **`manifest.json`:** configuración de Progressive Web App (nombre, colores, iconos).
- **`robots.txt`:** permisos para crawlers (allow: `/`,Disallow: `/api/`).
- Permite instalar el sitio como app en móviles y escritorio.

### 19.6 Accesibilidad

| Característica | Descripción |
|---|---|
| `SkipToContent` | Enlace invisible al inicio que aparece con Tab, salta al contenido principal |
| `focus-visible` | Indicadores de foco visibles solo con navegación por teclado (no en clics) |
| `sr-only` | Contenido exclusivo para lectores de pantalla (ej: labels de botones) |
| `skeleton-pulse` | Placeholder animado mientras cargan datos (mejora percepción de rendimiento) |
| **Labels en formularios** | Campos de formulario con `<label htmlFor>` vinculados al input correspondiente. Ejemplo: formulario de DNI en Títulos, búsqueda de Resoluciones, búsqueda en Biblioteca |

### 19.7 Error Handling

- **ErrorBoundary global:** captura errores de render en cualquier componente y muestra una pantalla amigable en lugar de pantalla blanca.
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

---

## 19.9 Configuración Centralizada

El archivo `src/data/config.js` centraliza datos que se usan en múltiples componentes:

| Constante | Descripción |
|---|---|
| `TELEFONO_ISR` / `TELEFONO_LIMPIO` | Números de teléfono institucionales |
| `EMAIL_CONTACTO` / `EMAIL_PRENSA` / `EMAIL_TITULOS` | Direcciones de correo electrónico |
| `MI_ISEP_URL` / `GESTION_URL` / `CADETES_URL` / `WEBMAIL_URL` | URLs de sistemas institucionales |
| `WHATSAPP_URL` | Enlace de WhatsApp |
| `REDES_SOCIALES` | URLs de redes sociales (Facebook, YouTube, Instagram, TikTok) |
| `GA_ID` | ID de Google Analytics (placeholder actualmente) |

> **Nota:** el archivo fue creado pero aún no está integrado en todos los componentes. Cada constante tiene documentación JSDoc indicando qué es y cómo modificarla. Cuando se desee migrar, los componentes pueden importar estos valores en lugar de usar valores hardcodeados.
