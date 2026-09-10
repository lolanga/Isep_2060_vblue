/**
 * pages/admin/NoticiaNueva.jsx
 *
 * Herramienta interna para crear noticias para ISeP 2026.
 * Ruta: /admin/noticias/nueva
 *
 * - En dev (npm run dev): acceso directo
 * - En producción: requiere VITE_ADMIN_PIN para acceder
 *
 * Genera el objeto JS listo para copiar y pegar en noticias.js
 */

import { useState, useCallback, useEffect, useMemo } from "react";
import { Navigate } from "react-router-dom";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";

const CATEGORIAS = ["Institucional", "Academica", "Escuelas", "Eventos", "Convenios"];

const ESCUELAS = [
  { id: "policia", label: "Policía" },
  { id: "superior", label: "Superior" },
  { id: "especialidades", label: "Especialidades" },
  { id: "investigaciones", label: "Investigaciones" },
  { id: "ead", label: "EaD" },
];

const MESES_ES = [
  "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO",
  "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE",
];

const MESES_CORTOS = [
  "ENE", "FEB", "MAR", "ABR", "MAY", "JUN",
  "JUL", "AGO", "SEP", "OCT", "NOV", "DIC",
];

function formatDateLong(d) {
  return `${d.getDate()} DE ${MESES_ES[d.getMonth()]}, ${d.getFullYear()}`;
}

function formatDateShort(d) {
  return `${d.getDate()} ${MESES_CORTOS[d.getMonth()]} ${d.getFullYear()}`;
}

/** Genera el objeto JS de la noticia listo para pegar en noticias.js */
function generateCode(noticia) {
  const fields = [];
  fields.push(`    id: ${noticia.id}`);
  fields.push(`    titulo: ${JSON.stringify(noticia.titulo)}`);
  fields.push(`    categoria: ${JSON.stringify(noticia.categoria)}`);
  fields.push(`    fecha: ${JSON.stringify(noticia.fecha)}`);
  fields.push(`    fechaCorta: ${JSON.stringify(noticia.fechaCorta)}`);
  fields.push(`    excerpt: ${JSON.stringify(noticia.excerpt)}`);

  if (noticia.img) {
    fields.push(`    img: ${JSON.stringify(noticia.img)}`);
  } else {
    fields.push(`    img: null`);
  }

  if (noticia.escuelas.length > 0) {
    fields.push(`    escuelas: ${JSON.stringify(noticia.escuelas)}`);
  }

  if (noticia.adjuntos.length > 0) {
    const adjStr = noticia.adjuntos
      .map((a) => `      { nombre: ${JSON.stringify(a.nombre)}, url: ${JSON.stringify(a.url)} }`)
      .join(",\n");
    fields.push(`    adjuntos: [\n${adjStr}\n    ]`);
  }

  if (noticia.contenido) {
    fields.push(`    contenido: \`\n${noticia.contenido}\n  \``);
  }

  return `  {\n${fields.join(",\n")}\n  },`;
}

// ── PIN Gate ──
function PinForm({ children }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [authorized, setAuthorized] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === import.meta.env.VITE_ADMIN_PIN) {
      setAuthorized(true);
    } else {
      setError(true);
      setInput("");
    }
  };

  if (authorized) return children;

  return (
    <div className="admin-page">
      <div className="admin-pin">
        <span className="material-symbols-outlined" style={{ fontSize: "2.5rem", color: "var(--primary)" }}>lock</span>
        <h2 style={{ margin: 0, color: "var(--primary)" }}>Acceso restringido</h2>
        <p style={{ color: "var(--slate-500)", margin: 0 }}>Ingresá el PIN para continuar</p>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
          <input
            type="password"
            className="admin-pin__input"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="••••"
            autoFocus
          />
          {error && <span className="admin-pin__error">PIN incorrecto</span>}
          <button type="submit" className="admin-pin__btn">Ingresar</button>
        </form>
      </div>
    </div>
  );
}

