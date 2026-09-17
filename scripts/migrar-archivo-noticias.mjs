#!/usr/bin/env node
/**
 * scripts/migrar-archivo-noticias.mjs
 *
 * Separa las noticias en:
 *   - src/data/noticias.js                     → años >= CORTE (recientes)
 *   - src/data/noticias-archivo/<anio>.js      → años <  CORTE (histórico)
 *
 * Uso: npm run migrar:archivo
 * Idempotente: junta noticias.js + los archivos de histórico existentes,
 * los agrupa por año y los vuelve a escribir. NO cambia los ids.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "..", "src", "data");
const ARCHIVO_DIR = join(DATA_DIR, "noticias-archivo");
const CORTE = 2026; // años menores a CORTE van al histórico

function leerNoticias(path) {
  const s = readFileSync(path, "utf8");
  const ini = s.indexOf("[");
  const fin = s.lastIndexOf("]");
  return new Function(`return ${s.slice(ini, fin + 1)}`)();
}

function escribirNoticias(path, arr, cabecera) {
  const body = arr.map((n) => "  " + JSON.stringify(n) + ",").join("\n");
  writeFileSync(path, `${cabecera}\nexport const noticias = [\n${body}\n];\n`);
}

function anioDe(n) {
  const m = (n.fecha || "").match(/\d{4}/);
  return m ? Number(m[0]) : null;
}

// 1) Juntar todo: noticias.js actual + archivos de años existentes
let todas = leerNoticias(join(DATA_DIR, "noticias.js"));

if (existsSync(ARCHIVO_DIR)) {
  for (const f of readdirSync(ARCHIVO_DIR).filter((f) => f.endsWith(".js"))) {
    todas = todas.concat(leerNoticias(join(ARCHIVO_DIR, f)));
  }
}

// 2) Descartar duplicados por id (por si un archivo repite un id de noticias.js)
const porId = new Map();
for (const n of todas) porId.set(n.id, n);
todas = [...porId.values()];

// 3) Agrupar por año
const recientes = [];
const porAnio = new Map();
for (const n of todas) {
  const a = anioDe(n);
  if (a === null || a >= CORTE) {
    recientes.push(n);
  } else {
    if (!porAnio.has(a)) porAnio.set(a, []);
    porAnio.get(a).push(n);
  }
}

recientes.sort((a, b) => a.id - b.id);

// 4) Escribir recientes
escribirNoticias(
  join(DATA_DIR, "noticias.js"),
  recientes,
  `/**
 * src/data/noticias.js
 *
 * Noticias RECIENTES (año >= ${CORTE}). El editor sigue este archivo (id = máx + 1).
 * Las noticias anteriores a ${CORTE} viven en src/data/noticias-archivo/<anio>.js.
 * Para re-separar: npm run migrar:archivo.
 * Para que el buscador las incluya a todas: ver scripts/generar-indice-noticias.mjs.
 */`
);

// 5) Escribir histórico por año
mkdirSync(ARCHIVO_DIR, { recursive: true });
const anos = [...porAnio.keys()].sort((a, b) => a - b);
for (const a of anos) {
  const arr = porAnio.get(a).sort((x, y) => x.id - y.id);
  escribirNoticias(
    join(ARCHIVO_DIR, `${a}.js`),
    arr,
    `/**
 * src/data/noticias-archivo/${a}.js
 *
 * Noticias del año ${a} (${arr.length} notas) — histórico.
 * Generado por: npm run migrar:archivo. No editar a mano.
 */`
  );
}

console.log("Histórico:");
for (const a of anos) console.log(`   ${a}: ${porAnio.get(a).length} notas`);
console.log(`Recientes (${CORTE}+): ${recientes.length} notas`);
console.log("Listo.");