/**
 * Testimonios.jsx — Carrusel de testimonios de egresados
 */

import { useState, useCallback } from "react";

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

/** Carrusel de testimonios de egresados con navegación manual. */
export default function Testimonios() {
  const [actual, setActual] = useState(0);

  // Optimización: envolver en useCallback para evitar recrear funciones en cada render
  const siguiente = useCallback(() => setActual((a) => (a + 1) % TESTIMONIOS.length), []);
  const anterior = useCallback(() => setActual((a) => (a - 1 + TESTIMONIOS.length) % TESTIMONIOS.length), []);

  const t = TESTIMONIOS[actual];

  return (
    <section className="testimonios-section">
      <div className="container-max testimonios-inner">
        <div className="testimonios-header">
          <span className="badge testimonios-badge">Testimonios</span>
          <h2 className="testimonios-title">
            Voces de nuestros <span className="text-primary">egresados</span>
          </h2>
        </div>

        <div className="testimonios-card">
          <button
            onClick={anterior}
            aria-label="Anterior"
            className="testimonios-arrow testimonios-arrow--left"
          >
            <span className="material-symbols-outlined testimonios-arrow-icon">chevron_left</span>
          </button>

          <img
            src={t.foto}
            alt={t.nombre}
            className="testimonios-photo"
            loading="lazy"
            width="120"
            height="120"
          />

          <p className="testimonios-quote">
            "{t.texto}"
          </p>

          <p className="testimonios-name">
            {t.nombre}
          </p>
          <p className="testimonios-role">
            {t.promocion}
          </p>

          <button
            onClick={siguiente}
            aria-label="Siguiente"
            className="testimonios-arrow testimonios-arrow--right"
          >
            <span className="material-symbols-outlined testimonios-arrow-icon">chevron_right</span>
          </button>
        </div>

        {/* Dots */}
        <div className="testimonios-dots">
          {TESTIMONIOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActual(i)}
              aria-label={`Testimonio ${i + 1}`}
              className={`testimonios-dot${actual === i ? " testimonios-dot--active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
