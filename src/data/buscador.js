/**
 * data/buscador.js
 *
 * Índice de búsqueda construido con los datos simulados actuales.
 * Incluye: escuelas, carreras, cursos, convocatorias, noticias y normativa.
 * Cada entrada tiene: title, subtitle, categoria, tipo, ruta y keywords.
 */

import { escuelas, carreras, cursos, convocatorias } from "./institucional";

// ── Noticias (mock) ──
const NOTICIAS = [
  { id: 1, titulo: "Nueva citacion y notificacion para egresados", categoria: "Institucional", excerpt: "Cronograma de notificaciones y entrega de certificaciones finales." },
  { id: 2, titulo: "Capacitacion en Primeros Auxilios Tacticos", categoria: "Academica", excerpt: "Jornada intensiva de primeros auxilios tacticos." },
  { id: 3, titulo: "Convenio Marco con la Universidad Nacional del Litoral", categoria: "Convenios", excerpt: "Convenio de colaboracion academica con la UNL." },
  { id: 4, titulo: "Ciclo de Conferencias sobre Derecho Procesal Penal", categoria: "Academica", excerpt: "Conferencias con jueces y fiscales sobre el nuevo Codigo Procesal Penal." },
  { id: 5, titulo: "Egreso de la promocion 2025 de la Escuela de Policia", categoria: "Escuelas", excerpt: "Ceremonia solemne con 240 nuevos oficiales." },
  { id: 6, titulo: "Jornada de actualizacion en criminalistica", categoria: "Escuelas", excerpt: "Actualizacion en tecnicas de criminalistica con especialistas internacionales." },
  { id: 7, titulo: "Apertura de inscripciones para el ciclo lectivo 2025", categoria: "Institucional", excerpt: "Apertura del periodo de inscripciones para todas las escuelas." },
  { id: 8, titulo: "Evento deportivo interprovincial de fuerzas de seguridad", categoria: "Eventos", excerpt: "Torneo interprovincial de atletismo." },
  { id: 9, titulo: "Nuevo laboratorio de informatica forense", categoria: "Academica", excerpt: "Laboratorio equipado con tecnologia de ultima generacion." },
  { id: 10, titulo: "Visita de autoridades del Ministerio de Seguridad", categoria: "Institucional", excerpt: "Nuevas inversiones en infraestructura educativa." },
  { id: 11, titulo: "Programa de becas para personal policial en actividad", categoria: "Academica", excerpt: "Becas parciales para formacion academica." },
];

// ── Resoluciones / Normativa (mock) ──
const RESOLUCIONES = [
  { id: 1, titulo: "Resolución General Nº 001/2025 – Plan anual de actividades", tipo: "Resolución", anio: "2025" },
  { id: 2, titulo: "Resolución General Nº 002/2025 – Designación de autoridades", tipo: "Resolución", anio: "2025" },
  { id: 3, titulo: "Convenio Marco con la Universidad Nacional del Litoral", tipo: "Convenio", anio: "2025" },
  { id: 4, titulo: "Plan Estratégico Institucional 2024-2027", tipo: "Plan Estratégico", anio: "2024" },
  { id: 5, titulo: "Resolución General Nº 010/2024 – Reglamento de evaluación", tipo: "Resolución", anio: "2024" },
  { id: 6, titulo: "Resolución General Nº 015/2024 – Conformación de consejos escolares", tipo: "Resolución", anio: "2024" },
  { id: 7, titulo: "Estatuto del Instituto de Seguridad Pública", tipo: "Estatuto", anio: "2023" },
  { id: 8, titulo: "Resolución General Nº 020/2023 – Carga horaria docente", tipo: "Resolución", anio: "2023" },
  { id: 9, titulo: "Convenio de cooperación con la Policía de la Provincia", tipo: "Convenio", anio: "2023" },
  { id: 10, titulo: "Resolución General Nº 005/2022 – Planificación estratégica", tipo: "Resolución", anio: "2022" },
  { id: 11, titulo: "Convenio con el Ministerio de Seguridad de la Nación", tipo: "Convenio", anio: "2022" },
];

