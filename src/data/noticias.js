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
];
