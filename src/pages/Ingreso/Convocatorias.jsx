/**
 * pages/Ingreso/Convocatorias.jsx
 * Convocatorias vigentes — Ingreso
 */

import { Link } from "react-router-dom";
import { convocatorias, escuelaPorId } from "../../data/institucional";

export default function Convocatorias() {
  const vigentes = convocatorias.filter((c) => c.estado === "vigente");

  return (
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="badge">Ingreso</span>
          <h1 className="hero-title">
            Convocatorias <span>Vigentes</span>
          </h1>
          <p className="hero-description">
            Inscripciones abiertas en este momento
          </p>
        </div>
      </section>

      <div className="container-max oferta-section">
        <div className="grid-2">
          {vigentes.map((cv) => {
            const escuela = escuelaPorId(cv.escuela);
            return (
              <div className="card" key={cv.id}>
                <h3 className="card__title" style={{ fontSize: "1.1rem" }}>{cv.nombre}</h3>
                <p className="card__desc">{cv.descripcion}</p>
                <div className="card__meta">
                  <span className="card__chip" data-type="estado">
                    <span className="material-symbols-outlined">flag</span>
                    Vigente
                  </span>
                  <span className="card__chip" data-type="escuela">
                    <span className="material-symbols-outlined">school</span>
                    {escuela ? escuela.nombre : "ISeP"}
                  </span>
                  <span className="card__chip" data-type="fecha">
                    <span className="material-symbols-outlined">schedule</span>
                    {cv.fecha}
                  </span>
                </div>
                <Link to="/ingreso/proceso" className="read-more">
                  Conocer el proceso
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            );
          })}
        </div>

        {vigentes.length === 0 && (
          <p style={{ textAlign: "center", color: "var(--slate-500)", padding: "3rem 0" }}>
            No hay convocatorias vigentes en este momento.
          </p>
        )}
      </div>
    </main>
  );
}
