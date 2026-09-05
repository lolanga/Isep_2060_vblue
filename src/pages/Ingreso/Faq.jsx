/**
 * pages/Ingreso/Faq.jsx
 * Preguntas frecuentes — Ingreso
 */

import { useState } from "react";
import SEO from "../../components/SEO";
import { preguntasFrecuentes } from "../../data/institucional";

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      <SEO title="Preguntas Frecuentes" description="Preguntas frecuentes sobre el ISeP Santa Fe" />
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="badge">Ingreso</span>
          <h1 className="hero-title">
            Preguntas <span>Frecuentes</span>
          </h1>
          <p className="hero-description">
            Resolvé tus dudas sobre el proceso de ingreso
          </p>
        </div>
      </section>

      <div className="container-max oferta-section">
        <div className="cursos-accordion" style={{ maxWidth: "48rem", margin: "0 auto" }}>
          {preguntasFrecuentes.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`curso-acc${isOpen ? " curso-acc--open" : ""}`} key={i}>
                <button
                  type="button"
                  className="curso-acc__header"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="curso-acc__nombre">{item.pregunta}</span>
                  <span className="material-symbols-outlined curso-acc__chevron">expand_more</span>
                </button>
                <div className="curso-acc__body">
                  <div className="curso-acc__content">
                    <p style={{ color: "var(--slate-600)" }}>{item.respuesta}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
