/**
 * pages/NoticiaDetalle.jsx
 *
 * Página de detalle de una noticia individual.
 * Muestra imagen, fecha, categoría, título, contenido completo y noticias relacionadas.
 * Resuelve la noticia de forma async: recientes al instante, histórico bajo demanda.
 */

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { noticias, obtenerNoticia } from "../utils/noticias";
import Breadcrumb from "../components/Breadcrumb";
import ShareButton from "../components/ShareButton";
import SEO from "../components/SEO";
import { NewsArticleLd, BreadcrumbLd } from "../components/JsonLd";

/** Página de detalle de una noticia individual con contenido completo. */
export default function NoticiaDetalle() {
  const { id } = useParams();
  const [estado, setEstado] = useState(() => {
    // Resolución inmediata de noticias recientes para evitar flicker.
    const encontrada = noticias.find((n) => n.id === Number(id));
    return encontrada
      ? { cargando: false, noticia: encontrada, lista: noticias, relacionadas: [], anio: null }
      : { cargando: true, noticia: null, lista: [], relacionadas: [], anio: null };
  });

  useEffect(() => {
    let activo = true;

    async function resolver() {
      setEstado({ cargando: true, noticia: null, lista: [], relacionadas: [], anio: null });
      const res = await obtenerNoticia(id);
      if (activo) setEstado({ cargando: false, ...res });
    }

    resolver();
    return () => { activo = false; };
  }, [id]);

  const { noticia, relacionadas } = estado;
  const categoria = (noticia?.categoria || "").toLowerCase();

  if (!estado.cargando && !noticia) {
    return (
      <main id="main-content" className="noticia-page">
        <SEO title="Noticia no encontrada" />
        <div className="container-max noticia-notfound">
          <span className="material-symbols-outlined not-found__icon">search_off</span>
          <h2 className="not-found__title">Noticia no encontrada</h2>
          <Link to="/noticias" className="not-found__link">
            ← Volver a noticias
          </Link>
        </div>
      </main>
    );
  }

  if (!noticia) {
    return (
      <main id="main-content" className="noticia-page">
        <SEO title="Cargando noticia" />
        <div className="container-max noticia-notfound">
          <div className="spinner" aria-hidden="true" />
          <p className="not-found__title">Cargando noticia…</p>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="noticia-page">
      <SEO title={noticia.titulo} description={noticia.excerpt} />
      <NewsArticleLd noticia={noticia} />
      {/* Hero de noticia */}
      <section className="news-hero">
        {noticia.img ? (
          <img
            src={noticia.img}
            alt={noticia.titulo}
            className="news-hero__img"
            loading="eager"
            width="900"
            height="500"
          />
        ) : (
          <div className="news-hero__placeholder">
            <span className="material-symbols-outlined">article</span>
          </div>
        )}
        <div className="news-hero__overlay" />
        <div className="news-hero__content">
          <div className="container-max">
            <div className="news-hero__meta">
              <span className={`badge-categoria badge-categoria--${categoria}`}>
                {(noticia.categoria || "").toUpperCase()}
              </span>
              <span className="news-hero__fecha">{noticia.fecha}</span>
            </div>
            <h1 className="news-hero__title">
              {noticia.titulo}
            </h1>
          </div>
        </div>
      </section>

      <div className="container-max noticia-body">
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Noticias", to: "/noticias" },
            { label: noticia.titulo },
          ]}
        />
        <BreadcrumbLd
          items={[
            { label: "Inicio", to: "/" },
            { label: "Noticias", to: "/noticias" },
            { label: noticia.titulo },
          ]}
        />

        {/* Barra de acciones */}
        <div className="noticia-actions">
          <ShareButton noticia={noticia} />
        </div>

        {/* Contenido */}
        <article className="noticia-article">
          <p className="article-excerpt">
            {noticia.excerpt}
          </p>

          <div
            className="noticia-contenido article-content"
            dangerouslySetInnerHTML={{
              __html: noticia.contenido
                ? (noticia.contenido.trim().startsWith("<")
                    ? noticia.contenido
                    : noticia.contenido.split("\n\n").map(p => `<p>${p}</p>`).join(""))
                : "<p>El contenido completo de esta noticia no está disponible por el momento.</p>"
            }}
          />
        </article>

        {/* Documentos adjuntos */}
        {noticia.adjuntos && noticia.adjuntos.length > 0 && (
          <section className="info-box noticia-adjuntos">
            <h3 className="info-box__title">
              <span className="material-symbols-outlined icon-primary">attach_file</span>
              Documentos adjuntos
            </h3>
            <div className="attachment-list">
              {noticia.adjuntos.map((adj, i) => (
                <a
                  key={i}
                  href={adj.url}
                  target="_blank"
                  rel="noreferrer"
                  className="attachment-link"
                >
                  <span className="material-symbols-outlined icon-xs">description</span>
                  {adj.nombre}
                  <span className="material-symbols-outlined attachment-link__spacer">open_in_new</span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Noticias relacionadas */}
        {relacionadas.length > 0 && (
          <section className="section-sep">
            <h2 className="section-title--sm">
              Noticias relacionadas
            </h2>
            <div className="related-grid">
              {relacionadas.map((n) => (
                <Link key={n.id} to={`/noticias/${n.id}`} className="related-card-link">
                  <div className="related-card">
                    {n.img ? (
                      <img src={n.img} alt={n.titulo} className="related-card__img" loading="lazy" width="400" height="225" />
                    ) : (
                      <div className="related-card__placeholder">
                        <span className="material-symbols-outlined">article</span>
                      </div>
                    )}
                    <div className="related-card__body">
                      <span className="related-card__fecha">{n.fechaCorta}</span>
                      <h3 className="related-card__title">
                        {n.titulo}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Botón volver */}
        <div className="noticia-back">
          <Link to="/noticias" className="btn-cta btn-inline">
            <span className="material-symbols-outlined">arrow_back</span>
            Volver a noticias
          </Link>
        </div>
      </div>
    </main>
  );
}