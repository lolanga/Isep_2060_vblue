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

      <div className="container-max" style={{ padding: "2rem" }}>
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Institucional", to: "/institucional/oferta-educativa" },
            { label: "Carreras" },
          ]}
        />

        {/* ── Presentación general ── */}
        <section style={{ background: "#f8fafc", borderRadius: "0.75rem", padding: "1.25rem", border: "1px solid #eef2f7", marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.6 }}>
            El I.Se.P. ofrece carreras de nivel terciario con reconocimiento oficial.
            Además, se realizan jornadas, seminarios y convenios con universidades para posibilitar el acceso a títulos de grado.
          </p>
        </section>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: "1.25rem", marginTop: "2rem" }}>
          {carreras.map((carrera) => {
            const escuela = escuelaPorId(carrera.escuela);
            const estado = carrera.inscripciones === "abiertas" ? "abierta" : carrera.inscripciones === "proximamente" ? "proximamente" : "cerrada";
            const estadoInfo = ESTADOS[estado];

            return (
              <article
                key={carrera.id}
                style={{
                  background: "#fff",
                  borderRadius: "1rem",
                  border: "1px solid #eef2f7",
                  overflow: "hidden",
                  boxShadow: "0 1px 3px rgba(15,23,42,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(15,23,42,0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 1px 3px rgba(15,23,42,0.06)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Header con color de escuela */}
                <div style={{
                  background: escuela?.color || "var(--gradient-primary)",
                  padding: "1rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                    {escuela ? escuela.nombre : "ISeP"}
                  </span>
                  <span style={{
                    background: "rgba(255,255,255,0.2)",
                    color: "#fff",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    padding: "0.2rem 0.6rem",
                    borderRadius: "999px",
                  }}>
                    {carrera.modalidad}
                  </span>
                </div>

                <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--slate-900)", marginBottom: "0.5rem", lineHeight: 1.3 }}>
                    {carrera.nombre}
                  </h3>

                  <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.5, marginBottom: "1rem", flex: 1 }}>
                    {carrera.descripcion}
                  </p>

                  {/* Chips */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
                    <span className="chip" data-type="duracion" style={{ fontSize: "0.7rem" }}>
                      <span className="material-symbols-outlined" style={{ fontSize: "0.85rem" }}>schedule</span>
                      {carrera.duracion}
                    </span>
                    <span className="chip" data-type="escuela" style={{ fontSize: "0.7rem" }}>
                      <span className="material-symbols-outlined" style={{ fontSize: "0.85rem" }}>school</span>
                      {escuela ? escuela.nombre : "ISeP"}
                    </span>
                  </div>

                  {/* Estado de inscripción */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.6rem 0.75rem",
                    background: estadoInfo.bg,
                    borderRadius: "0.5rem",
                    marginBottom: "0.75rem",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                      <span style={{
                        width: "0.45rem",
                        height: "0.45rem",
                        borderRadius: "50%",
                        background: estadoInfo.color,
                        flexShrink: 0,
                      }} />
                      <span style={{ fontSize: "0.75rem", fontWeight: 600, color: estadoInfo.color }}>
                        {estadoInfo.label}
                      </span>
                    </div>
                    {carrera.fechaInscripcion && (
                      <span style={{ fontSize: "0.7rem", color: "#94a3b8" }}>
                        {carrera.fechaInscripcion}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <Link
                      to={`/formacion/carrera/${carrera.id}`}
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.3rem",
                        padding: "0.55rem",
                        borderRadius: "0.5rem",
                        background: "var(--gradient-primary)",
                        color: "#fff",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        textAlign: "center",
                      }}
                    >
                      Ver detalle
                      <span className="material-symbols-outlined" style={{ fontSize: "0.9rem" }}>arrow_forward</span>
                    </Link>
                  </div>
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
