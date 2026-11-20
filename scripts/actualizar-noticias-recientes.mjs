#!/usr/bin/env node
/**
 * actualizar-noticias-recientes.mjs
 *
 * Toma las últimas N noticias publicadas en el sitio oficial
 * (https://www.isepsantafe.edu.ar) y las AGREGA al final de
 * src/data/noticias.js, sin tocar las que ya están cargadas.
 *
 * - Saltea las noticias cuyo título ya existe en el archivo.
 * - Descarga imágenes y adjuntos a public/ (reutiliza los que ya
 *   estén referenciados en src/, sin pisar archivos ajenos).
 * - Solo lecturas (GET) sobre el sitio oficial.
 *
 * Uso: node scripts/actualizar-noticias-recientes.mjs [cantidad]
 *       (por defecto: 10)
 */
import { load } from "cheerio";
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIR_IMG = path.join(ROOT, "public", "img", "noticias");
const DIR_DOCS = path.join(ROOT, "public", "docs");
const SALIDA = path.join(ROOT, "src", "data", "noticias.js");
const SRC = path.join(ROOT, "src");

const BASE = "https://www.isepsantafe.edu.ar";
const MESES = [
  "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO",
  "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE",
];
const MESES_CORTOS = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
const EXT_ARCHIVOS = /\.(pdf|docx?|xlsx?|pptx?|zip|rar|7z|csv|json|txt)$/i;
const EXT_IMAGEN = /\.(jpe?g|png|gif|webp|svg|bmp)$/i;

const CANTIDAD = Math.max(1, parseInt(process.argv[2] || "10", 10) || 10);

/* ── helpers ─────────────────────────────────────────────── */

function corto(u) {
  return crypto.createHash("md5").update(u).digest("hex").slice(0, 8);
}

async function pedir(url, intentos = 3) {
  for (let i = 1; i <= intentos; i++) {
    try {
      const res = await fetch(url, {
        redirect: "follow",
        headers: { "User-Agent": "Mozilla/5.0 (compatible; ISeP-actualizacion/1.0)" },
      });
      if (res.ok) return res;
      console.warn(`  (${res.status}) ${url}`);
    } catch {
      /* reintentar */
    }
    await new Promise((r) => setTimeout(r, 800 * i));
  }
  throw new Error(`no pude obtener ${url}`);
}

async function pool(items, n, worker) {
  let i = 0;
  const trabajadores = [];
  for (let t = 0; t < n; t++) {
    trabajadores.push(
      (async () => {
        while (i < items.length) {
          const idx = i++;
          try {
            await worker(items[idx], idx);
          } catch (e) {
            console.warn("  ✗ " + e.message);
          }
        }
      })()
    );
  }
  await Promise.all(trabajadores);
}

