/**
 * pages/Institucional/OfertaEducativa.jsx
 *
 * Oferta Educativa del ISeP.
 * Fuente: isepsantafe.edu.ar/index.php/institucional/oferta-educativa
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import { carreras, cursos, convocatorias, escuelaPorId } from "../../data/institucional";

const MI_ISEP = "https://mi.isepsantafe.edu.ar";

const escuelasISeP = [
  { id: "policia", nombre: "Escuela de Policía", abrev: "EP", color: "var(--blue)" },
  { id: "especialidades", nombre: "Escuela de Especialidades en Seguridad", abrev: "EE", color: "#7c3aed" },
  { id: "superior", nombre: "Escuela Superior de Seguridad Pública", abrev: "ES", color: "var(--secondary)" },
  { id: "investigaciones", nombre: "Escuela de Investigaciones", abrev: "EI", color: "var(--primary)" },
];

export default function OfertaEducativa() {
  const [tab, setTab] = useState("carreras");

  const tabs = [
    { clave: "carreras", label: "Carreras" },
    { clave: "cursos", label: "Cursos" },
    { clave: "convocatorias", label: "Convocatorias" },
  ];

  return (
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="badge">Formación</span>
          <h1 className="hero-title">
            Oferta <span>Educativa</span>
          </h1>
          <p className="hero-description">
            Escuelas dependientes del Instituto de Seguridad Pública
          </p>
        </div>
      </section>

      <div className="container-max" style={{ padding: "2rem" }}>
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Institucional" },
            { label: "Oferta Educativa" },
          ]}
        />

        {/* ── Escuelas del ISeP ── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 180px), 1fr))", gap: "1rem", marginTop: "1.5rem" }}>
            {escuelasISeP.map((e) => (
              <Link
                key={e.id}
                to={`/escuelas/${e.id}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "1.25rem 0.75rem",
                  background: "#fff",
                  borderRadius: "0.75rem",
                  border: "1px solid #eef2f7",
                  textDecoration: "none",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(15,23,42,0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "0.75rem",
                  background: e.color || "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                }}>
                  {e.abrev}
                </div>
                <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--slate-900)", textAlign: "center", lineHeight: 1.3 }}>
                  {e.nombre}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Presentación ── */}
        <section style={{ background: "#f8fafc", borderRadius: "0.75rem", padding: "1.5rem", border: "1px solid #eef2f7", marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.7, marginBottom: "1rem" }}>
            El I.Se.P. ofrece las carreras de <strong style={{ color: "var(--slate-900)" }}>Auxiliar en Seguridad</strong> y{" "}
            <strong style={{ color: "var(--slate-900)" }}>Técnico Superior en Seguridad pública y ciudadana con orientación policial</strong>,
            de nivel terciario y con reconocimiento oficial.
          </p>
          <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.7, marginBottom: "1rem" }}>
            Además, se realizan <strong style={{ color: "var(--slate-900)" }}>cursos de capacitación permanente</strong>, jornadas y seminarios,
            celebrándose <strong style={{ color: "var(--slate-900)" }}>convenios con universidades</strong> para posibilitar el acceso a títulos de grado.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 250px), 1fr))", gap: "1rem", marginTop: "1.25rem" }}>
            <div style={{ background: "#fff", borderRadius: "0.75rem", padding: "1.25rem", border: "1px solid #eef2f7" }}>
              <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--primary)", marginBottom: "0.5rem" }}>Auxiliar en Seguridad</h4>
              <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.5 }}>
                Capacitación en la prevención de delitos y la protección de la vida y los bienes de las personas, en el marco de respeto a los derechos humanos.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: "0.75rem", padding: "1.25rem", border: "1px solid #eef2f7" }}>
              <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--primary)", marginBottom: "0.5rem" }}>Técnico Superior</h4>
              <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.5 }}>
                Especialización para la dirección y administración institucional, y la conducción de recursos humanos.
              </p>
            </div>
          </div>
        </section>

        {/* ── Pestañas ── */}
        <div className="oferta-tabs">
          {tabs.map((t) => (
            <button
              key={t.clave}
              type="button"
              className={`oferta-tab${tab === t.clave ? " oferta-tab--active" : ""}`}
              onClick={() => setTab(t.clave)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── pestaña: Carreras ── */}
        {tab === "carreras" && (
          <>
            <div className="grid-2">
              {carreras.map((c) => {
                const escuela = escuelaPorId(c.escuela);
                return (
                  <div className="card" key={c.id}>
                    <h3 className="card__title">{c.nombre}</h3>
                    <p className="card__desc">{c.descripcion}</p>
                    <div className="card__meta">
                      <span className="card__chip" data-type="escuela">
                        <span className="material-symbols-outlined">school</span>
                        {escuela ? escuela.nombre : "ISeP"}
                      </span>
                      <span className="card__chip" data-type="duracion">
                        <span className="material-symbols-outlined">schedule</span>
                        {c.duracion}
                      </span>
                      <span className="card__chip" data-type="modalidad">
                        <span className="material-symbols-outlined">desktop_windows</span>
                        {c.modalidad}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <Link to="/institucional/carreras" className="btn-cta">
                Ver detalle de carreras
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </>
        )}

        {/* ── pestaña: Cursos ── */}
        {tab === "cursos" && (
          <>
            <div className="grid-2">
              {cursos.slice(0, 4).map((c) => (
                <div className="card" key={c.id}>
                  <h3 className="card__title" style={{ fontSize: "1.1rem" }}>{c.nombre}</h3>
                  <p className="card__desc">{c.informacion}</p>
                  <div className="card__meta">
                    <span className="card__chip" data-type="tipo">
                      <span className="material-symbols-outlined">category</span>
                      {c.tipo}
                    </span>
                    <span className="card__chip" data-type="periodo">
                      <span className="material-symbols-outlined">calendar_today</span>
                      {c.periodo}
                    </span>
                  </div>
                  <a className="btn-cta" href={MI_ISEP} target="_blank" rel="noreferrer" style={{ alignSelf: "flex-start", fontSize: "0.85rem", padding: "0.75rem 1.5rem" }}>
                    Acceso a Mi ISeP
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <Link to="/secretaria/cursos" className="btn-cta">
                Ver todos los cursos
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </>
        )}

        {/* ── pestaña: Convocatorias ── */}
        {tab === "convocatorias" && (
          <>
            <div className="grid-2">
              {convocatorias.map((cv) => {
                const estado = cv.estado === "vigente" ? "Vigente" : "Próxima";
                const escuela = escuelaPorId(cv.escuela);
                return (
                  <div className="card" key={cv.id}>
                    <h3 className="card__title" style={{ fontSize: "1.1rem" }}>{cv.nombre}</h3>
                    <p className="card__desc">{cv.descripcion}</p>
                    <div className="card__meta">
                      <span className="card__chip" data-type="estado">
                        <span className="material-symbols-outlined">flag</span>
                        {estado}
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
                  </div>
                );
              })}
            </div>
            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <Link to="/ingreso/convocatorias" className="btn-cta">
                Ver convocatorias de ingreso
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
