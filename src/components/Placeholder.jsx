/**
 * Placeholder.jsx — Componente reutilizable para páginas "Próximamente"
 */

export default function Placeholder({ badge, title, highlight, description, features }) {
  return (
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="badge">{badge}</span>
          <h1 className="hero-title">
            {title} <span>{highlight}</span>
          </h1>
          <p className="hero-description">{description}</p>
        </div>
      </section>

      <div className="container-max" style={{ padding: "4rem 2rem", maxWidth: "640px", margin: "0 auto" }}>
        <div style={{
          textAlign: "center",
          background: "#fff",
          borderRadius: "1rem",
          padding: "3rem 2rem",
          border: "1px solid #eef2f7",
          boxShadow: "0 1px 3px rgba(15,23,42,0.05)"
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "var(--secondary)", display: "block", marginBottom: "1rem" }}>
            construction
          </span>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--primary)", marginBottom: "0.75rem" }}>
            Sección en construcción
          </h2>
          <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            Estamos trabajando para brindarte el mejor contenido. {description}
          </p>
          {features && features.length > 0 && (
            <div style={{ textAlign: "left", marginTop: "1.5rem" }}>
              <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>
                Próximamente encontrarás:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {features.map((f, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 0", color: "#475569", fontSize: "0.9rem" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "1rem", color: "var(--color-end, #17be95)" }}>check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
