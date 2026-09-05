# Guía de Usuario — Sitio Web ISeP Santa Fe

**Proyecto:** `Isep_2060_vblue`

---

## 1. Cómo navegar por el sitio

La barra de navegación superior (fija al hacer scroll) organiza todo en 3 menús desplegables + enlace directo:

| Menú | Qué contiene |
|---|---|
| **Institucional** | El ISeP, Autoridades, Organización, Normativa y Resoluciones, Sedes y Contacto |
| **Formación** | Oferta Académica, Escuelas (5), Títulos y Certificaciones, Biblioteca Virtual |
| **Ingreso** | Convocatorias vigentes, Próximas convocatorias, Requisitos, Proceso de ingreso, Preguntas frecuentes |
| **Últimas noticias** | Acceso directo al listado de noticias |

**En escritorio:** pasá el cursor sobre un menú para desplegarlo. Dentro de *Formación → Escuelas* hay submenú con escudos.

**En celular/tablet:** tocá ☰ (hamburguesa) para abrir el menú completo con acordeones. Logo y botón **Mi ISeP** siempre visibles.

### 1.1 Íconos en la navegación

| Sección | Ícono |
|---|---|
| Institucional | account_balance |
| Formación | school |
| Ingreso | login |
| Últimas noticias | newspaper |

### 1.2 Buscador global

Al lado del botón "Mi ISeP" hay un **ícono de lupa**. Al hacer clic se abre un campo con resultados **agrupados por tipo**:

| Grupo | Qué incluye |
|---|---|
| **Escuelas** | Las 5 escuelas del ISeP |
| **Carreras** | Todas las carreras disponibles |
| **Cursos** | Cursos activos y próximos |
| **Convocatorias** | Inscripciones abiertas y próximas |
| **Noticias** | Noticias institucionales |
| **Normativa** | Resoluciones, convenios, estatutos |
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

---

## 5. Secciones del Home

### 5.1 Aplicaciones Institucionales
4 accesos: Mi ISeP, SIGEDI, Gestión Cadetes, Webmail.

### 5.2 Contadores
Docentes 2200+, Cadetes 1100+, Personal 800+, Aulas 500+.

### 5.3 Convocatorias (CTA)
Cuenta regresiva + botones de inscripción.

### 5.4 Últimas Noticias
Noticia destacada + sidebar. **Cada noticia lleva a su página de detalle** (`/noticias/:id`). El enlace "Ver todas las noticias" lleva a `/noticias`.

### 5.5 Nuestras Escuelas
Accesos directos a las 5 escuelas con escudos.

### 5.6 Testimonios
Carrusel de 3 egresados con flechas y dots.

---

## 6. Formación

### 6.1 Oferta Académica
Grid de las 5 escuelas del ISeP con presentación real y **escudos**. Carreras, Cursos y Convocatorias.

### 6.2 Carreras
Tarjetas con header coloreado por escuela, chips, estado de inscripción y hover animado.

### 6.3 Cursos
Filtros por Escuela, Tipo y Estado. Acordeón desplegable + botón "Acceso a Mi ISeP".

### 6.4 Páginas de escuela
Cada escuela: escudo, presentación (datos oficiales), información, contacto con email institucional.

> **Nota:** Solo la Escuela de Policía incluye la sección "Carreras". Las demás escuelas (Superior, Especialidades, Investigaciones y EaD) no muestran esta sección.

---

## 7. Ingreso (postulantes)

### 7.1 Convocatorias — Contenido real
Landing con **proceso de selección de la Escuela de Policía Ciclo 2027–2028**:
- Alerta de presentación (09:00 hs, tolerancia 20 min)
- Documentación requerida (título + DNI)
- Vestimenta y elementos
- Cómo inscribirte en MI ISEP (4 pasos)
- Formularios obligatorios (4 DJ)
- Edad requerida (18-30 años)
- Etapas del proceso (4 etapas)
- Requisitos (10 items)
- Consultas: prensaydifusion@isepsantafe.edu.ar
- Link al listado de presentación (PDF)

### 7.2 Próximas convocatorias
Aperturas para próximos ciclos.

### 7.3 Requisitos
10 requisitos reales del sitio (ser argentino, 18-30 años, título secundario, aptitud psicofísica, etc.) + documentación requerida + formularios obligatorios.

### 7.4 Proceso de ingreso
Pasos detallados.

### 7.5 Preguntas frecuentes
12 preguntas en acordeón.

---

## 8. Breadcrumb

En páginas interiores: **Inicio** / Sección / Página actual. Clic en cualquier nivel para volver.

---

## 9. Noticias

### En la página de inicio
- **Noticia destacada** (tarjeta grande) = la más reciente → lleva a `/noticias/:id`.
- **Sidebar** = 3 mini-cards → llevan a `/noticias/:id`.
- **"Ver todas las noticias"** → lleva a `/noticias`.

