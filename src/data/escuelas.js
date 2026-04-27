/**
 * data/escuelas.js — Información de las 4 escuelas del ISeP
 * 
 * Centraliza toda la info estática de cada escuela para que sea
 * fácil actualizar contenido sin tocar componentes.
 */

export const ESCUELAS = {
  policia: {
    id: "policia",
    nombre: "Escuela de Policía",
    slug: "/escuelas/policia",
    tagline: "Formación integral de oficiales de seguridad pública",
    descripcion: "La Escuela de Policía del ISeP forma profesionales capacitados para el servicio policial, con énfasis en derechos humanos, ética policial y técnicas operativas modernas.",
    hero: {
      imagen: "https://picsum.photos/seed/policia/1600/600",
      titulo: "Escuela de Policía",
      subtitulo: "Formación de oficiales para la seguridad ciudadana"
    },
    mision: "Formar oficiales de policía con excelencia académica y vocación de servicio, comprometidos con la seguridad, el respeto a los derechos humanos y el bienestar de la comunidad.",
    vision: "Ser referente nacional en la formación policial, con estándares de calidad internacional y reconocimiento por nuestra contribución a la seguridad pública.",
    duracion: "3 años",
    modalidad: "Presencial intensivo",
    requisitos: [
      "Edad entre 18 y 28 años",
      "Secundario completo",
      "Aptitud física y psicológica",
      "Antecedentes penales limpios",
      "Estatura mínima 1.65m (hombres) / 1.60m (mujeres)"
    ]
  },

  superior: {
    id: "superior",
    nombre: "Escuela Superior",
    slug: "/escuelas/superior",
    tagline: "Formación de mandos medios y superiores",
    descripcion: "Especialización y perfeccionamiento para oficiales en actividad, con programas de grado y posgrado en gestión policial, criminología y seguridad pública.",
    hero: {
      imagen: "https://picsum.photos/seed/superior/1600/600",
      titulo: "Escuela Superior",
      subtitulo: "Excelencia en la formación de mandos policiales"
    },
    mision: "Capacitar y especializar a los mandos medios y superiores de la fuerza policial mediante programas académicos de alto nivel, promoviendo el liderazgo estratégico y la gestión eficiente.",
    vision: "Consolidarnos como centro de excelencia académica en gestión y estrategia policial, impulsando la profesionalización y modernización de las fuerzas de seguridad.",
    duracion: "Variable según carrera (1-4 años)",
    modalidad: "Presencial / Semi-presencial",
    requisitos: [
      "Ser oficial de la policía en actividad",
      "Título de grado (para posgrados)",
      "Antigüedad mínima según carrera",
      "Autorización del superior jerárquico"
    ]
  },

  especialidades: {
    id: "especialidades",
    nombre: "Escuela de Especialidades",
    slug: "/escuelas/especialidades",
    tagline: "Capacitación técnica y operativa especializada",
    descripcion: "Formación avanzada en áreas específicas: criminalística, tránsito, canes, explosivos, rescate, negociación y otras especialidades técnicas policiales.",
    hero: {
      imagen: "https://picsum.photos/seed/especialidades/1600/600",
      titulo: "Escuela de Especialidades",
      subtitulo: "Formación técnica de alto nivel"
    },
    mision: "Brindar capacitación técnica especializada de excelencia para fortalecer las capacidades operativas del personal policial en áreas críticas de la seguridad pública.",
    vision: "Ser el centro de referencia provincial y regional en formación especializada policial, con tecnología de punta y docentes altamente calificados.",
    duracion: "3 meses a 2 años (según especialidad)",
    modalidad: "Presencial intensivo",
    requisitos: [
      "Personal policial en actividad",
      "Aprobación de examen de ingreso",
      "Aptitud física específica según especialidad",
      "Autorización del superior jerárquico"
    ]
  },

  investigaciones: {
    id: "investigaciones",
    nombre: "Escuela de Investigaciones",
    slug: "/escuelas/investigaciones",
    tagline: "Formación en técnicas de investigación criminal",
    descripcion: "Capacitación avanzada en metodología de investigación, análisis criminal, inteligencia policial y técnicas forenses aplicadas a la prevención y esclarecimiento del delito.",
    hero: {
      imagen: "https://picsum.photos/seed/investigaciones/1600/600",
      titulo: "Escuela de Investigaciones",
      subtitulo: "Ciencia y técnica al servicio de la justicia"
    },
    mision: "Formar investigadores policiales altamente capacitados en metodología científica, técnicas forenses y análisis criminal para garantizar investigaciones eficaces y respetuosas del debido proceso.",
    vision: "Posicionarnos como la institución líder en formación de investigadores criminales en la región, con reconocimiento por nuestra rigurosidad académica y aportes a la ciencia forense.",
    duracion: "2-3 años (según carrera)",
    modalidad: "Presencial",
    requisitos: [
      "Oficial de policía en actividad",
      "Antigüedad mínima de 2 años",
      "Aprobar evaluación psicotécnica",
      "Formación previa en derecho o criminología (recomendado)"
    ]
  }
};

/**
 * Utilidad: Obtener datos de una escuela por ID
 */
export function getEscuelaById(id) {
  return ESCUELAS[id] || null;
}

/**
 * Utilidad: Listar todas las escuelas
 */
export function getAllEscuelas() {
  return Object.values(ESCUELAS);
}