import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

const CATEGORIAS = ["Todas", "Institucional", "Academica", "Escuelas", "Eventos", "Convenios"];

const NOTICIAS = [
  {
    id: 1,
    titulo: "Nueva citacion y notificacion para egresados",
    categoria: "Institucional",
    escuela: null,
    fecha: "24 DE MAYO, 2025",
    fechaCorta: "24 MAY",
    excerpt: "Se informa a los egresados de la cohorte 2022-2023 sobre el cronograma de notificaciones y entrega de certificaciones finales del ciclo lectivo.",
    img: "https://picsum.photos/seed/n1/900/500",
  },
  {
    id: 2,
    titulo: "Capacitacion en Primeros Auxilios Tacticos",
    categoria: "Academica",
    escuela: "Especialidades",
    fecha: "18 DE MAYO, 2025",
    fechaCorta: "18 MAY",
    excerpt: "El personal docente y alumnos de la Escuela de Especialidades participaron de una jornada intensiva de primeros auxilios tacticos.",
    img: "https://picsum.photos/seed/n2/900/500",
  },
  {
    id: 3,
    titulo: "Convenio Marco con la Universidad Nacional del Litoral",
    categoria: "Convenios",
    escuela: null,
    fecha: "15 DE MAYO, 2025",
    fechaCorta: "15 MAY",
    excerpt: "El ISeP firmo un convenio de colaboracion academica con la UNL para el desarrollo conjunto de programas de formacion policial.",
    img: "https://picsum.photos/seed/n3/900/500",
  },
  {
    id: 4,
    titulo: "Ciclo de Conferencias sobre Derecho Procesal Penal",
    categoria: "Academica",
    escuela: "Investigaciones",
    fecha: "10 DE MAYO, 2025",
    fechaCorta: "10 MAY",
    excerpt: "La Escuela Superior organizo un ciclo de conferencias con jueces y fiscales de la provincia sobre el nuevo Codigo Procesal Penal.",
    img: "https://picsum.photos/seed/n4/900/500",
  },
  {
    id: 5,
    titulo: "Egreso de la promocion 2025 de la Escuela de Policia",
    categoria: "Escuelas",
    escuela: "Policía",
    fecha: "5 DE MAYO, 2025",
    fechaCorta: "5 MAY",
    excerpt: "Con una ceremonia solemne en el predio del ISeP, egresaron 240 nuevos oficiales de la Escuela de Policia de Santa Fe.",
    img: "https://picsum.photos/seed/n5/900/500",
  },
  {
    id: 6,
    titulo: "Jornada de actualizacion en criminalistica",
    categoria: "Escuelas",
    escuela: "Criminalística",
    fecha: "28 ABR, 2025",
    fechaCorta: "28 ABR",
    excerpt: "La Escuela de Investigaciones organizo una jornada de actualizacion en tecnicas de criminalistica con especialistas internacionales.",
    img: "https://picsum.photos/seed/n6/900/500",
  },
  {
    id: 7,
    titulo: "Apertura de inscripciones para el ciclo lectivo 2025",
    categoria: "Institucional",
    escuela: null,
    fecha: "20 ABR, 2025",
    fechaCorta: "20 ABR",
    excerpt: "El ISeP informa la apertura del periodo de inscripciones para todas las escuelas del instituto a partir del 1 de mayo.",
    img: "https://picsum.photos/seed/n7/900/500",
  },
  {
    id: 8,
    titulo: "Evento deportivo interprovincial de fuerzas de seguridad",
    categoria: "Eventos",
    escuela: null,
    fecha: "14 ABR, 2025",
    fechaCorta: "14 ABR",
    excerpt: "Santa Fe fue sede del torneo interprovincial de atletismo que reunio a representantes de fuerzas de seguridad de todo el pais.",
    img: "https://picsum.photos/seed/n8/900/500",
  },
  {
    id: 9,
    titulo: "Nuevo laboratorio de informatica forense",
    categoria: "Academica",
    escuela: "Criminalística",
    fecha: "8 ABR, 2025",
    fechaCorta: "8 ABR",
    excerpt: "Se inauguro el laboratorio de informatica forense en la sede central del ISeP, equipado con tecnologia de ultima generacion.",
    img: "https://picsum.photos/seed/n9/900/500",
  },
  {
    id: 10,
    titulo: "Visita de autoridades del Ministerio de Seguridad",
    categoria: "Institucional",
    escuela: null,
    fecha: "2 ABR, 2025",
    fechaCorta: "2 ABR",
    excerpt: "El ministro de Seguridad provincial recorrio las instalaciones del ISeP y anuncio nuevas inversiones en infraestructura educativa.",
    img: "https://picsum.photos/seed/n10/900/500",
  },
  {
    id: 11,
    titulo: "Programa de becas para personal policial en actividad",
    categoria: "Academica",
    escuela: "Policía",
    fecha: "25 MAR, 2025",
    fechaCorta: "25 MAR",
    excerpt: "El ISeP lanza un programa de becas parciales para el personal policial en actividad que desee continuar su formacion academica.",
    img: "https://picsum.photos/seed/n11/900/500",
  },
];

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

  const filtradas = NOTICIAS.filter(
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
