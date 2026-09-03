/**
 * pages/Secretaria/Biblioteca.jsx
 * 
 * Placeholder temporal — reemplazar con contenido real
 */

import App from "../../App";

export default function Biblioteca() {
  return (
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      {/* Hero similar al de Noticias */}
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
          <span className="badge">Institucional</span>
          <h1 className="hero-title">
            Nuestra <span>Biblioteca</span>
          </h1>
          <p className="hero-description">
            Recursos y servicios disponibles para apoyar el aprendizaje y la investigación de nuestros estudiantes y docentes
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