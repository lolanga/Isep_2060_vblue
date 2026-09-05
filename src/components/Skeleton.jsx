/**
 * components/Skeleton.jsx
 *
 * Componente de carga genérico (skeleton screen).
 * Muestra pulsaciones animadas mientras se cargan datos.
 */

export function SkeletonLine({ width = "100%", height = "1rem", style = {} }) {
  return (
    <div
      className="skeleton-line"
      style={{ width, height, borderRadius: "0.375rem", ...style }}
      aria-hidden="true"
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="skeleton-card" aria-hidden="true">
      <div className="skeleton-img" />
      <div style={{ padding: "1rem" }}>
        <SkeletonLine width="40%" height="0.75rem" />
        <SkeletonLine width="90%" height="1rem" style={{ marginTop: "0.5rem" }} />
        <SkeletonLine width="70%" height="0.85rem" style={{ marginTop: "0.35rem" }} />
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