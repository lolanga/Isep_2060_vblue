/**
 * data/buscador.js
 *
 * Índice de búsqueda construido con los datos simulados actuales.
 * Incluye: escuelas, carreras, cursos, convocatorias, noticias y normativa.
 * Cada entrada tiene: title, subtitle, categoria, tipo, ruta y keywords.
 */

import { escuelas, carreras, cursos, convocatorias } from "./institucional";
import { noticias } from "./noticias";
import { resoluciones } from "./normativa";

// Optimización: inicialización lazy del índice de búsqueda
// Se construye solo en la primera llamada a buscar(), no al importar el módulo
let INDICE_BUSQUEDA = null;

function getIndiceBusqueda() {
  if (INDICE_BUSQUEDA) return INDICE_BUSQUEDA;

  INDICE_BUSQUEDA = [
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
  ...noticias.map((n) => ({
    id: `noticia-${n.id}`,
    title: n.titulo,
    subtitle: `${n.categoria} · Noticia`,
    categoria: "Noticias",
    tipo: "Noticia",
    ruta: `/noticias/${n.id}`,
    keywords: [n.titulo, n.categoria, n.excerpt],
  })),

  // ── Normativa / Resoluciones ──
  ...resoluciones.map((r) => ({
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

  return INDICE_BUSQUEDA;
}

/**
 * Busca en el índice por tokens. Devuelve resultados rankeados por relevancia.
 * @param {string} query - Texto a buscar
 * @param {number} [max=8] - Cantidad máxima de resultados
 * @returns {Array} Resultados rankeados
 */
export function buscar(query, max = 8) {
  const q = (query || "").trim().toLowerCase();
  if (!q) return [];

  const tokens = q.split(/\s+/);

  // Optimización: construir índice lazy solo en la primera búsqueda
  const indice = getIndiceBusqueda();

  const scored = indice.map((item) => {
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
 * Busca y agrupa resultados por tipo (Escuela, Carrera, etc.).
 * @param {string} query - Texto a buscar
 * @param {number} [maxPorGrupo=3] - Máximo de resultados por grupo
 * @returns {Object} Objeto con arrays agrupados por tipo
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
