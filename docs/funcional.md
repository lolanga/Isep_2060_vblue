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
| **Postulantes** (ciudadanos que quieren ingresar) | Conocer requisitos, convocatorias e inscripciones | Ingreso, Convocatorias, Inscripciones |
| **Personal en actividad** | Trámites, correo, sistemas internos | Mi ISeP, SIGEDI, Webmail |
| **Público general** | Información institucional y actualidad | Institucional, Últimas noticias |
| **Profesionales de la educación** | Oferta académica y cursos | Formación, Carreras, Cursos |

---

## 3. Mapa de navegación

```
┌──────────────────────────────────────────────────────────┐
│  NAVBAR                                                  │
├──────────┬───────────────┬───────────┬──────────────────┤
│INSTITUC. │   FORMACIÓN    │  INGRESO  │ ÚLTIMAS NOTICIAS │
├──────────┼───────────────┼───────────┼──────────────────┤
│ El ISeP  │ Oferta Académ.│Convoca-   │                  │
│ Autori-  │ Escuelas ▾    │torias     │                  │
│ dades    │  · Policía    │Inscrip-   │                  │
│ Organi-  │  · Especialid.│ciones     │                  │
│ zación   │  · Investiga. │Informa-   │                  │
│ Sedes y  │  · Superior   │ción para  │                  │
│ Contacto │  · Ed. a Dist.│postulantes│                  │
│          │ Carreras      │           │                  │
│          │ Cursos        │           │                  │
└──────────┴───────────────┴───────────┴──────────────────┘
```

### 3.1 Estructura de la barra de navegación

- **Institucional** → dropdown con: El ISeP, Autoridades, Organización, Sedes y Contacto.
- **Formación** → dropdown con: Oferta Académica, **Escuelas** (submenú de 5 escuelas), Carreras, Cursos.
- **Ingreso** → dropdown con: Convocatorias, Inscripciones, Información para postulantes.
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
| `/institucional/sedes-contacto` | Sedes y Contacto | Placeholder |
| `/institucional/oferta-educativa` | Oferta Académica | Placeholder |
| `/institucional/carrera` | Carreras | Placeholder |
| `/institucional/resoluciones` | Resoluciones | Placeholder |
| `/escuelas/policia` | Escuela de Policía | Placeholder |
| `/escuelas/superior` | Escuela Superior | Placeholder |
| `/escuelas/especialidades` | Escuela de Especialidades | Placeholder |
| `/escuelas/investigaciones` | Escuela de Investigaciones | Placeholder |
| `/escuelas/educacion-a-distancia` | Educación a Distancia | Placeholder |
| `/ingreso/convocatorias` | Convocatorias | Placeholder |
| `/ingreso/inscripciones` | Inscripciones | Placeholder |
| `/ingreso/informacion` | Información para postulantes | Placeholder |
| `/secretaria/titulos` | Títulos | Placeholder |
| `/secretaria/biblioteca` | Biblioteca | Placeholder |
| `/secretaria/cursos` | Cursos | Placeholder |

> **Nota:** Las rutas marcadas como *Placeholder* muestran un banner y el mensaje "Contenido en construcción — Próximamente".

---

## 4. Funcionalidades implementadas (Home)

La página de inicio (`/`) está compuesta por las siguientes secciones, en orden:

1. **Hero** — Banner principal con imagen, badge, título y botón CTA.
2. **Últimas Noticias** — Noticia destacada (izquierda), lista lateral de noticias del día y bloque "Calendario Académico" con botón de descarga.
3. **Aplicaciones Institucionales** — Accesos para el personal: Mi ISeP, SIGEDI y Webmail.
4. **Nuestras Escuelas** — Cuadrícula de las 4 escuelas (data-driven).
5. **CTA Inscripciones** — Bloque de llamado a la acción con botones de pre-inscripción.

### 4.1 Página de Noticias (`/noticias`)

- **Filtro por categorías:** Todas, Institucional, Académica, Escuelas, Eventos, Convenios (filtro sticky al hacer scroll).
- **Noticia principal:** muestra la última publicación con imagen, fecha, título y extracto.
- **Historial de noticias:** grid de tarjetas con paginación (10 por página).
- **Estados vacíos:** si no hay noticias en la categoría, muestra mensaje acorde.
- La categoría activa se resalta con el gradiente institucional.

---

## 5. Aplicaciones institucionales (acceso personal)

Sección "Aplicaciones Institucionales" en el cuerpo de la Home (después de Noticias) para el **personal que trabaja en el ISeP**:

| App | URL | Destino |
|---|---|---|
| **Mi ISeP** | `https://mi.isepsantafe.edu.ar/` | Portal personal de trámites |
| **SIGEDI** | `https://gestion.isepsantafe.edu.ar` | Sistema de Gestión Educativa |
| **Webmail** | `https://webmail.isepsantafe.net.ar` | Correo institucional |

- Cada tarjeta abre el sitio en una pestaña nueva (`target="_blank"`).
- Accesibles desde Home y desde el botón "Mi ISeP" del navbar.

---

## 6. Accesos flotantes y redes

### 6.1 Botón flotante de WhatsApp
- Siempre visible en la esquina inferior derecha (desktop y móvil).
- Abre conversación en WhatsApp en pestaña nueva.
- Usa el gradiente institucional y el glow definido en el sistema de diseño.

### 6.2 Redes sociales (Footer)
- Facebook, YouTube, Instagram y **TikTok** (agregado).
- Cada ícono es un enlace que abre la red en pestaña nueva.

### 6.3 Contacto (Footer)
- Dirección: Leandro N. Alem 2050, Santa Fe.
- Teléfono: +54 342 457-9000.
- Correo: contacto@isepsantafe.edu.ar.

---

## 7. Requisitos funcionales obligatorios

1. **Responsive obligatorio:** toda la web debe visualizarse y operarse correctamente en móvil, tablet y desktop (ver docs técnicos, sección Responsive).
2. **Contraste legible:** el texto sobre imágenes siempre debe leerse (los overlays combinan gradiente institucional + scrim oscuro).
3. **Mi ISeP siempre visible:** el botón de acceso al portal personal no puede desaparecer en móvil.
4. **Consistencia visual:** todos los botones, cards y elementos activos usan el mismo sistema de gradiente y glow.

---

## 8. Disponibilidad

- **Ejecución local:** `npm install` → `npm run dev` (Vite, por defecto en `http://localhost:5173`).
- **Build de producción:** `npm run build` → `npm run preview`.
- **Lint:** `npm run lint`.
