/**
 * components/ShareButton.jsx
 *
 * Botón de compartir noticia. Copia el enlace al portapapeles
 * o usa Web Share API en móviles.
 */

import { useState } from "react";

/**
 * Botón de compartir noticia. Usa Web Share API o copia al portapapeles.
 * @param {{ id: number, titulo: string, excerpt: string }} noticia
 */
export default function ShareButton({ noticia }) {
  const [copiado, setCopiado] = useState(false);

  const handleShare = async () => {
    const url = `${window.location.origin}/noticias/${noticia.id}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: noticia.titulo, text: noticia.excerpt, url });
      } catch { /* usuario canceló */ }
    } else {
      await navigator.clipboard.writeText(`${noticia.titulo}\n${noticia.excerpt}\n${url}`);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label="Compartir noticia"
      title="Compartir noticia"
      className={`share-btn${copiado ? " share-btn--copied" : ""}`}
    >
      <span className="material-symbols-outlined share-btn__icon" aria-hidden="true">
        {copiado ? "check" : "share"}
      </span>
      {copiado ? <span aria-hidden="true">¡Copiado!</span> : ""}
    </button>
  );
}