/**
 * Breadcrumb.jsx — Componente de navegación de migas de pan
 * items: [{ label: "Inicio", to: "/" }, { label: "Sección" }, { label: "Página" }]
 */

import { Link } from "react-router-dom";

export default function Breadcrumb({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" style={{
      display: "flex",
      alignItems: "center",
      gap: "0.25rem",
      fontSize: "0.8rem",
      color: "#94a3b8",
      flexWrap: "wrap",
      paddingTop: "1rem",
    }}>
      <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>home</span>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <span style={{ margin: "0 0.15rem" }}>/</span>
            {item.to && !isLast ? (
              <Link to={item.to} style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 500 }}>
                {item.label}
              </Link>
            ) : (
              <span style={{ color: isLast ? "var(--primary)" : "#94a3b8", fontWeight: isLast ? 600 : 400 }}>
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
