/**
 * utils/noticias.js
 *
 * Acceso a las noticias del sitio:
 *  - `noticias`           → solo las recientes (año >= 2026), nuevas primero.
 *  - `ANIOS_ARCHIVO`      → años disponibles del histórico (descendente).
 *  - `cargarNoticiasArchivo(anio)` → carga un año del histórico (lazy).
 *  - `obtenerNoticia(id)` → busca en recientes y luego en el histórico.
 */

import { noticias as noticiasCrudas } from "../data/noticias";

// Noticias de más reciente a más antigua, por id descendente.
// El archivo de datos se inserta al final, así que SIN ordenar las
// noticias nuevas quedarían al último de las listas.
export const noticias = [...noticiasCrudas].sort((a, b) => b.id - a.id);

// Cargadores lazy de los años de histórico (solo se importan cuando se piden).
const cargadoresArchivo = import.meta.glob("../data/noticias-archivo/*.js");

/** Años con noticias en el histórico, de más nuevo a más antiguo. */
export const ANIOS_ARCHIVO = Object.keys(cargadoresArchivo)
  .map((k) => Number(k.match(/(\d{4})\.js$/)?.[1]))
  .filter(Boolean)
  .sort((a, b) => b - a);

/** Carga las noticias de un año del histórico, nuevas primero. */
export async function cargarNoticiasArchivo(anio) {
  const mod = await cargadoresArchivo[`../data/noticias-archivo/${anio}.js`]?.();
  if (!mod) return [];
  return [...mod.noticias].sort((a, b) => b.id - a.id);
}

function relacionadasCon(noticia, lista) {
  return lista
    .filter((n) => n.id !== noticia.id && n.categoria === noticia.categoria)
    .slice(0, 3);
}

/**
 * Busca una noticia por id en recientes y luego en el histórico completo.
 * Devuelve { noticia, lista, relacionadas, anio }.
 * - lista: el array que contiene a la noticia (para navegar/relacionadas).
 * - anio:  solo si la noticia está en el histórico.
 */
export async function obtenerNoticia(id) {
  const num = Number(id);

  const enActual = noticias.find((n) => n.id === num);
  if (enActual) {
    return {
      noticia: enActual,
      lista: noticias,
      relacionadas: relacionadasCon(enActual, noticias),
      anio: null,
    };
  }

  for (const anio of ANIOS_ARCHIVO) {
    const lista = await cargarNoticiasArchivo(anio);
    const found = lista.find((n) => n.id === num);
    if (found) {
      return {
        noticia: found,
        lista,
        relacionadas: relacionadasCon(found, lista),
        anio,
      };
    }
  }

  return { noticia: null, lista: [], relacionadas: [], anio: null };
}