/**
 * components/ShareButton.jsx
 *
 * Botón de compartir noticia. Copia el enlace al portapapeles
 * o usa Web Share API en móviles.
 */

import { useState } from "react";

/** Copia al portapapeles con fallback para contextos sin Clipboard API. */
async function copiarTexto(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = texto;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  }
}

/**
 * Botón de compartir noticia. Usa Web Share API o copia al portapapeles.
 * @param {{ id: number, titulo: string, excerpt: string }} noticia
 * @param {string} [className] - Clase extra opcional
 */
export default function ShareButton({ noticia, className = "" }) {
  const [copiado, setCopiado] = useState(false);

  const handleShare = async () => {
    const url = `${window.location.origin}/noticias/${noticia.id}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: noticia.titulo, text: noticia.excerpt, url });
      } catch { /* usuario canceló */ }
    } else {
      const ok = await copiarTexto(`${noticia.titulo}\n${noticia.excerpt}\n${url}`);
      if (ok) {
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label="Compartir noticia"
      title="Compartir noticia"
      className={`share-btn${copiado ? " share-btn--copied" : ""} ${className}`}
    >
      <span className="material-symbols-outlined share-btn__icon" aria-hidden="true">
        {copiado ? "check" : "share"}
      </span>
      <span className="share-btn__label" aria-hidden="true">
        {copiado ? "¡Copiado!" : "Compartir"}
      </span>
    </button>
  );
}