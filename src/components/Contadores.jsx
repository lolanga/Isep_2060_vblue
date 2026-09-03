/**
 * Contadores.jsx — Sección de estadísticas institucionales
 */

import { useState, useEffect, useRef } from "react";

const STATS = [
  { label: "Docentes", value: 2200, suffix: "+", icon: "groups", color: "#227bd1" },
  { label: "Cadetes activos", value: 1100, suffix: "+", icon: "school", color: "#17be95" },
  { label: "Personal formándose", value: 800, suffix: "+", icon: "badge", color: "#b45309" },
  { label: "Aulas virtuales", value: 500, suffix: "+", icon: "desktop_windows", color: "#7c3aed" },
];

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

function StatCard({ stat }) {
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
    <div ref={ref} style={{
      textAlign: "center",
      padding: "1.5rem 1rem",
      background: "#fff",
      borderRadius: "0.75rem",
      border: "1px solid #eef2f7",
      boxShadow: "0 1px 3px rgba(15,23,42,0.05)",
      transition: "transform 0.2s, box-shadow 0.2s",
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(15,23,42,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 1px 3px rgba(15,23,42,0.05)";
      }}
    >
      <span className="material-symbols-outlined" style={{ fontSize: "2rem", color: stat.color, marginBottom: "0.5rem", display: "block" }}>
        {stat.icon}
      </span>
      <span style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: stat.color, lineHeight: 1, display: "block", fontVariantNumeric: "tabular-nums" }}>
        {count.toLocaleString("es-AR")}{stat.suffix}
      </span>
      <span style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "0.35rem", display: "block" }}>
        {stat.label}
      </span>
    </div>
  );
}

export default function Contadores() {
  return (
    <section style={{ padding: "3.5rem 0", background: "#f8fafc" }}>
      <div className="container-max" style={{ padding: "0 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <span className="badge">En números</span>
          <h2 style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)", fontWeight: 800, color: "var(--slate-900)", marginTop: "0.5rem" }}>
            El ISeP en <span style={{ color: "var(--primary)" }}>cifras</span>
          </h2>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
          gap: "1.25rem",
        }}>
          {STATS.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
