/**
 * pages/Ingreso/Convocatorias.jsx
 * Landing dedicada de convocatorias activas con countdown, requisitos y pre-inscripción
 */

import { Link } from "react-router-dom";
import { convocatorias, escuelaPorId } from "../../data/institucional";
import Countdown from "../../components/Countdown";
import Breadcrumb from "../../components/Breadcrumb";

const REQUISITOS_GENERALES = [
  "Ser argentino nativo o naturalizado",
  "Edad entre 18 y 30 años (según convocatoria)",
  "Certificado de estudios secundarios completos",
  "Apto médico y psicofísico vigente",
  "Antecedentes penales y penitenciarios clean",
  "No estar inhabilitado para el ejercicio de función pública",
];

const PASOS = [
  { paso: 1, titulo: "Pre-inscripción online", desc: "Completá el formulario con tus datos personales y subí la documentación." },
  { paso: 2, titulo: "Validación de documentación", desc: "El equipo revisa tu postulación y te notifica por email." },
  { paso: 3, titulo: "Evaluación psicofísica", desc: "Examen médico, psicológico y de aptitud física." },
  { paso: 4, titulo: "Evaluación de conocimientos", desc: "Examen escrito sobre materias de la convocatoria." },
  { paso: 5, titulo: "Ingreso a la escuela", desc: "Comenzás tu formación en la escuela asignada." },
];

