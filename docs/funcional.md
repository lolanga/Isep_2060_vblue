# Especificaciones Funcionales — Sitio Web ISeP Santa Fe

**Proyecto:** `Isep_2060_vblue`
**Versión:** 0.0.0
**Última actualización:** Septiembre 2026

---

## 1. Visión general

Sitio web institucional del **Instituto de Seguridad Pública (ISeP) de la Provincia de Santa Fe**.
SPA (Single Page Application) construida con React 19 + Vite + React Router.

El sitio es 100% responsive: se adapta correctamente a dispositivos móviles, tablets y escritorio.

---

## 2. Audiencias

| Audiencia | Necesidad principal | Contenido relevante |
|---|---|---|
| **Postulantes** (ciudadanos que quieren ingresar) | Conocer requisitos, convocatorias, proceso y FAQ | Ingreso (5 páginas) + Landing Convocatorias |
| **Personal en actividad** | Trámites, correo, sistemas internos | Mi ISeP, SIGEDI, Webmail |
| **Público general** | Información institucional y actualidad | Institucional, Últimas noticias |
| **Profesionales de la educación** | Oferta académica y cursos | Formación, Carreras, Cursos |

---

## 3. Mapa de navegación

```
┌───────────────────────────────────────────────────────────────┐
│  NAVBAR                                                       │
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

- **Institucional** → dropdown con: El ISeP, Autoridades, Organización, **Normativa y Resoluciones**, Sedes y Contacto.
- **Formación** → dropdown con: Oferta Académica, **Escuelas** (submenú de 5 escuelas), **Títulos y Certificaciones**, **Biblioteca Virtual**.
- **Ingreso** → dropdown con: Convocatorias vigentes, Próximas convocatorias, Requisitos, Proceso de ingreso, Preguntas frecuentes.
- **Últimas noticias** → link directo a `/noticias`.
- **Mi ISeP** → botón siempre visible (desktop y móvil) que abre el portal externo.

### 3.2 Rutas existentes

| Ruta | Página | Estado |
|---|---|---|
| `/` | Home (landing) | Implementada |
| `/noticias` | Listado de noticias con filtro y paginación | Implementada |
| `/institucional/el-isep` | El ISeP | Placeholder (con "Próximamente") |
| `/institucional/autoridades` | Autoridades | Placeholder (con "Próximamente") |
| `/institucional/organizacion` | Organización | Placeholder (con "Próximamente") |
| `/institucional/resoluciones` | Normativa y Resoluciones | Implementada (descargable) |
| `/institucional/sedes-contacto` | Sedes y Contacto | Implementada (con Google Maps) |
| `/institucional/oferta-educativa` | Oferta Académica (dinámica: Carreras/Cursos/Convocatorias) | Implementada |
| `/institucional/carreras` | Carreras (vista general de la oferta) | Implementada |
| `/escuelas/policia` | Escuela de Policía | Implementada (plantilla) |
| `/escuelas/superior` | Escuela Superior | Implementada (plantilla) |
| `/escuelas/especialidades` | Escuela de Especialidades | Implementada (plantilla) |
| `/escuelas/investigaciones` | Escuela de Investigaciones | Implementada (plantilla) |
| `/escuelas/educacion-a-distancia` | Educación a Distancia | Implementada (plantilla) |
| `/ingreso/convocatorias` | Landing Convocatorias (countdown, requisitos, pasos) | Implementada |
| `/ingreso/proximas-convocatorias` | Próximas convocatorias | Implementada |
| `/ingreso/requisitos` | Requisitos | Implementada |
| `/ingreso/proceso` | Proceso de ingreso | Implementada |
| `/ingreso/faq` | Preguntas frecuentes (12 preguntas) | Implementada |
| `/secretaria/titulos` | Títulos y Certificaciones | Placeholder (con "Próximamente") |
| `/secretaria/biblioteca` | Biblioteca Virtual | Placeholder (con "Próximamente") |
| `/secretaria/cursos` | Cursos (vista general con filtros) | Implementada |

---

## 4. Funcionalidades implementadas (Home)

La página de inicio (`/`) está compuesta por las siguientes secciones, en orden:

1. **Hero Slider** — Banner principal con slider automático (3 slides), transiciones suaves, flechas de navegación y indicadores (dots).
2. **Aplicaciones Institucionales** — Accesos para el personal: Mi ISeP, SIGEDI y Webmail.
3. **Contadores** — Estadísticas animadas: Docentes (2200+), Cadetes activos (1100+), Personal formándose (800+), Aulas virtuales (500+).
4. **CTA Inscripciones** — Bloque con countdown hasta cierre de inscripciones + botones de pre-inscripción.
5. **Últimas Noticias** — Noticia destacada +侧侧边栏 de noticias recientes.
6. **Nuestras Escuelas** — Cuadrícula de las 5 escuelas con su escudo institucional.
7. **Testimonios** — Carrusel de 3 testimonios de egresados con flechas y dots.

### 4.1 Hero Slider

- **Slides:** 3 slides con imagen, badge, título y descripción.
- **Automático:** cambia cada 6 segundos.
- **Pausa:** al pasar el cursor sobre el hero.
- **Navegación:** flechas izquierda/derecha + indicadores (dots) en la parte inferior.
- **Transiciones:** fade suave entre slides (1s ease-in-out).

### 4.2 Página de Noticias (`/noticias`)

- **Filtro por categorías:** Todas, Institucional, Académica, Escuelas, Eventos, Convenios.
- **Botón compartir:** cada noticia tiene un icono de compartir que copia el enlace al portapapeles.
- **Noticia principal:** muestra la última publicación con imagen, fecha, título y extracto.
- **Historial de noticias:** grid de tarjetas con paginación (10 por página).
- **Breadcrumb** para navegación.

---

## 5. Formación

### 5.1 Oferta Académica (`/institucional/oferta-educativa`)

Vista **dinámica** alimentada desde `src/data/institucional.js`. Organizada en pestañas:

| Pestaña | Contenido |
|---|---|
| **Carreras** | Cards con nombre, descripción, escuela, duración y modalidad. |
| **Cursos** | Cards con nombre, tipo, información y período + botón "Acceso a Mi ISeP". |
| **Convocatorias** | Cards con estado (Vigente/Próxima), escuela y fecha. |

### 5.2 Carreras (`/institucional/carreras`)

Vista general con **grid de tarjetas mejoradas**:
- Header coloreado según la escuela
- Chips de duración, modalidad y escuela
- **Estado de inscripción** (abiertas / próximamente / cerradas) con indicador de color
- Fecha de inscripción
- Botón "Ver detalle"
- Hover animado (elevación)

### 5.3 Cursos (`/secretaria/cursos`)

- **Filtros por:** Escuela, Tipo y Estado.
- Agrupados en: **Cursos Actuales**, **Próximos Cursos** y **Historial (Finalizados)**.
- Cada curso es un **acordeón/desplegable** con: Nombre, Tipo, Información breve, Período y botón **"Acceso a Mi ISeP"**.

### 5.4 Páginas de escuela (plantilla común)

Las 5 escuelas (`/escuelas/*`) usan una **plantilla reutilizable** (`EscuelaTemplate`) con las secciones:
- **Logo** (escudo institucional)
- **Presentación**
- **Información** (categoría, duración, modalidad, sede)
- **Carreras** de la escuela
- **Cursos actuales** con botón "Acceso a Mi ISeP"
- **Noticias**
- **Contacto**

---

## 6. Ingreso

### 6.1 Landing de Convocatorias (`/ingreso/convocatorias`)

Página dedicada con:
- **Hero con gradiente** y countdown hasta cierre de inscripciones
- **Cards de convocatorias vigentes** con escuela, tipo, fecha y botón "Inscribirme"
- **Requisitos generales** en grid de 2 columnas (6 items)
- **Proceso en 5 pasos** con números circulares y descripción
- **CTA final** con gradiente y botón de pre-inscripción

### 6.2 Otras páginas de ingreso

| Página | Descripción |
|---|---|
| **Próximas convocatorias** | Aperturas anunciadas para ciclos siguientes. |
| **Requisitos** | Condiciones generales y documentación necesaria. |
| **Proceso de ingreso** | Pasos: registro → inscripción → documentación → evaluaciones → confirmación. |
| **Preguntas frecuentes** | 12 preguntas en acordeón con respuestas sobre el ingreso. |

---

## 7. Búsqueda global

### 7.1 Buscador funcional

- **Ubicación:** en la barra de navegación, al lado del botón "Mi ISeP".
- **Índice:** 58 entradas (escuelas, carreras, cursos, convocatorias, 11 noticias, 11 resoluciones/normativa, páginas institucionales).
- **Resultados agrupados por tipo:** Escuelas → Carreras → Cursos → Convocatorias → Noticias → Normativa → Páginas.
- **Navegación por teclado:** flechas arriba/abajo, Enter para seleccionar, Escape para cerrar.
- **Contador de resultados** y hints de teclado al fondo.
- **Sin resultados:** muestra sugerencias de términos.

---

## 8. Normativa y Resoluciones (`/institucional/resoluciones`)

Página con documentos oficiales descargables:
- **Filtros por año** (Todos, 2025, 2024, 2023, 2022)
- **Filtros por tipo** (Resolución, Convenio, Plan Estratégico, Estatuto)
- Cada documento muestra: título, tipo, fecha, tamaño y botón **Descargar**
- **Breadcrumb** para navegación

---

## 9. Sedes y Contacto (`/institucional/sedes-contacto`)

Página con 2 sedes del ISeP:
- **Sede Central – Rosario** (Av. Pellegrini 1850)
- **Sede Santa Fe – Capital** (Bulevar España 2120)

Cada sede incluye:
- Dirección, teléfono, email y horario
- **Mapa de Google Maps** embebido

---

## 10. Aplicaciones institucionales (acceso personal)

Sección "Aplicaciones Institucionales" en el home para el **personal que trabaja en el ISeP**:

| App | URL | Destino |
|---|---|---|
| **Mi ISeP** | `https://mi.isepsantafe.edu.ar/` | Portal personal de trámites |
| **SIGEDI** | `https://gestion.isepsantafe.edu.ar` | Sistema de Gestión Educativa |
| **Webmail** | `https://webmail.isepsantafe.net.ar` | Correo institucional |

- Cada tarjeta abre el sitio en una pestaña nueva (`target="_blank"`).
- Accesibles desde Home y desde el botón "Mi ISeP" del navbar.

---

## 11. Accesos flotantes y redes

### 11.1 Botón flotante de WhatsApp
- Siempre visible en la esquina inferior derecha (desktop y móvil).
- Abre conversación en WhatsApp en pestaña nueva.

### 11.2 Botón "Ir Arriba"
- Botón flotante con SVG de flecha hacia arriba en la esquina inferior derecha.
- Scroll suave al inicio de la página.
- Gradiente institucional.

### 11.3 Redes sociales (Footer)
- Facebook, YouTube, Instagram y TikTok.
- Cada ícono es un enlace que abre la red en pestaña nueva.

### 11.4 Footer
- **Identidad institucional:** marca, descripción y redes sociales.
- **Contacto:** teléfonos y correos.
- **Sedes:** Leandro N. Alem 2050 (Santa Fe) y RN11 km 482 (Recreo).
- **Créditos de desarrollo:** "Departamento Desarrollo, Tecnología e Innovación" + fecha dinámica.

---

## 12. Breadcrumb (migas de pan)

Componente de navegación que muestra la ruta actual en páginas interiores:
- Fondo gris claro con borde sutil
- Ícono de home enlazable
- Separadores "/" entre elementos
- Último elemento en negrita (página actual)

---

## 13. Contadores (estadísticas)

Sección en el home con 4 estadísticas animadas:
- **Docentes:** 2200+
- **Cadetes activos:** 1100+
- **Personal formándose:** 800+
- **Aulas virtuales:** 500+

- Animación de conteo al hacer scroll (IntersectionObserver)
- Hover con elevación
- Íconos de Material Symbols

---

## 14. Testimonios

Carrusel de testimonios de egresados en el home:
- 3 testimonios con foto, nombre, promoción y texto
- Navegación por flechas y dots
- Auto-avance (cada 5 segundos)

---

## 15. Requisitos funcionales obligatorios

1. **Responsive obligatorio:** toda la web debe visualizarse y operarse correctamente en móvil, tablet y desktop.
2. **Contraste legible:** el texto sobre imágenes siempre debe leerse (overlays con gradiente + scrim).
3. **Mi ISeP siempre visible:** el botón de acceso al portal personal no puede desaparecer en móvil.
4. **Logo ISeP enlazable:** el logo del navbar es visible en móvil y desktop y vuelve al inicio (`/`).
5. **Consistencia visual:** todos los botones, cards y elementos activos usan el mismo sistema de gradiente y glow.
6. **Fondo decorativo global:** fondo con `background-attachment: fixed`, color base `#bcd8db` y gradientes radiales/lineales.
7. **Favicon:** escudo ISeP como favicon en `public/favicon.png`.

---

## 16. Disponibilidad

- **Ejecución local:** `npm install` → `npm run dev` (Vite, por defecto en `http://localhost:5173`).
- **Build de producción:** `npm run build` → `npm run preview`.
- **Lint:** `npm run lint`.
