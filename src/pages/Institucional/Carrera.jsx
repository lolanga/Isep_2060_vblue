/**
 * pages/Institucional/Carrera.jsx
 *
 * Detalle de carreras del ISeP.
 * Fuente: isepsantafe.edu.ar/index.php/institucional/oferta-educativa
 */

import { Link } from "react-router-dom";
import { carreras, escuelaPorId } from "../../data/institucional";
import Breadcrumb from "../../components/Breadcrumb";

const ESTADOS = {
  abierta: { label: "Inscripciones abiertas", color: "#17be95", bg: "rgba(23,190,149,0.1)" },
  proximamente: { label: "Próximamente", color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  cerrada: { label: "Inscripciones cerradas", color: "#94a3b8", bg: "rgba(148,163,184,0.1)" },
};

export default function Carrera() {
  return (
    <main className="page-main">
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

      <div className="container-max titulos-container">
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Institucional", to: "/institucional/oferta-educativa" },
            { label: "Carreras" },
          ]}
        />

        {/* ── Presentación general ── */}
        <section className="carrera-intro">
          <p>
            El I.Se.P. ofrece carreras de nivel terciario con reconocimiento oficial.
            Además, se realizan jornadas, seminarios y convenios con universidades para posibilitar el acceso a títulos de grado.
          </p>
        </section>

        <div className="carrera-grid">
          {carreras.map((carrera) => {
            const escuela = escuelaPorId(carrera.escuela);
            const estado = carrera.inscripciones === "abiertas" ? "abierta" : carrera.inscripciones === "proximamente" ? "proximamente" : "cerrada";
            const estadoInfo = ESTADOS[estado];

            return (
              <article
                key={carrera.id}
                className="carrera-card"
              >
                {/* Header con color de escuela */}
                <div className="carrera-card__header" style={{ "--header-bg": escuela?.color || "var(--gradient-primary)" }}>
                  <span className="carrera-card__school">
                    {escuela ? escuela.nombre : "ISeP"}
                  </span>
                  <span className="badge-pill">
                    {carrera.modalidad}
                  </span>
                </div>

                <div className="carrera-card__body">
                  <h3 className="carrera-card__title">
                    {carrera.nombre}
                  </h3>

                  <p className="carrera-card__desc">
                    {carrera.descripcion}
                  </p>

                  {/* Chips */}
                  <div className="carrera-card__chips">
                    <span className="chip chip--sm" data-type="duracion">
                      <span className="material-symbols-outlined chip-icon">schedule</span>
                      {carrera.duracion}
                    </span>
                    <span className="chip chip--sm" data-type="escuela">
                      <span className="material-symbols-outlined chip-icon">school</span>
                      {escuela ? escuela.nombre : "ISeP"}
                    </span>
                  </div>

                  {/* Estado de inscripción */}
                  <div className="carrera-card__estado" style={{ "--estado-bg": estadoInfo.bg, "--estado-color": estadoInfo.color }}>
                    <div className="carrera-card__estado-row">
                      <span className="carrera-card__estado-dot" />
                      <span className="carrera-card__estado-text">
                        {estadoInfo.label}
                      </span>
                    </div>
                    {carrera.fechaInscripcion && (
                      <span className="carrera-card__estado-fecha">
                        {carrera.fechaInscripcion}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="carrera-card__links">
                    <Link
                      to={`/formacion/carrera/${carrera.id}`}
                      className="carrera-card__link"
                    >
                      Ver detalle
                      <span className="material-symbols-outlined carrera-card__link-icon">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="carrera-back">
          <Link to="/institucional/oferta-educativa" className="read-more">
            Volver a la oferta académica
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
