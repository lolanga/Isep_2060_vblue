/**
 * Faq.jsx — Preguntas frecuentes sobre el proceso de ingreso
 *
 * Acordeón interactivo que muestra las preguntas más comunes
 * y sus respuestas sobre inscripción, requisitos y evaluaciones.
 */

import { useState } from "react";
import SEO from "../../components/SEO";
import { preguntasFrecuentes } from "../../data/institucional";

/** Página de preguntas frecuentes con acordeón expandible. */
export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
<<<<<<< HEAD
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      <SEO title="Preguntas Frecuentes" description="Preguntas frecuentes sobre el ISeP Santa Fe" />
=======
    <main className="page-main">
>>>>>>> b2abd80d2a935bc7c174419e87dadaf8c710b708
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
        <div className="cursos-accordion faq-wrap">
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
                    <p className="faq-answer">{item.respuesta}</p>
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
