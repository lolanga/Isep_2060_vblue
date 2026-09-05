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
      <div className="countdown-expired-wrap">
        <span className="countdown-expired-text">
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
    <div className="countdown-wrap">
      {label && (
        <p className="countdown-label">
          {label}
        </p>
      )}
      <div className="countdown-blocks">
        {bloques.map((b) => (
          <div key={b.etiqueta} className="countdown-block-item">
            <div className="countdown-block-inner">
              <span className="countdown-block-num">
                {String(b.valor).padStart(2, "0")}
              </span>
            </div>
            <span className="countdown-block-label">
              {b.etiqueta}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
