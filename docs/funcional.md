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
| **Postulantes** (ciudadanos que quieren ingresar) | Conocer requisitos, convocatorias, proceso y FAQ | Ingreso (5 páginas) |
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
| `/institucional/el-isep` | El ISeP | Placeholder |
| `/institucional/autoridades` | Autoridades | Placeholder |
| `/institucional/organizacion` | Organización | Placeholder |
| `/institucional/resoluciones` | Normativa y Resoluciones | Placeholder |
| `/institucional/sedes-contacto` | Sedes y Contacto | Placeholder |
| `/institucional/oferta-educativa` | Oferta Académica (dinámica: Carreras/Cursos/Convocatorias) | Implementada |
| `/institucional/carreras` | Carreras (vista general de la oferta) | Implementada |
| `/escuelas/policia` | Escuela de Policía | Implementada (plantilla) |
| `/escuelas/superior` | Escuela Superior | Implementada (plantilla) |
| `/escuelas/especialidades` | Escuela de Especialidades | Implementada (plantilla) |
| `/escuelas/investigaciones` | Escuela de Investigaciones | Implementada (plantilla) |
| `/escuelas/educacion-a-distancia` | Educación a Distancia | Implementada (plantilla) |
| `/ingreso/convocatorias` | Convocatorias vigentes | Implementada |
| `/ingreso/proximas-convocatorias` | Próximas convocatorias | Implementada |
| `/ingreso/requisitos` | Requisitos | Implementada |
| `/ingreso/proceso` | Proceso de ingreso | Implementada |
| `/ingreso/faq` | Preguntas frecuentes | Implementada |
| `/secretaria/titulos` | Títulos y Certificaciones | Placeholder |
| `/secretaria/biblioteca` | Biblioteca Virtual | Placeholder |
| `/secretaria/cursos` | Cursos (vista general con filtros) | Implementada |

> **Nota:** Las rutas marcadas como *Placeholder* muestran un banner y el mensaje "Contenido en construcción". Las rutas de la sección Formación, Escuelas e Ingreso están implementadas con datos simulados (mock).

---

## 4. Funcionalidades implementadas (Home)

La página de inicio (`/`) está compuesta por las siguientes secciones, en orden:

1. **Hero Slider** — Banner principal con slider automático (3 slides), transiciones suaves, flechas de navegación y indicadores (dots). Se pausa al pasar el cursor. Formato: imagen + overlay + badge + título + CTA.
2. **Últimas Noticias** — Noticia destacada (izquierda), lista lateral de noticias del día y bloque "Calendario Académico" con botón de descarga.
3. **Aplicaciones Institucionales** — Accesos para el personal: Mi ISeP, SIGEDI y Webmail.
4. **Nuestras Escuelas** — Cuadrícula de las 4 escuelas con su **escudo institucional** (data-driven).
5. **CTA Inscripciones** — Bloque de llamado a la acción con botones de pre-inscripción.

### 4.1 Hero Slider

- **Slides:** 3 slides con imagen, badge, título y descripción.
- **Automático:** cambia cada 6 segundos.
- **Pausa:** al pasar el cursor sobre el hero.
- **Navegación:** flechas izquierda/derecha + indicadores (dots) en la parte inferior.
- **Transiciones:** fade suave entre slides (1s ease-in-out).

### 4.2 Página de Noticias (`/noticias`)

- **Filtro por categorías:** Todas, Institucional, Académica, Escuelas, Eventos, Convenios (filtro sticky al hacer scroll).
- **Noticia principal:** muestra la última publicación con imagen, fecha, título y extracto.
- **Historial de noticias:** grid de tarjetas con paginación (10 por página).
- **Estados vacíos:** si no hay noticias en la categoría, muestra mensaje acorde.
- La categoría activa se resalta con el gradiente institucional.

---

## 5. Formación

### 5.1 Oferta Académica (`/institucional/oferta-educativa`)

Vista **dinámica** alimentada desde `src/data/institucional.js`. Organizada en pestañas:

| Pestaña | Contenido |
|---|---|
| **Carreras** | Cards con nombre, descripción, escuela, duración y modalidad. Enlace "Ver todas las carreras". |
| **Cursos** | Cards con nombre, tipo, información y período + botón "Acceso a Mi ISeP". |
| **Convocatorias** | Cards con estado (Vigente/Próxima), escuela y fecha. |

### 5.2 Carreras (`/institucional/carreras`)

Vista general de la oferta académica. Cada carrera muestra:
- Nombre, Escuela, Descripción, **Duración**, **Modalidad**, **Requisitos** y **Documentos relacionados**.

### 5.3 Cursos (`/secretaria/cursos`)

