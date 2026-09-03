/**
 * pages/Ingreso/Requisitos.jsx
 * Requisitos de ingreso — Ingreso
 */

import { carreras } from "../../data/institucional";

export default function Requisitos() {
  // Requisitos mínimos comunes (de la primera carrera de referencia)
  const comunes = carreras[0]?.requisitos ?? [];
  const documentos = carreras[0]?.documentos ?? [];

  return (
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="badge">Ingreso</span>
          <h1 className="hero-title">
            Requisitos <span>de Ingreso</span>
          </h1>
          <p className="hero-description">
            Condiciones generales y documentación necesaria para postularse
          </p>
        </div>
      </section>

      <div className="container-max oferta-section">
        <div className="grid-2">
          <div className="card">
            <h3 className="card__title">Requisitos generales</h3>
            <ul className="check-list">
              {comunes.map((r, i) => (
                <li key={i}><span className="material-symbols-outlined">check_circle</span>{r}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3 className="card__title">Documentación</h3>
            <ul className="check-list">
              {documentos.map((d, i) => (
                <li key={i}><span className="material-symbols-outlined">description</span>{d}</li>
              ))}
            </ul>
          </div>
        </div>

        <p style={{ marginTop: "2rem", color: "var(--slate-500)", textAlign: "center", fontSize: "0.9rem" }}>
          Cada carrera o convocatoria puede solicitar requisitos adicionales. Consultá siempre
          la convocatoria vigente.
        </p>
      </div>
    </main>
  );
}
