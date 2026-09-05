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
        <div className="error-boundary">
          <span className="material-symbols-outlined error-boundary__icon">
            error
          </span>
          <h1 className="error-boundary__title">
            Algo salió mal
          </h1>
          <p className="error-boundary__text">
            Ocurrió un error inesperado. Por favor, intentá recargar la página.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="error-boundary__btn"
          >
            Recargar página
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}