// Bloque CTA azul (inscripciones)
export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container-max cta-flex">

        {/* Texto */}
        <div className="cta-text-box">
          <h2 className="cta-title">Inscripciones Abiertas 2026</h2>

          <p className="cta-desc">
            Inicia tu carrera profesional en la Policía de Santa Fe. 
            Revisa los requisitos y comienza tu proceso de pre-inscripción online.
          </p>
        </div>

        {/* Botones */}
        <div className="cta-buttons">
          <button className="btn-cta-light">
            Pre-Inscripción Online
          </button>

          <button className="btn-cta-outline">
            Ver Requisitos
          </button>
        </div>

      </div>

      {/* Decoración */}
      <div className="cta-decor"></div>
    </section>
  );
}