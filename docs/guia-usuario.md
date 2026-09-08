# Guía de Usuario — Sitio Web ISeP Santa Fe

**Proyecto:** `Isep_2060_vblue`
**Versión:** 1.0.0
**Última actualización:** 7 de septiembre de 2026

---

## 1. Cómo navegar por el sitio

La barra de navegación superior (fija al hacer scroll) organiza todo en menús desplegables + enlaces directos:

| Menú | Qué contiene |
|---|---|
| **Institucional** | El ISeP, Autoridades, Organización, Oferta Educativa, Resoluciones, Sedes y Contacto, Galería de Fotos |
| **Formación** | Escuelas (5 con escudos), Cursos de Capacitación |
| **Ingreso** | Inicio de Ingreso (landing), Proceso de Selección, Requisitos, Próximas Convocatorias, FAQ |
| **Secretaría** | Títulos y Certificaciones, Biblioteca Virtual, Cursos |
| **Noticias** | Acceso directo al listado de noticias |
| **Mi ISeP** | Botón siempre visible, enlace externo a `mi.isepsantafe.edu.ar` |
| **Buscador** | Ícono de lupa, resultados agrupados |

**En escritorio:** pasá el cursor sobre un menú para desplegarlo. Dentro de *Formación → Escuelas* hay submenú con escudos.

**En celular/tablet:** tocá ☰ (hamburguesa, a la izquierda) para abrir el menú completo. Logo al centro, Mi ISeP y buscador a la derecha.

### 1.1 Íconos en la navegación

| Sección | Ícono |
|---|---|
| Institucional | account_balance |
| Formación | school |
| Ingreso | login |
| Noticias | newspaper |

### 1.2 Buscador global

Al lado del botón "Mi ISeP" hay un **ícono de lupa**. Al hacer clic se abre un campo con resultados **agrupados por tipo**:

| Grupo | Qué incluye |
|---|---|
| **Escuelas** | Las 5 escuelas del ISeP |
| **Carreras** | Todas las carreras disponibles |
| **Cursos** | Cursos activos y próximos |
| **Convocatorias** | Inscripciones abiertas y próximas |
| **Noticias** | 15 noticias institucionales |
| **Normativa** | 17 resoluciones, convenios, estatutos |
| **Páginas** | Accesos directos a secciones |

**Atajos de teclado:**
- ↑↓ para navegar
- **Enter** para seleccionar
- **Esc** para cerrar

---

## 2. Volver al inicio

El logo **"ISeP Santa Fe"** (arriba a la izquierda) es un enlace que te devuelve a `/`.

---

## 3. Acceso rápido (Mi ISeP)

El botón **"Mi ISeP"** siempre visible en la barra superior. Lleva a `mi.isepsantafe.edu.ar` en pestaña nueva.

---

## 4. Hero (página de inicio)

**Slider automático** con 3 slides:
1. "Formación Profesional para la Seguridad Pública"
2. "Formando líderes en Seguridad Pública"
3. "Carreras y cursos de alto nivel"

- Cambio cada 6 segundos, pausa al hover
- Flechas + dots para navegación manual
- **2 botones de acción (CTA):**
  - "Conoce nuestras propuestas" → `/institucional/oferta-educativa`
  - "Inscripciones 2027" → `/ingreso/convocatorias`

---

## 5. Secciones del Home

En orden de aparición (en móvil, Contadores y Testimonios se ocultan):

### 5.1 Últimas Noticias
Noticia destacada + sidebar con 3 mini-noticias y promo de **Calendario Académico** (botón "DESCARGAR PDF"). **Cada noticia lleva a su página de detalle** (`/noticias/:id`). El enlace "Ver todas las noticias" lleva a `/noticias`.

### 5.2 Trámites y Sistemas
4 tarjetas de acceso a los sistemas del ISeP:

