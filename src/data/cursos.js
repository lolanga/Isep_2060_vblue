/**
 * data/cursos.js — Base de datos de cursos
 * 
 * Centraliza todos los cursos de perfeccionamiento y extracurriculares
 * organizados por escuela. Cada curso tiene un `escuelaId` que lo vincula.
 */

export const CURSOS_PERFECCIONAMIENTO = [
  // ── Escuela de Policía ──
  {
    id: "perf-pol-001",
    escuelaId: "policia",
    titulo: "Curso de Perfeccionamiento Ciclo 2026",
    descripcion: "Actualización en técnicas operativas, derechos humanos y procedimientos policiales vigentes.",
    duracion: "6 meses",
    modalidad: "Presencial",
    requisitos: "Oficial de policía en actividad con antigüedad mínima de 1 año",
    cupo: 40,
    inicio: "Marzo 2026"
  },
  {
    id: "perf-pol-002",
    escuelaId: "policia",
    titulo: "Actualización en Derecho Procesal Penal",
    descripcion: "Formación intensiva en el nuevo código procesal penal provincial y sus implicancias operativas.",
    duracion: "3 meses",
    modalidad: "Semi-presencial",
    requisitos: "Personal policial en funciones",
    cupo: 60,
    inicio: "Abril 2026"
  },

  // ── Escuela Superior ──
  {
    id: "perf-sup-001",
    escuelaId: "superior",
    titulo: "Gestión Estratégica en Seguridad Pública",
    descripcion: "Formación de mandos medios y superiores en planificación estratégica, análisis de contexto y liderazgo institucional.",
    duracion: "1 año",
    modalidad: "Presencial",
    requisitos: "Oficial superior con título de grado",
    cupo: 25,
    inicio: "Mayo 2026"
  },
  {
    id: "perf-sup-002",
    escuelaId: "superior",
    titulo: "Diplomatura en Criminología Aplicada",
    descripcion: "Profundización en teorías criminológicas contemporáneas y su aplicación en la prevención del delito.",
    duracion: "8 meses",
    modalidad: "Presencial",
    requisitos: "Título universitario de grado",
    cupo: 30,
    inicio: "Junio 2026"
  },

  // ── Escuela de Especialidades ──
  {
    id: "perf-esp-001",
    escuelaId: "especialidades",
    titulo: "Perfeccionamiento en Criminalística",
    descripcion: "Técnicas avanzadas de fijación de escena del crimen, cadena de custodia y análisis de indicios.",
    duracion: "4 meses",
    modalidad: "Presencial intensivo",
    requisitos: "Curso básico de criminalística aprobado",
    cupo: 20,
    inicio: "Marzo 2026"
  },
  {
    id: "perf-esp-002",
    escuelaId: "especialidades",
    titulo: "Manejo de Explosivos y Artefactos Sospechosos",
    descripcion: "Capacitación especializada en identificación, neutralización y disposición final de explosivos.",
    duracion: "6 meses",
    modalidad: "Presencial",
    requisitos: "Aptitud física especial, evaluación psicológica aprobada",
    cupo: 15,
    inicio: "Febrero 2026"
  },

  // ── Escuela de Investigaciones ──
  {
    id: "perf-inv-001",
    escuelaId: "investigaciones",
    titulo: "Metodología de la Investigación Criminal",
    descripcion: "Técnicas científicas de investigación, análisis de hipótesis, construcción probatoria y presentación de casos.",
    duracion: "10 meses",
    modalidad: "Presencial",
    requisitos: "Investigador policial en actividad",
    cupo: 30,
    inicio: "Abril 2026"
  },
  {
    id: "perf-inv-002",
    escuelaId: "investigaciones",
    titulo: "Análisis de Inteligencia Criminal",
    descripcion: "Técnicas de inteligencia aplicadas a la prevención y esclarecimiento de delitos complejos.",
    duracion: "6 meses",
    modalidad: "Semi-presencial",
    requisitos: "Personal de investigaciones con 2 años de antigüedad",
    cupo: 25,
    inicio: "Mayo 2026"
  }
];

