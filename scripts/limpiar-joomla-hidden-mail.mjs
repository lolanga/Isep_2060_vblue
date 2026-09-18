/**
 * limpiar-joomla-hidden-mail.mjs — Reemplaza los <joomla-hidden-mail> del contenido
 * migrado (plugin "Proteger correo electrónico" de Joomla) por un mailto real.
 *
 * Joomla ofusca el email en base64: first = usuario, last = dominio, text = email completo.
 * Sin el JS de Joomla, en el sitio nuevo quedaba el texto de respaldo:
 * "Esta dirección de correo electrónico está siendo protegida contra los robots de spam…"
 *
 * Uso: node scripts/limpiar-joomla-hidden-mail.mjs
 * (re-escribe src/data/noticias.js en el lugar; correr con el repo en estado limpio)
 */

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dataPath = join(root, "src", "data", "noticias.js");

const b64 = (s = "") => Buffer.from(s, "base64").toString("utf8");

const stripTags = (s) => s.replace(/<[^>]*>/g, "").trim();

/** Extrae atributos de la etiqueta de apertura <joomla-hidden-mail ...> */
function attrsOf(tagOpen) {
  const attrs = {};
  // En noticias.js los atributos vienen con comillas escapadas (\"...) porque el
  // JSON vivía dentro de un string de JS. Se normalizan antes de parsear.
  const normalized = tagOpen.replace(/\\"/g, '"');
  const re = /([\w-]+)\s*=\s*"([^"]*)"/g;
  let m;
  while ((m = re.exec(normalized)) !== null) attrs[m[1]] = m[2];
  return attrs;
}

const CLOSING = "</joomla-hidden-mail>";
const TAG_RE = /<joomla-hidden-mail\b[^>]*>[\s\S]*?<\/joomla-hidden-mail>/g;

const raw = readFileSync(dataPath, "utf8");
let replaced = 0;

const out = raw.replace(TAG_RE, (full) => {
  const openEnd = full.indexOf(">");
  const tagOpen = full.slice(0, openEnd + 1);
  const inner = full.slice(openEnd + 1, -CLOSING.length);
  const a = attrsOf(tagOpen);

  const local = b64(a.first).trim();
  const domain = b64(a.last).trim();
  if (!local || !domain) {
    // Sin datos decodificables: dejar igual para revisión manual.
    return full;
  }
  const email = `${local}@${domain}`;
  const text = stripTags(b64(a.text)) || email;

  const replacement =
    a["is-link"] === "0"
      ? text // Joomla lo mostraba sin enlace
      : `<a href="mailto:${email}">${text}</a>`;

  replaced++;
  // noticias.js es JS: las comillas dentro de los strings van escapadas (\").
  return replacement.replace(/"/g, '\\"');
});

writeFileSync(dataPath, out, "utf8");
console.log(`OK — ${replaced} joomla-hidden-mail reemplazados por mailto.`);