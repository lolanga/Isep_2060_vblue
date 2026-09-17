#!/usr/bin/env node
/**
 * scripts/generar-indice-noticias.mjs
 *
 * Construye public/indice-noticias.json con TODAS las noticias
 * (recientes + histórico) en formato liviano, para que el buscador
 * encuentre cualquier noticia sin cargar los datos completos.
 *
 * Campos por noticia: id, titulo, categoria, fecha, fechaCorta, excerpt,
 * img, anio, escuelas. Se ordena por id descendente.
 *
 * Uso: npm run indice:noticias (se ejecuta solo en cada build).
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "..", "src", "data");
const ARCHIVO_DIR = join(DATA_DIR, "noticias-archivo");
const PUBLIC_DIR = join(__dirname, "..", "public");

function leerNoticias(path) {
  const s = readFileSync(path, "utf8");
  const ini = s.indexOf("[");
  const fin = s.lastIndexOf("]");
  return new Function(`return ${s.slice(ini, fin + 1)}`)();
}

const todas = leerNoticias(join(DATA_DIR, "noticias.js"));

if (existsSync(ARCHIVO_DIR)) {
  for (const f of readdirSync(ARCHIVO_DIR).filter((f) => f.endsWith(".js"))) {
    todas.push(...leerNoticias(join(ARCHIVO_DIR, f)));
  }
}

const indice = todas
  .map((n) => {
    const m = (n.fecha || "").match(/\d{4}/);
    return {
      id: n.id,
      titulo: n.titulo,
      categoria: n.categoria,
      fecha: n.fecha,
      fechaCorta: n.fechaCorta,
      excerpt: n.excerpt,
      img: n.img,
      anio: m ? Number(m[0]) : null,
      escuelas: n.escuelas || [],
    };
  })
  .sort((a, b) => b.id - a.id);

mkdirSync(PUBLIC_DIR, { recursive: true });
writeFileSync(join(PUBLIC_DIR, "indice-noticias.json"), JSON.stringify(indice));

console.log(`Índice de noticias: ${indice.length} entradas → public/indice-noticias.json`);