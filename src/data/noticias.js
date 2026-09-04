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
    titulo: "Noticia de ejemplo con formato HTML",
    categoria: "Institucional",
    fecha: "4 DE SEPTIEMBRE, 2026",
    fechaCorta: "4 SEP",
    excerpt: "Esta es una noticia de ejemplo que muestra el formato HTML disponible para las noticias del ISeP.",
    img: "",
    escuelas: [],
    contenido: `<h2>🎯 Formato disponible</h2>
<p>Las noticias ahora soportan <strong>HTML</strong> en el campo contenido. Esto permite crear noticias con estructura豐富a:</p>

<h3>Listas</h3>
<ul>
  <li><strong>Títulos:</strong> h2 para secciones, h3 para subsecciones</li>
  <li><strong>Negritas:</strong> para textos importantes</li>
  <li><strong>Enlaces:</strong> para URLs y documentos</li>
  <li><strong>Botones:</strong> clase .btn-inscripcion para llamados a la acción</li>
</ul>

<h3>Ejemplo de inscripción</h3>
<p>Las inscripciones están abiertas hasta el <strong>30 de septiembre de 2026</strong>.</p>
<a href="https://forms.google.com/" class="btn-inscripcion" target="_blank">🔗 INSCRIBIRSE</a>

<h3>Cita destacada</h3>
<blockquote>"La seguridad pública del siglo XXI requiere profesionales preparados para trabajar con la comunidad."</blockquote>

<div class="info-box">
  <strong>📧 Contacto</strong>
  Para más información, comunicarse al correo prensaydifusion@isepsantafe.edu.ar
</div>`,
  },
];
