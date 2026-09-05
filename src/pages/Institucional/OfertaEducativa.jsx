/**
 * pages/Institucional/OfertaEducativa.jsx
 *
 * Oferta Educativa del ISeP.
 * Fuente: isepsantafe.edu.ar/index.php/institucional/oferta-educativa
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import { carreras, cursos, convocatorias, escuelaPorId, escuelas } from "../../data/institucional";

const MI_ISEP = "https://mi.isepsantafe.edu.ar";

const escuelasFiltradas = escuelas.filter((e) => e.id !== "ead");

/** Página de oferta educativa con pestañas de carreras, cursos y convocatorias. */
export default function OfertaEducativa() {
  const [tab, setTab] = useState("carreras");

  const tabs = [
    { clave: "carreras", label: "Carreras" },
    { clave: "cursos", label: "Cursos" },
    { clave: "convocatorias", label: "Convocatorias" },
  ];

  return (
    <main className="page-main">
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

      <div className="container-max titulos-container">
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Institucional" },
            { label: "Oferta Educativa" },
          ]}
        />

        {/* ── Escuelas del ISeP ── */}
        <section className="oferta-escuelas-section">
          <div className="oferta-escuelas-grid">
            {escuelasFiltradas.map((e) => (
              <Link
                key={e.id}
                to={`/escuelas/${e.id}`}
                className="oferta-escuela-link"
              >
                <img
                  src={e.logo}
                  alt={`Escudo ${e.nombre}`}
                  className="oferta-escuela-logo"
                />
                <span className="oferta-escuela-name">
                  {e.nombre}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Presentación ── */}
        <section className="oferta-presentacion">
          <p className="oferta-presentacion-text">
            El I.Se.P. ofrece las carreras de <strong className="oferta-strong">Auxiliar en Seguridad</strong> y{" "}
            <strong className="oferta-strong">Técnico Superior en Seguridad pública y ciudadana con orientación policial</strong>,
            de nivel terciario y con reconocimiento oficial.
          </p>
          <p className="oferta-presentacion-text">
            Además, se realizan <strong className="oferta-strong">cursos de capacitación permanente</strong>, jornadas y seminarios,
            celebrándose <strong className="oferta-strong">convenios con universidades</strong> para posibilitar el acceso a títulos de grado.
          </p>
          <div className="oferta-info-grid">
            <div className="oferta-info-card">
              <h4 className="oferta-info-card__title">Auxiliar en Seguridad</h4>
              <p className="oferta-info-card__desc">
                Capacitación en la prevención de delitos y la protección de la vida y los bienes de las personas, en el marco de respeto a los derechos humanos.
              </p>
            </div>
            <div className="oferta-info-card">
              <h4 className="oferta-info-card__title">Técnico Superior</h4>
              <p className="oferta-info-card__desc">
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
            <div className="oferta-tab-cta">
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
                  <h3 className="card__title oferta-card-title--lg">{c.nombre}</h3>
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
                  <a className="btn-cta oferta-mi-isep" href={MI_ISEP} target="_blank" rel="noreferrer">
                    Acceso a Mi ISeP
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                </div>
              ))}
            </div>
            <div className="oferta-tab-cta">
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
                    <h3 className="card__title oferta-card-title--lg">{cv.nombre}</h3>
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
            <div className="oferta-tab-cta">
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
