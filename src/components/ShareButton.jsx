/**
 * components/ShareButton.jsx
 *
 * Botón de compartir noticia. Copia el enlace al portapapeles
 * o usa Web Share API en móviles.
 */

import { useState } from "react";

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
      title="Compartir noticia"
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        color: copiado ? "var(--color-end, #17be95)" : "#94a3b8",
        display: "flex",
        alignItems: "center",
        gap: "0.25rem",
        fontSize: "0.75rem",
        padding: "0.25rem",
        borderRadius: "0.25rem",
        transition: "color 0.2s",
      }}
    >
      <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>
        {copiado ? "check" : "share"}
      </span>
      {copiado ? "¡Copiado!" : ""}
    </button>
  );
}