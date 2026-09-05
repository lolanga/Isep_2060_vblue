/**
 * components/Skeleton.jsx
 *
 * Componente de carga genérico (skeleton screen).
 * Muestra pulsaciones animadas mientras se cargan datos.
 */

export function SkeletonLine({ width = "100%", height = "1rem", className = "" }) {
  return (
    <div
      className={`skeleton-line ${className}`.trim()}
      style={{ width, height }}
      aria-hidden="true"
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="skeleton-card" aria-hidden="true">
      <div className="skeleton-img" />
      <div className="skeleton-card__body">
        <SkeletonLine width="40%" height="0.75rem" />
        <SkeletonLine width="90%" height="1rem" className="skeleton-line--mt-sm" />
        <SkeletonLine width="70%" height="0.85rem" className="skeleton-line--mt-xs" />
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 6 }) {
  return (
    <div className="skeleton-grid" aria-label="Cargando contenido...">
      {Array.from({ length: count }, (_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}