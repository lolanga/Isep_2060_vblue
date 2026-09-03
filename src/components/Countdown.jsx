/**
 * Countdown.jsx — Cuenta regresiva hasta una fecha objetivo
 * targetDate: "YYYY-MM-DDTHH:MM:SS" (ISO string)
 */

import { useState, useEffect } from "react";

function calcularTiempo(fecha) {
  const diff = new Date(fecha) - new Date();
  if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0, expirado: true };
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
    segundos: Math.floor((diff / 1000) % 60),
    expirado: false,
  };
}

export default function Countdown({ targetDate, label }) {
  const [timeLeft, setTimeLeft] = useState(() => calcularTiempo(targetDate));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calcularTiempo(targetDate)), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.expirado) {
    return (
      <div style={{ textAlign: "center", margin: "1rem 0" }}>
        <span style={{ color: "var(--color-end, #17be95)", fontWeight: 700, fontSize: "1rem" }}>
          ¡Las inscripciones están abiertas!
        </span>
      </div>
    );
  }

  const bloques = [
    { valor: timeLeft.dias, etiqueta: "Días" },
    { valor: timeLeft.horas, etiqueta: "Horas" },
    { valor: timeLeft.minutos, etiqueta: "Min" },
    { valor: timeLeft.segundos, etiqueta: "Seg" },
  ];

  return (
    <div style={{ textAlign: "center", margin: "1.25rem 0" }}>
      {label && (
        <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>
          {label}
        </p>
      )}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem" }}>
        {bloques.map((b) => (
          <div key={b.etiqueta} style={{ textAlign: "center" }}>
            <div style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(4px)",
              borderRadius: "0.75rem",
              padding: "0.6rem 0.9rem",
              minWidth: "3.5rem",
              border: "1px solid rgba(255,255,255,0.2)",
            }}>
              <span style={{ fontSize: "1.75rem", fontWeight: 800, color: "#fff", lineHeight: 1, display: "block", fontVariantNumeric: "tabular-nums" }}>
                {String(b.valor).padStart(2, "0")}
              </span>
            </div>
            <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.6)", marginTop: "0.3rem", display: "block", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {b.etiqueta}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
