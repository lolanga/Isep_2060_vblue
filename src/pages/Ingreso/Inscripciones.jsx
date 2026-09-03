/**
 * pages/Ingreso/Inscripciones.jsx
 * 
 * Placeholder temporal — reemplazar con contenido real
 */

export default function InscripcionesIngreso() {
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
            <span>Inscripciones</span>
          </h1>
          <p className="hero-description">
            Formularios y requisitos para inscribirse
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
