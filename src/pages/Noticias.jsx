import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { noticias } from "../data/noticias";

const CATEGORIAS = ["Todas", "Institucional", "Academica", "Escuelas", "Eventos", "Convenios"];

const ITEMS_POR_PAGINA = 10;

function ShareButton({ noticia }) {
  const [copiado, setCopiado] = useState(false);

  const handleShare = async () => {
    const url = `${window.location.origin}/noticias`;
    if (navigator.share) {
      try {
        await navigator.share({ title: noticia.titulo, text: noticia.excerpt, url });
      } catch { /* usuario canceló */ }
    } else {
      await navigator.clipboard.writeText(`${noticia.titulo}\n${noticia.excerpt}\n${url}`);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      title="Compartir noticia"
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        color: copiado ? "var(--color-end, #17be95)" : "#94a3b8",
        display: "flex",
        alignItems: "center",
        gap: "0.25rem",
        fontSize: "0.75rem",
        padding: "0.25rem",
        borderRadius: "0.25rem",
        transition: "color 0.2s",
      }}
    >
      <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>
        {copiado ? "check" : "share"}
      </span>
      {copiado ? "¡Copiado!" : ""}
    </button>
  );
}

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
            Ultimas <span>Noticias</span>
          </h1>
          <p className="hero-description">
            Informacion oficial del Instituto de Seguridad Publica de Santa Fe.
          </p>
        </div>
      </section>

      <div className="container-max" style={{ padding: "0 2rem" }}>
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
              <span className="badge-categoria badge-categoria--highlight">ULTIMA PUBLICACION</span>
              <span className={`badge-categoria badge-categoria--${principal.categoria.toLowerCase()}`}>
                {principal.categoria.toUpperCase()}
              </span>
              <ShareButton noticia={principal} />
            </div>

            <article className="np-card">
              <div className="np-img-wrap">
                <img src={principal.img} alt={principal.titulo} />
                <div className="np-img-overlay"></div>
                <div className="np-img-text">
                  <span className="np-fecha">{principal.fecha}</span>
                  <h2 className="np-titulo">{principal.titulo}</h2>
                  <p className="np-excerpt">{principal.excerpt}</p>
                  <button type="button" className="btn-cta np-cta">
                    Leer nota completa
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>
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
                <article key={n.id} className="hcard">
                  <div className="hcard-img-wrap">
                    <img src={n.img} alt={n.titulo} />
                    <div className="hcard-overlay"></div>
                    <span className={`hcard-cat badge-categoria badge-categoria--${n.categoria.toLowerCase()}`}>
                      {n.categoria.toUpperCase()}
                    </span>
                  </div>
                  <div className="hcard-body">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span className="hcard-fecha">{n.fechaCorta}</span>
                      <ShareButton noticia={n} />
                    </div>
                    <h4 className="hcard-titulo">{n.titulo}</h4>
                    <p className="hcard-excerpt">{n.excerpt}</p>
                    <div className="read-more">
                      LEER MAS
                      <span className="material-symbols-outlined">chevron_right</span>
                    </div>
                  </div>
                </article>
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
            <p>No hay noticias en esta categoria por el momento.</p>
          </div>
        )}
      </div>
    </main>
  );
}
