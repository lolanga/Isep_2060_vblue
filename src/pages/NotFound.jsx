/**
 * pages/NotFound.jsx
 *
 * Página 404 — ruta no encontrada.
 */

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="not-found">
      <span className="material-symbols-outlined not-found__icon">
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