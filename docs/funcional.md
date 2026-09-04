# Especificaciones Funcionales — Sitio Web ISeP Santa Fe

**Proyecto:** `Isep_2060_vblue`
**Versión:** 0.0.0
**Última actualización:** Septiembre 2026

---

## 1. Visión general

Sitio web institucional del **Instituto de Seguridad Pública (ISeP) de la Provincia de Santa Fe**.
SPA construida con React 19 + Vite 8 + React Router 7. 100% responsive (móvil, tablet, desktop).

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
| `/institucional/el-isep` | El ISeP | Placeholder |
| `/institucional/autoridades` | Autoridades | Placeholder |
| `/institucional/organizacion` | Organización | Placeholder |
| `/institucional/resoluciones` | Normativa y Resoluciones (11 documentos descargables) | Implementada |
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
| `/secretaria/titulos` | Títulos y Certificaciones | Placeholder |
| `/secretaria/biblioteca` | Biblioteca Virtual (12 recursos reales) | Implementada |
| `/secretaria/cursos` | Cursos (dinámico con filtros) | Implementada |

---

## 4. Funcionalidades implementadas (Home)

La página de inicio (`/`) está compuesta por las siguientes secciones, en orden:

1. **Hero Slider** — Banner principal con slider automático (3 slides Unsplash), transiciones suaves, flechas de navegación y indicadores (dots).
2. **Aplicaciones Institucionales** — 4 accesos: Mi ISeP, SIGEDI, Gestión Cadetes, Webmail.
3. **Contadores** — Estadísticas animadas: Docentes (2200+), Cadetes activos (1100+), Personal formándose (800+), Aulas virtuales (500+).
4. **CTA Inscripciones** — Bloque con countdown + botones.
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
- **Policía:** formación inicial Ley 12.333, email `escueladepolicia@isepsantafe.edu.ar`
- **Superior:** perfeccionamiento Dirección/Supervisión, email `divestudio-essp@santafe.gov.ar`
- **Especialidades:** perfeccionamiento Coordinación/Ejecución, email `escueladeespecialidades@isepsantafe.edu.ar`
- **Investigaciones:** análisis criminal e investigación, email `escueladeinvestigacion@isepsantafe.edu.ar`
- **EaD:** educación a distancia

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
| **Requisitos** | Condiciones y documentación |
| **Proceso de ingreso** | Pasos detallados |
| **Preguntas frecuentes** | 12 preguntas en acordeón |

---

## 7. Búsqueda global

- **Ubicación:** ícono de lupa en el navbar, al lado de "Mi ISeP".
- **Índice:** 58 entradas (5 escuelas + 4 carreras + 6 cursos + 3 convocatorias + 11 noticias + 11 normativa + 12 páginas + 6 Misceláneas).
- **Resultados agrupados por tipo:** Escuelas → Carreras → Cursos → Convocatorias → Noticias → Normativa → Páginas → Misceláneas.
- **Navegación por teclado:** ↑↓, Enter, Escape.
- **Contador de resultados** y hints de teclado.
- **Enter** en el campo abre el primer resultado.

---

## 8. Normativa y Resoluciones (`/institucional/resoluciones`)

- **11 documentos** oficiales descargables
- **Filtros por año** (Todos, 2025, 2024, 2023, 2022)
- **Filtros por tipo** (Resolución, Convenio, Plan Estratégico, Estatuto)
- Chips coloreados por tipo, botón Descargar, Breadcrumb

---

## 9. Biblioteca Virtual (`/secretaria/biblioteca`)

- **12 recursos bibliográficos** reales del ISeP
- Filtros por tipo: Manual, Publicación, Protocolo, Resolución
- Chips coloreados por tipo
- Botón de descarga por recurso

---

## 10. Sedes y Contacto (`/institucional/sedes-contacto`)

2 sedes con **Google Maps embebido**:
- **D.Z.S – Rosario:** Leandro N. Alem 2050
- **DZCN – Recreo:** RN11, km 482

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
- Enlace a `wa.me/5490000000000`.

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
- Fondo `#f8fafc`, borde `#eef2f7`
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
  img: "https://picsum.photos/seed/n1/900/500",  // URL de imagen alusiva
  contenido: "..."              // (opcional) contenido completo para detalle
}
```

### 18.2 Pasos para publicar una noticia nueva

#### Paso 1: Preparar la imagen alusiva
- **Dimensiones recomendadas:** 900×500 px (relación 16:9) para la imagen principal.
- **Formato:** JPG o PNG, peso máximo recomendado 200 KB.
- **Alternativa:** usar un servicio como `picsum.photos` con seed para imagen placeholder:
  ```
  https://picsum.photos/seed/mi-noticia/900/500
  ```

#### Paso 2: Definir la categoría
Categorías disponibles:
| Categoría | Uso |
|---|---|
| `Institucional` | Noticias oficiales del ISeP, resoluciones, aperturas |
| `Academica` | Capacitaciones, conferencias, ciclos de estudio |
| `Escuelas` | Noticias de las 5 escuelas del ISeP |
| `Eventos` | Eventos deportivos, ceremonias, actos |
| `Convenios` | Convenios con otras instituciones |

#### Paso 3: Agregar el registro en `src/data/noticias.js`

Abrir el archivo `src/data/noticias.js` y agregar un nuevo objeto al array `noticias`:

```javascript
{
  id: 12,  // Siguiente ID disponible (actualmente hay 11)
  titulo: "Título descriptivo de la noticia",
  categoria: "Institucional",
  fecha: "3 DE SEPTIEMBRE, 2026",
  fechaCorta: "3 SEP",
  excerpt: "Extracto de 1 a 2 oraciones que resuma el contenido principal de la noticia.",
  img: "https://picsum.photos/seed/n12/900/500",
}
```

> **Importante:** el `id` debe ser único. Verificar el último ID existente antes de agregar.

#### Paso 4: Verificar que aparezca en el buscador

El archivo `src/data/buscador.js` también debe actualizarse para que la noticia aparezca en las búsquedas:

```javascript
// En el array noticias de buscador.js, agregar:
{
  tipo: "Noticia",
  titulo: "Título descriptivo de la noticia",
  ruta: "/noticias/12",  // Usar el ID asignado
  keywords: "palabra1 palabra2 palabra3",
}
```

#### Paso 5: Verificar el contenido de ejemplo

Al hacer clic en "Leer nota completa" o en una card de noticia, se abre `/noticias/:id` con:
- Hero de imagen con overlay gradiente
- Badged de categoría y fecha
- Extracto destacado con borde izquierdo
- Cuerpo de texto de ejemplo (generado automáticamente)
- Noticias relacionadas (misma categoría)
- Breadcrumb y botón de volver

> **Nota:** el contenido del cuerpo se genera automáticamente a partir del título y extracto. Para contenido personalizado, se puede agregar un campo `contenido` al objeto de la noticia y modificar `NoticiaDetalle.jsx` para usarlo.

#### Paso 6: Probar visualmente

1. Ejecutar `npm run dev`
2. Ir a la página de inicio → verificar que la noticia aparece en "Últimas Noticias"
3. Ir a `/noticias` → verificar que aparece en el listado y se puede filtrar por categoría
4. Hacer clic en la noticia → verificar que se abre el detalle con imagen, contenido y relacionadas
5. Verificar el botón de compartir (copia enlace al portapapeles)
6. Ejecutar `npm run build` y `npm run lint` para confirmar que no hay errores

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
