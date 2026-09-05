/**
 * components/SkipToContent.jsx
 *
 * Enlace "Saltar al contenido principal" para navegación por teclado.
 * Solo visible al hacer foco con Tab. Mejora la accesibilidad (a11y).
 */

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="skip-to-content"
    >
      Saltar al contenido principal
    </a>
  );
}