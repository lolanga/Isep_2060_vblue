/**
 * Testimonios.jsx — Carrusel de testimonios de egresados
 */

import { useState } from "react";

const TESTIMONIOS = [
  {
    id: 1,
    nombre: "Comisario Roberto Díaz",
    promocion: "Promoción 2019 – Escuela de Policía",
    texto: "La formación que recibí en el ISeP fue fundamental para mi desarrollo profesional. Los conocimientos teóricos y prácticos me prepararon para enfrentar los desafíos del servicio diario.",
    foto: "https://picsum.photos/seed/eg1/120/120",
  },
  {
    id: 2,
    nombre: "Suboficial Ana María López",
    promocion: "Promoción 2021 – Escuela de Especialidades",
    texto: "El ISeP no solo me dio herramientas técnicas, sino que me enseñó el valor de la ética y el compromiso con la comunidad. Cada día aplico lo aprendido en estas aulas.",
    foto: "https://picsum.photos/seed/eg2/120/120",
  },
  {
    id: 3,
    nombre: "Cabo Primero Carlos Gutiérrez",
    promocion: "EaD – Diplomatura en Criminalística 2023",
    texto: "Gracias a la modalidad a distancia pude continuar mi formación sin dejar de cumplir funciones. El contenido es de excelente calidad y el seguimiento docente es personalizado.",
    foto: "https://picsum.photos/seed/eg3/120/120",
  },
];

export default function Testimonios() {
  const [actual, setActual] = useState(0);

  const siguiente = () => setActual((a) => (a + 1) % TESTIMONIOS.length);
  const anterior = () => setActual((a) => (a - 1 + TESTIMONIOS.length) % TESTIMONIOS.length);

  const t = TESTIMONIOS[actual];

  return (
    <section style={{ padding: "4rem 0", background: "#f8fafc" }}>
      <div className="container-max" style={{ padding: "0 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="badge" style={{ marginBottom: "0.75rem" }}>Testimonios</span>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--slate-900)" }}>
            Voces de nuestros <span style={{ color: "var(--primary)" }}>egresados</span>
          </h2>
        </div>

        <div style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "1.25rem",
          padding: "2.5rem 2rem",
          border: "1px solid #eef2f7",
          boxShadow: "0 2px 8px rgba(15,23,42,0.05)",
          textAlign: "center",
          position: "relative",
        }}>
          <button
            onClick={anterior}
            aria-label="Anterior"
            style={{
              position: "absolute",
              left: "0.75rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "var(--gradient-primary)",
              border: "none",
              borderRadius: "50%",
              width: "2.25rem",
              height: "2.25rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            }}
          >
            <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: "1.1rem" }}>chevron_left</span>
          </button>

          <img
            src={t.foto}
            alt={t.nombre}
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "1rem",
              border: "3px solid var(--primary)",
            }}
          />

          <p style={{
            fontSize: "1rem",
            color: "#475569",
            lineHeight: 1.7,
            fontStyle: "italic",
            marginBottom: "1.25rem",
            padding: "0 1.5rem",
          }}>
            "{t.texto}"
          </p>

          <p style={{ fontWeight: 700, color: "var(--slate-900)", fontSize: "0.95rem", marginBottom: "0.2rem" }}>
            {t.nombre}
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--primary)" }}>
            {t.promocion}
          </p>

          <button
            onClick={siguiente}
            aria-label="Siguiente"
            style={{
              position: "absolute",
              right: "0.75rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "var(--gradient-primary)",
              border: "none",
              borderRadius: "50%",
              width: "2.25rem",
              height: "2.25rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            }}
          >
            <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: "1.1rem" }}>chevron_right</span>
          </button>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1.5rem" }}>
          {TESTIMONIOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActual(i)}
              aria-label={`Testimonio ${i + 1}`}
              style={{
                width: actual === i ? "1.5rem" : "0.5rem",
                height: "0.5rem",
                borderRadius: "999px",
                border: "none",
                background: actual === i ? "var(--primary)" : "#cbd5e1",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
