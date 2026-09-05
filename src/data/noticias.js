/**
 * data/noticias.js
 * Datos compartidos de noticias (used by Noticias.jsx, buscador.js y EscuelaTemplate.jsx)
 *
 * Formato de una noticia:
 * {
 *   id: number,            // Único, incremental
 *   titulo: string,        // Título de la noticia
 *   categoria: string,     // Institucional | Academica | Escuelas | Eventos | Convenios
 *   fecha: string,         // "4 DE SEPTIEMBRE, 2026" (formato largo)
 *   fechaCorta: string,    // "4 SEP" (formato corto)
 *   excerpt: string,       // Extracto (1-2 oraciones)
 *   img: string,           // URL de imagen (local o externa)
 *   escuelas: string[],    // (opcional) IDs: policia, superior, especialidades, investigaciones, ead
 *   adjuntos: object[],    // (opcional) [{ nombre: string, url: string }]
 *   contenido: string,     // (opcional) HTML o texto plano (separar párrafos con \n\n)
 * }
 *
 * Imágenes: colocar en public/img/noticias/ y usar /img/noticias/archivo.jpg
 * Adjuntos: colocar en public/docs/ y usar /docs/archivo.pdf
 *
 * El campo contenido soporta HTML:
 * - h2, h3: títulos de sección
 * - p: párrafos
 * - ul/ol + li: listas
 * - strong: negritas
 * - a: enlaces
 * - .btn-inscripcion: botón de inscripción
 * - blockquote: citas destacadas
 * - img: imágenes (usar URLs absolutas)
 * - .info-box: cuadro informativo
 */