### En la página "Últimas noticias" (`/noticias`)
- **Filtro por categorías** con padding (separado del borde).
- **Botón compartir** (icono ↗) copia enlace al portapapeles.
- **Noticia principal** → lleva a `/noticias/:id`.
- **Historial** con tarjetas → llevan a `/noticias/:id`.
- **Paginación** (10 por página).

### Detalle de noticia (`/noticias/:id`)
- **Hero de imagen** con overlay gradiente.
- **Badged de categoría** y fecha.
- **Extracto** destacado con borde izquierdo.
- **Contenido completo** de la noticia.
- **Documentos adjuntos** con botones de descarga (si existen).
- **Noticias relacionadas** (misma categoría).
- **ShareButton** para compartir.
- **Botón "Volver a noticias"**.

### Noticias por escuela
- Cada página de escuela (`/escuelas/:id`) muestra hasta 3 noticias filtradas.
- Se usan las noticias que tienen el campo `escuelas` con el ID de esa escuela.
- En `/noticias` se muestran TODAS las noticias sin filtrar por escuela.

---

## 10. Normativa y Resoluciones
17 documentos oficiales descargables. Filtros por año y tipo. Chips coloreados.

---

## 11. Biblioteca Virtual
22 artículos reales del ISeP con links de descarga directa a PDFs. Filtros por categoría: Normativa, Protocolos, Formación, Institucional.

## 11.1 Títulos y Certificaciones
Consulta de certificados por DNI, proceso de 3 pasos para solicitar títulos, links de descarga de títulos, contacto y sedes.

---

## 12. Sedes y Contacto
2 sedes con Google Maps embebido: D.Z.S – Rosario (Leandro N. Alem 2050, tel 341-4728526) y DZCN – Recreo (RN11, km 482, tel 342-4815570). Canales de contacto y tarjetas de redes sociales.

---

## 13. WhatsApp
Botón verde flotante, siempre visible. Abre conversación en `wa.me/5493424579000` (tel: +54 342 457-9000).

---

## 14. Ir arriba (ScrollToTop)
Botón flotante con flecha. Aparece tras 400px de scroll. Click → scroll suave al inicio.

---

## 15. Redes sociales (Footer)
| Red | Enlace |
|---|---|
| Facebook | facebook.com/isepsantafe/ |
| YouTube | youtube.com/c/InstitutodeSeguridadPúblicaDeSantaFe |
| Instagram | instagram.com/isepsantafe |
| TikTok | tiktok.com/@isepsantafe |

Footer: identidad, contacto, sedes y créditos de desarrollo.

---

## 16. Problemas comunes

| Problema | Solución |
|---|---|
| El menú no se ve en celular | Tocá ☰ arriba a la derecha |
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
| Quiero ejecutar los tests | Ejecutá `npm run test` en la terminal |
| Quiero agregar un test nuevo | Creá un archivo `*.test.jsx` en la carpeta del componente, usá `render()` y `screen` de React Testing Library |
| Cómo funciona la integración continua | GitHub Actions ejecuta lint + build + test en cada push al repositorio |
| Quiero cambiar el tracking de Analytics | Editá `src/components/Analytics.jsx` y cambiá el valor de `GA_ID` |
| Quiero agregar JSON-LD a una página | Agregá un `<script type="application/ld+json">` con el objeto structured data en el componente de la página |
| Quiero instalar como PWA | Abrí el sitio en el navegador, tocá "Agregar a pantalla de inicio" (Android) o "Compartir → Agregar a pantalla de inicio" (iOS). Usá `manifest.json` para configurar nombre, colores e iconos |
| Quiero verificar structured data (JSON-LD) | Abrí DevTools (F12) → pestaña Elements → buscá `<script type="application/ld+json">`. O usá Google Rich Results Test (search.google.com/test/rich-results) pegando la URL |
| Quiero verificar el sitemap.xml | Abrí `https://tudominio/sitemap.xml` en el navegador. Debería mostrar 22 URLs con frecuencias y prioridades. También podés validarlo con XML Sitemaps (xml-sitemaps.com) |
| Cómo funciona el tracking y mi privacidad | Google Analytics 4 rastrea visitas anónimas (sin datos personales). Solo está activo en producción. Podés bloquearlo con extensiones como uBlock Origin o Ghostery |
| Qué pasa si entro a una ruta que no existe | Se muestra la página NotFound (404) con un mensaje amigable y un enlace para volver al inicio |
| Navegación con lector de pantalla | El sitio es accesible: usá `SkipToContent` (aparece con Tab al inicio), navegá con Tab/Shift+Tab, y los botones tienen labels para lectores de pantalla |
