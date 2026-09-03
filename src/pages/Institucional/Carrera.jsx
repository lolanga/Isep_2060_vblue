/**
 * pages/Institucional/Carrera.jsx
 *
 * Vista general de la oferta académica (carreras).
 * Cada carrera muestra: Nombre, Escuela, Descripción, Duración, Modalidad,
 * Requisitos y Documentos relacionados.
 */

import { Link } from "react-router-dom";
import { carreras, escuelaPorId } from "../../data/institucional";

export default function Carrera() {
  return (
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="badge">Formación</span>
          <h1 className="hero-title">
            Carreras <span>de la Oferta</span>
          </h1>
          <p className="hero-description">
            Toda la oferta académica del ISeP y sus escuelas
          </p>
        </div>
      </section>

      <div className="container-max oferta-section">
        <div className="grid-2">
          {carreras.map((carrera) => {
            const escuela = escuelaPorId(carrera.escuela);
            return (
              <article className="card" key={carrera.id}>
                <h2 className="card__title">{carrera.nombre}</h2>

                <p className="card__desc">{carrera.descripcion}</p>

                <div className="card__meta">
                  <span className="card__chip">
                    <span className="material-symbols-outlined">school</span>
                    {escuela ? escuela.nombre : "ISeP"}
                  </span>
                  <span className="card__chip">
                    <span className="material-symbols-outlined">schedule</span>
                    {carrera.duracion}
                  </span>
                  <span className="card__chip">
                    <span className="material-symbols-outlined">desktop_windows</span>
                    {carrera.modalidad}
                  </span>
                </div>

                <div>
                  <strong style={{ fontSize: "0.85rem", display: "block", marginBottom: "0.5rem" }}>
                    Requisitos
                  </strong>
                  <ul className="check-list">
                    {carrera.requisitos.map((r) => (
                      <li key={r}><span className="material-symbols-outlined">check_circle</span>{r}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <strong style={{ fontSize: "0.85rem", display: "block", marginBottom: "0.5rem" }}>
                    Documentos relacionados
                  </strong>
                  <ul className="check-list">
                    {carrera.documentos.map((d) => (
                      <li key={d}><span className="material-symbols-outlined">description</span>{d}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link to="/institucional/oferta-educativa" className="read-more" style={{ justifyContent: "center" }}>
            Volver a la oferta académica
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
