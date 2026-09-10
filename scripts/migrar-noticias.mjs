#!/usr/bin/env node
/**
 * migrar-noticias.mjs
 * Migra las noticias del sitio Joomla actual (https://www.isepsantafe.edu.ar)
 * al esquema de src/data/noticias.js del sitio nuevo.
 *
 * Solo hace lecturas (GET) sobre el sitio actual: no lo modifica.
 * Descarga imágenes y adjuntos al proyecto, limpia estilos inline y
 * reemplaza src/data/noticias.js completo.
 *
 * Uso: node scripts/migrar-noticias.mjs
 */
import { load } from "cheerio";
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIR_IMG = path.join(ROOT, "public", "img", "noticias");
const DIR_DOCS = path.join(ROOT, "public", "docs");
const SALIDA = path.join(ROOT, "src", "data", "noticias.js");

const BASE = "https://www.isepsantafe.edu.ar";
const MESES = [
  "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO",
  "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE",
];
const MESES_CORTOS = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
const EXT_ARCHIVOS = /\.(pdf|docx?|xlsx?|pptx?|zip|rar|7z|csv|json|txt)$/i;
const EXT_IMAGEN = /\.(jpe?g|png|gif|webp|svg|bmp)$/i;

/* registro global de archivos descargados (url → { nombre, ok, error }) */
const tree = { files: new Map() };

function corto(u) {
  return crypto.createHash("md5").update(u).digest("hex").slice(0, 8);
}

let conteoAssets = 0;
const fallos = [];
const sinImagen = [];

/* ── helpers ─────────────────────────────────────────────── */