| App | Para quién | Qué hace |
|---|---|---|
| **Mi ISeP** | Docentes, personal policial cursante y postulantes inscriptos | Acceso a aulas virtuales, material de cursado, notas y asistencia |
| **SIGEDI** | Solo personal interno del ISeP | Sistema de gestión de expedientes internos |
| **Gestión Cadetes** | Cadetes de 1° y 2° año | Control y notificaciones del cursado |
| **Webmail** | Todo el personal del ISeP | Correo electrónico institucional |

### 5.3 Convocatorias (CTA)
Cuenta regresiva al 30 de septiembre de 2027 + botones de inscripción:
- "Pre-Inscripción Online" → `/ingreso/convocatorias`
- "Ver Requisitos" → `/ingreso/requisitos`

### 5.4 Nuestras Escuelas
Las 4 escuelas principales con escudos (Policía, Superior, Especialidades, Investigaciones). Las tarjetas son enlaces clickeables a `/escuelas/:slug`. La 5ta escuela (EaD) se accede desde el menú Formación.

### 5.5 Contadores
Docentes 2200+, Cadetes 1100+, Personal 800+, Aulas 500+.

### 5.6 Testimonios
Carrusel de 3 egresados con flechas y dots.

---

## 6. Formación

### 6.1 Oferta Educativa (`/institucional/oferta-educativa`)
Vista dinámica con 3 pestañas: Carreras, Cursos, Convocatorias. Las tarjetas de escuelas muestran **escudos** (imágenes reales).

### 6.2 Carreras
Tarjetas con header coloreado por escuela, chips, estado de inscripción (abiertas/próximamente/cerradas) y hover animado.

### 6.3 Cursos
Filtros por Escuela, Tipo y Estado. Acordeón desplegable + botón "Acceso a Mi ISeP".

### 6.4 Páginas de escuela
Cada escuela: escudo, presentación (datos oficiales), información, contacto con email institucional. Las noticias se filtran automáticamente según la escuela.

> **Nota:** Solo la Escuela de Policía incluye la sección "Carreras". Las demás escuelas (Superior, Especialidades, Investigaciones y EaD) no muestran esta sección.

---

## 7. Ingreso (postulantes)

### 7.1 Inicio de Ingreso (landing `/ingreso`)
Resumen completo del camino para convertirte en Cadete, en una pantalla:
- Pasos del proceso (4 tarjetas): crear usuario → completar inscripción → superar etapas → incorporación
- **Cronograma 2027–2028** con el estado de cada etapa (qué está en curso y qué viene)
- Convocatorias abiertas, requisitos principales y preguntas frecuentes
- Alerta "trámite gratuito y personal": ningún gestor ni intermediario realiza el trámite
- Botón para inscribirte en MI ISEP

### 7.2 Convocatorias — Contenido real
Landing con **proceso de selección de la Escuela de Policía Ciclo 2027–2028**:
- Hero con countdown y enlace a MI ISEP
- Alerta de presentación (09:00 hs, tolerancia 20 min)
- Documentación requerida (título + DNI)
- Vestimenta y elementos
- Cómo inscribirte en MI ISEP (4 pasos)
- Formularios obligatorios (4 DJ)
- Edad requerida (18-30 años al 02/02/2027)
- Etapas del proceso (4 etapas)
- Requisitos (10 items)
- Consultas: prensaydifusion@isepsantafe.edu.ar
- Link al listado de presentación (PDF)

### 7.3 Próximas convocatorias
Aperturas para el ciclo 2027-2028.

### 7.4 Requisitos
10 requisitos reales del sitio + documentación requerida + formularios obligatorios:
- Ser argentino
- Tener entre 18 y 30 años
- Título secundario completo
- Aptitud psicofísica
- Antecedentes penales y judiciales
- Y otros...

### 7.5 Proceso de selección
Pasos detallados del proceso de ingreso.

### 7.6 Preguntas frecuentes
12 preguntas en acordeón.

---

## 8. Secretaría

### 8.1 Títulos y Certificaciones (`/secretaria/titulos`)
- **Consulta de certificados** por DNI con feedback visual.
- **Proceso de 3 pasos** para solicitar títulos.
- Links externos (santafe.gov.ar, Google Forms).
- Títulos para retirar (2 links de descarga).
- Contacto: titulosisep@isepsantafe.edu.ar, tel 0341-4728526.

