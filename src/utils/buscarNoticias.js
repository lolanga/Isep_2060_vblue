/**
 * utils/buscarNoticias.js
 *
 * Búsqueda de noticias sobre public/indice-noticias.json (índice liviano
 * generado en cada build con TODAS las noticias: recientes e histórico).
 * Se descarga una sola vez y se cachea en el módulo.
 */

const RUTA_INDICE = "/indice-noticias.json";

let cache = null;
let promesa = null;

function normalizar(s) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/** Carga (una sola vez) el índice de noticias. */
export async function cargarIndiceNoticias() {
  if (cache) return cache;
  if (!promesa) {
    promesa = fetch(RUTA_INDICE)
      .then((r) => (r.ok ? r.json() : []))
      .catch(() => [])
      .finally(() => {
        // Si falló, permitir reintentar en la próxima búsqueda.
        if (!cache) promesa = null;
      });
  }
  cache = await promesa;
  return cache;
}

/**
 * Ranking puro sobre un array de noticias (+ título, categoría, extracto).
 * Devuelve hasta `max` resultados con forma de entrada de buscador.
 * Separado del fetch para poder testearlo.
 * @param {Array} indice - Entradas con { id, titulo, categoria, excerpt, anio }
 * @param {string} query - Texto a buscar
 * @param {number} [max=3]
 */
export function rankNoticias(indice, query, max = 3) {
  const q = normalizar(query).trim();
  if (!q || !Array.isArray(indice)) return [];

  const tokens = q.split(/\s+/);

  const scored = indice.map((n) => {
    const hay = normalizar([n.titulo, n.categoria, n.excerpt, String(n.anio)].join(" "));
    let score = 0;
    tokens.forEach((t) => {
      if (!t) return;
      if (hay.includes(t)) score += 1;
      if (normalizar(n.titulo).includes(t)) score += 3;
      if (normalizar(n.categoria).includes(t)) score += 2;
    });
    return { n, score };
  })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score || b.n.id - a.n.id);

  return scored.slice(0, max).map(({ n }) => ({
    id: `noticia-${n.id}`,
    title: n.titulo,
    subtitle: `${n.categoria || "Noticia"}${n.anio ? ` · ${n.anio}` : ""}`,
    categoria: "Noticias",
    tipo: "Noticia",
    ruta: `/noticias/${n.id}`,
  }));
}

/** Busca noticias (índice completo: recientes + histórico). */
export async function buscarNoticias(query, max = 3) {
  const indice = await cargarIndiceNoticias();
  return rankNoticias(indice, query, max);
}