/**
 * CTA.jsx — Call-to-action de inscripciones del Home
 *
 * Muestra countdown hasta el cierre de inscripciones y botones
 * de pre-inscripción online y consulta de requisitos.
 */

import { Link } from "react-router-dom";
import Countdown from "./Countdown";

// Cierre de inscripciones: 30 de septiembre 2027
const FECHA_CIERRE = "2027-09-30T23:59:59";

/** Bloque CTA con countdown y enlaces a inscripciones. */
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
