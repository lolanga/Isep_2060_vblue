/**
 * components/EscuelaTemplate.jsx
 *
 * Plantilla reutilizable para las páginas de cada escuela.
 * Estructura: Logo, Presentación, Información, Carreras, Cursos actuales
 * (con acceso a Mi ISeP), Noticias y Contacto.
 *
 * La escuela se pasa por prop (objeto de src/data/institucional.js) y se
 * derivan sus carreras y cursos desde los datos centrales.
 */

import { Link } from "react-router-dom";
import {
  escuelaPorId,
  carrerasDeEscuela,
  cursosDeEscuela,
} from "../data/institucional";
import { noticias } from "../data/noticias";

const MI_ISEP = "https://mi.isepsantafe.edu.ar";

export default function EscuelaTemplate({ escuelaId }) {
  const escuela = escuelaPorId(escuelaId);
  if (!escuela) return null;

  const carreras = carrerasDeEscuela(escuelaId);
  const cursos = cursosDeEscuela(escuelaId).filter((c) => c.estado !== "finalizado");
  const info = escuela.informacion;

  const noticiasEscuela = noticias
    .filter((n) => n.escuelas && n.escuelas.includes(escuelaId))
    .slice(0, 3);

  return (
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      {/* Logo + presentación */}
      <section className="escuela-hero">
        <div className="escuela-hero__inner">
          <div className="escuela-hero__logo">
            <img src={escuela.logo} alt={`Escudo ${escuela.nombre}`} />
          </div>
          <div>
            <span className="badge">Escuela</span>
            <h1 className="escuela-hero__title">{escuela.nombre}</h1>
            <p className="escuela-hero__desc">{escuela.presentacion}</p>
          </div>
        </div>
      </section>

      {/* Información */}
      <section className="escuela-seccion">
        <div className="container-max">
          <h2 className="escuela-seccion__title">
            <span className="material-symbols-outlined">info</span>
            Información
          </h2>

          <div className="escuela-info-grid">
            <div className="escuela-info-item">
              <span className="escuela-info-item__label">Categoría</span>
              <span className="escuela-info-item__value">{info.categoria}</span>
            </div>
            <div className="escuela-info-item">
              <span className="escuela-info-item__label">Duración</span>
              <span className="escuela-info-item__value">{info.duracion}</span>
            </div>
            <div className="escuela-info-item">
              <span className="escuela-info-item__label">Modalidad</span>
              <span className="escuela-info-item__value">{info.modalidad}</span>
            </div>
            <div className="escuela-info-item">
              <span className="escuela-info-item__label">Sede</span>
              <span className="escuela-info-item__value">{info.sede}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Carreras — solo Escuela de Policía */}
      {escuelaId === "policia" && (
        <section className="escuela-seccion">
          <div className="container-max">
            <h2 className="escuela-seccion__title">
              <span className="material-symbols-outlined">menu_book</span>
              Carreras
            </h2>

            {carreras.length > 0 ? (
              <ul className="escuela-list">
                {carreras.map((c) => (
                  <li key={c.id}>
                    <Link to="/institucional/carreras" style={{ color: "var(--color-start)" }}>
                      {c.nombre}
                    </Link>
                    <p style={{ fontSize: "0.85rem", color: "var(--slate-500)", marginTop: "0.25rem" }}>
                      {c.modalidad} · {c.duracion}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{ color: "var(--slate-500)" }}>
                Esta escuela define sus carreras según convocatoria. Consultá la oferta académica.
              </p>
            )}
          </div>
        </section>
      )}

      {/* Cursos actuales */}
      <section className="escuela-seccion">
        <div className="container-max">
          <h2 className="escuela-seccion__title">
            <span className="material-symbols-outlined">event_available</span>
            Cursos actuales
          </h2>

          {cursos.length > 0 ? (
            <div className="grid-2">
              {cursos.map((curso) => (
                <div className="card" key={curso.id}>
                  <h3 className="card__title" style={{ fontSize: "1.1rem" }}>{curso.nombre}</h3>
                  <p className="card__desc">{curso.informacion}</p>
                  <div className="card__meta">
                    <span className="card__chip" data-type="tipo">
                      <span className="material-symbols-outlined">category</span>
                      {curso.tipo}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "var(--slate-500)" }}>
                    Período: {curso.periodo}
                  </p>
                  <a className="btn-cta" href={MI_ISEP} target="_blank" rel="noreferrer" style={{ alignSelf: "flex-start", fontSize: "0.85rem", padding: "0.75rem 1.5rem" }}>
                    Acceso a Mi ISeP
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: "var(--slate-500)" }}>
              No hay cursos vigentes por el momento para esta escuela.
            </p>
          )}
        </div>
      </section>

      {/* Noticias */}
      <section className="escuela-seccion">
        <div className="container-max">
          <h2 className="escuela-seccion__title">
            <span className="material-symbols-outlined">newspaper</span>
            Noticias
          </h2>
          {noticiasEscuela.length > 0 ? (
            <div className="grid-3">
              {noticiasEscuela.map((n) => (
                <Link
                  key={n.id}
                  to={`/noticias/${n.id}`}
                  className="card"
                  style={{ textDecoration: "none", overflow: "hidden", padding: "0" }}
                >
                  <div style={{ position: "relative", height: "140px", overflow: "hidden" }}>
                    <img
                      src={n.img}
                      alt={n.titulo}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={(e) => { e.target.style.background = "var(--primary-light)"; e.target.style.display = "block"; }}
                    />
                    <span style={{
                      position: "absolute", top: "0.5rem", left: "0.5rem",
                      background: "var(--primary)", color: "#fff",
                      padding: "0.15rem 0.5rem", borderRadius: "1rem",
                      fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase",
                      zIndex: 2
                    }}>
                      {n.categoria}
                    </span>
                    {n.adjuntos && n.adjuntos.length > 0 && (
                      <span style={{
                        position: "absolute", top: "0.5rem", right: "0.5rem",
                        background: "rgba(255,255,255,0.9)",
                        borderRadius: "50%",
                        width: "24px", height: "24px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.15)"
                      }}>
                        <span className="material-symbols-outlined" style={{ fontSize: "14px", color: "var(--primary)" }}>attach_file</span>
                      </span>
                    )}
                  </div>
                  <div style={{ padding: "1rem" }}>
                    <h3 className="card__title" style={{ fontSize: "0.9rem", marginBottom: "0.4rem", lineHeight: 1.3 }}>{n.titulo}</h3>
                    <p className="card__desc" style={{ fontSize: "0.8rem", marginBottom: "0.4rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{n.excerpt}</p>
                    <span style={{ fontSize: "0.72rem", color: "var(--slate-400)" }}>{n.fechaCorta}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p style={{ color: "var(--slate-500)" }}>
              No hay noticias publicadas para esta escuela.
            </p>
          )}
          {noticiasEscuela.length > 0 && (
            <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
              <Link to="/noticias" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "var(--primary)",
                textDecoration: "none",
                transition: "color 0.2s"
              }}>
                Ver todas las noticias
                <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>arrow_forward</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Contacto */}
      <section className="escuela-seccion">
        <div className="container-max">
          <h2 className="escuela-seccion__title">
            <span className="material-symbols-outlined">contact_phone</span>
            Contacto
          </h2>
          <ul className="escuela-contacto">
            <li>
              <span className="material-symbols-outlined">location_on</span>
              {info.sede}
            </li>
            <li>
              <span className="material-symbols-outlined">call</span>
              {info.contacto}
            </li>
            <li>
              <span className="material-symbols-outlined">mail</span>
              contacto@isepsantafe.edu.ar
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
