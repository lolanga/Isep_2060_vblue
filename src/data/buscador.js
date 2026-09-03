/**
 * data/buscador.js
 *
 * Índice de búsqueda construido con los datos simulados actuales.
 * Cada entrada tiene: title, subtitle/descripcion, categoria, tipo, ruta y
 * palabras clave para el match. Alimenta el buscador funcional del navbar.
 */

import { escuelas, carreras, cursos, convocatorias } from "./institucional";

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
 * Busca en el índice. Devuelve resultados ordenados por relevancia.
 * - query: texto a buscar.
 * - max: cantidad máxima de resultados.
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
      if (item.title.toLowerCase().includes(t)) score += 2;
    });
    return { item, score };
  })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, max).map((r) => r.item);
}
