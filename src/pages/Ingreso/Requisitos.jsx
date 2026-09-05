/**
 * pages/Ingreso/Requisitos.jsx
 *
 * Requisitos de ingreso — Escuela de Policía
 * Fuente: isepsantafe.edu.ar/index.php/inscripciones/postulantes
 */

import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import SEO from "../../components/SEO";

const REQUISITOS = [
  { texto: "Ser argentino", icono: "flag" },
  { texto: "Tener entre 18 y 30 años al inicio del curso propedéutico previsto para febrero de 2027", icono: "cake" },
  { texto: "Poseer título secundario o polimodal completo o constancia de finalización", icono: "school" },
  { texto: "Acreditar aptitudes psicofísicas compatibles con la función policial", icono: "favorite" },
  { texto: "Aprobar los exámenes médicos y psicológicos correspondientes", icono: "stethoscope" },
  { texto: "No registrar condenas por delitos o contravenciones", icono: "gavel" },
  { texto: "No encontrarse procesado judicialmente, salvo sobreseimiento definitivo o absolución", icono: "gavel" },
  { texto: "No desempeñarse como empleado de la administración pública nacional, provincial, municipal o comunal", icono: "business" },
  { texto: "No haber sido destituido, cesanteado o exonerado de organismos públicos", icono: "block" },
  { texto: "Presentar toda la documentación requerida dentro de los plazos establecidos", icono: "description" },
];

const DOCUMENTACION = [
  { icono: "school", titulo: "Título Secundario", desc: "Título, Constancia de Finalización o Constancia de Alumno Regular. Original en papel." },
  { icono: "badge", titulo: "DNI", desc: "Formato físico (plástico) o desde la aplicación Mi Argentina." },
];

const FORMULARIOS = [
  "Declaración Jurada de Inscripción",
  "Declaración Jurada Médica",
  "Declaración Jurada Socioambiental",
  "Declaración Jurada Psicológica",
];

/** Página de requisitos de ingreso: condiciones, documentación y formularios. */
export default function Requisitos() {
  return (
<<<<<<< HEAD
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      <SEO title="Requisitos" description="Requisitos para inscripción al ISeP" />
=======
    <main className="requisitos-main">
>>>>>>> b2abd80d2a935bc7c174419e87dadaf8c710b708
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="badge">Ingreso</span>
          <h1 className="hero-title">
            Requisitos <span>de Ingreso</span>
          </h1>
          <p className="hero-description">
            Condiciones generales y documentación necesaria para postularse
          </p>
        </div>
      </section>

      <div className="container-max requisitos-content">
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Ingreso" },
            { label: "Requisitos" },
          ]}
        />

        {/* ── Requisitos para la inscripción ── */}
        <section className="requisitos-section">
          <h2 className="page-section-title">
            Requisitos para la inscripción
          </h2>
          <div className="inst-card requisitos-card">
            <ul className="requisitos-grid">
              {REQUISITOS.map((r, i) => (
                <li key={i} className="flex-row requisitos-item">
                  <span className="material-symbols-outlined icon-sm-top">
                    {r.icono}
                  </span>
                  <span className="requisitos-item-text">
                    {r.texto}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Documentación ── */}
        <section className="requisitos-section">
          <h2 className="page-section-title">
            Documentación que deberán presentar
          </h2>
          <div className="grid-3col">
            {DOCUMENTACION.map((doc, i) => (
              <div key={i} className="inst-card flex-row requisitos-doc-card">
                <div className="icon-box">
                  <span className="material-symbols-outlined requisitos-icon-white">{doc.icono}</span>
                </div>
                <div>
                  <h4 className="requisitos-doc-title">{doc.titulo}</h4>
                  <p className="requisitos-doc-desc">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="requisitos-footnote--sm">
            La documentación será utilizada únicamente para su verificación y posteriormente será devuelta.
            Debe coincidir con la documentación cargada en MI ISEP.
          </p>
        </section>

        {/* ── Formularios obligatorios ── */}
        <section className="requisitos-section">
          <h2 className="page-section-title">
            Formularios obligatorios
          </h2>
          <div className="inst-card requisitos-card">
            <p className="page-text page-text--mb-sm">
              La inscripción solo será válida cuando completes los cuatro formularios:
            </p>
            <ul className="check-list">
              {FORMULARIOS.map((f, i) => (
                <li key={i} className="flex-row-center check-item check-item--lg check-item--mb">
                  <span className="material-symbols-outlined icon-sm">check_circle</span>
                  {f}
                </li>
              ))}
            </ul>
            <p className="requisitos-footnote--lg">
              Todas las declaraciones tienen carácter excluyente. Deben completarse con datos reales y verificables.
            </p>
          </div>
        </section>

        {/* ── Información adicional ── */}
        <section className="requisitos-section">
          <div className="grid-3col">
            <div className="inst-card">
              <h3 className="flex-row-center requisitos-heading">
                <span className="material-symbols-outlined icon-primary">cake</span>
                Edad requerida
              </h3>
              <p className="requisitos-body-text">
                Podrán inscribirse quienes tengan entre <strong>18 y 30 años</strong> al <strong>02/02/2027</strong>.
                No podrán participar quienes tengan menos de 18 años o más de 30 años en esa fecha.
              </p>
            </div>
            <div className="inst-card">
              <h3 className="flex-row-center requisitos-heading">
                <span className="material-symbols-outlined icon-primary">info</span>
                Información importante
              </h3>
              <p className="requisitos-body-text">
                Si tenés dudas médicas, consultá el <strong>Manual de Aptitud Psicofísica</strong> para conocer todas las causales de exclusión del proceso de selección.
              </p>
            </div>
          </div>
        </section>

        {/* ── Consultas ── */}
        <section className="conv-section--sm">
          <div className="info-box info-box--center">
            <h3 className="requisitos-heading">
              ¿Tenés dudas?
            </h3>
            <p className="requisitos-email">
              prensaydifusion@isepsantafe.edu.ar
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="requisitos-cta-wrap">
          <Link to="/ingreso/convocatorias" className="btn-cta requisitos-cta">
            Ver convocatoria vigente
            <span className="material-symbols-outlined requisitos-cta-icon">arrow_forward</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
