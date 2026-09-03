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
      gap: "0.3rem",
      fontSize: "0.82rem",
      color: "#64748b",
      flexWrap: "wrap",
      padding: "0.75rem 1rem",
      marginTop: "1rem",
      background: "#f8fafc",
      borderRadius: "0.5rem",
      border: "1px solid #eef2f7",
    }}>
      <span className="material-symbols-outlined" style={{ fontSize: "1rem", color: "var(--primary)" }}>home</span>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
            <span style={{ margin: "0 0.1rem", color: "#cbd5e1" }}>/</span>
            {item.to && !isLast ? (
              <Link to={item.to} style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 500, transition: "color 0.15s" }}>
                {item.label}
              </Link>
            ) : (
              <span style={{ color: isLast ? "var(--slate-800, #1e293b)" : "#64748b", fontWeight: isLast ? 700 : 400 }}>
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
