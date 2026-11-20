/**
 * pages/Ingreso/Convocatorias.jsx
 *
 * Proceso de Selección – Escuela de Policía – Ciclo Lectivo 2027–2028.
 * Detalle del proceso: etapas, presentación, vestimenta y elementos.
 * Requisitos, documentación y formularios viven una sola vez en
 * pages/Ingreso/Requisitos.jsx (desde acá se enlazan).
 * Fuente: isepsantafe.edu.ar/index.php/inscripciones/postulantes
 */

import { Link } from "react-router-dom";
import Countdown from "../../components/Countdown";
import Breadcrumb from "../../components/Breadcrumb";
import SEO from "../../components/SEO";
import { BreadcrumbLd } from "../../components/JsonLd";
import { MI_ISEP_URL } from "../../data/config";

const VESTIMENTA = [
  "Vestimenta de gimnasia y ropa oscura",
  "No se permite el uso de shorts ni calzas",
];

const ELEMENTOS = [
  { icon: "edit", texto: "Lápiz negro 2HB" },
  { icon: "edit", texto: "Goma de borrar" },
  { icon: "edit", texto: "Birome azul" },
];

const ETAPAS = [
  "Examen premédico y examen psicológico",
  "Entrega de carpeta médica, examen intelectual y examen físico",
  "Examen socioambiental",
  "Período propedéutico",
];


const LISTADO_URL = "https://www.isepsantafe.edu.ar/images/Publicaciones/LISTADO_PRESENTACION_PROCESO_SELECCION_2027_2028_0900.pdf";

/** Página completa del proceso de selección — Escuela de Policía 2027–2028. */
export default function Convocatorias() {
  const fechaPresentacion = "2026-12-01T09:00:00";

  return (
    <main id="main-content" className="conv-main">
      <SEO
        title="Convocatoria Escuela de Policía 2027-2028"
        description="Proceso de selección de la Escuela de Policía — Ciclo 2027-2028: etapas, presentación, vestimenta e inscripción en Mi ISeP."
      />
      {/* Hero dedicado */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container-max conv-hero-content">
          <span className="badge">
            Ciclo Lectivo 2027–2028
          </span>
          <h1 className="hero-title">
            Proceso de <span>Selección</span>
          </h1>
          <p className="hero-description">
            Escuela de Policía — Instituto de Seguridad Pública de la Provincia de Santa Fe
          </p>

          <Countdown targetDate={fechaPresentacion} label="Tiempo restante para la presentación" />

          <div className="conv-hero-actions">
            <a
              href={MI_ISEP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Crear mi usuario en Mi ISeP
              <span className="material-symbols-outlined conv-arrow-icon">arrow_forward</span>
            </a>
            <a
              href={LISTADO_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              Consultar Listado
              <span className="material-symbols-outlined conv-open-icon">open_in_new</span>
            </a>
          </div>
        </div>
      </section>

      <div className="container-max conv-content">
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Ingreso", to: "/ingreso" },
            { label: "Escuela de Policía 2027-2028" },
          ]}
        />
        <BreadcrumbLd
          items={[
            { label: "Inicio", to: "/" },
            { label: "Ingreso", to: "/ingreso" },
            { label: "Escuela de Policía 2027-2028" },
          ]}
        />

        {/* Alerta importante */}
        <div className="alert-warning">
          <span className="material-symbols-outlined alert-warning__icon">
            warning
          </span>
          <div>
            <strong className="alert-warning__title">Información importante para postulantes</strong>
            <p className="alert-warning__text">
              Los postulantes detallados con DNI en el Listado de Presentación deberán concurrir según la sede, día y horario asignado para realizar la primera etapa del proceso de selección. Horario: <strong>09:00 hs</strong>. Tolerancia máxima: <strong>20 minutos</strong>.
            </p>
          </div>
        </div>

        {/* Requisitos y documentación → única fuente en /ingreso/requisitos */}
        <section className="conv-section">
          <div className="info-box">
            <span className="material-symbols-outlined alert-warning__icon">
              checklist
            </span>
            <div>
              <h2 className="conv-card-heading conv-card-heading--sm">
                Requisitos, documentación y formularios
              </h2>
              <p className="conv-card-text">
                El listado completo de requisitos, la documentación que tenés que
                presentar y los cuatro formularios obligatorios están en una sola
                página, actualizada para este proceso.
              </p>
              <Link to="/ingreso/requisitos" className="read-more">
                Ver requisitos y documentación
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Vestimenta y elementos */}
        <section className="conv-section">
          <div className="grid-auto">
            <div className="inst-card">
              <h3 className="conv-card-heading">
                <span className="material-symbols-outlined icon-primary">checkroom</span>
                Vestimenta para la presentación
              </h3>
              <ul className="check-list">
                {VESTIMENTA.map((v, i) => (
                  <li key={i} className="check-item">
                    <span className={`material-symbols-outlined ${v.includes("No") ? "conv-check-icon conv-check-icon--danger" : "conv-check-icon"}`}>
                      {v.includes("No") ? "cancel" : "check_circle"}
                    </span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            <div className="inst-card">
              <h3 className="conv-card-heading">
                <span className="material-symbols-outlined icon-primary">edit</span>
                Elementos que deberán traer
              </h3>
              <ul className="check-list">
                {ELEMENTOS.map((e, i) => (
                  <li key={i} className="check-item">
                    <span className="material-symbols-outlined conv-check-icon">check_circle</span>
                    {e.texto}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Etapas del proceso */}
        <section className="conv-section">
          <h2 className="section-title">
            Etapas del proceso de selección
          </h2>
          <div className="grid-4col">
            {ETAPAS.map((e, i) => (
              <div key={i} className="conv-step-card">
                <div className="step-circle">
                  {i + 1}
                </div>
                <p className="conv-card-text">
                  {e}
                </p>
              </div>
            ))}
          </div>
          <p className="conv-etapas-note">
            Quienes aprueben satisfactoriamente todas las etapas serán incorporados como <strong>Cadetes</strong>.
          </p>
        </section>

        {/* Confirmación */}
        <section className="conv-section">
          <div className="inst-card">
            <h3 className="conv-card-heading conv-card-heading--sm">
              <span className="material-symbols-outlined icon-primary">mail</span>
              Confirmación de la inscripción
            </h3>
            <p className="conv-card-text">
              Al finalizar correctamente la inscripción recibirás un correo electrónico con la confirmación, el formulario para presentar y un código QR para registrar asistencia.
            </p>
          </div>
        </section>

        {/* Consultas */}
        <section className="conv-section--sm">
          <div className="info-box info-box--center">
            <h3 className="conv-card-heading conv-card-heading--sm">
              ¿Tenés dudas?
            </h3>
            <p className="conv-cta-text">
              Consultá el Manual de Aptitud Psicofísica para conocer todas las causales de exclusión del proceso de selección.
            </p>
            <p className="conv-cta-email">
              📧 prensaydifusion@isepsantafe.edu.ar
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="cta-gradient">
          <div className="cta-gradient__bg" />
          <div className="cta-gradient__inner">
            <h2 className="cta-gradient__title">
              ¿Listo para empezar tu carrera?
            </h2>
            <p className="cta-gradient__text">
              No dejes pasar la oportunidad. Las vacantes son limitadas.
            </p>
            <a
              href={MI_ISEP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Crear mi usuario en Mi ISeP
              <span className="material-symbols-outlined conv-arrow-icon">arrow_forward</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