- **Filtros por:** Escuela, Tipo y Estado.
- Agrupados en: **Cursos Actuales**, **Próximos Cursos** y **Historial (Finalizados)**.
- Cada curso es un **acordeón/desplegable** con: Nombre, Tipo, Información breve, Período y botón **"Acceso a Mi ISeP"**.
- El botón de acceso dirige a *Mi ISeP → curso correspondiente*.

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

Cinco páginas para el postulante:

| Página | Descripción |
|---|---|
| **Convocatorias vigentes** | Inscripciones abiertas en este momento. |
| **Próximas convocatorias** | Aperturas anunciadas para ciclos siguientes. |
| **Requisitos** | Condiciones generales y documentación necesaria. |
| **Proceso de ingreso** | Pasos: registro en Mi ISeP → inscripción → documentación → evaluaciones → confirmación. |
| **Preguntas frecuentes** | Acordeón con respuestas sobre el ingreso. |

---

## 7. Aplicaciones institucionales (acceso personal)

Sección "Aplicaciones Institucionales" en el cuerpo de la Home (después de Noticias) para el **personal que trabaja en el ISeP**:

| App | URL | Destino |
|---|---|---|
| **Mi ISeP** | `https://mi.isepsantafe.edu.ar/` | Portal personal de trámites |
| **SIGEDI** | `https://gestion.isepsantafe.edu.ar` | Sistema de Gestión Educativa |
| **Webmail** | `https://webmail.isepsantafe.net.ar` | Correo institucional |

- Cada tarjeta abre el sitio en una pestaña nueva (`target="_blank"`).
- Accesibles desde Home y desde el botón "Mi ISeP" del navbar.

---

## 8. Accesos flotantes y redes

### 8.1 Botón flotante de WhatsApp
- Siempre visible en la esquina inferior derecha (desktop y móvil).
- Abre conversación en WhatsApp en pestaña nueva (número placeholder configurable).
- Usa el gradiente institucional y el glow definido en el sistema de diseño.

### 8.2 Buscador funcional
- **Ubicación:** en la barra de navegación, al lado del botón "Mi ISeP".
- **Ícono de búsqueda:** al hacer clic, se abre el campo de búsqueda.
- **Búsqueda en tiempo real:** indexa escuelas, carreras, cursos, convocatorias y páginas institucionales.
- **Resultados dinámicos:** muestra hasta 8 resultados con ícono, título, subtítulo y categoría.
- **Navegación por teclado:** flechas arriba/abajo, Enter para seleccionar, Escape para cerrar.
- **Cierre automático:** al hacer clic fuera del buscador.

### 8.3 Íconos en navegación
- **Menú principal:** cada sección (Institucional, Formación, Ingreso, Últimas noticias) tiene un ícono de Material Symbols.
- **Dropdowns:** los items muestran íconos que refuerzan el significado (ej: "El ISeP" → info, "Autoridades" → group, etc.).
- **Menú móvil:** los acordeones también muestran íconos para mayor claridad.

### 8.4 Redes sociales (Footer)
- Facebook, YouTube, Instagram y **TikTok**.
- Cada ícono es un enlace que abre la red en pestaña nueva.

### 8.3 Footer (rediseñado)
- **Identidad institucional:** marca, descripción y redes sociales.
- **Accesos principales:** Institucional, Formación, Ingreso y Últimas noticias (enlaces enrutados).
- **Contacto:** teléfonos y correos.
- **Sedes:** Leandro N. Alem 2050 (Santa Fe) y RN11 km 482 (Recreo).
- **Enlaces institucionales:** privacidad, términos, mapa del sitio, transparencia y normativa.
- **Créditos de desarrollo:** "Departamento Desarrollo, Tecnología e Innovación" + fecha dinámica.

---

## 9. Requisitos funcionales obligatorios

1. **Responsive obligatorio:** toda la web debe visualizarse y operarse correctamente en móvil, tablet y desktop (ver docs técnicos, sección Responsive).
2. **Contraste legible:** el texto sobre imágenes siempre debe leerse (los overlays combinan gradiente institucional + scrim oscuro).
3. **Mi ISeP siempre visible:** el botón de acceso al portal personal no puede desaparecer en móvil.
4. **Logo ISeP enlazable:** el logo del navbar es visible en móvil y desktop y vuelve al inicio (`/`).
5. **Consistencia visual:** todos los botones, cards y elementos activos usan el mismo sistema de gradiente y glow.
6. **Fondo decorativo global:** la web usa un fondo decorativo con `background-attachment: fixed`, color base `#bcd8db` y gradientes radiales/lineales que crean un patrón sutil.

---

## 10. Disponibilidad

- **Ejecución local:** `npm install` → `npm run dev` (Vite, por defecto en `http://localhost:5173`).
- **Build de producción:** `npm run build` → `npm run preview`.
- **Lint:** `npm run lint`.
