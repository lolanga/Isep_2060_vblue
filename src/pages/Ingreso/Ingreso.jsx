/**
 * pages/Ingreso/Ingreso.jsx
 *
 * Landing del proceso de ingreso al ISeP.
 * Resume en una única pantalla: pasos, cronograma, convocatorias,
 * requisitos, FAQ destacadas y aviso de trámite gratuito.
 */

import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import SEO from "../../components/SEO";
import { BreadcrumbLd } from "../../components/JsonLd";
import { convocatorias, cronograma, preguntasFrecuentes } from "../../data/institucional";

const PASOS = [
  { icon: "person_add", titulo: "Creá tu usuario", desc: "Registrate en la plataforma Mi ISeP con un correo al que tengas acceso frecuente." },
  { icon: "fact_check", titulo: "Completá la inscripción", desc: "Seleccioná la convocatoria y completá los 4 formularios obligatorios." },
  { icon: "rule", titulo: "Superá las etapas", desc: "Exámenes premédico, psicológico, intelectual, físico y socioambiental." },
  { icon: "military_tech", titulo: "Incorporación", desc: "Aprobado el período propedéutico, te incorporás como Cadete." },
];

const ESTADO_LABEL = {
  "vigente": "Vigente",
  "proxima": "Próxima",
  "en-curso": "En curso",
  "proximo": "Próximo",
};

const REQUISITOS_RESUMEN = [
  "Ser argentino, nativo o por opción",
  "Tener entre 18 y 30 años al inicio del propedéutico (02/02/2027)",
  "Poseer título secundario o polimodal completo (o constancia de finalización)",
  "Acreditar aptitudes psicofísicas compatibles con la función policial",
  "No registrar condenas por delitos ni encontrarse procesado judicialmente",
];

const FAQ_DESTACADAS = preguntasFrecuentes.slice(0, 3);

const MI_ISEP_URL = "https://mi.isepsantafe.edu.ar/";

const CONTACTO_EMAIL = "prensaydifusion@isepsantafe.edu.ar";

