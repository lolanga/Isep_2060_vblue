/**
 * News.jsx — Sección de noticias destacadas del Home
 *
 * Muestra la noticia principal en un card grande y tres noticias
 * laterales en mini-cards, plus un promo de calendario académico.
 */

import { Link } from "react-router-dom";
import { noticias } from "../data/noticias";

/** Sección de noticias del Home con destacada + sidebar. */
export default function News() {
  if (noticias.length === 0) return null;

  const destacada = noticias[0];
  const laterales = noticias.slice(1, 4);
  return (
    <section className="news-section">
      <div className="container-max">

        {/* Header */}
        <div className="section-header">
          <div>
            <span className="section-subtitle">Actualidad Institucional</span>
            <h2 className="section-title">ÚLTIMAS NOTICIAS</h2>
          </div>

          <Link className="view-all" to="/noticias">
            Ver todas las noticias
            <span className="material-symbols-outlined">open_in_new</span>
          </Link>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="news-grid">

          {/* NOTICIA DESTACADA */}
          <div className="featured-news">
            <Link to={`/noticias/${destacada.id}`} className="featured-news-link">
              <article className="card">
                <div className="card-img-container">
                  {destacada.img ? (
                    <img src={destacada.img} alt={destacada.titulo} loading="eager" width="900" height="500" />
                  ) : (
                    <div className="card-img-placeholder">
                      <span className="material-symbols-outlined">article</span>
                    </div>
                  )}
                  <span className="news-badge">{destacada.categoria.toUpperCase()}</span>
                </div>

                <div className="card-body">
                  <span className="card-date">{destacada.fecha}</span>

                  <h3 className="card-title">
                    {destacada.titulo.toUpperCase()}
                  </h3>

                  <p className="card-excerpt">
                    {destacada.excerpt}
                  </p>

                  <div className="read-more">
                    LEER MÁS
                    <span className="material-symbols-outlined">chevron_right</span>
                  </div>
                </div>
              </article>
            </Link>
          </div>

          {/* SIDEBAR */}
          <div className="sidebar-news">

            {laterales.map((n) => (
              <Link key={n.id} to={`/noticias/${n.id}`} className="sidebar-news-link">
                <div className="mini-card">
                  <div className="mini-img">
                    {n.img ? (
                      <img src={n.img} alt={n.titulo} loading="lazy" width="400" height="225" />
                    ) : (
                      <div className="mini-img-placeholder">
                        <span className="material-symbols-outlined">article</span>
                      </div>
                    )}
                  </div>

                  <div className="mini-content">
                    <span className="mini-date">{n.fechaCorta}</span>
                    <h4 className="mini-title">
                      {n.titulo}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}

            {/* PROMO */}
            <div className="calendar-promo">
              <span className="material-symbols-outlined bg-icon">
                shield
              </span>

              <h4 className="promo-title">Calendario Académico</h4>

              <p className="promo-text">
                Consulta todas las fechas importantes del ciclo lectivo 2026.
              </p>

              <button className="btn-download">
                DESCARGAR PDF
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}