async function pedir(url, intentos = 3) {
  for (let i = 1; i <= intentos; i++) {
    try {
      const res = await fetch(url, {
        redirect: "follow",
        headers: { "User-Agent": "Mozilla/5.0 (compatible; ISeP-migracion/1.0)" },
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

function nombreLocal(url, directorio) {
  const existente = tree.files.get(url);
  if (existente) return existente;

  let base = decodeURIComponent(url.split("?")[0]).split("/").pop() || "archivo";
  base = base
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  const punti = base.lastIndexOf(".");
  const ext = punti > -1 ? base.slice(punti) : "";
  const núcleo = (punti > -1 ? base.slice(0, punti) : base).slice(0, 70) || "archivo";

  // evitar colisión de nombre entre URLs distintas (mismo "logo.jpg", etc.)
  let nombre = `${núcleo}${ext}`;
  const ocupado = [...tree.files.values()].some((f) => f.nombre === nombre);
  if (ocupado) nombre = `${corto(url)}-${núcleo}${ext}`.slice(0, 90);

  const registro = { nombre, ok: null, error: null };
  tree.files.set(url, registro);
  return registro;
}

async function descargar(url) {
  const esImg = esImagenUrl(url);
  const dir = esImg ? DIR_IMG : DIR_DOCS;
  const registro = nombreLocal(url, dir);
  const destino = path.join(dir, registro.nombre);

  for (let i = 1; i <= 3; i++) {
    try {
      const res = await fetch(url, { redirect: "follow", headers: { "User-Agent": "Mozilla/5.0" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length === 0) throw new Error("vacío");
      const ct = (res.headers.get("content-type") || "").toLowerCase();
      if (esImg && ct && !ct.startsWith("image/")) throw new Error(`no es imagen (${ct})`);
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(destino, buf);
      registro.ok = true;
      conteoAssets++;
      return;
    } catch (e) {
      if (i === 3) {
        registro.ok = false;
        registro.error = e.message;
        fallos.push({ url, error: e.message });
      } else {
        await new Promise((r) => setTimeout(r, 500 * i));
      }
    }
  }
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

/* ── paso 1: índice desde el feed RSS paginado ───────────── */
async function obtenerIndex() {
  const mapa = new Map();
  for (let start = 0; start < 500; start += 10) {
    const url = `${BASE}/index.php/noticias?format=feed&type=rss&start=${start}`;
    const xml = await (await pedir(url)).text();
    const $ = load(xml, { xmlMode: true });
    let n = 0;
    $("item").each((_, el) => {
      const title = $(el).find("title").first().text().trim();
      const link = $(el).find("link").first().text().trim();
      const pub = $(el).find("pubDate").first().text().trim();
      const desc = $(el).find("description").first().text() || "";
      if ((title || link) && !mapa.has(link)) mapa.set(link, { title, link, pub, desc });
      n++;
    });
    console.log(`feed start=${start}: ${n} items (acumulado ${mapa.size})`);
    if (n < 10) break;
    await new Promise((r) => setTimeout(r, 150));
  }
  return [...mapa.values()];
}

/* ── paso 2: detalle de cada noticia ─────────────────────── */
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
    } catch { /* sin thumbnail en LD+JSON */ }
  }

  let bodyHtml = ($body.html() || "").trim();
  if (!bodyHtml && item.desc) bodyHtml = item.desc;

  return { title, pub, thumb, link: item.link, bodyHtml };
}

/* ── paso 3: limpieza del HTML ───────────────────────────── */
function limpiarBody(htmlBruto) {
  const $ = load(`<div id="__raiz__">${htmlBruto}</div>`);
  const $raiz = $("#__raiz__");

  // comentarios
  $raiz.find("*").each((_, el) => {
    if (el.childNodes) el.childNodes = el.childNodes.filter((n) => n.type !== "comment");
  });

  // scripts / estilos embebidos
  $raiz.find("script,style").remove();

  // imágenes rotas del intro (apuntan a la raíz del sitio)
  $raiz.find("img").each((_, el) => {
    const src = ($(el).attr("src") || "").trim();
    if (!src || src === BASE || src === BASE + "/" || /^https:\/\/www\.isepsantafe\.edu\.ar\/?$/.test(src)) {
      $(el).remove();
    }
  });

  // enlaces tipo botón → clase .btn-inscripcion (conserva los "botones")
  $raiz.find("a").each((_, el) => {
    const $a = $(el);
    const st = ($a.attr("style") || "").toLowerCase();
    if (/(display\s*:\s*(block|inline-block)|background|padding)/.test(st)) {
      $a.addClass("btn-inscripcion");
    }
    const href = $a.attr("href") || "";
    if (/.*\/tel:/.test(href)) $a.attr("href", href.replace(/.*\/tel:/, "tel:"));
  });

  // quitar atributos de presentación
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

  // envolventes sin sentido semántico
  $raiz.find("font,center").each((_, el) => {
    const $el = $(el);
    $el.replaceWith($el.html());
  });

  return {
    html: $raiz.html(),
    assetUrls: recolectarAssets($),
  };
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

/* mapa url → ruta local (se completa luego de descargar) */
const urlLocal = new Map();
function localDe(u) {
  const r = urlLocal.get(u);
  return r && r.ok ? r.ruta : null;
}

/* ── paso 5: reescribir assets en el HTML ────────────────── */
function reescribirAssets(html, $fn) {
  const $ = $fn(`<div id="__raiz__">${html}</div>`);
  const $raiz = $("#__raiz__");
  $raiz.find("img[src]").each((_, el) => {
    const u = absUrl($(el).attr("src"));
    const local = u ? localDe(u) : null;
    if (local) $(el).attr("src", local);
    else $(el).remove(); // imagen no descargable (404/dominio caído) → no dejar rota
  });
  $raiz.find("a[href]").each((_, el) => {
    const href = ($(el).attr("href") || "").trim();
    if (EXT_ARCHIVOS.test(href.split("?")[0])) {
      const u = absUrl(href);
      const local = u ? localDe(u) : null;
      if (local) $(el).attr("href", local);
    }
  });
  const htmlFinal = $raiz.html();
  return htmlFinal.replace(/[ \t]+\n/g, "\n").replace(/\n{2,}/g, "\n").trim();
}

/* ── main ────────────────────────────────────────────────── */
async function main() {
  await fs.mkdir(DIR_IMG, { recursive: true });
  await fs.mkdir(DIR_DOCS, { recursive: true });

  console.log("▶ índice de noticias (feed RSS paginado)…");
  const index = await obtenerIndex();
  console.log(`index: ${index.length} noticias`);

  console.log("\n▶ descargando detalle de cada noticia…");
  const detalles = [];
  await pool(index, 4, (item, idx) =>
    obtenerDetalle(item).then((d) => {
      detalles[idx] = d;
      if (idx % 25 === 0) console.log(`  detalle ${idx + 1}/${index.length}`);
    })
  );
  const conDetalle = detalles.filter(Boolean);
  console.log(`detalles obtenidos: ${conDetalle.length} de ${index.length}`);

  console.log("\n▶ limpiando HTML…");
  const limpias = [];
  for (const d of conDetalle) {
    try {
      limpias.push({ ...d, ...limpiarBody(d.bodyHtml) });
    } catch (e) {
      console.warn("  ✗ no pude limpiar", d.link, e.message);
    }
  }

  // pre-registrar nombres locales antes de descargar (colisiones)
  const assets = new Set();
  limpias.forEach((l) => {
    l.assetUrls.forEach((u) => assets.add(u));
    if (l.thumb) assets.add(l.thumb);
  });
  for (const u of assets) nombreLocal(u, esImagenUrl(u) ? DIR_IMG : DIR_DOCS);

  console.log(`assets únicos: ${assets.size}`);
  console.log("\n▶ descargando assets…");
  await pool([...assets], 6, (u) => descargar(u));

  // poblar el mapa url → ruta local
  for (const [u, info] of tree.files) {
    if (info.ok) {
      const dir = esImagenUrl(u) ? "/img/noticias" : "/docs";
      urlLocal.set(u, { ok: true, ruta: `${dir}/${info.nombre}` });
    }
  }

  console.log("\n▶ generando noticias.js…");
  let entradas = limpias.map((l) => {
    const contenido = reescribirAssets(l.html, load);
    const escuelas = detectarEscuelas(l.title);
    const cat = categoriaDe(l.title);
    const fechas = extraerFecha(l.pub);

    // imagen principal: thumbnail real o primera imagen del cuerpo descargada
    // (se descarta el logo "escudo ISeP" que firma el pie de muchas noticias)
    const candidatas = [l.thumb, ...recolectarAssets(load(`<div>${l.html}</div>`))]
      .filter((u) => u && esImagenUrl(u) && localDe(u) && !/escudo.*isep/i.test(u));
    const img = candidatas.length ? localDe(candidatas[0]) : null;

    // excerpt
    const $txt = load(`<div>${contenido}</div>`);
    const texto = $txt("div").first().text().replace(/\s+/g, " ").trim();
    const excerpt = texto.length > 165 ? texto.slice(0, 165).trimEnd() + "…" : texto;

    // adjuntos (enlaces a archivos con extensión)
    const $aux = load(`<div>${contenido}</div>`);
    const adjuntos = [];
    $aux("a[href]").each((_, el) => {
      const href = ($aux(el).attr("href") || "").trim();
      if (EXT_ARCHIVOS.test(href.split("?")[0])) {
        const nombre = $aux(el).text().replace(/\s+/g, " ").trim() || href.split("/").pop();
        if (!adjuntos.find((x) => x.url === href)) adjuntos.push({ nombre, url: href });
      }
    });

    if (!img) sinImagen.push(l.title);

    return {
      titulo: l.title,
      categoria: cat,
      fecha: fechas.fecha,
      fechaCorta: fechas.fechaCorta,
      excerpt: excerpt || l.title,
      img,
      escuelas,
      adjuntos: adjuntos.length ? adjuntos : undefined,
      contenido,
      _link: l.link,
    };
  });

  if (entradas.length === 0) {
    console.error("✗ no se obtuvo ninguna noticia; aborto para no pisar noticias.js");
    process.exit(1);
  }

  // cronológico ascendente (id 1 = la más antigua; el sort de la app muestra la más nueva)
  entradas.sort((a, b) => fechaNum(a) - fechaNum(b));

  const datos = [];
  let id = 0;
  for (const e of entradas) {
    const obj = {
      id: ++id,
      titulo: e.titulo,
      categoria: e.categoria,
      fecha: e.fecha,
      fechaCorta: e.fechaCorta,
      excerpt: e.excerpt,
      img: e.img || null,
      escuelas: e.escuelas,
    };
    if (e.adjuntos) obj.adjuntos = e.adjuntos;
    obj.contenido = e.contenido;
    datos.push(obj);
  }

  const lineas = [
    "// noticias migradas desde https://www.isepsantafe.edu.ar (sitio Joomla) el " + new Date().toISOString().slice(0, 10),
    "export const noticias = [",
  ];
  for (const d of datos) lineas.push("  " + JSON.stringify(d) + ",");
  lineas.push("];");
  await fs.writeFile(SALIDA, lineas.join("\n") + "\n", "utf8");

  console.log(`\n✔ ${datos.length} noticias escritas en ${path.relative(ROOT, SALIDA)}`);
  console.log(`  assets descargados: ${conteoAssets}`);
  console.log(`  sin imagen: ${sinImagen.length}`);
  if (sinImagen.length) sinImagen.forEach((t) => console.log("    –", t));
  if (fallos.length) {
    console.log(`  fallos de descarga: ${fallos.length}`);
    fallos.forEach((f) => console.log("    ✗", f.url, f.error));
  }
}

function fechaNum(obj) {
  const m = /(\d{1,2}) DE ([A-ZÁÉÍÓÚÑ]+), (\d{4})/.exec(obj.fecha);
  if (!m) return 0;
  const mm = MESES.indexOf(m[2]) + 1;
  return +m[3] * 10000 + mm * 100 + +m[1];
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error("ERROR:", e);
    process.exit(1);
  });