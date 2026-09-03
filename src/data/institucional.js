/**
 * src/data/institucional.js
 *
 * Datos simulados (mock) de la institución. Alimentan las vistas dinámicas:
 * Oferta Académica, Carreras, Cursos, Convocatorias y páginas de escuela.
 * En una futura etapa estos datos serán reemplazados por consultas a un backend.
 */

import escudoEP from "../assets/escudo_EP.png";
import escudoES from "../assets/escudo_ES.png";
import escudoEE from "../assets/escudo_EE.png";
import escudoEI from "../assets/escudo_EI.png";
import escudoEaD from "../assets/escudo_EaD.png";

// ── Escuelas ─────────────────────────────────────────────────────────────
export const escuelas = [
  {
    id: "policia",
    nombre: "Escuela de Policía",
    logo: escudoEP,
    resumen: "Reclutamiento inicial y formación profesional para el personal de seguridad pública.",
    presentacion:
      "La Escuela de Policía brinda la formación inicial y de base para el personal policial de la provincia de Santa Fe, combinando instrucción teórica y práctica orientada a la seguridad pública.",
    informacion: {
      categoria: "Formación inicial",
      duracion: "Variable según curso",
      modalidad: "Presencial",
      sede: "RN11, km 482, Recreo, Santa Fe",
      contacto: "+54 342 457-9000",
    },
  },
  {
    id: "superior",
    nombre: "Escuela Superior",
    logo: escudoES,
    resumen: "Formación académica y de posgrado para oficiales superiores.",
    presentacion:
      "La Escuela Superior impulsa la formación académica y la actualización profesional de los cuadros superiores de la institución, promoviendo la gestión y el liderazgo institucional.",
    informacion: {
      categoria: "Formación superior",
      duracion: "Según carrera",
      modalidad: "Presencial / Semipresencial",
      sede: "Leandro N. Alem 2050, Santa Fe",
      contacto: "+54 342 457-9000",
    },
  },
  {
    id: "especialidades",
    nombre: "Escuela de Especialidades",
    logo: escudoEE,
    resumen: "Entrenamiento técnico y académico para el agrupamiento Ejecución.",
    presentacion:
      "La Escuela de Especialidades ofrece capacitación técnica y especializada orientada a la ejecución de tareas particulares dentro de la fuerza de seguridad.",
    informacion: {
      categoria: "Capacitación técnica",
      duracion: "Según especialidad",
      modalidad: "Presencial",
      sede: "Leandro N. Alem 2050, Santa Fe",
      contacto: "+54 342 457-9000",
    },
  },
  {
    id: "investigaciones",
    nombre: "Escuela de Investigaciones",
    logo: escudoEI,
    resumen: "Entrenamiento técnico y académico para el agrupamiento Ejecución.",
    presentacion:
      "La Escuela de Investigaciones forma al personal orientado a la investigación criminal y al apoyo técnico en la resolución de hechos delictivos.",
    informacion: {
      categoria: "Formación especializada",
      duracion: "Según curso",
      modalidad: "Presencial",
      sede: "Leandro N. Alem 2050, Santa Fe",
      contacto: "+54 342 457-9000",
    },
  },
  {
    id: "ead",
    nombre: "Educación a Distancia",
    logo: escudoEaD,
    resumen: "Oferta educativa online con acceso desde cualquier punto de la provincia.",
    presentacion:
      "La modalidad a distancia permite acceder a la formación del ISeP de manera remota, con plataformas virtuales y acompañamiento tutorial para toda la provincia de Santa Fe.",
    informacion: {
      categoria: "Modalidad virtual",
      duracion: "Según curso",
      modalidad: "A distancia (Online)",
      sede: "Virtual — Provincia de Santa Fe",
      contacto: "+54 342 457-9000",
    },
  },
];

// ── Carreras ─────────────────────────────────────────────────────────────
export const carreras = [
  {
    id: 1,
    nombre: "Profesionalización Policial",
    escuela: "policia",
    descripcion:
      "Formación integral de base para el personal policial, con eje en la seguridad pública, los derechos humanos y la práctica profesional.",
    duracion: "2 años",
    modalidad: "Presencial",
    requisitos: [
      "Ser argentino nativo o naturalizado",
      "Edad entre 18 y 30 años",
      "Certificado de estudios secundarios completos",
      "Apto médico y psicofísico",
    ],
    documentos: ["DNI", "Partida de nacimiento", "Certificado de estudios", "Antecedentes penales"],
  },
  {
    id: 2,
    nombre: "Licenciatura en Seguridad Pública",
    escuela: "superior",
    descripcion:
      "Carrera superior orientada a la gestión, planificación y dirección de la seguridad pública en el ámbito provincial.",
    duracion: "4 años",
    modalidad: "Semipresencial",
    requisitos: [
      "Ser miembro del ISeP o recomendar ingreso institucional",
      "Estudios secundarios completos",
      "Aptitud psicofísica",
    ],
    documentos: ["DNI", "Certificado de estudios", "Constancia institucional"],
  },
  {
    id: 3,
    nombre: "Tecnicatura en Investigación Criminal",
    escuela: "investigaciones",
    descripcion:
      "Formación técnica especializada en procedimientos de investigación criminal y análisis de evidencia.",
    duracion: "3 años",
    modalidad: "Presencial",
    requisitos: [
      "Ser personal de la fuerza en actividad",
      "Estudios secundarios completos",
      "Aptitud psicofísica",
    ],
    documentos: ["DNI", "Certificado de estudios", "Constancia de pertenencia"],
  },
  {
    id: 4,
    nombre: "Curso de Especialización en Seguridad Vial",
    escuela: "especialidades",
    descripcion:
      "Capacitación técnica enfocada en el control y la prevención de la siniestralidad vial.",
    duracion: "6 meses",
    modalidad: "Presencial",
    requisitos: [
      "Ser personal policial en actividad",
      "Estudios secundarios completos",
    ],
    documentos: ["DNI", "Certificado de estudios"],
  },
];

