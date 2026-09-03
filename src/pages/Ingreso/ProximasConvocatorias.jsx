/**
 * pages/Ingreso/ProximasConvocatorias.jsx
 * Próximas convocatorias — Ingreso
 */

import { Link } from "react-router-dom";
import { convocatorias, escuelaPorId } from "../../data/institucional";

export default function ProximasConvocatorias() {
  const proximas = convocatorias.filter((c) => c.estado === "proxima");

  return (
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="badge">Ingreso</span>
          <h1 className="hero-title">
            Próximas <span>Convocatorias</span>
          </h1>
          <p className="hero-description">
            Aperturas anunciadas para los próximos ciclos
          </p>
        </div>
      </section>

      <div className="container-max oferta-section" style={{ padding: "2rem" }}>
        <div className="grid-2">
          {proximas.map((cv) => {
            const escuela = escuelaPorId(cv.escuela);
            return (
              <div className="card" key={cv.id}>
                <h3 className="card__title" style={{ fontSize: "1.1rem" }}>{cv.nombre}</h3>
                <p className="card__desc">{cv.descripcion}</p>
                <div className="card__meta">
                  <span className="card__chip" data-type="estado">
                    <span className="material-symbols-outlined">schedule</span>
                    Próxima
                  </span>
                  <span className="card__chip" data-type="escuela">
                    <span className="material-symbols-outlined">school</span>
                    {escuela ? escuela.nombre : "ISeP"}
                  </span>
                  <span className="card__chip" data-type="fecha">
                    <span className="material-symbols-outlined">event</span>
                    {cv.fecha}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {proximas.length === 0 && (
          <p style={{ textAlign: "center", color: "var(--slate-500)", padding: "3rem 0" }}>
            No hay convocatorias anunciadas por el momento.
          </p>
        )}

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link to="/ingreso/convocatorias" className="read-more" style={{ justifyContent: "center" }}>
            Ver convocatorias vigentes
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