### 8.2 Biblioteca Virtual (`/secretaria/biblioteca`)
- **22 recursos bibliográficos reales** del ISeP.
- Filtros por categoría: Normativa, Protocolos, Formación, Institucional.
- Chips coloreados por tipo.
- Botón de descarga directa a PDF.

### 8.3 Cursos de Capacitación (`/secretaria/cursos`)
- Cursos con badges de estado.
- Botón "Acceso a Mi ISeP".

---

## 9. Breadcrumb

En páginas interiores: **Inicio** / Sección / Página actual. Clic en cualquier nivel para volver.

---

## 10. Noticias

### En la página de inicio
- **Noticia destacada** (tarjeta grande) = la más reciente → lleva a `/noticias/:id`.
- **Sidebar** = 3 mini-cards → llevan a `/noticias/:id`.
- **ShareButton** en cada card para compartir.
- **"Ver todas las noticias"** → lleva a `/noticias`.

### En la página "Últimas noticias" (`/noticias`)
- **Filtro por categorías:** Todas, Institucional, Académica, Escuelas, Eventos, Convenios.
- **Filtro por escuela:** permite filtrar por escuela asociada.
- **Noticia principal** → lleva a `/noticias/:id`.
- **Historial** con tarjetas → llevan a `/noticias/:id`.
- **Paginación** (10 por página).
- **15 noticias** publicadas.

### Detalle de noticia (`/noticias/:id`)
- **Hero de imagen** con overlay gradiente. Si `img: null`, se muestra placeholder con ícono.
- **Badge de categoría** y fecha.
- **Extracto** destacado con borde izquierdo.
- **Contenido completo** de la noticia.
- **Documentos adjuntos** con botones de descarga (si existen).
- **Noticias relacionadas** (misma categoría).
- **ShareButton** para compartir.
- **Botón "Volver a noticias"**.

### Noticias por escuela
- Cada página de escuela (`/escuelas/:slug`) muestra hasta 3 noticias filtradas.
- Se usan las noticias que tienen el campo `escuelas` con el ID de esa escuela.
- En `/noticias` se muestran TODAS las noticias sin filtrar por escuela.

### Noticias sin imagen
- Si una noticia tiene `img: null`, se muestra un placeholder con ícono.
- Esto permite publicar noticias sin necesidad de preparar una imagen.

---

## 11. Normativa y Resoluciones

17 documentos oficiales descargables. Filtros por año (2022-2026) y tipo (Resolución, Convenio, Plan Estratégico, Estatuto). Chips coloreados.

---

## 12. Biblioteca Virtual

22 artículos reales del ISeP con links de descarga directa a PDF. Filtros por categoría: Normativa, Protocolos, Formación, Institucional.

---

## 13. Sedes y Contacto

2 sedes con Google Maps embebido:
- **D.Z.S – Rosario:** Leandro N. Alem 2050, tel 341-4728526
- **DZCN – Recreo:** RN11, km 482, tel 342-4815570

Canales de contacto y tarjetas de redes sociales.

---

## 14. Galería de Fotos

Página dedicada para ver imágenes del ISeP:
- **Ubicación:** Institucional → Galería de Fotos (`/institucional/galeria`).
- **Filtros por categoría:** Eventos, Formación, Instalaciones, Graduaciones.
- **Lightbox** al hacer clic en una imagen (visualización ampliada con navegación).
- **Diseño responsive** que se ajusta a diferentes tamaños de pantalla.

---

## 15. Mapa del Sitio

Guía visual de todas las páginas del sitio:
- **Ubicación:** `/mapa-del-sitio`.
- Arbol jerárquico con las 27 rutas disponibles.
- Enlaces directos a cada página.
- Útil para encontrar rápidamente cualquier contenido.

---

## 16. WhatsApp

Botón verde flotante, siempre visible. Abre conversación en `wa.me/5493424579000` (tel: +54 342 457-9000).

