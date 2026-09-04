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
 *   contenido: string,     // (opcional) cuerpo completo (separar párrafos con \n\n)
 * }
 *
 * Imágenes: colocar en public/img/noticias/ y usar /img/noticias/archivo.jpg
 * Adjuntos: colocar en public/docs/ y usar /docs/archivo.pdf
 */

export const noticias = [
  {
    id: 1,
    titulo: "Noticia de ejemplo",
    categoria: "Institucional",
    fecha: "4 DE SEPTIEMBRE, 2026",
    fechaCorta: "4 SEP",
    excerpt: "Esta es una noticia de ejemplo. Editá el archivo src/data/noticias.js para agregar tus propias noticias.",
    img: "",
    escuelas: [],
  },
];
