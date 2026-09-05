/**
 * pages/NotFound.jsx
 *
 * Página 404 — ruta no encontrada.
 */

import { Link } from "react-router-dom";
import SEO from "../components/SEO";

/** Página 404 — ruta no encontrada. */
export default function NotFound() {
  return (
<<<<<<< HEAD
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
=======
    <main className="not-found">
      <span className="material-symbols-outlined not-found__icon">
>>>>>>> b2abd80d2a935bc7c174419e87dadaf8c710b708
        search_off
      </span>
      <h1 className="not-found__code">
        404
      </h1>
      <h2 className="not-found__title">
        Página no encontrada
      </h2>
      <p className="not-found__text">
        La página que buscás no existe o fue movida a otra ubicación.
      </p>
      <Link
        to="/"
        className="not-found__link btn-primary"
      >
        <span className="material-symbols-outlined">home</span>
        Volver al inicio
      </Link>
    </main>
  );
}