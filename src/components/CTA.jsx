import { Link } from "react-router-dom";
import Countdown from "./Countdown";

// Cierre de inscripciones: 30 de septiembre 2025
const FECHA_CIERRE = "2025-09-30T23:59:59";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container-max cta-flex">

        <div className="cta-text-box">
          <h2 className="cta-title">Inscripciones Abiertas 2026</h2>

          <Countdown targetDate={FECHA_CIERRE} label="Cierre de inscripciones" />

          <p className="cta-desc">
            Inicia tu carrera profesional en la Policía de Santa Fe.
            Revisa los requisitos y comienza tu proceso de pre-inscripción online.
          </p>
        </div>

        <div className="cta-buttons">
          <Link to="/ingreso/convocatorias" className="btn-cta-light">
            Pre-Inscripción Online
          </Link>
          <Link to="/ingreso/requisitos" className="btn-cta-outline">
            Ver Requisitos
          </Link>
        </div>

      </div>
      <div className="cta-decor"></div>
    </section>
  );
}