// ── Cursos ───────────────────────────────────────────────────────────────
// estado: "actual" | "proximo" | "finalizado"
export const cursos = [
  {
    id: 1,
    nombre: "Curso de Ingreso a la Policía",
    tipo: "Reclutamiento",
    informacion: "Formación inicial de base para aspirantes a incorporarse a la fuerza policial.",
    periodo: "Marzo – Diciembre 2026",
    estado: "actual",
    escuela: "policia",
  },
  {
    id: 2,
    nombre: "Taller de Tiro y Manejo de Armas",
    tipo: "Capacitación",
    informacion: "Entrenamiento práctico en seguridad y destreza en el manejo de armamento.",
    periodo: "Abril – Junio 2026",
    estado: "actual",
    escuela: "especialidades",
  },
  {
    id: 3,
    nombre: "Diplomatura en Gestión Institucional",
    tipo: "Posgrado",
    informacion: "Actualización en liderazgo y administración para cuadros superiores.",
    periodo: "Agosto 2026 – Julio 2027",
    estado: "proximo",
    escuela: "superior",
  },
  {
    id: 4,
    nombre: "Curso de Criminalística Aplicada",
    tipo: "Especialización",
    informacion: "Formación técnica en técnicas de investigación y aseguramiento de la escena.",
    periodo: "Octubre 2026",
    estado: "proximo",
    escuela: "investigaciones",
  },
  {
    id: 5,
    nombre: "Introducción a la Seguridad Pública (Online)",
    tipo: "Virtual",
    informacion: "Módulo introductorio de acceso remoto para toda la provincia.",
    periodo: "Mayo – Julio 2026",
    estado: "actual",
    escuela: "ead",
  },
  {
    id: 6,
    nombre: "Curso de Reentrenamiento Básico",
    tipo: "Actualización",
    informacion: "Actualización de conocimientos para el personal en actividad.",
    periodo: "Febrero – Noviembre 2025",
    estado: "finalizado",
    escuela: "policia",
  },
];

// ── Convocatorias ────────────────────────────────────────────────────────
export const convocatorias = [
  {
    id: 1,
    nombre: "Convocatoria de Ingreso a la Policía",
    estado: "vigente",
    tipo: "Carrera",
    descripcion: "Inscripción abierta para el ciclo lectivo vigente de la Escuela de Policía.",
    fecha: "Hasta el 30/09/2026",
    escuela: "policia",
  },
  {
    id: 2,
    nombre: "Convocatoria Educación a Distancia",
    estado: "proxima",
    tipo: "Curso",
    descripcion: "Próxima apertura de cupos para cursadas en modalidad virtual.",
    fecha: "Octubre 2026",
    escuela: "ead",
  },
  {
    id: 3,
    nombre: "Convocatoria de Especializaciones",
    estado: "vigente",
    tipo: "Curso",
    descripcion: "Cursos técnicos disponibles para el agrupamiento Ejecución.",
    fecha: "Hasta el 20/10/2026",
    escuela: "especialidades",
  },
];

// ── Preguntas frecuentes (Ingreso) ───────────────────────────────────────
export const preguntasFrecuentes = [
  {
    pregunta: "¿Cuáles son los requisitos para ingresar?",
    respuesta:
      "Ser argentino nativo o naturalizado, tener estudios secundarios completos y estar dentro del rango etario indicado en cada convocatoria, además de apto médico y psicofísico.",
  },
  {
    pregunta: "¿Cómo realizo la inscripción?",
    respuesta:
      "A través de la plataforma Mi ISeP, registrando una cuenta y completando el formulario de la convocatoria vigente.",
  },
  {
    pregunta: "¿Dónde se realizan las evaluaciones?",
    respuesta: "En la sede central de la institución (Leandro N. Alem 2050, Santa Fe) y en la sede de Recreo.",
  },
  {
    pregunta: "¿La modalidad a distancia tiene cursada presencial?",
    respuesta: "La modalidad a distancia es mayormente remota, con encuentros tutoriales opcionales.",
  },
];

// Helper: devolver una escuela por id
export const escuelaPorId = (id) => escuelas.find((e) => e.id === id);
export const carrerasDeEscuela = (id) => carreras.filter((c) => c.escuela === id);
export const cursosDeEscuela = (id) => cursos.filter((c) => c.escuela === id);
