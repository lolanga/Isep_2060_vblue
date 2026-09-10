import { noticias as noticiasCrudas } from "../data/noticias";

// Noticias de más reciente a más antigua, por id descendente.
// El archivo de datos se inserta al final, así que SIN ordenar las
// noticias nuevas quedarían al último de las listas.
export const noticias = [...noticiasCrudas].sort((a, b) => b.id - a.id);