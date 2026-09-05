/**
 * Breadcrumb.jsx — Componente de navegación de migas de pan
 * items: [{ label: "Inicio", to: "/" }, { label: "Sección" }, { label: "Página" }]
 */

import { Link } from "react-router-dom";

/**
 * Componente de navegación de migas de pan.
 * @param {{ label: string, to?: string }[]} items - Array de items del breadcrumb
 */
export default function Breadcrumb({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-nav">
      <span className="material-symbols-outlined breadcrumb-nav__home">home</span>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="breadcrumb-nav__item">
            <span className="breadcrumb-nav__sep">/</span>
            {item.to && !isLast ? (
              <Link to={item.to} className="breadcrumb-nav__link">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "breadcrumb-nav__label breadcrumb-nav__label--current" : "breadcrumb-nav__label"}>
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
