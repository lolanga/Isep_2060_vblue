#!/usr/bin/env node
/**
 * Reparación de src/data/noticias.js
 *
 * El archivo quedó corrupto al final: la noticia 327 quedó HUÉRFANA después del
 * cierre real del array (`];` + residuo `,"categoria":...`). Además el parseo
 * por "último ]" falla porque hay corchetes dentro del contenido HTML.
 *
 * Pasos:
 *  1. Lee noticias.js y localiza el seam real `];,"categoria":...`.
 *  2. Parsea el array válido (de `[` hasta el cierre `]` del seam).
 *  3. Parsea cada noticias-archivo/<anio>.js (de `[` a su último `]`).
 *  4. Compara contra git HEAD: ids esperados vs. presentes (detección de pérdida).
 *  5. Si falta la 327, la reinserta (restaurando desde HEAD).
 *  6. Regenera SOLO noticias.js en el formato canónico (igual que migrar-archivo).
 *     Es idempotente: mismas noticias, mismas escritura.
 *
 * Uso: node scripts/reparar-noticias-js.mjs
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DATA_DIR = join(ROOT, "src", "data");
const NOTICIAS = join(DATA_DIR, "noticias.js");
const ARCHIVO_DIR = join(DATA_DIR, "noticias-archivo");
const SEAM = '];,"categoria":"Institucional"';

function parseArrayDesde(pathOrString) {
  const s = pathOrString;
  const ini = s.indexOf("[");
  const fin = s.lastIndexOf("]");
  if (ini === -1 || fin === -1) throw new Error("sin corchetes");
  return new Function(`return ${s.slice(ini, fin + 1)}`)();
}

// 1) noticias.js actual
const raw = readFileSync(NOTICIAS, "utf8");
const seamIdx = raw.indexOf(SEAM);
if (seamIdx === -1) {
  console.log("Sin seam: el archivo de recientes está sano (nada que reparar).");
} else {
  // Parsea solo la parte válida: de "[" hasta la "]" del seam (incl. esta).
  const ini = raw.indexOf("[");
  let recientes;
  try {
    recientes = new Function(`return ${raw.slice(ini, seamIdx + 1)}`)();
  } catch (e) {
    console.error("El prefijo válido tampoco parsea:", e.message);
    process.exit(1);
  }
  console.log(`Recientes (validas): ${recientes.length} · ids ${Math.min(...recientes.map(n=>n.id))}..${Math.max(...recientes.map(n=>n.id))}`);

  // 2) archivo por años
  const porId = new Map();
  for (const n of recientes) porId.set(n.id, n);
  if (existsSync(ARCHIVO_DIR)) {
    for (const f of readdirSync(ARCHIVO_DIR).filter((f) => f.endsWith(".js"))) {
      const arr = parseArrayDesde(readFileSync(join(ARCHIVO_DIR, f), "utf8"));
      for (const n of arr) porId.set(n.id, n);
      console.log(`  archivo ${f}: ${arr.length} notas`);
    }
  }
  console.log(`Total únicas encontradas: ${porId.size}`);

  // 3) comparación contra HEAD
  const head = execSync("git show HEAD:src/data/noticias.js", { cwd: ROOT }).toString();
  const headAll = parseArrayDesde(head);
  const headIds = new Set(headAll.map((n) => n.id));
  const faltan = [...headIds].filter((id) => !porId.has(id)).sort((a, b) => a - b);
  const extra = [...porId.keys()].filter((id) => !headIds.has(id)).sort((a, b) => a - b);
  console.log(`HEAD total: ${headAll.length} · faltan vs HEAD: [${faltan}] · extra vs HEAD: [${extra}]`);

  if (faltan.length) {
    for (const id of faltan) {
      const n = headAll.find((x) => x.id === id);
      if (!n) continue;
      console.log(`  recuperando noticia ${id} («${(n.titulo||'').slice(0,40)}») desde HEAD`);
      porId.set(id, n);
    }
  }

  // 4) re-separar por año (igual que migrar-archivo, CORTE 2026)
  const CORTE = 2026;
  const recientesFinal = [];
  const porAnio = new Map();
  for (const n of [...porId.values()]) {
    const m = (n.fecha || "").match(/\d{4}/);
    const a = m ? Number(m[0]) : null;
    if (a === null || a >= CORTE) recientesFinal.push(n);
    else {
      if (!porAnio.has(a)) porAnio.set(a, []);
      porAnio.get(a).push(n);
    }
  }
  recientesFinal.sort((a, b) => a.id - b.id);

  // 5) escribir SOLO noticias.js en formato canónico
  const cuerpo = recientesFinal.map((n) => "  " + JSON.stringify(n) + ",").join("\n");
  const cabecera = `/**
 * src/data/noticias.js
 *
 * Noticias RECIENTES (año >= ${CORTE}). El editor sigue este archivo (id = máx + 1).
 * Las noticias anteriores a ${CORTE} viven en src/data/noticias-archivo/<anio>.js.
 * Para re-separar: npm run migrar:archivo.
 * Para que el buscador las incluya a todas: ver scripts/generar-indice-noticias.mjs.
 */`;
  const nuevo = `${cabecera}\nexport const noticias = [\n${cuerpo}\n];\n`;
  writeFileSync(NOTICIAS, nuevo, "utf8");
  console.log(`\nEscrito noticias.js: ${recientesFinal.length} noticias (ids ${recientesFinal[0].id}..${recientesFinal[recientesFinal.length-1].id}).`);

  // 6) verificación final
  const verif = new Function(`return ${readFileSync(NOTICIAS, "utf8").slice(nuevo.indexOf("[") , nuevo.lastIndexOf("]") + 1)}`)();
  console.log("Verificación post-escritura: OK →", verif.length, "noticias, ultima id", verif[verif.length - 1].id);
}