function PinGate({ children }) {
  const isDev = import.meta.env.DEV;
  const pin = import.meta.env.VITE_ADMIN_PIN;

  // En producción sin PIN configurado → ruta inaccesible (redirige al home)
  if (!isDev && !pin) return <Navigate to="/" replace />;

  // En dev, acceso directo. En producción con PIN, pedir el PIN.
  if (isDev) return children;

  return <PinForm>{children}</PinForm>;
}

// ── Toolbar del WYSIWYG ──
function Toolbar({ editor }) {
  if (!editor) return null;

  return (
    <div className="admin-editor__toolbar">
      <button
        type="button"
        title="Negrita"
        className={editor.isActive("bold") ? "is-active" : ""}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <strong>B</strong>
      </button>
      <button
        type="button"
        title="Cursiva"
        className={editor.isActive("italic") ? "is-active" : ""}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <em>I</em>
      </button>
      <button
        type="button"
        title="Subrayado"
        className={editor.isActive("underline") ? "is-active" : ""}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <span style={{ textDecoration: "underline" }}>U</span>
      </button>

      <div className="separator" />

      <button
        type="button"
        title="Título 2"
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        H2
      </button>
      <button
        type="button"
        title="Título 3"
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        H3
      </button>

      <div className="separator" />

      <button
        type="button"
        title="Lista"
        className={editor.isActive("bulletList") ? "is-active" : ""}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>format_list_bulleted</span>
      </button>
      <button
        type="button"
        title="Lista numerada"
        className={editor.isActive("orderedList") ? "is-active" : ""}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>format_list_numbered</span>
      </button>

      <div className="separator" />

      <button
        type="button"
        title="Cita"
        className={editor.isActive("blockquote") ? "is-active" : ""}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>format_quote</span>
      </button>
      <button
        type="button"
        title="Enlace"
        className={editor.isActive("link") ? "is-active" : ""}
        onClick={() => {
          const url = window.prompt("URL del enlace:");
          if (url) editor.chain().focus().setLink({ href: url, target: "_blank" }).run();
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>link</span>
      </button>
      <button
        type="button"
        title="Insertar imagen (URL)"
        onClick={() => {
          const url = window.prompt("URL de la imagen:");
          if (url) editor.chain().focus().setImage({ src: url }).run();
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>image</span>
      </button>
    </div>
  );
}

// ── Componente principal ──
function NoticiaNuevaInner() {
  const now = useMemo(() => new Date(), []);
  const [nextId, setNextId] = useState(16);

  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState(CATEGORIAS[0]);
  const [excerpt, setExcerpt] = useState("");
  const [escuelas, setEscuelas] = useState([]);
  const [img, setImg] = useState("");
  const [adjuntos, setAdjuntos] = useState([]);
  const [adjNombre, setAdjNombre] = useState("");
  const [adjUrl, setAdjUrl] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");
  const [saveError, setSaveError] = useState("");
  const [saveWarn, setSaveWarn] = useState(false);

  const [contenidoHtml, setContenidoHtml] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        link: { openOnClick: false, HTMLAttributes: { target: "_blank", rel: "noreferrer" } },
        underline: {},
      }),
      Image.configure({ HTMLAttributes: { style: "max-width:100%; border-radius:0.4rem;" } }),
      Placeholder.configure({ placeholder: "Escribí el contenido de la noticia acá..." }),
    ],
    content: "",
    onCreate: ({ editor: e }) => setContenidoHtml(e.getHTML()),
    onUpdate: ({ editor: e }) => setContenidoHtml(e.getHTML()),
  });

  const fecha = useMemo(() => formatDateLong(now), [now]);
  const fechaCorta = useMemo(() => formatDateShort(now), [now]);

  // Cargar siguiente ID desde noticias.js
  useEffect(() => {
    import("../../data/noticias.js").then((mod) => {
      const maxId = Math.max(...mod.noticias.map((n) => n.id), 0);
      setNextId(maxId + 1);
    });
  }, []);

  const refreshNextId = useCallback(() => {
    import(`../../data/noticias.js?t=${Date.now()}`).then((mod) => {
      const maxId = Math.max(...mod.noticias.map((n) => n.id), 0);
      setNextId(maxId + 1);
    });
  }, []);

  const toggleEscuela = useCallback((id) => {
    setEscuelas((prev) => (prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]));
  }, []);

  const addAdjunto = useCallback(() => {
    if (!adjNombre.trim() || !adjUrl.trim()) return;
    setAdjuntos((prev) => [...prev, { nombre: adjNombre.trim(), url: adjUrl.trim() }]);
    setAdjNombre("");
    setAdjUrl("");
  }, [adjNombre, adjUrl]);

  const removeAdjunto = useCallback((idx) => {
    setAdjuntos((prev) => prev.filter((_, i) => i !== idx));
  }, []);

  const handleImgUpload = useCallback(async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Error al subir");
      const data = await res.json();
      setImg(data.url);
    } catch (err) {
      window.alert("Error al subir la imagen: " + err.message);
    }
  }, []);

  const noticia = useMemo(() => ({
    id: nextId,
    titulo: titulo || "Título de la noticia",
    categoria,
    fecha,
    fechaCorta,
    excerpt: excerpt || "Extracto de la noticia.",
    img: img || null,
    escuelas,
    adjuntos,
    contenido: contenidoHtml,
  }), [nextId, titulo, categoria, fecha, fechaCorta, excerpt, img, escuelas, adjuntos, contenidoHtml]);

  const code = useMemo(() => generateCode(noticia), [noticia]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [code]);

  const handleSave = useCallback(async () => {
    setSaving(true);
    setSaveMsg("");
    setSaveError("");
    setSaveWarn(!escuelas.length);
    try {
      const res = await fetch("/api/noticias/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, id: nextId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al guardar");
      setSaveMsg(`Noticia guardada con ID ${nextId}. Refrescá /noticias para verla.`);
      refreshNextId();
    } catch (err) {
      setSaveError(err.message);
    } finally {
      setSaving(false);
    }
  }, [code, nextId, escuelas.length, refreshNextId]);

  return (
    <div className="admin-page">
      <div className="admin-page__inner">
        <div className="admin-page__header">
          <h1 className="admin-page__title">Crear noticia</h1>
          <p className="admin-page__subtitle">
            Completá los campos, escribí el contenido y guardá la noticia (o copiá el código generado)
          </p>
        </div>

        <div className="admin-grid">
          {/* ── Formulario ── */}
          <div className="admin-form-panel">
            <h2>Campos de la noticia</h2>

            <div className="admin-field">
              <label>Título</label>
              <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Título de la noticia"
              />
            </div>

            <div className="admin-field">
              <label>Categoría</label>
              <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                {CATEGORIAS.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="admin-field admin-field--readonly">
              <label>Fecha</label>
              <input type="text" value={fecha} readOnly />
              <span className="admin-field__hint">Se genera automáticamente</span>
            </div>

            <div className="admin-field admin-field--readonly">
              <label>ID</label>
              <input type="text" value={nextId} readOnly />
              <span className="admin-field__hint">Siguiente ID incremental</span>
            </div>

            <div className="admin-field">
              <label>Extracto</label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="1-2 oraciones que resuman la noticia"
                rows={2}
              />
            </div>

            <div className="admin-field">
              <label>Escuelas (opcional)</label>
              <div className="admin-checkboxes">
                {ESCUELAS.map((e) => (
                  <label key={e.id}>
                    <input
                      type="checkbox"
                      checked={escuelas.includes(e.id)}
                      onChange={() => toggleEscuela(e.id)}
                    />
                    {e.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="admin-field">
              <label>Imagen</label>
              <div className="admin-img-row">
                <input
                  type="text"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  placeholder="/img/noticias/archivo.jpg"
                />
                <label className="admin-img-upload-btn">
                  Subir
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImgUpload}
                    style={{ display: "none" }}
                  />
                </label>
              </div>
              <span className="admin-field__hint">
                {import.meta.env.DEV
                  ? "Podés subir desde tu PC (solo en desarrollo) o pegar una URL"
                  : "Colocá la imagen en public/img/noticias/ y usá la URL relativa"}
              </span>
              {img && (
                <div className="admin-img-preview">
                  <img src={img} alt="Preview" />
                </div>
              )}
            </div>

            <div className="admin-field">
              <label>Contenido</label>
              <div className="admin-editor">
                <Toolbar editor={editor} />
                <EditorContent editor={editor} className="admin-editor__content" />
              </div>
              <span className="admin-field__hint">
                Usá H2/H3 para secciones, listas para ítems, blockquote para citas destacadas
              </span>
            </div>

            <div className="admin-field">
              <label>Adjuntos (opcional)</label>
              {adjuntos.length > 0 && (
                <ul className="admin-adjuntos-list">
                  {adjuntos.map((a, i) => (
                    <li key={i}>
                      <span>{a.nombre} — {a.url}</span>
                      <button type="button" className="admin-adjuntos-remove" onClick={() => removeAdjunto(i)}>×</button>
                    </li>
                  ))}
                </ul>
              )}
              <div className="admin-adjuntos-add">
                <input
                  type="text"
                  value={adjNombre}
                  onChange={(e) => setAdjNombre(e.target.value)}
                  placeholder="Nombre del archivo"
                />
                <input
                  type="text"
                  value={adjUrl}
                  onChange={(e) => setAdjUrl(e.target.value)}
                  placeholder="/docs/archivo.pdf"
                />
                <button type="button" onClick={addAdjunto}>+</button>
              </div>
              <span className="admin-field__hint">Colocá los archivos en public/docs/</span>
            </div>

            <div className="admin-code-actions">
              {import.meta.env.DEV && (
                <button
                  type="button"
                  className="admin-btn admin-btn--save"
                  onClick={handleSave}
                  disabled={saving}
                >
                  {saving ? "Guardando..." : "Guardar en noticias.js"}
                </button>
              )}
              <button
                type="button"
                className="admin-btn admin-btn--primary"
                onClick={() => setShowCode(!showCode)}
              >
                {showCode ? "Ocultar código" : "Generar código"}
              </button>
            </div>

            {saveError && <p className="admin-save-msg admin-save-msg--error">{saveError}</p>}
            {saveMsg && <p className="admin-save-msg admin-save-msg--ok">{saveMsg}</p>}
            {saveWarn && !saveMsg && !saveError && (
              <p className="admin-save-msg admin-save-msg--warn">
                Aviso: no seleccionaste ninguna escuela — la noticia aparece en /noticias pero no en la página de ninguna escuela.
              </p>
            )}

            {showCode && (
              <div className="admin-code-block">
                <button
                  type="button"
                  className={`admin-code-copy ${copied ? "admin-code-copied" : ""}`}
                  onClick={handleCopy}
                >
                  {copied ? "Copiado!" : "Copiar"}
                </button>
                <pre>{code}</pre>
              </div>
            )}
          </div>

          {/* ── Preview ── */}
          <div className="admin-preview-panel">
            <h2>Vista previa</h2>
            <div className="admin-preview__body">
              <div className="admin-preview__hero">
                {img ? (
                  <img src={img} alt={titulo} />
                ) : (
                  <div className="admin-preview__hero-placeholder">
                    <span className="material-symbols-outlined" style={{ fontSize: "3rem" }}>article</span>
                  </div>
                )}
                <span className="admin-preview__hero-badge">{categoria}</span>
              </div>

              <div className="admin-preview__content">
                <div className="admin-preview__fecha">{fecha}</div>
                <h1 className="admin-preview__titulo">{titulo || "Título de la noticia"}</h1>
                <p className="admin-preview__excerpt">{excerpt || "Extracto de la noticia."}</p>

                {contenidoHtml && (
                  <div
                    className="admin-preview__contenido"
                    dangerouslySetInnerHTML={{ __html: contenidoHtml }}
                  />
                )}

                {adjuntos.length > 0 && (
                  <div className="admin-preview__adjuntos">
                    <div className="admin-preview__adjuntos-title">Archivos adjuntos</div>
                    <ul className="admin-preview__adjuntos-list">
                      {adjuntos.map((a, i) => (
                        <li key={i}>{a.nombre}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Wrapper con PIN gate */
export default function NoticiaNueva() {
  return (
    <PinGate>
      <NoticiaNuevaInner />
    </PinGate>
  );
}
