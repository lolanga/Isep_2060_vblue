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

/** Carga (una sola vez) el índice de noticias. En caso de error transitorio
 *  (red/404) NO cachea el fallo: la próxima búsqueda vuelve a intentar. */
export async function cargarIndiceNoticias() {
  if (Array.isArray(cache)) return cache;
  if (!promesa) {
    promesa = fetch(RUTA_INDICE)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => {
        cache = Array.isArray(data) ? data : [];
        return cache;
      })
      .catch(() => {
        cache = null;
        promesa = null;
        return [];
      });
  }
  return promesa;
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

/**
 * Fallback: si el índice no está disponible (404/red), arma un índice mínimo
 * con las noticias recientes que ya viajan en el bundle, para que la búsqueda
 * nunca quede vacía. Import dinámico: solo se paga si el índice falló.
 */
async function indiceDeRespaldo() {
  try {
    const { noticias } = await import("./noticias");
    return noticias.map((n) => ({
      id: n.id,
      titulo: n.titulo,
      categoria: n.categoria,
      excerpt: n.excerpt,
      anio: null,
    }));
  } catch {
    return [];
  }
}

/** Busca noticias (índice completo: recientes + histórico). */
export async function buscarNoticias(query, max = 3) {
  const indice = await cargarIndiceNoticias();
  if (Array.isArray(indice) && indice.length > 0) {
    return rankNoticias(indice, query, max);
  }
  return rankNoticias(await indiceDeRespaldo(), query, max);
}