export default function Convocatorias() {
  const vigentes = convocatorias.filter((c) => c.estado === "vigente");
  const primeraConvocatoria = vigentes[0];
  const fechaCierre = primeraConvocatoria?.fechaCierre || "2025-09-30T23:59:59";

  return (
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      {/* Hero dedicado */}
      <section style={{
        background: "var(--gradient-primary)",
        padding: "4rem 2rem 3rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div className="container-max" style={{ position: "relative", zIndex: 1 }}>
          <span style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(4px)",
            color: "#fff",
            padding: "0.35rem 1rem",
            borderRadius: "999px",
            fontSize: "0.8rem",
            fontWeight: 600,
            marginBottom: "1rem",
            border: "1px solid rgba(255,255,255,0.2)",
          }}>
            Ingreso 2025–2026
          </span>
          <h1 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "0.75rem",
            lineHeight: 1.2,
          }}>
            Convocatorias <span style={{ color: "#ffe066" }}>Abiertas</span>
          </h1>
          <p style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.85)",
            maxWidth: "550px",
            margin: "0 auto 1.5rem",
            lineHeight: 1.6,
          }}>
            Sumate a la fuerza de seguridad de Santa Fe. Iniciá tu carrera profesional en el Instituto de Seguridad Pública.
          </p>

          <Countdown targetDate={fechaCierre} label="Tiempo restante para inscribirte" />

          <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
            <Link
              to="/ingreso/proceso"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.85rem 2rem",
                borderRadius: "0.6rem",
                background: "#fff",
                color: "var(--primary)",
                fontSize: "1rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              Pre-Inscribirme Ahora
              <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>arrow_forward</span>
            </Link>
            <a
              href="#requisitos"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.85rem 2rem",
                borderRadius: "0.6rem",
                background: "transparent",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: 600,
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.4)",
              }}
            >
              Ver Requisitos
            </a>
          </div>
        </div>
      </section>

      <div className="container-max" style={{ padding: "2rem" }}>
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Ingreso" },
            { label: "Convocatorias" },
          ]}
        />

        {/* Convocatorias vigentes */}
        {vigentes.length > 0 && (
          <section style={{ marginTop: "2rem" }}>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--slate-900)", marginBottom: "1.25rem" }}>
              Inscripciones abiertas
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "1.25rem" }}>
              {vigentes.map((cv) => {
                const escuela = escuelaPorId(cv.escuela);
                return (
                  <div
                    key={cv.id}
                    style={{
                      background: "#fff",
                      borderRadius: "1rem",
                      border: "1px solid #eef2f7",
                      overflow: "hidden",
                      boxShadow: "0 1px 3px rgba(15,23,42,0.06)",
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
                    <div style={{
                      background: escuela?.color || "var(--gradient-primary)",
                      padding: "1rem 1.25rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}>
                      <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase" }}>
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
                        {cv.tipo}
                      </span>
                    </div>
                    <div style={{ padding: "1.25rem" }}>
                      <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--slate-900)", marginBottom: "0.5rem" }}>
                        {cv.nombre}
                      </h3>
                      <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.5, marginBottom: "1rem" }}>
                        {cv.descripcion}
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
                        <span className="chip" data-type="estado" style={{ fontSize: "0.7rem" }}>
                          <span className="material-symbols-outlined" style={{ fontSize: "0.85rem" }}>flag</span>
                          Vigente
                        </span>
                        <span className="chip" data-type="fecha" style={{ fontSize: "0.7rem" }}>
                          <span className="material-symbols-outlined" style={{ fontSize: "0.85rem" }}>calendar_today</span>
                          {cv.fecha}
                        </span>
                      </div>
                      <Link
                        to="/ingreso/proceso"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.3rem",
                          padding: "0.65rem",
                          borderRadius: "0.5rem",
                          background: "var(--gradient-primary)",
                          color: "#fff",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          textDecoration: "none",
                        }}
                      >
                        Inscribirme
                        <span className="material-symbols-outlined" style={{ fontSize: "0.9rem" }}>arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {vigentes.length === 0 && (
          <div style={{ textAlign: "center", padding: "3rem 1rem", color: "#94a3b8" }}>
            <span className="material-symbols-outlined" style={{ fontSize: "2.5rem", display: "block", marginBottom: "0.75rem" }}>event_busy</span>
            <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>No hay convocatorias abiertas en este momento.</p>
            <Link to="/ingreso/proximas-convocatorias" style={{ color: "var(--primary)", fontWeight: 600 }}>
              Ver próximas convocatorias →
            </Link>
          </div>
        )}

        {/* Requisitos generales */}
        <section id="requisitos" style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--slate-900)", marginBottom: "1.25rem" }}>
            Requisitos generales
          </h2>
          <div style={{
            background: "#fff",
            borderRadius: "1rem",
            padding: "1.5rem",
            border: "1px solid #eef2f7",
            boxShadow: "0 1px 3px rgba(15,23,42,0.05)",
          }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "0.6rem" }}>
              {REQUISITOS_GENERALES.map((r, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.9rem", color: "#475569" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "1rem", color: "var(--secondary)", marginTop: "0.15rem", flexShrink: 0 }}>check_circle</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <p style={{ fontSize: "0.8rem", color: "#94a3b8", marginTop: "0.75rem", textAlign: "center" }}>
            * Los requisitos específicos pueden variar según la convocatoria. Consultá los detalles de cada inscripción.
          </p>
        </section>

        {/* Pasos del proceso */}
        <section style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--slate-900)", marginBottom: "1.25rem" }}>
            ¿Cómo es el proceso?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))", gap: "1rem" }}>
            {PASOS.map((p) => (
              <div key={p.paso} style={{
                background: "#fff",
                borderRadius: "0.75rem",
                padding: "1.25rem",
                border: "1px solid #eef2f7",
                textAlign: "center",
                position: "relative",
              }}>
                <div style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "50%",
                  background: "var(--gradient-primary)",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 0.75rem",
                }}>
                  {p.paso}
                </div>
                <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--slate-900)", marginBottom: "0.3rem" }}>
                  {p.titulo}
                </h4>
                <p style={{ fontSize: "0.8rem", color: "#64748b", lineHeight: 1.5 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section style={{
          marginTop: "3rem",
          background: "var(--gradient-primary)",
          borderRadius: "1rem",
          padding: "2.5rem 2rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 80% 30%, rgba(255,255,255,0.12) 0%, transparent 50%)",
            pointerEvents: "none",
          }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 800, color: "#fff", marginBottom: "0.75rem" }}>
              ¿Listo para empezar tu carrera?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: "450px", margin: "0 auto 1.5rem", lineHeight: 1.6 }}>
              No dejes pasar la oportunidad. Las vacantes son limitadas y las inscripciones cierran pronto.
            </p>
            <Link
              to="/ingreso/proceso"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.85rem 2.5rem",
                borderRadius: "0.6rem",
                background: "#fff",
                color: "var(--primary)",
                fontSize: "1rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              Pre-Inscribirme Ahora
              <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>arrow_forward</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
