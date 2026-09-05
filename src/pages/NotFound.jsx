/**
 * pages/NotFound.jsx
 *
 * Página 404 — ruta no encontrada.
 */

import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <main style={{
      paddingTop: "var(--navbar-height)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      textAlign: "center",
    }}>
      <SEO title="Página no encontrada" />
      <span className="material-symbols-outlined" style={{ fontSize: "5rem", color: "#cbd5e1", marginBottom: "1rem" }}>
        search_off
      </span>
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "var(--primary)", marginBottom: "0.5rem" }}>
        404
      </h1>
      <h2 style={{ fontSize: "1.3rem", fontWeight: 600, color: "var(--slate-700)", marginBottom: "0.5rem" }}>
        Página no encontrada
      </h2>
      <p style={{ color: "#64748b", maxWidth: "400px", marginBottom: "2rem", lineHeight: 1.6 }}>
        La página que buscás no existe o fue movida a otra ubicación.
      </p>
      <Link
        to="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.85rem 2rem",
          borderRadius: "0.6rem",
          background: "var(--gradient-primary)",
          color: "#fff",
          fontSize: "1rem",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        <span className="material-symbols-outlined">home</span>
        Volver al inicio
      </Link>
    </main>
  );
}