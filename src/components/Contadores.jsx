/**
 * Contadores.jsx — Sección de estadísticas institucionales
 */

import { useState, useEffect, useRef, memo } from "react";

const STATS = [
  { label: "Docentes", value: 2200, suffix: "+", icon: "groups", color: "#227bd1" },
  { label: "Cadetes activos", value: 1100, suffix: "+", icon: "school", color: "#17be95" },
  { label: "Personal formándose", value: 800, suffix: "+", icon: "badge", color: "#b45309" },
  { label: "Aulas virtuales", value: 500, suffix: "+", icon: "desktop_windows", color: "#7c3aed" },
];

/**
 * Hook que anima un contador de 0 hasta target con easing cúbico.
 * @param {number} target - Valor final
 * @param {number} duration - Duración en ms
 * @param {boolean} start - Si es true, inicia la animación
 * @returns {number} Valor actual del contador
 */
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    let raf;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return count;
}

/**
 * Tarjeta de estadística con animación de conteo al entrar en viewport.
 * @param {{ label: string, value: number, suffix: string, icon: string, color: string }} stat
 */
// Optimización: envolver en React.memo para evitar re-renderizados cuando las props no cambian
const StatCard = memo(function StatCard({ stat }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(stat.value, 2000, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="contador-card" style={{ "--stat-color": stat.color }}>
      <span className="material-symbols-outlined contador-card-icon">
        {stat.icon}
      </span>
      <span className="contador-card-num">
        {count.toLocaleString("es-AR")}{stat.suffix}
      </span>
      <span className="contador-card-label">
        {stat.label}
      </span>
    </div>
  );
});

/** Sección de estadísticas institucionales con contadores animados. */
export default function Contadores() {
  return (
    <section className="contadores-section">
      <div className="container-max contadores-inner">
        <div className="contadores-header">
          <span className="badge">En números</span>
          <h2 className="contadores-title">
            El ISeP en <span className="text-primary">cifras</span>
          </h2>
        </div>
        <div className="contadores-grid">
          {STATS.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