---

## 17. Ir arriba (ScrollToTop)

Botón flotante con flecha. Aparece tras 400px de scroll. En móvil, se posiciona en la esquina inferior izquierda para no superponerse con el botón de WhatsApp. Click → scroll suave al inicio.

---

## 18. Redes sociales (Footer)

| Red | Enlace |
|---|---|
| Facebook | facebook.com/isepsantafe/ |
| YouTube | youtube.com/c/InstitutodeSeguridadPúblicaDeSantaFe |
| Instagram | instagram.com/isepsantafe |
| TikTok | tiktok.com/@isepsantafe |

Footer: identidad institucional, contacto, sedes y créditos de desarrollo.

---

## 19. Configuración del sitio

El archivo `src/data/config.js` centraliza datos usados en múltiples partes del sitio:

| Dato | Constante | Descripción |
|---|---|---|
| Mi ISeP | `MI_ISEP_URL` | URL del portal Mi ISeP |
| Gestión | `GESTION_URL` | URL de SIGEDI |
| Cadetes | `CADETES_URL` | URL de Gestión Cadetes |
| Webmail | `WEBMAIL_URL` | URL del correo institucional |
| Teléfono | `TELEFONO_ISR` | Número de teléfono institucional |
| Email de contacto | `EMAIL_CONTACTO` | Correo de contacto general |
| Email de prensa | `EMAIL_PRENSA` | Correo para prensa y difusión |
| Email de títulos | `EMAIL_TITULOS` | Correo de la sección de títulos |
| WhatsApp | `WHATSAPP_URL` | Enlace de WhatsApp |
| Redes sociales | `REDES_SOCIALES` | URLs de redes sociales |
| Analytics | `GA_ID` | ID de Google Analytics (placeholder) |

> Cada constante tiene documentación explicando qué es y cómo modificarla.

---

## 20. Imágenes del sitio

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

## 21. Problemas comunes

| Problema | Solución |
|---|---|
| El menú no se ve en celular | Tocá ☰ arriba a la izquierda |
| No encuentro Mi ISeP | Siempre en la barra superior |
| No se lee texto sobre imagen | Overlays con contraste automático |
| No abre SIGEDI/Webmail | Verificá conexión y credenciales |
| Quiero volver al inicio | Logo arriba a la izquierda o flecha ↑ abajo a la derecha |
| No funciona el buscador | Escribí al menos 1 carácter |
| El slider no cambia | Pausá con hover, usá flechas o dots |
| Quiero compartir una noticia | Clic en ↗ en cada tarjeta |
| Quiero descargar una resolución | Institucional → Resoluciones, filtrá y descendá |
| Una noticia no se abre | Verificá que la URL sea `/noticias/{id}` con id válido |
| No hay noticias en una categoría | La categoría puede no tener publicaciones aún |
| Una noticia no tiene imagen | Es normal: si `img` es `null`, se muestra un placeholder con ícono |
| Quiero cambiar una imagen del slider | Ver sección 20.4 |
| Quiero ejecutar los tests | `npm run test` en la terminal |
| Quiero cambiar Analytics | Editá `src/data/config.js` → `GA_ID` (también en `Analytics.jsx` y `analytics.js`) |
| Quiero instalar como PWA | "Agregar a pantalla de inicio" en el navegador |
| Quiero verificar JSON-LD | DevTools (F12) → Elements → buscá `<script type="application/ld+json">` |
| Quiero verificar sitemap | Abrí `/sitemap.xml` en el navegador (22 URLs) |
| Ruta inexistente | Se muestra NotFound (404) con enlace al inicio |
| Navegación con lector de pantalla | Usá `SkipToContent` (Tab al inicio), navegá con Tab/Shift+Tab |
| Quiero cambiar un teléfono | Editá `src/data/config.js` → `TELEFONO_ISR` |
| Quiero publicar una noticia | Seguí la guía paso a paso de `funcional.md` §18 |

---

## 22. Workflow: agregar un slide al Hero

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
