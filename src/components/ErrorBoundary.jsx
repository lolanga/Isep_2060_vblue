/**
 * components/ErrorBoundary.jsx
 *
 * Captura errores de renderizado en la app y muestra una UI de fallback
 * en lugar de que la pantalla completa se ponga en blanco.
 */

import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          textAlign: "center",
          fontFamily: "'Segoe UI', system-ui, sans-serif",
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: "4rem", color: "#ef4444", marginBottom: "1rem" }}>
            error
          </span>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem" }}>
            Algo salió mal
          </h1>
          <p style={{ color: "#64748b", maxWidth: "400px", marginBottom: "1.5rem" }}>
            Ocurrió un error inesperado. Por favor, intentá recargar la página.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "0.75rem 2rem",
              borderRadius: "0.5rem",
              background: "linear-gradient(90deg, #227bd1, #17be95)",
              color: "#fff",
              border: "none",
              fontWeight: 700,
              fontSize: "0.95rem",
              cursor: "pointer",
            }}
          >
            Recargar página
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}