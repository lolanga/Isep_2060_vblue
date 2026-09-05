/**
 * pages/NoticiaDetalle.jsx
 *
 * Página de detalle de una noticia individual.
 * Muestra imagen, fecha, categoría, título, contenido completo y noticias relacionadas.
 */

import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { noticias } from "../data/noticias";
import Breadcrumb from "../components/Breadcrumb";
import ShareButton from "../components/ShareButton";

const CONTENIDO_EJEMPLO = (titulo, excerpt) => `
El Instituto de Seguridad Pública de la Provincia de Santa Fe informa a toda la comunidad institucional y al público en general sobre novedades relacionadas con ${titulo.toLowerCase()}.

En el marco del cumplimiento de sus objetivos de formación, capacitación y actualización profesional, el ISeP viene desarrollando diversas actividades orientadas a fortalecer las competencias del personal de seguridad de la provincia.

${excerpt}

Esta iniciativa se enmarca en el plan estratégico institucional que busca garantizar una formación de calidad, accesible y actualizada para todos los integrantes de las fuerzas de seguridad de Santa Fe.

Desde el ISeP se promueve la excelencia académica como pilar fundamental de la seguridad pública, inv personal de seguridad de la provincia.

Esta iniciativa se enmarca en el plan estratégico institucional que busca garantizar una formación de calidad, accesible y actualizada para todos los integrantes de las fuerzas de seguridad de Santa Fe.

Desde el ISeP se promueve la excelencia académica como pilar fundamental de la seguridad pública, incentivando la actualización permanente y el intercambio de conocimientos entre profesionales del ámbito.

Para más información, comunicarse con la prensa y difusión del ISeP al correo prensaydifusion@isepsantafe.edu.ar o a través de las redes sociales oficiales.
`;

/** Página de detalle de una noticia individual con contenido completo. */
export default function NoticiaDetalle() {
  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === Number(id));
  const relacionadas = useMemo(() =>
    noticia
      ? noticias
          .filter((n) => n.id !== noticia.id && n.categoria === noticia.categoria)
          .slice(0, 3)
      : [],
    [noticia]
  );

  if (!noticia) {
    return (
      <main className="noticia-page">
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

  return (
    <main className="noticia-page">
      {/* Hero de noticia */}
      <section className="news-hero">
        <img
          src={noticia.img}
          alt={noticia.titulo}
          className="news-hero__img"
          loading="eager"
          width="900"
          height="500"
        />
        <div className="news-hero__overlay" />
        <div className="news-hero__content">
          <div className="container-max">
            <div className="news-hero__meta">
              <span className={`badge-categoria badge-categoria--${noticia.categoria.toLowerCase()}`}>
                {noticia.categoria.toUpperCase()}
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
                : CONTENIDO_EJEMPLO(noticia.titulo, noticia.excerpt).split("\n\n").map(p => `<p>${p}</p>`).join("")
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
                    <img src={n.img} alt={n.titulo} className="related-card__img" loading="lazy" width="400" height="225" />
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
