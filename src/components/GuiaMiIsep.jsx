/**
 * components/GuiaMiIsep.jsx
 *
 * Bloque transversal reutilizable: explica que Mi ISeP es el punto de partida
 * obligatorio para todas las convocatorias y formaciones, y muestra los pasos
 * comunes para crear la cuenta y comenzar el trámite.
 */

import { miIsepInfo, pasosMiIsep } from "../data/miIsep";

export default function GuiaMiIsep({
  variant = "section",
  headingTag = "h2",
  showIntro = true,
  className = "",
}) {
  const isCompact = variant === "compact";
  const headingClassName = isCompact ? "conv-card-heading" : "section-title";

  return (
    <div className={`mi-isep-guide ${isCompact ? "mi-isep-guide--compact" : ""} ${className}`.trim()}>
      <div className="mi-isep-guide__header">
        <span className="badge">Requisito transversal</span>
        {headingTag === "h3" ? (
          <h3 className={headingClassName}>{miIsepInfo.titulo}</h3>
        ) : (
          <h2 className={headingClassName}>{miIsepInfo.titulo}</h2>
        )}
        {showIntro && (
          <p className="section-text mi-isep-guide__intro">
            {miIsepInfo.descripcion}
          </p>
        )}
      </div>

      <div className="grid-4col mi-isep-guide__steps">
        {pasosMiIsep.map((p, i) => (
          <div key={p.titulo} className="conv-step-card mi-isep-guide__step">
            <div className="step-circle">{i + 1}</div>
            <span className="material-symbols-outlined icon-primary mi-isep-guide__step-icon" aria-hidden="true">
              {p.icon}
            </span>
            <h3 className="conv-card-subtitle">{p.titulo}</h3>
            <p className="conv-card-text">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="mi-isep-guide__actions">
        <a
          href={miIsepInfo.url}
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          {miIsepInfo.cta}
          <span className="material-symbols-outlined conv-arrow-icon">arrow_forward</span>
        </a>
        <p className="mi-isep-guide__hint">
          Usá un correo electrónico personal y de acceso frecuente: será tu medio de confirmación y contacto.
        </p>
      </div>
    </div>
  );
}
