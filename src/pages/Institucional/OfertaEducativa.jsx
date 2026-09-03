/**
 * pages/Institucional/OfertaEducativa.jsx
 *
 * Oferta Académica — vista dinámica basada en las entidades:
 * Carreras, Cursos y Convocatorias relacionadas.
 * Navegación por pestañas.
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  carreras,
  cursos,
  convocatorias,
  escuelaPorId,
} from "../../data/institucional";

const MI_ISEP = "https://miisep.edu.ar";

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
            Oferta <span>Académica</span>
          </h1>
          <p className="hero-description">
            Carreras, cursos y convocatorias según cada escuela
          </p>
        </div>
      </section>

      <div className="container-max oferta-section">
        {/* Pestañas */}
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
                Ver todas las carreras
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
