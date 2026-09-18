#!/usr/bin/env node
/**
 * scripts/optimizar-imagenes.mjs
 *
 * Convierte las imágenes raster (PNG/JPG) de public/img y src/assets a WebP
 * optimizado, redimensionando según el uso real en el sitio.
 *
 * - NO borra ni sobrescribe los originales: escribe <nombre>.webp al lado.
 * - Uso:
 *     npm run img:optimize              → genera todos los .webp + reporte
 *     npm run img:optimize -- --force   → reconvierte aunque ya exista el .webp
 *     npm run img:optimize -- --update-refs
 *                                       → además reescribe las referencias
 *                                         .png/.jpg → .webp en src/ cuando el
 *                                         .webp fue generado
 *
 * Tras verificar visualmente, se pueden borrar los originales para liberar
 * el peso anterior.
 */

import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC_DIR = join(ROOT, "public");
const SRC_DIR = join(ROOT, "src");
const RASTER = new Set([".png", ".jpg", ".jpeg"]);

const FORCE = process.argv.includes("--force");
const UPDATE_REFS = process.argv.includes("--update-refs");

const ICONO_RE = /escudo|sin-fondo|logo|favicon|icon/i;

/** Recorre un directorio y devuelve todos los archivos. */
async function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walk(p, out);
    else out.push(p);
  }
  return out;
}

/** Define el objetivo de conversión según el nombre y tamaño de la imagen. */
async function plan(srcPath) {
  const buf = await readFile(srcPath);
  const meta = await sharp(buf).metadata();
  const esIcono = ICONO_RE.test(srcPath);
  if (esIcono) {
    return { tipo: "icono", resize: { width: 128, height: 128, fit: "inside", withoutEnlargement: true }, quality: 84, buf, meta };
  }
  const w = meta.width || 0;
  const maxW = w > 1600 ? 1400 : w > 1280 ? 1280 : w;
  return { tipo: "contenido", resize: { width: maxW, withoutEnlargement: true, fit: "inside" }, quality: 78, buf, meta };
}

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

const files = [];
for (const dir of [join(PUBLIC_DIR, "img"), join(SRC_DIR, "assets")]) {
  for (const f of await walk(dir)) {
    if (RASTER.has(extname(f).toLowerCase())) files.push(f);
  }
}

const refMap = new Map(); // original (url pública o path relativo a src) → webp
let ok = 0, saltados = 0, errores = 0, bytesAntes = 0, bytesDespues = 0;
const filas = [];

for (const srcPath of files) {
  const ext = extname(srcPath).toLowerCase();
  const destPath = srcPath.slice(0, -ext.length) + ".webp";

  /** Deja constancia de la referencia original → .webp (para --update-refs). */
  const registrarRef = () => {
    if (srcPath.startsWith(PUBLIC_DIR)) {
      const urlOrig = "/" + relative(PUBLIC_DIR, srcPath).replace(/\\/g, "/");
      refMap.set(urlOrig, urlOrig.slice(0, -ext.length) + ".webp");
    } else {
      const relSrc = relative(SRC_DIR, srcPath).replace(/\\/g, "/");
      refMap.set(relSrc, relSrc.slice(0, -ext.length) + ".webp");
    }
  };

  try {
    const srcStat = await stat(srcPath);
    if (!FORCE && existsSync(destPath)) {
      const dStat = await stat(destPath);
      if (dStat.mtimeMs >= srcStat.mtimeMs) { saltados++; registrarRef(); continue; }
    }

    const { tipo, resize, quality, buf } = await plan(srcPath);
    const out = await sharp(buf).rotate().resize(resize).webp({ quality, effort: 5 }).toBuffer();
    await writeFile(destPath, out);

    bytesAntes += srcStat.size;
    bytesDespues += out.length;
    ok++;
    filas.push({ rel: relative(ROOT, srcPath).replace(/\\/g, "/"), tipo, antes: srcStat.size, despues: out.length });
    registrarRef();
  } catch (err) {
    errores++;
    console.error(`  ✗ ${relative(ROOT, srcPath)}: ${err.message}`);
  }
}

filas.sort((a, b) => b.antes - a.antes);
console.log("\nOptimizadas:", ok, "| saltadas:", saltados, "| errores:", errores);
console.log(`Peso antes: ${(bytesAntes / 1048576).toFixed(2)} MB → después: ${(bytesDespues / 1048576).toFixed(2)} MB ` +
  `(${bytesAntes ? (100 - (bytesDespues / bytesAntes) * 100).toFixed(0) : 0}% menos)\n`);
console.log("Top 15:");
for (const f of filas.slice(0, 15)) {
  console.log(`  ${kb(f.antes).padStart(8)} → ${kb(f.despues).padStart(8)}  [${f.tipo}]  ${f.rel}`);
}

if (UPDATE_REFS) {
  const srcFiles = (await walk(SRC_DIR)).filter((f) => /\.(jsx?|css)$/.test(f));
  let cambios = 0, archivosTocados = 0;
  for (const f of srcFiles) {
    let txt = await readFile(f, "utf8");
    const original = txt;
    for (const [orig, webp] of refMap) {
      if (txt.includes(orig)) txt = txt.split(orig).join(webp);
    }
    if (txt !== original) { await writeFile(f, txt); cambios++; archivosTocados++; }
  }
  console.log(`\nReferencias actualizadas en ${archivosTocados} archivo(s) de src/ (${cambios} con cambios).`);
} else {
  console.log("\n(referencias NO modificadas; corré con --update-refs para reescribirlas)");
}