function absUrl(u) {
  if (!u) return null;
  u = u.trim();
  if (!u || u === "#" || /^(mailto:|tel:|data:|javascript:)/i.test(u)) return null;
  if (/^https?:\/\//i.test(u)) return u;
  if (u.startsWith("//")) return "https:" + u;
  if (u.startsWith("/")) return BASE + u;
  return BASE + "/" + u;
}

function esImagenUrl(u) {
  return EXT_IMAGEN.test(u.split("?")[0]);
}

function extraerFecha(pub) {
  let m = /(\d{4})-(\d{2})-(\d{2})/.exec(pub || "");
  let d, mm, a;
  if (m) {
    a = +m[1]; mm = +m[2]; d = +m[3];
  } else {
    const t = new Date(pub || "");
    if (isNaN(t)) {
      const hoy = new Date();
      d = hoy.getUTCDate(); mm = hoy.getUTCMonth() + 1; a = hoy.getUTCFullYear();
    } else {
      d = t.getUTCDate(); mm = t.getUTCMonth() + 1; a = t.getUTCFullYear();
    }
  }
  return {
    fecha: `${d} DE ${MESES[mm - 1]}, ${a}`,
    fechaCorta: `${d} ${MESES_CORTOS[mm - 1]}`,
  };
}

function detectarEscuelas(t) {
  const t2 = (t || "").toLowerCase();
  const res = [];
  const reglas = [
    [["escuela de investigaciones", "investigaciones"], "investigaciones"],
    [["escuela de especialidades", "especialidades en seguridad", "especialidades"], "especialidades"],
    [["escuela superior", "e.s.s.p", "essp", "superior de seguridad"], "superior"],
    [["escuela de policía", "escuela de policia", "de policía", "de policia", "policía santa fe", "oficial de policía", "oficial de policia", "cadetes", "comisario", "subcomisario"], "policia"],
    [["educación a distancia", "educacion a distancia", "a distancia"], "ead"],
  ];
  for (const [keywords, id] of reglas) {
    if (!res.includes(id) && keywords.some((k) => t2.includes(k))) res.push(id);
  }
  return res;
}

function categoriaDe(t) {
  const s = t.toLowerCase();
  if (detectarEscuelas(t).length > 0) return "Escuelas";
  if (/convenio|acuerdo|firma de/.test(s)) return "Convenios";
  if (/curso|capacita|perfeccionamiento|cursado|actualizaci|inscrip|ingreso|preinscrip|cohorte|listado|orden de m|llamado|convocatoria|exámen|examen|evaluaci|propedéutic|propedeutic|mesa de|adeudan|asignación de sedes|asignacion de sedes|taller de|postulant|aspirant|egresad|título|titulo|títulos|titulos/.test(s)) return "Academica";
  if (/jornada|seminario|simposio|congreso|conferencia|evento|ceremonia|colación|colacion|acto|campamento|encuentro|desfile|simulacr|festejo|celebraci/.test(s)) return "Eventos";
  return "Institucional";
}

function normalizarTitulo(t) {
  return (t || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/* ── índice RSS (las más recientes primero) ──────────────── */
async function obtenerIndex(cantidad) {
  const url = `${BASE}/index.php/noticias?format=feed&type=rss&start=0`;
  const xml = await (await pedir(url)).text();
  const $ = load(xml, { xmlMode: true });
  const items = [];
  $("item").each((_, el) => {
    items.push({
      title: $(el).find("title").first().text().trim(),
      link: $(el).find("link").first().text().trim(),
      pub: $(el).find("pubDate").first().text().trim(),
      desc: $(el).find("description").first().text() || "",
    });
  });
  return items.slice(0, cantidad);
}

/* ── detalle de cada noticia ─────────────────────────────── */
async function obtenerDetalle(item) {
  const html = await (await pedir(item.link)).text();
  const $ = load(html);
  const $body = $('div[itemprop="articleBody"]').first();
  const title = $('h1[itemprop="headline"]').first().text().trim() || item.title;
  const pub =
    $('meta[property="datePublished"]').first().attr("content") ||
    $("time[datetime]").first().attr("datetime") ||
    item.pub;

  const $ld = $('script[type="application/ld+json"]').first().text();
  let thumb = null;
  if ($ld.trim()) {
    try {
      const json = JSON.parse($ld);
      const graph = json["@graph"] || json;
      const hallado = Array.isArray(graph)
        ? graph.find((x) => x && (x["@type"] === "Article" || x["@type"] === "NewsArticle"))
        : graph;
      if (hallado && hallado.thumbnailUrl) thumb = absUrl(hallado.thumbnailUrl);
    } catch { /* sin thumbnail */ }
  }

  let bodyHtml = ($body.html() || "").trim();
  if (!bodyHtml && item.desc) bodyHtml = item.desc;

  return { title, pub, thumb, link: item.link, bodyHtml };
}

/* ── limpieza del HTML ───────────────────────────────────── */
function limpiarBody(htmlBruto) {
  const $ = load(`<div id="__raiz__">${htmlBruto}</div>`);
  const $raiz = $("#__raiz__");

  $raiz.find("*").each((_, el) => {
    if (el.childNodes) el.childNodes = el.childNodes.filter((n) => n.type !== "comment");
  });
  $raiz.find("script,style").remove();

  $raiz.find("img").each((_, el) => {
    const src = ($(el).attr("src") || "").trim();
    if (!src || src === BASE || src === BASE + "/" || /^https:\/\/www\.isepsantafe\.edu\.ar\/?$/.test(src)) {
      $(el).remove();
    }
  });

  $raiz.find("a").each((_, el) => {
    const $a = $(el);
    const st = ($a.attr("style") || "").toLowerCase();
    if (/(display\s*:\s*(block|inline-block)|background|padding)/.test(st)) {
      $a.addClass("btn-inscripcion");
    }
    const href = $a.attr("href") || "";
    if (/.*\/tel:/.test(href)) $a.attr("href", href.replace(/.*\/tel:/, "tel:"));
  });

  $raiz.find("*").each((_, el) => {
    const $el = $(el);
    $el.removeAttr("style");
    const cls = ($el.attr("class") || "")
      .split(/\s+/)
      .filter((c) => c === "btn-inscripcion" || c === "info-box");
    if (cls.length) $el.attr("class", cls.join(" "));
    else $el.removeAttr("class");
    ["lang", "align", "valign", "bgcolor", "bordercolor", "background", "border", "cellpadding", "cellspacing", "width", "height", "id"].forEach((a) =>
      $el.removeAttr(a)
    );
  });

  $raiz.find("font,center").each((_, el) => {
    const $el = $(el);
    $el.replaceWith($el.html());
  });

  return { html: $raiz.html(), assetUrls: recolectarAssets($) };
}

function recolectarAssets($) {
  const urls = new Set();
  $("img[src]").each((_, el) => {
    const u = absUrl($(el).attr("src"));
    if (u) urls.add(u);
  });
  $("a[href]").each((_, el) => {
    const href = ($(el).attr("href") || "").trim();
    if (EXT_ARCHIVOS.test(href.split("?")[0])) {
      const u = absUrl(href);
      if (u) urls.add(u);
    }
  });
  return [...urls];
}

/* ── nombres locales (sin pisar nada existente) ──────────── */
async function listarDirectorio(dir) {
  try {
    return (await fs.readdir(dir)).map((f) => f.toLowerCase());
  } catch {
    return [];
  }
}

/** Lee todo src/ para saber qué rutas de assets ya están referenciadas. */
async function rutasReferenciadasEnSrc() {
  const set = new Set();
  async function walk(dir) {
    for (const e of await fs.readdir(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) await walk(p);
      else if (/\.(js|jsx|mjs|css)$/.test(e.name)) {
        const txt = await fs.readFile(p, "utf8");
        for (const m of txt.matchAll(/["'(](\/(?:docs|img\/noticias)\/[^"')\s]+)/g)) set.add(m[1]);
      }
    }
  }
  await walk(SRC);
  return set;
}

async function descargar(url, destino) {
  for (let i = 1; i <= 3; i++) {
    try {
      const res = await fetch(url, { redirect: "follow", headers: { "User-Agent": "Mozilla/5.0" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length === 0) throw new Error("vacío");
      const esImg = esImagenUrl(url);
      const ct = (res.headers.get("content-type") || "").toLowerCase();
      if (esImg && ct && !ct.startsWith("image/")) throw new Error(`no es imagen (${ct})`);
      await fs.mkdir(path.dirname(destino), { recursive: true });
      await fs.writeFile(destino, buf);
      return true;
    } catch (e) {
      if (i === 3) {
        console.warn(`  ✗ ${url} → ${e.message}`);
        return false;
      }
      await new Promise((r) => setTimeout(r, 500 * i));
    }
  }
  return false;
}

/* ── main ────────────────────────────────────────────────── */
async function main() {
  await fs.mkdir(DIR_IMG, { recursive: true });
  await fs.mkdir(DIR_DOCS, { recursive: true });

  const raw = await fs.readFile(SALIDA, "utf8");
  const { noticias: existentes } = await import(pathToFileURL(SALIDA).href);
  const titulos = new Set(existentes.map((n) => normalizarTitulo(n.titulo)));
  let maxId = existentes.reduce((m, n) => Math.max(m, n.id), 0);

  console.log(`▶ noticias actuales en el archivo: ${existentes.length} (max id ${maxId})`);
  console.log(`▶ buscando las últimas ${CANTIDAD} del sitio oficial…`);
  const index = await obtenerIndex(CANTIDAD);
  const nuevas = index.filter((i) => !titulos.has(normalizarTitulo(i.title)));
  console.log(`   ${nuevas.length} nuevas de ${index.length} revisadas`);
  if (nuevas.length === 0) {
    console.log("✔ nada para agregar: el archivo ya está al día.");
    return;
  }

  console.log("▶ descargando detalle…");
  const detalles = [];
  await pool(nuevas, 4, (item, idx) =>
    obtenerDetalle(item).then((d) => {
      detalles[idx] = d;
    })
  );
  const conDetalle = detalles.filter(Boolean);

  console.log("▶ limpiando HTML…");
  const limpias = conDetalle.map((d) => ({ ...d, ...limpiarBody(d.bodyHtml) }));

  // assets a resolver
  const referenciadas = await rutasReferenciadasEnSrc();
  const ocupadosImg = new Set(await listarDirectorio(DIR_IMG));
  const ocupadosDocs = new Set(await listarDirectorio(DIR_DOCS));
  const urlLocal = new Map();

  const resolverNombre = (u) => {
    const esImg = esImagenUrl(u);
    const dir = esImg ? DIR_IMG : DIR_DOCS;
    const ocupados = esImg ? ocupadosImg : ocupadosDocs;
    let base = decodeURIComponent(u.split("?")[0]).split("/").pop() || "archivo";
    base = base
      .replace(/[^a-zA-Z0-9._-]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
    const punti = base.lastIndexOf(".");
    const ext = punti > -1 ? base.slice(punti) : "";
    const nucleo = (punti > -1 ? base.slice(0, punti) : base).slice(0, 70) || "archivo";
    let nombre = `${nucleo}${ext}`;
    const ruta = `${esImg ? "/img/noticias" : "/docs"}/${nombre}`;
    // ya referenciado en src → reutilizar; ya en disco pero ajeno → variante con hash
    if (!referenciadas.has(ruta) && ocupados.has(nombre.toLowerCase())) {
      nombre = `${corto(u)}-${nucleo}${ext}`.slice(0, 90);
    }
    ocupados.add(nombre.toLowerCase());
    return { ruta: `${esImg ? "/img/noticias" : "/docs"}/${nombre}`, abs: path.join(dir, nombre) };
  };

  const assets = new Set();
  limpias.forEach((l) => {
    l.assetUrls.forEach((u) => assets.add(u));
    if (l.thumb) assets.add(l.thumb);
  });

  console.log(`▶ resolviendo ${assets.size} assets…`);
  await pool([...assets], 6, async (u) => {
    const { ruta, abs } = resolverNombre(u);
    const yaDescargado = referenciadas.has(ruta) || (await fs.stat(abs).then(() => true, () => false));
    if (!yaDescargado) {
      const ok = await descargar(u, abs);
      if (!ok) return;
    }
    urlLocal.set(u, ruta);
  });

  const localDe = (u) => (u && urlLocal.get(u)) || null;

  const reescribir = (html) => {
    const $ = load(`<div id="__raiz__">${html}</div>`);
    const $raiz = $("#__raiz__");
    $raiz.find("img[src]").each((_, el) => {
      const u = absUrl($(el).attr("src"));
      const local = localDe(u);
      if (local) $(el).attr("src", local);
      else $(el).remove();
    });
    $raiz.find("a[href]").each((_, el) => {
      const href = ($(el).attr("href") || "").trim();
      if (EXT_ARCHIVOS.test(href.split("?")[0])) {
        const u = absUrl(href);
        const local = localDe(u);
        if (local) $(el).attr("href", local);
      }
    });
    return $raiz.html().replace(/[ \t]+\n/g, "\n").replace(/\n{2,}/g, "\n").trim();
  };

  const entradas = limpias.map((l) => {
    const contenido = reescribir(l.html);
    const fechas = extraerFecha(l.pub);

    const candidatas = [l.thumb, ...recolectarAssets(load(`<div>${l.html}</div>`))]
      .filter((u) => u && esImagenUrl(u) && localDe(u) && !/escudo.*isep/i.test(decodeURIComponent(u.split("?")[0]).split("/").pop()));
    const img = candidatas.length ? localDe(candidatas[0]) : null;

    const $txt = load(`<div>${contenido}</div>`);
    const texto = $txt("div").first().text().replace(/\s+/g, " ").trim();
    const excerpt = texto.length > 165 ? texto.slice(0, 165).trimEnd() + "…" : texto;

    const $aux = load(`<div>${contenido}</div>`);
    const adjuntos = [];
    $aux("a[href]").each((_, el) => {
      const href = ($aux(el).attr("href") || "").trim();
      if (EXT_ARCHIVOS.test(href.split("?")[0])) {
        const nombre = $aux(el).text().replace(/\s+/g, " ").trim() || href.split("/").pop();
        if (!adjuntos.find((x) => x.url === href)) adjuntos.push({ nombre, url: href });
      }
    });

    const obj = {
      titulo: l.title,
      categoria: categoriaDe(l.title),
      fecha: fechas.fecha,
      fechaCorta: fechas.fechaCorta,
      excerpt: excerpt || l.title,
      img: img || null,
      escuelas: detectarEscuelas(l.title),
    };
    if (adjuntos.length) obj.adjuntos = adjuntos;
    obj.contenido = contenido;
    return obj;
  });

  // cronológico ascendente dentro del bloque nuevo
  const fechaNum = (o) => {
    const m = /(\d{1,2}) DE ([A-ZÁÉÍÓÚÑ]+), (\d{4})/.exec(o.fecha);
    if (!m) return 0;
    return +m[3] * 10000 + (MESES.indexOf(m[2]) + 1) * 100 + +m[1];
  };
  entradas.sort((a, b) => fechaNum(a) - fechaNum(b));
  entradas.forEach((e, i) => { e.id = maxId + 1 + i; });
  // reordenar claves igual que el resto del archivo (id primero)
  for (const e of entradas) {
    const { id, titulo, categoria, fecha, fechaCorta, excerpt, img, escuelas, adjuntos, contenido } = e;
    const reorden = { id, titulo, categoria, fecha, fechaCorta, excerpt, img, escuelas };
    if (adjuntos) reorden.adjuntos = adjuntos;
    reorden.contenido = contenido;
    Object.keys(e).forEach((k) => delete e[k]);
    Object.assign(e, reorden);
  }

  // insertar antes del cierre del array
  const cierre = raw.lastIndexOf("];");
  if (cierre < 0) throw new Error("no encontré el cierre de noticias.js");
  const bloque = entradas.map((e) => "  " + JSON.stringify(e) + ",").join("\n");
  const nuevo = raw.slice(0, cierre) + bloque + "\n" + raw.slice(cierre);
  await fs.writeFile(SALIDA, nuevo, "utf8");

  console.log(`\n✔ ${entradas.length} noticias agregadas (ids ${entradas[0].id}–${entradas[entradas.length - 1].id}) en src/data/noticias.js`);
  entradas.forEach((e) => console.log(`   + ${e.id} · ${e.fechaCorta} · ${e.titulo.slice(0, 70)}`));
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error("ERROR:", e);
    process.exit(1);
  });
