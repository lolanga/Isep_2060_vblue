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
    resumen: "Única fuente de reclutamiento del personal policial del Escalafón General.",
    presentacion:
      "La Escuela de Policía constituye la única fuente de reclutamiento del personal policial del Escalafón General - Subescalafón Seguridad de la Policía de la Provincia de Santa Fe y su misión es dictar las carreras de formación previstas en la Ley 12.333 habilitando el ingreso a la Policía de la Provincia, promoviendo el egreso con el título de Técnico Superior en Seguridad Pública y Ciudadana.",
    informacion: {
      categoria: "Formación inicial",
      duracion: "Variable según curso",
      modalidad: "Presencial",
      sede: "RN11, km 482, Recreo, Santa Fe",
      contacto: "escueladepolicia@isepsantafe.edu.ar",
    },
  },
  {
    id: "superior",
    nombre: "Escuela Superior",
    logo: escudoES,
    resumen: "Cursos de perfeccionamiento para los agrupamientos Dirección y Supervisión.",
    presentacion:
      "La Escuela Superior de Seguridad Pública es el departamento que tiene por misión dictar los cursos de perfeccionamiento para los agrupamientos Dirección y Supervisión. Y también, dictar los cursos y actividades educativas ordenadas por la Dirección General, de acuerdo al Reglamento de Educación Institucional. Su creación, está íntimamente relacionada con la necesidad de perfeccionar al personal policial mediante cursos establecidos, previstos y desarrollados en el Reglamento de Educación Institucional, y de toda otra actividad educativa sistematizada.",
    informacion: {
      categoria: "Formación superior",
      duracion: "Según carrera",
      modalidad: "Presencial / Semipresencial",
      sede: "Leandro N. Alem 2050, Santa Fe",
      contacto: "divestudio-essp@santafe.gov.ar",
    },
  },
  {
    id: "especialidades",
    nombre: "Escuela de Especialidades",
    logo: escudoEE,
    resumen: "Cursos de perfeccionamiento para los agrupamientos Coordinación y Ejecución.",
    presentacion:
      "La Escuela de Especialidades en Seguridad tiene por misión dictar los cursos de perfeccionamiento para los agrupamientos Coordinación y Ejecución. Subsidiariamente, dictar los cursos y actividades educativas ordenadas por la Dirección General, de acuerdo al Reglamento de Educación Institucional.",
    informacion: {
      categoria: "Capacitación técnica",
      duracion: "Según especialidad",
      modalidad: "Presencial",
      sede: "Leandro N. Alem 2050, Santa Fe",
      contacto: "escueladeespecialidades@isepsantafe.edu.ar",
    },
  },
  {
    id: "investigaciones",
    nombre: "Escuela de Investigaciones",
    logo: escudoEI,
    resumen: "Planes y programas de capacitación en análisis criminal e investigación.",
    presentacion:
      "La Escuela de Investigaciones del I.Se.P. fue creada por el Decreto 688/15, con la misión de desarrollar planes y programas de capacitación en análisis criminal e investigación técnica y científica de los delitos. Comenzó con sus propuestas formativas en el año 2019. Su objetivo general es contribuir a que los organismos de investigación policial tengan desempeños exitosos y estándares de excelencia en el cumplimiento de sus misiones.",
    informacion: {
      categoria: "Formación especializada",
      duracion: "Según curso",
      modalidad: "Presencial",
      sede: "Leandro N. Alem 2050, Santa Fe",
      contacto: "escueladeinvestigacion@isepsantafe.edu.ar",
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
// Fuentes: isepsantafe.edu.ar/index.php/institucional/oferta-educativa
export const carreras = [
  {
    id: 1,
    nombre: "Auxiliar en Seguridad",
    escuela: "policia",
    descripcion:
      "Capacitación en la prevención de delitos y la protección de la vida y los bienes de las personas, en el marco de respeto a los derechos humanos. Carrera de nivel terciario con reconocimiento oficial.",
    duracion: "Variable",
    modalidad: "Presencial",
    inscripciones: "abiertas",
    fechaInscripcion: "Según convocatoria",
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
    nombre: "Técnico Superior en Seguridad Pública y Ciudadana con orientación Policial",
    escuela: "policia",
    descripcion:
      "Especialización para la dirección y administración institucional, y la conducción de recursos humanos. Forma profesionales con capacidad para trabajar en ambientes interdisciplinarios y multiculturales.",
    duracion: "3 años",
    modalidad: "Presencial",
    inscripciones: "proximamente",
    fechaInscripcion: "Según convocatoria",
    requisitos: [
      "Ser argentino nativo o naturalizado",
      "Edad entre 18 y 30 años",
      "Estudios secundarios completos",
      "Apto médico y psicofísico",
    ],
    documentos: ["DNI", "Partida de nacimiento", "Certificado de estudios", "Antecedentes penales"],
  },
  {
    id: 3,
    nombre: "Cursos de Perfeccionamiento",
    escuela: "superior",
    descripcion:
      "El I.Se.P. organiza periódicamente jornadas y seminarios destinados a todo el personal policial de distintas jerarquías y agrupamientos. Cursos de capacitación permanente.",
    duracion: "Variable",
    modalidad: "Presencial",
    inscripciones: "proximamente",
    fechaInscripcion: "Según convocatoria",
    requisitos: [
      "Personal policial en actividad",
      "Según el curso específico",
    ],
    documentos: ["DNI", "Constancia institucional"],
  },
  {
    id: 4,
    nombre: "Acceso a Títulos de Grado (Convenios con Universidades)",
    escuela: "superior",
    descripcion:
      "Se realizan convenios con universidades para posibilitar el acceso a títulos de grado para el personal policial que egresa del ISeP.",
    duracion: "Variable",
    modalidad: "Semipresencial",
    inscripciones: "proximamente",
    fechaInscripcion: "Según convenio",
    requisitos: [
      "Egresado del ISeP",
      "Según el convenio universitario vigente",
    ],
    documentos: ["DNI", "Título del ISeP", "Constancia de egreso"],
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
  {
    pregunta: "¿Cuánto dura el proceso de inscripción completo?",
    respuesta: "El proceso completo, desde la pre-inscripción hasta la confirmación del ingreso, puede tomar entre 3 y 6 meses dependiendo de la convocatoria y la escuela.",
  },
  {
    pregunta: "¿Puedo inscribirme en más de una convocatoria?",
    respuesta: "Sí, podés postularse a distintas convocatorias siempre que cumplan con los requisitos de cada una. Sin embargo, solo podés ser aceptado en una.",
  },
  {
    pregunta: "¿Qué pasa si no apruebo las evaluaciones?",
    respuesta: "Si no alcanzás el puntaje mínimo, podés presentarte nuevamente en la próxima convocatoria. No hay penalización por reintentar.",
  },
  {
    pregunta: "¿Hay costo de inscripción?",
    respuesta: "La inscripción es gratuita para todas las convocatorias del ISeP. Ningún candidato debe abonar por el proceso de selección.",
  },
  {
    pregunta: "¿Qué documentación debo presentar?",
    respuesta: "DNI vigente, partida de nacimiento, certificado de estudios secundarios completos, antecedentes penales y penitenciarios, y certificado médico. Algunas convocatorias pueden requerir documentación adicional.",
  },
  {
    pregunta: "¿Puedo cursar si soy de otra provincia?",
    respuesta: "Sí, el ISeP acepta postulantes de todo el país. Deben cumplir con los mismos requisitos que los candidatos santafesinos.",
  },
  {
    pregunta: "¿Qué es Mi ISeP?",
    respuesta: "Mi ISeP es la plataforma digital institucional donde se gestionan inscripciones, seguimiento de trámites, acceso a materiales de estudio y comunicación con la institución.",
  },
  {
    pregunta: "¿Ofrecen becas o ayudas económicas?",
    respuesta: "El ISeP ofrece un programa de becas parciales para personal policial en actividad. Consultá la sección de convocatorias para más información sobre las condiciones.",
  },
];

// Helper: devolver una escuela por id
export const escuelaPorId = (id) => escuelas.find((e) => e.id === id);
export const carrerasDeEscuela = (id) => carreras.filter((c) => c.escuela === id);
export const cursosDeEscuela = (id) => cursos.filter((c) => c.escuela === id);
