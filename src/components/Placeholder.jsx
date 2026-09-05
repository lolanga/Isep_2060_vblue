/**
 * Placeholder.jsx — Componente reutilizable para páginas "Próximamente"
 */

export default function Placeholder({ badge, title, highlight, description, features }) {
  return (
    <main className="placeholder-main">
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="badge">{badge}</span>
          <h1 className="hero-title">
            {title} <span>{highlight}</span>
          </h1>
          <p className="hero-description">{description}</p>
        </div>
      </section>

      <div className="container-max placeholder-content">
        <div className="placeholder-card">
          <span className="material-symbols-outlined placeholder-card__icon">
            construction
          </span>
          <h2 className="placeholder-card__title">
            Sección en construcción
          </h2>
          <p className="placeholder-card__text">
            Estamos trabajando para brindarte el mejor contenido. {description}
          </p>
          {features && features.length > 0 && (
            <div className="placeholder-features">
              <p className="placeholder-features__label">
                Próximamente encontrarás:
              </p>
              <ul className="placeholder-features__list">
                {features.map((f, i) => (
                  <li key={i} className="placeholder-features__item">
                    <span className="material-symbols-outlined placeholder-features__check">check_circle</span>
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