export const noticias = [
  {
  id: 1,
  titulo: "Jornada Extracurricular: Siniestros Viales — Sedes Rosario, Recreo y Reconquista",
  categoria: "Academica",
  fecha: "28 DE AGOSTO, 2026",
  fechaCorta: "28 AGO",
  excerpt: "La Escuela de Investigaciones informa que se encuentra abierta la inscripción...",
  img: "/img/noticias/siniestros-viales.png",
  escuelas: ["investigaciones"],
  adjuntos: [],
  contenido: `
    <p><strong>Modalidad presencial · Jornada única</strong></p>
    <p>La <strong>Escuela de Investigaciones</strong> informa...</p>

    <h2>🎯 Objetivo de la jornada</h2>
    <p>Este espacio de formación tiene como objetivo...</p>

    <h2>📍 Sede Recreo</h2>
    <ul>
      <li><strong>📅 Día de cursado:</strong> Viernes 04/09/2026</li>
      <li><strong>🕘 Horario:</strong> 08:30 a 12:00 hs</li>
      <li><strong>⏰ Presentación:</strong> 15 min antes</li>
      <li><strong>👮 Vestimenta:</strong> Uniformados</li>
      <li><strong>👥 Destinatarios:</strong> Escalafón Seguridad</li>
    </ul>
    <div class="info-box">
      <strong>📝 Inscripción del 28/08 al 02/09/2026</strong>
    </div>
    <a href="https://forms.google.com/..." class="btn-inscripcion" target="_blank">
      🔗 INSCRIBIRSE — SEDE RECREO
    </a>

    <h2>📍 Sede Rosario</h2>
    <ul>
      <li><strong>📅 Día de cursado:</strong> Viernes 11/09/2026</li>
      <li><strong>🕘 Horario:</strong> 09:00 a 12:00 hs</li>
      <li><strong>⏰ Presentación:</strong> 15 min antes</li>
      <li><strong>👮 Vestimenta:</strong> Uniformados</li>
      <li><strong>👥 Destinatarios:</strong> Escalafón Seguridad</li>
    </ul>
    <div class="info-box">
      <strong>📝 Inscripción del 28/08 al 02/09/2026</strong>
    </div>
    <a href="https://forms.google.com/..." class="btn-inscripcion" target="_blank">
      🔗 INSCRIBIRSE — SEDE ROSARIO
    </a>

    <h2>📍 Sede Reconquista</h2>
    <ul>
      <li><strong>📅 Día de cursado:</strong> Miércoles 09/09/2026</li>
      <li><strong>🕘 Horario:</strong> 9:00 a 12:00 hs</li>
      <li><strong>⏰ Presentación:</strong> 15 min antes</li>
      <li><strong>👮 Vestimenta:</strong> Uniformados</li>
      <li><strong>👥 Destinatarios:</strong> Escalafón Seguridad</li>
    </ul>
    <div class="info-box">
      <strong>📝 Inscripción del 28/08 al 02/09/2026</strong>
    </div>
    <a href="https://forms.google.com/..." class="btn-inscripcion" target="_blank">
      🔗 INSCRIBIRSE - SEDE RECONQUISTA
    </a>

    <h2>📧 Confirmación de vacante</h2>
    <p>La asignación será informada por correo...</p>
    <blockquote>SOLO PODRÁ PRESENTARSE QUIEN HAYA RECIBIDO DICHO CORREO...</blockquote>
    <p>🪪 El personal deberá asistir con credencial policial.</p>
  `
},
  {
    id: 2,
    titulo: "Capacitación en Primeros Auxilios para Personal de Seguridad",
    categoria: "Escuelas",
    fecha: "1 DE SEPTIEMBRE, 2026",
    fechaCorta: "1 SEP",
    excerpt: "La Escuela de Especialidades dictará un curso intensivo de primeros auxilios orientado al personal policial en actividad.",
    img: null,
    escuelas: ["especialidades"],
  },
  {
    id: 3,
    titulo: "Convenio de Cooperación con la Universidad Nacional del Litoral",
    categoria: "Convenios",
    fecha: "28 DE AGOSTO, 2026",
    fechaCorta: "28 AGO",
    excerpt: "El ISeP firmó un nuevo convenio marco para el reconocimiento de títulos y la articulación de carreras de grado en seguridad pública.",
    img: null,
    escuelas: ["superior"],
  },
  {
    id: 4,
    titulo: "Jornada de Reflexión sobre Seguridad Comunitaria",
    categoria: "Eventos",
    fecha: "25 DE AGOSTO, 2026",
    fechaCorta: "25 AGO",
    excerpt: "Se realizó la jornada de reflexión sobre los nuevos enfoques de seguridad comunitaria con participación de docentes y estudiantes de todas las escuelas del ISeP.",
    img: null,
    escuelas: ["policia", "superior"],
  },
  {
    id: 5,
    titulo: "Inicio del Ciclo Lectivo 2026 — Bienvenida a nuevos alumnos",
    categoria: "Institucional",
    fecha: "10 DE AGOSTO, 2026",
    fechaCorta: "10 AGO",
    excerpt: "El ISeP dio la bienvenida a más de 200 nuevos ingresos en las cinco escuelas que componen el instituto.",
    img: "/img/noticias/bienvenida-2026.jpg",
    escuelas: ["policia", "superior", "especialidades", "investigaciones", "ead"],
  },
  {
    id: 6,
    titulo: "Conferencia Internacional de Seguridad Pública",
    categoria: "Eventos",
    fecha: "18 DE AGOSTO, 2026",
    fechaCorta: "18 AGO",
    excerpt: "Representantes del ISeP participaron de la conferencia internacional junto a expertos de Brasil y Uruguay.",
    img: "/img/noticias/conferencia-internacional.jpg",
    escuelas: ["superior"],
  },
  {
    id: 7,
    titulo: "Nuevo curso de Análisis Forense Digital",
    categoria: "Academica",
    fecha: "5 DE AGOSTO, 2026",
    fechaCorta: "5 AGO",
    excerpt: "La Escuela de Investigaciones estrena un curso de análisis forense digital para peritos informáticos.",
    img: null,
    escuelas: ["investigaciones"],
  },
  {
    id: 8,
    titulo: "Convenio con la Universidad Tecnológica Nacional",
    categoria: "Convenios",
    fecha: "1 DE AGOSTO, 2026",
    fechaCorta: "1 AGO",
    excerpt: "Firma de convenio de cooperación con la UTN para la validación de créditos académicos hacia carreras de ingeniería.",
    img: null,
    escuelas: ["superior"],
  },
  {
    id: 9,
    titulo: "Taller de Primeros Auxilios Avanzados — Sede Rosario",
    categoria: "Escuelas",
    fecha: "25 DE JULIO, 2026",
    fechaCorta: "25 JUL",
    excerpt: "La Escuela de Especialidades dictó un taller intensivo de primeros auxilios avanzados en la sede de Rosario.",
    img: "/img/noticias/taller-rosario.jpg",
    escuelas: ["especialidades"],
  },
  {
    id: 10,
    titulo: "Graduación de la Promoción 2026 — Escuela de Policía",
    categoria: "Eventos",
    fecha: "20 DE JULIO, 2026",
    fechaCorta: "20 JUL",
    excerpt: "Se graduaron 120 cadetes de la Escuela de Policía en una ceremonia oficial presidida por las autoridades provinciales.",
    img: "/img/noticias/graduacion-policia-2026.jpg",
    escuelas: ["policia"],
  },
  {
    id: 11,
    titulo: "Actualización del plan de estudios de Técnico Superior",
    categoria: "Institucional",
    fecha: "15 DE JULIO, 2026",
    fechaCorta: "15 JUL",
    excerpt: "El ISeP aprobó la actualización del plan de estudios de la carrera de Técnico Superior en Seguridad Pública.",
    img: null,
    escuelas: ["superior"],
  },
  {
    id: 12,
    titulo: "Curso de Gestión de Crisis para Mandos Medios",
    categoria: "Academica",
    fecha: "10 DE JULIO, 2026",
    fechaCorta: "10 JUL",
    excerpt: "La Escuela Superior ofrece un nuevo curso de gestión de crisis dirigido a mandos medios de fuerzas de seguridad.",
    img: null,
    escuelas: ["superior"],
  },
  {
    id: 13,
    titulo: "Apertura de la Biblioteca Virtual del ISeP",
    categoria: "Institucional",
    fecha: "5 DE JULIO, 2026",
    fechaCorta: "5 JUL",
    excerpt: "Ya está disponible la biblioteca virtual con acceso a más de 3.000 publicaciones sobre seguridad pública y derecho penal.",
    img: "/img/noticias/biblioteca-virtual.jpg",
    escuelas: ["policia", "superior", "especialidades", "investigaciones", "ead"],
  },
  {
    id: 14,
    titulo: "Simulacro de Operativo en la Ruta 19 — Ejercicio práctico",
    categoria: "Escuelas",
    fecha: "28 DE JUNIO, 2026",
    fechaCorta: "28 JUN",
    excerpt: "Estudiantes de la Escuela de Policía realizaron un simulacro de operativo de tránsito en la Ruta 19 como parte de su formación práctica.",
    img: "/img/noticias/simulacro-ruta19.jpg",
    escuelas: ["policia"],
  },
];