export const CURSOS_EXTRACURRICULARES = [
  // ── Escuela de Policía ──
  {
    id: "extra-pol-001",
    escuelaId: "policia",
    titulo: "Formación Física y Entrenamiento Táctico",
    descripcion: "Programa integral de acondicionamiento físico, técnicas de defensa personal y tácticas operativas.",
    duracion: "Todo el año",
    modalidad: "Presencial (2 veces por semana)",
    destinatarios: "Personal policial y postulantes",
    horarios: "Martes y jueves 18:00 a 20:00"
  },
  {
    id: "extra-pol-002",
    escuelaId: "policia",
    titulo: "Primeros Auxilios Básicos",
    descripcion: "Capacitación en atención de emergencias médicas y primeros auxilios en situaciones críticas.",
    duracion: "2 meses",
    modalidad: "Presencial",
    destinatarios: "Abierto a todo el personal",
    horarios: "Sábados 9:00 a 12:00"
  },

  // ── Escuela Superior ──
  {
    id: "extra-sup-001",
    escuelaId: "superior",
    titulo: "Inglés Técnico Policial",
    descripcion: "Inglés aplicado a contextos de seguridad pública, con énfasis en terminología policial y jurídica.",
    duracion: "1 año",
    modalidad: "Presencial",
    destinatarios: "Personal policial de todos los rangos",
    horarios: "Lunes y miércoles 19:00 a 21:00"
  },
  {
    id: "extra-sup-002",
    escuelaId: "superior",
    titulo: "Oratoria y Comunicación Institucional",
    descripcion: "Técnicas de comunicación efectiva, presentación de informes y manejo de medios.",
    duracion: "3 meses",
    modalidad: "Presencial",
    destinatarios: "Mandos medios y superiores",
    horarios: "Viernes 17:00 a 19:00"
  },

  // ── Escuela de Especialidades ──
  {
    id: "extra-esp-001",
    escuelaId: "especialidades",
    titulo: "Manejo Defensivo y Conducción Táctica",
    descripcion: "Técnicas avanzadas de conducción en situaciones de emergencia y persecución vehicular.",
    duracion: "2 meses",
    modalidad: "Presencial intensivo",
    destinatarios: "Personal autorizado para conducir vehículos oficiales",
    horarios: "Consultar en secretaría"
  },
  {
    id: "extra-esp-002",
    escuelaId: "especialidades",
    titulo: "Adiestramiento de Canes Policiales",
    descripcion: "Formación en manejo y adiestramiento de canes para detección de sustancias y búsqueda de personas.",
    duracion: "6 meses",
    modalidad: "Presencial",
    destinatarios: "Personal seleccionado del área de canes",
    horarios: "Lunes a viernes 8:00 a 12:00"
  },

  // ── Escuela de Investigaciones ──
  {
    id: "extra-inv-001",
    escuelaId: "investigaciones",
    titulo: "Informática Forense Básica",
    descripcion: "Introducción al análisis forense de dispositivos digitales y preservación de evidencia electrónica.",
    duracion: "4 meses",
    modalidad: "Presencial",
    destinatarios: "Investigadores y personal técnico",
    horarios: "Martes y jueves 14:00 a 17:00"
  },
  {
    id: "extra-inv-002",
    escuelaId: "investigaciones",
    titulo: "Técnicas de Entrevista e Interrogatorio",
    descripcion: "Metodología científica de obtención de información mediante técnicas de entrevista no coercitivas.",
    duracion: "3 meses",
    modalidad: "Semi-presencial",
    destinatarios: "Personal de investigaciones",
    horarios: "Sábados 9:00 a 13:00"
  }
];

/**
 * Utilidad: Obtener cursos por escuela
 */
export function getCursosByEscuela(escuelaId) {
  return {
    perfeccionamiento: CURSOS_PERFECCIONAMIENTO.filter(c => c.escuelaId === escuelaId),
    extracurriculares: CURSOS_EXTRACURRICULARES.filter(c => c.escuelaId === escuelaId)
  };
}