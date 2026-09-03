/**
 * pages/Ingreso/Informacion.jsx
 * 
 * Placeholder temporal — reemplazar con contenido real
 */

export default function InformacionPostulantes() {
  return (
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      <section style={{
        position: "relative",
        height: "420px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--gradient-primary)"
      }}>
        <div style={{ 
          position: "relative", 
          zIndex: 10, 
          maxWidth: "1280px", 
          margin: "0 auto", 
          padding: "0 2rem",
          width: "100%"
        }}>
          <span className="badge">Ingreso</span>
          <h1 className="hero-title">
            Información para <span>Postulantes</span>
          </h1>
          <p className="hero-description">
            Todo lo que necesitás saber para formar parte del ISeP
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