export const INDICE_BUSQUEDA = [
  // ── Escuelas ──
  ...escuelas.map((e) => ({
    id: `escuela-${e.id}`,
    title: e.nombre,
    subtitle: e.resumen,
    categoria: "Escuelas",
    tipo: "Escuela",
    ruta: `/escuelas/${e.id}`,
    keywords: [e.nombre, ...Object.values(e.informacion), e.resumen],
  })),

  // ── Carreras ──
  ...carreras.map((c) => {
    const escuela = escuelas.find((e) => e.id === c.escuela);
    return {
      id: `carrera-${c.id}`,
      title: c.nombre,
      subtitle: `${escuela ? escuela.nombre : "ISeP"} · ${c.modalidad} · ${c.duracion}`,
      categoria: "Formación",
      tipo: "Carrera",
      ruta: "/institucional/carreras",
      keywords: [c.nombre, c.descripcion, c.modalidad, escuela ? escuela.nombre : "", ...c.requisitos],
    };
  }),

  // ── Cursos ──
  ...cursos.map((c) => {
    const escuela = escuelas.find((e) => e.id === c.escuela);
    return {
      id: `curso-${c.id}`,
      title: c.nombre,
      subtitle: `${c.tipo} · ${c.periodo}`,
      categoria: "Formación",
      tipo: "Curso",
      ruta: "/secretaria/cursos",
      keywords: [c.nombre, c.tipo, c.informacion, c.periodo, escuela ? escuela.nombre : ""],
    };
  }),

  // ── Convocatorias ──
  ...convocatorias.map((cv) => {
    const escuela = escuelas.find((e) => e.id === cv.escuela);
    return {
      id: `convocatoria-${cv.id}`,
      title: cv.nombre,
      subtitle: `${cv.estado === "vigente" ? "Vigente" : "Próxima"} · ${cv.fecha}`,
      categoria: "Ingreso",
      tipo: "Convocatoria",
      ruta: "/ingreso/convocatorias",
      keywords: [cv.nombre, cv.descripcion, cv.tipo, cv.fecha, escuela ? escuela.nombre : ""],
    };
  }),

  // ── Noticias ──
  ...NOTICIAS.map((n) => ({
    id: `noticia-${n.id}`,
    title: n.titulo,
    subtitle: `${n.categoria} · Noticia`,
    categoria: "Noticias",
    tipo: "Noticia",
    ruta: "/noticias",
    keywords: [n.titulo, n.categoria, n.excerpt],
  })),

  // ── Normativa / Resoluciones ──
  ...RESOLUCIONES.map((r) => ({
    id: `resolucion-${r.id}`,
    title: r.titulo,
    subtitle: `${r.tipo} · ${r.anio}`,
    categoria: "Institucional",
    tipo: "Normativa",
    ruta: "/institucional/resoluciones",
    keywords: [r.titulo, r.tipo, r.anio, "resolución", "normativa", "decreto", "convenio", "estatuto"],
  })),

  // ── Páginas institucionales ──
  {
    id: "inst-el-isep",
    title: "El ISeP",
    subtitle: "Conocé la institución, su misión e historia",
    categoria: "Institucional",
    tipo: "Página",
    ruta: "/institucional/el-isep",
    keywords: ["instituto", "isep", "institución", "historia", "sobre nosotros"],
  },
  {
    id: "inst-autoridades",
    title: "Autoridades",
    subtitle: "Conducción del Instituto de Seguridad Pública",
    categoria: "Institucional",
    tipo: "Página",
    ruta: "/institucional/autoridades",
    keywords: ["autoridades", "directores", "conducción", "equipo"],
  },
  {
    id: "inst-organizacion",
    title: "Organización",
    subtitle: "Estructura y áreas del ISeP",
    categoria: "Institucional",
    tipo: "Página",
    ruta: "/institucional/organizacion",
    keywords: ["organización", "estructura", "áreas", "departamentos", "organigrama"],
  },
  {
    id: "inst-resoluciones",
    title: "Normativa y Resoluciones",
    subtitle: "Normativa vigente y resoluciones institucionales",
    categoria: "Institucional",
    tipo: "Página",
    ruta: "/institucional/resoluciones",
    keywords: ["normativa", "resoluciones", "legislación", "documentos legales"],
  },
  {
    id: "inst-sedes",
    title: "Sedes y Contacto",
    subtitle: "Ubicación y medios de contacto",
    categoria: "Institucional",
    tipo: "Página",
    ruta: "/institucional/sedes-contacto",
    keywords: ["sedes", "contacto", "ubicación", "dirección", "mapa"],
  },
  {
    id: "sec-titulos",
    title: "Títulos y Certificaciones",
    subtitle: "Títulos y certificaciones del ISeP",
    categoria: "Formación",
    tipo: "Página",
    ruta: "/secretaria/titulos",
    keywords: ["títulos", "certificaciones", "diplomas", "aval"],
  },
  {
    id: "sec-biblioteca",
    title: "Biblioteca Virtual",
    subtitle: "Recursos y materiales de estudio en línea",
    categoria: "Formación",
    tipo: "Página",
    ruta: "/secretaria/biblioteca",
    keywords: ["biblioteca", "virtual", "libros", "recursos", "materiales"],
  },
  {
    id: "ing-requisitos",
    title: "Requisitos de ingreso",
    subtitle: "Condiciones y documentación para postularse",
    categoria: "Ingreso",
    tipo: "Página",
    ruta: "/ingreso/requisitos",
    keywords: ["requisitos", "ingreso", "documentación", "postulantes"],
  },
  {
    id: "ing-proceso",
    title: "Proceso de ingreso",
    subtitle: "Pasos para formar parte del ISeP",
    categoria: "Ingreso",
    tipo: "Página",
    ruta: "/ingreso/proceso",
    keywords: ["proceso", "ingreso", "pasos", "inscripción", "evaluaciones"],
  },
  {
    id: "ing-faq",
    title: "Preguntas frecuentes",
    subtitle: "Dudas frecuentes sobre el ingreso",
    categoria: "Ingreso",
    tipo: "Página",
    ruta: "/ingreso/faq",
    keywords: ["preguntas", "frecuentes", "faq", "dudas", "ayuda"],
  },
];