/** Landing del proceso de ingreso al ISeP. */
export default function Ingreso() {
  return (
    <main id="main-content" className="conv-main ingreso-main">
      <SEO
        title="Ingreso al ISeP"
        description="Todo el proceso de ingreso al ISeP Santa Fe: pasos, cronograma 2027-2028, convocatorias, requisitos y pre-inscripción online."
      />

      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container-max ingreso-hero-content">
          <span className="badge">Ciclo Lectivo 2027–2028</span>
          <h1 className="hero-title">
            Ingreso al <span>ISeP</span>
          </h1>
          <p className="hero-description">
            El camino para convertirte en Cadete de la Policía de Santa Fe, paso a paso.
          </p>
          <div className="conv-hero-actions">
            <Link to="/ingreso/convocatorias" className="btn-primary">
              Pre-Inscripción Online
              <span className="material-symbols-outlined conv-arrow-icon">arrow_forward</span>
            </Link>
            <Link to="/ingreso/requisitos" className="btn-outline">
              Ver Requisitos
              <span className="material-symbols-outlined conv-open-icon">open_in_new</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="container-max conv-content">
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Ingreso" },
          ]}
        />
        <BreadcrumbLd
          items={[
            { label: "Inicio", to: "/" },
            { label: "Ingreso" },
          ]}
        />

        {/* Anti-estafa */}
        <div className="alert-warning">
          <span className="material-symbols-outlined alert-warning__icon">
            shield
          </span>
          <div>
            <strong className="alert-warning__title">Atención: el trámite es gratuito</strong>
            <p className="alert-warning__text">
              La inscripción al ISeP es totalmente <strong>gratuita y personal</strong>. Ningún gestor ni
              intermediario puede realizar el trámite por vos. Ante cualquier ofrecimiento de pago, comunicate a{" "}
              <strong>{CONTACTO_EMAIL}</strong>.
            </p>
          </div>
        </div>

        {/* Pasos */}
        <section className="conv-section">
          <h2 className="section-title">¿Cómo es el proceso?</h2>
          <div className="grid-4col">
            {PASOS.map((p, i) => (
              <div key={i} className="conv-step-card">
                <div className="step-circle">
                  {i + 1}
                </div>
                <span className="material-symbols-outlined icon-primary ingreso-step-icon">{p.icon}</span>
                <h4 className="conv-card-subtitle">{p.titulo}</h4>
                <p className="conv-card-text">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cronograma */}
        <section className="conv-section">
          <h2 className="section-title">Cronograma 2027–2028</h2>
          <div className="ingreso-timeline">
            {cronograma.map((item) => (
              <div key={item.id} className={`ingreso-timeline__item ingreso-timeline__item--${item.estado}`}>
                <div className="ingreso-timeline__dot" />
                <div className="ingreso-timeline__card inst-card">
                  <div className="ingreso-timeline__head">
                    <h4 className="conv-card-subtitle">{item.etapa}</h4>
                    <span className="ingreso-badge">{ESTADO_LABEL[item.estado] ?? item.estado}</span>
                  </div>
                  <p className="conv-card-text conv-card-text--muted">{item.detalle}</p>
                  <p className="ingreso-timeline__fecha">
                    <span className="material-symbols-outlined ingreso-cal-icon">calendar_month</span>
                    {item.fecha}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Convocatorias vigentes */}
        <section className="conv-section">
          <h2 className="section-title">Convocatorias abiertas</h2>
          <div className="grid-auto">
            {convocatorias.map((c) => (
              <div key={c.id} className="inst-card ingreso-conv-card">
                <div className="icon-box ingreso-conv-icon">
                  <span className="material-symbols-outlined ingreso-conv-icon__img">campaign</span>
                </div>
                <div>
                  <div className="ingreso-timeline__head">
                    <h4 className="conv-card-title">{c.nombre}</h4>
                    <span className="ingreso-badge">{ESTADO_LABEL[c.estado] ?? c.estado}</span>
                  </div>
                  <p className="conv-card-text conv-card-text--muted">{c.descripcion}</p>
                  <p className="ingreso-timeline__fecha">
                    <span className="material-symbols-outlined ingreso-cal-icon">calendar_month</span>
                    {c.fecha}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Requisitos */}
        <section className="conv-section">
          <h2 className="section-title">Requisitos principales</h2>
          <div className="inst-card">
            <ul className="conv-req-list">
              {REQUISITOS_RESUMEN.map((r, i) => (
                <li key={i} className="conv-req-item">
                  <span className="material-symbols-outlined conv-req-icon">check_circle</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <p className="conv-footnote">
            Estas son algunas pautas generales. Consultá el{" "}
            <Link to="/ingreso/requisitos" className="read-more">
              listado completo de requisitos
            </Link>
            .
          </p>
        </section>

        {/* FAQ destacadas */}
        <section className="conv-section">
          <h2 className="section-title">Preguntas frecuentes</h2>
          <div className="grid-auto">
            {FAQ_DESTACADAS.map((f, i) => (
              <div key={i} className="inst-card">
                <h4 className="conv-card-subtitle">{f.pregunta}</h4>
                <p className="conv-card-text">{f.respuesta}</p>
              </div>
            ))}
          </div>
          <p className="conv-footnote">
            <Link to="/ingreso/faq" className="read-more">
              Ver todas las preguntas frecuentes
            </Link>
          </p>
        </section>

        {/* Consultas */}
        <section className="conv-section--sm">
          <div className="info-box info-box--center">
            <h3 className="conv-card-heading conv-card-heading--sm">
              ¿Tenés dudas sobre el ingreso?
            </h3>
            <p className="conv-cta-email">
              📧 {CONTACTO_EMAIL}
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
              Inscribirme en MI ISEP
              <span className="material-symbols-outlined conv-arrow-icon">arrow_forward</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}