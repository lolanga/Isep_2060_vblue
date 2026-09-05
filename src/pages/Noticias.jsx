/**
 * pages/Noticias.jsx
 *
 * Listado de noticias con filtro por categoría, paginación y detalle.
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import ShareButton from "../components/ShareButton";
import { noticias } from "../data/noticias";

const CATEGORIAS = ["Todas", "Institucional", "Academica", "Escuelas", "Eventos", "Convenios"];

const ITEMS_POR_PAGINA = 10;

/** Página de listado de noticias con filtro por categoría y paginación. */
export default function Noticias() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");
  const [pagina, setPagina] = useState(1);

  const filtradas = noticias.filter(
    (n) =>
      (categoriaActiva === "Todas" || n.categoria === categoriaActiva)
  );

  const principal = filtradas[0] || null;
  const historico = filtradas.slice(1);

  const totalPaginas = Math.ceil(historico.length / ITEMS_POR_PAGINA);
  const inicio = (pagina - 1) * ITEMS_POR_PAGINA;
  const paginadas = historico.slice(inicio, inicio + ITEMS_POR_PAGINA);

  const cambiarCategoria = (cat) => {
    setCategoriaActiva(cat);
    setPagina(1);
  };

  return (
    <main className="noticias-page">
      <section className="noticias-hero">
        <div className="noticias-hero__bg">
          <img src="https://picsum.photos/seed/isephero/1600/600" alt="Noticias ISeP" />
          <div className="hero-overlay"></div>
        </div>
        <div className="noticias-hero__content">
          <span className="badge">Actualidad Institucional</span>
          <h1 className="hero-title">
            Últimas <span>Noticias</span>
          </h1>
          <p className="hero-description">
            Información oficial del Instituto de Seguridad Pública de Santa Fe.
          </p>
        </div>
      </section>

      <div className="container-max noticias-breadcrumb-wrap">
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Noticias" },
          ]}
        />
      </div>

      <div className="noticias-filtro-wrap">
        <div className="noticias-filtro container-max">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filtro-btn${categoriaActiva === cat ? " filtro-btn--active" : ""}`}
              onClick={() => cambiarCategoria(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="noticias-body container-max">
        {principal && (
          <section className="noticias-principal">
            <div className="np-badge-row">
              <span className="badge-categoria badge-categoria--highlight">ÚLTIMA PUBLICACIÓN</span>
              <span className={`badge-categoria badge-categoria--${principal.categoria.toLowerCase()}`}>
                {principal.categoria.toUpperCase()}
              </span>
              <ShareButton noticia={principal} />
            </div>

            <Link to={`/noticias/${principal.id}`} className="noticias-link">
              <article className="np-card">
                <div className="np-img-wrap">
                  {principal.img ? (
                    <img src={principal.img} alt={principal.titulo} />
                  ) : (
                    <div className="np-img-placeholder">
                      <span className="material-symbols-outlined">article</span>
                    </div>
                  )}
                  <div className="np-img-overlay"></div>
                  {principal.adjuntos && principal.adjuntos.length > 0 && (
                    <span className="np-attach-badge">
                      <span className="material-symbols-outlined np-attach-icon">attach_file</span>
                    </span>
                  )}
                  <div className="np-img-text">
                    <span className="np-fecha">{principal.fecha}</span>
                    <h2 className="np-titulo">{principal.titulo}</h2>
                    <p className="np-excerpt">{principal.excerpt}</p>
                    <span className="btn-cta np-cta">
                      Leer nota completa
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </section>
        )}

        {paginadas.length > 0 && (
          <section className="noticias-historial">
            <div className="historial-header">
              <h3 className="historial-titulo">Noticias anteriores</h3>
              <span className="historial-count">{historico.length} notas</span>
            </div>

            <div className="historial-grid">
              {paginadas.map((n) => (
                <Link key={n.id} to={`/noticias/${n.id}`} className="noticias-link">
                  <article className="hcard">
                    <div className="hcard-img-wrap">
                      {n.img ? (
                        <img src={n.img} alt={n.titulo} />
                      ) : (
                        <div className="hcard-img-placeholder">
                          <span className="material-symbols-outlined">article</span>
                        </div>
                      )}
                      <div className="hcard-overlay"></div>
                      <span className={`hcard-cat badge-categoria badge-categoria--${n.categoria.toLowerCase()}`}>
                        {n.categoria.toUpperCase()}
                      </span>
                      {n.adjuntos && n.adjuntos.length > 0 && (
                        <span className="hcard-attach-badge">
                          <span className="material-symbols-outlined hcard-attach-icon">attach_file</span>
                        </span>
                      )}
                    </div>
                    <div className="hcard-body">
                      <div className="hcard-header-row">
                        <span className="hcard-fecha">{n.fechaCorta}</span>
                        <ShareButton noticia={n} />
                      </div>
                      <h4 className="hcard-titulo">{n.titulo}</h4>
                      <p className="hcard-excerpt">{n.excerpt}</p>
                      <div className="read-more">
                        LEER MÁS
                        <span className="material-symbols-outlined">chevron_right</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {totalPaginas > 1 && (
              <div className="paginacion">
                <button type="button" className="pag-btn" onClick={() => setPagina((p) => Math.max(1, p - 1))} disabled={pagina === 1}>
                  <span className="material-symbols-outlined">chevron_left</span>
                  Anterior
                </button>
                <div className="pag-nums">
                  {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((n) => (
                    <button key={n} type="button" className={`pag-num${pagina === n ? " pag-num--active" : ""}`} onClick={() => setPagina(n)}>
                      {n}
                    </button>
                  ))}
                </div>
                <button type="button" className="pag-btn" onClick={() => setPagina((p) => Math.min(totalPaginas, p + 1))} disabled={pagina === totalPaginas}>
                  Siguiente
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            )}
          </section>
        )}

        {filtradas.length === 0 && (
          <div className="noticias-vacio">
            <span className="material-symbols-outlined">newspaper</span>
            <p>No hay noticias en esta categoría por el momento.</p>
          </div>
        )}
      </div>
    </main>
  );
}