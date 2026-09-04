/**
 * ScrollToTop.jsx — Botón flotante para volver al inicio
 */

import { useState, useEffect } from "react";

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
      style={{
        position: "fixed",
        bottom: "5.5rem",
        right: "1.25rem",
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "50%",
        background: "var(--gradient-primary)",
        border: "2px solid #fff",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        zIndex: 70,
        transition: "opacity 0.25s, transform 0.2s",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 4L4 12H8V20H16V12H20L12 4Z" fill="#fff" />
      </svg>
    </button>
  );
}
