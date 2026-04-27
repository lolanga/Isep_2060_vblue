/**
 * pages/Institucional/OfertaEducativa.jsx
 * 
 * Placeholder temporal — reemplazar con contenido real
 */

export default function OfertaEducativa() {
  return (
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      {/* Hero similar al de Noticias */}
      <section style={{
        position: "relative",
        height: "420px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, var(--primary), var(--secondary))"
      }}>
        <div style={{ 
          position: "relative", 
          zIndex: 10, 
          maxWidth: "1280px", 
          margin: "0 auto", 
          padding: "0 2rem",
          width: "100%"
        }}>
          <span className="badge">Institucional</span>
          <h1 className="hero-title">
            Nuestra <span>Oferta Educativa</span>
          </h1>
          <p className="hero-description">
            Nuestras ofertas educativas y su impacto en la formación de profesionales de seguridad pública
          </p>
        </div>
      </section>

      {/* Contenido temporal */}
      <div className="container-max" style={{ padding: "4rem 2rem" }}>
        <p style={{ color: "var(--slate-500)", textAlign: "center" }}>
          Contenido en construcción — Reemplazar con información institucional real
        </p>
      </div>
    </main>
  );
}