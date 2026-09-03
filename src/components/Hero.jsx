/**
 * components/Hero.jsx
 *
 * Hero principal del Home — Slider automático con transiciones suaves.
 * Mantiene el formato actual (imagen + overlay + badge + título + CTA).
 */

import { useState, useEffect, useCallback } from "react";

const SLIDES = [
  {
    id: 1,
    badge: "Excelencia Académica",
    title: "Formación Profesional para la ",
    highlight: "Seguridad Pública",
    description: "Excelencia en la capacitación policial de Santa Fe.",
    img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1600&h=700&fit=crop",
  },
  {
    id: 2,
    badge: "Nuestras Escuelas",
    title: "Formando líderes en ",
    highlight: "Seguridad Pública",
    description: "Cinco escuelas especializadas para la formación policial integral.",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&h=700&fit=crop",
  },
  {
    id: 3,
    badge: "Oferta Académica",
    title: "Carreras y cursos de ",
    highlight: "alto nivel",
    description: "Desde la formación inicial hasta la educación a distancia.",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&h=700&fit=crop",
  },
];

const INTERVAL = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  const slide = SLIDES[current];

  return (
    <section
      className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Imágenes — todas montadas, solo la activa tiene opacidad */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`hero-bg${i === current ? " hero-bg--active" : ""}`}
        >
          <img src={s.img} alt={s.title + s.highlight} />
          <div className="hero-overlay"></div>
        </div>
      ))}

      {/* Contenido */}
      <div className="hero-content">
        <div className="hero-text-box">
          <span className="badge">{slide.badge}</span>

          <h1 className="hero-title">
            {slide.title}<span>{slide.highlight}</span>
          </h1>

          <p className="hero-description">{slide.description}</p>

          <button className="btn-cta">
            Conoce nuestras propuestas
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Flechas de navegación */}
      <button
        type="button"
        className="hero-arrow hero-arrow--left"
        onClick={prev}
        aria-label="Anterior"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button
        type="button"
        className="hero-arrow hero-arrow--right"
        onClick={next}
        aria-label="Siguiente"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>

      {/* Indicadores (dots) */}
      <div className="hero-dots">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`hero-dot${i === current ? " hero-dot--active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
