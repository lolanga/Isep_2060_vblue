/**
 * ScrollToTop.jsx — Botón flotante para volver al inicio
 */

import { useState, useEffect } from "react";

/** Botón flotante para volver al inicio — visible al superar 400px de scroll. */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Ir arriba"
      className="scroll-top-float"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 4L4 12H8V20H16V12H20L12 4Z" fill="#fff" />
      </svg>
    </button>
  );
}
