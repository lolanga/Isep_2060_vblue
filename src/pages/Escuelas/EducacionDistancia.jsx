/**
 * pages/Escuelas/EducacionDistancia.jsx
 * 
 * Placeholder temporal — reemplazar con contenido real
 */

export default function EducacionDistancia() {
  return (
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
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
          <span className="badge">Escuelas</span>
          <h1 className="hero-title">
            <span>Educación</span> a Distancia
          </h1>
          <p className="hero-description">
            Formación virtual para profesionales de la seguridad
          </p>
        </div>
      </section>

      <div className="container-max" style={{ padding: "4rem 2rem" }}>
        <p style={{ color: "var(--slate-500)", textAlign: "center" }}>
          Contenido en construcción — Próximamente
        </p>
      </div>
    </main>
  );
}
