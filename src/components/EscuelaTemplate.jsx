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

import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  escuelaPorId,
  carrerasDeEscuela,
  cursosDeEscuela,
} from "../data/institucional";
import { noticias } from "../data/noticias";

const MI_ISEP = "https://mi.isepsantafe.edu.ar";

/**
 * Plantilla reutilizable para páginas de escuela.
 * @param {string} escuelaId - ID de la escuela (policia, superior, etc.)
 */
export default function EscuelaTemplate({ escuelaId }) {
  const escuela = escuelaPorId(escuelaId);
  const carreras = carrerasDeEscuela(escuelaId);
  const cursos = useMemo(() => cursosDeEscuela(escuelaId).filter((c) => c.estado !== "finalizado"), [escuelaId]);
  const noticiasEscuela = useMemo(() =>
    noticias
      .filter((n) => n.escuelas && n.escuelas.includes(escuelaId))
      .slice(0, 3),
    [escuelaId]
  );

  if (!escuela) return null;
  const info = escuela.informacion;

  return (
    <main className="page-main">
      {/* Logo + presentación */}
      <section className="escuela-hero">
        <div className="escuela-hero__inner">
          <div className="escuela-hero__logo">
            <img src={escuela.logo} alt={`Escudo ${escuela.nombre}`} loading="eager" width="64" height="64" />
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
                    <Link to="/institucional/carreras" className="escuela-link">
                      {c.nombre}
                    </Link>
                    <p className="escuela-carerra-meta">
                      {c.modalidad} · {c.duracion}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="escuela-empty">
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
                  <h3 className="card__title escuela-card-title">{curso.nombre}</h3>
                  <p className="card__desc">{curso.informacion}</p>
                  <div className="card__meta">
                    <span className="card__chip" data-type="tipo">
                      <span className="material-symbols-outlined">category</span>
                      {curso.tipo}
                    </span>
                  </div>
                  <p className="escuela-periodo">
                    Período: {curso.periodo}
                  </p>
                  <a className="btn-cta escuela-btn-cta" href={MI_ISEP} target="_blank" rel="noreferrer">
                    Acceso a Mi ISeP
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p className="escuela-empty">
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
                  className="card escuela-news-card"
                >
                  <div className="escuela-news-img-wrap">
                    {n.img ? (
                      <img
                        src={n.img}
                        alt={n.titulo}
                        className="escuela-news-img"
                        loading="lazy"
                        width="400"
                        height="225"
                        onError={(e) => e.target.classList.add("img-error")}
                      />
                    ) : (
                      <div className="escuela-news-placeholder">
                        <span className="material-symbols-outlined">article</span>
                      </div>
                    )}
                    <span className="escuela-news-badge">
                      {n.categoria}
                    </span>
                    {n.adjuntos && n.adjuntos.length > 0 && (
                      <span className="escuela-news-attach">
                        <span className="material-symbols-outlined escuela-news-attach-icon">attach_file</span>
                      </span>
                    )}
                  </div>
                  <div className="escuela-news-body">
                    <h3 className="card__title escuela-news-title">{n.titulo}</h3>
                    <p className="card__desc escuela-news-excerpt">{n.excerpt}</p>
                    <span className="escuela-news-date">{n.fechaCorta}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="escuela-empty">
              No hay noticias publicadas para esta escuela.
            </p>
          )}
          {noticiasEscuela.length > 0 && (
            <div className="escuela-news-more">
              <Link to="/noticias" className="escuela-news-link">
                Ver todas las noticias
                <span className="material-symbols-outlined escuela-news-link-icon">arrow_forward</span>
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
