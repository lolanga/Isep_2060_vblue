/**
 * pages/NoticiaDetalle.jsx
 *
 * Página de detalle de una noticia individual.
 * Muestra imagen, fecha, categoría, título, contenido completo y noticias relacionadas.
 */

import { useParams, Link } from "react-router-dom";
import { noticias } from "../data/noticias";
import Breadcrumb from "../components/Breadcrumb";
import ShareButton from "../components/ShareButton";
import SEO from "../components/SEO";

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

export default function NoticiaDetalle() {
  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === Number(id));

  if (!noticia) {
    return (
      <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
        <SEO title="Noticia no encontrada" />
        <div className="container-max" style={{ padding: "4rem 2rem", textAlign: "center" }}>
          <span className="material-symbols-outlined" style={{ fontSize: "4rem", color: "#cbd5e1" }}>search_off</span>
          <h2 style={{ color: "var(--slate-700)", marginTop: "1rem" }}>Noticia no encontrada</h2>
          <Link to="/noticias" style={{ color: "var(--primary)", fontWeight: 600, marginTop: "1rem", display: "inline-block" }}>
            ← Volver a noticias
          </Link>
        </div>
      </main>
    );
  }

  const relacionadas = noticias
    .filter((n) => n.id !== noticia.id && n.categoria === noticia.categoria)
    .slice(0, 3);

  return (
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      <SEO title={noticia.titulo} description={noticia.excerpt} />
      {/* Hero de noticia */}
      <section style={{ position: "relative", height: "clamp(300px, 40vw, 480px)", overflow: "hidden" }}>
        <img
          src={noticia.img}
          alt={noticia.titulo}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
        }} />
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "2rem",
        }}>
          <div className="container-max">
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
              <span className={`badge-categoria badge-categoria--${noticia.categoria.toLowerCase()}`}>
                {noticia.categoria.toUpperCase()}
              </span>
              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem" }}>{noticia.fecha}</span>
            </div>
            <h1 style={{ color: "#fff", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2 }}>
              {noticia.titulo}
            </h1>
          </div>
        </div>
      </section>

      <div className="container-max" style={{ padding: "2rem" }}>
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Noticias", to: "/noticias" },
            { label: noticia.titulo },
          ]}
        />

        {/* Barra de acciones */}
        <div style={{ display: "flex", justifyContent: "flex-end", margin: "0.5rem 0 1.5rem" }}>
          <ShareButton noticia={noticia} />
        </div>

        {/* Contenido */}
        <article style={{
          maxWidth: "48rem",
          margin: "0 auto",
        }}>
          <p style={{
            fontSize: "1.1rem",
            color: "var(--slate-700)",
            lineHeight: 1.7,
            fontWeight: 500,
            marginBottom: "1.5rem",
            fontStyle: "italic",
            borderLeft: "4px solid var(--primary)",
            paddingLeft: "1rem",
          }}>
            {noticia.excerpt}
          </p>

          <div
            className="noticia-contenido"
            style={{
              fontSize: "0.95rem",
              color: "#475569",
              lineHeight: 1.8,
            }}
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
          <section style={{ marginTop: "2rem", padding: "1.25rem", background: "#f8fafc", borderRadius: "0.75rem", border: "1px solid #eef2f7" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--slate-900)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "1.2rem" }}>attach_file</span>
              Documentos adjuntos
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {noticia.adjuntos.map((adj, i) => (
                <a
                  key={i}
                  href={adj.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.6rem 0.85rem",
                    background: "#fff",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    color: "var(--primary)",
                    fontWeight: 600,
                    transition: "box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>description</span>
                  {adj.nombre}
                  <span className="material-symbols-outlined" style={{ fontSize: "0.9rem", color: "#94a3b8", marginLeft: "auto" }}>open_in_new</span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Noticias relacionadas */}
        {relacionadas.length > 0 && (
          <section style={{ marginTop: "3rem", borderTop: "1px solid #eef2f7", paddingTop: "2rem" }}>
            <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--slate-900)", marginBottom: "1.25rem" }}>
              Noticias relacionadas
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "1rem" }}>
              {relacionadas.map((n) => (
                <Link key={n.id} to={`/noticias/${n.id}`} style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "#fff",
                    borderRadius: "0.75rem",
                    border: "1px solid #eef2f7",
                    overflow: "hidden",
                    transition: "box-shadow 0.2s, transform 0.2s",
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 4px 12px rgba(15,23,42,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <img src={n.img} alt={n.titulo} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
                    <div style={{ padding: "1rem" }}>
                      <span style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 600 }}>{n.fechaCorta}</span>
                      <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--slate-900)", marginTop: "0.25rem", lineHeight: 1.3 }}>
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
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link to="/noticias" className="btn-cta" style={{ display: "inline-flex" }}>
            <span className="material-symbols-outlined">arrow_back</span>
            Volver a noticias
          </Link>
        </div>
      </div>
    </main>
  );
}