/**
 * Busca en el índice. Devuelve resultados agrupados por tipo.
 * - query: texto a buscar.
 * - max: cantidad máxima de resultados por grupo.
 */
export function buscar(query, max = 8) {
  const q = (query || "").trim().toLowerCase();
  if (!q) return [];

  const tokens = q.split(/\s+/);

  const scored = INDICE_BUSQUEDA.map((item) => {
    const haystack = [item.title, item.subtitle, item.categoria, item.tipo, ...item.keywords]
      .join(" ")
      .toLowerCase();
    let score = 0;
    tokens.forEach((t) => {
      if (t && haystack.includes(t)) score += 1;
      if (item.title.toLowerCase().includes(t)) score += 3;
      if (item.tipo.toLowerCase().includes(t)) score += 2;
    });
    return { item, score };
  })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, max * 3).map((r) => r.item);
}

/**
 * Busca y agrupa por tipo.
 * Devuelve un objeto: { "Escuela": [...], "Carrera": [...], ... }
 */
export function buscarAgrupado(query, maxPorGrupo = 3) {
  const resultados = buscar(query, maxPorGrupo * 4);
  const grupos = {};

  resultados.forEach((r) => {
    if (!grupos[r.tipo]) grupos[r.tipo] = [];
    if (grupos[r.tipo].length < maxPorGrupo) {
      grupos[r.tipo].push(r);
    }
  });

  return grupos;
}
