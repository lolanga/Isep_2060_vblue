/**
 * pages/Ingreso/Convocatorias.jsx
 *
 * Proceso de Selección – Escuela de Policía – Ciclo Lectivo 2027–2028
 * Contenido real extraído de isepsantafe.edu.ar/index.php/inscripciones/postulantes
 */

import { Link } from "react-router-dom";
import Countdown from "../../components/Countdown";
import Breadcrumb from "../../components/Breadcrumb";
import SEO from "../../components/SEO";

const DOCUMENTACION = [
  {
    icon: "school",
    titulo: "Título Secundario",
    desc: "Título, Constancia de Finalización o Constancia de Alumno Regular (solo cursando último año). Original en papel.",
  },
  {
    icon: "badge",
    titulo: "DNI",
    desc: "Formato físico (plástico) o desde la aplicación Mi Argentina.",
  },
];

const VESTIMENTA = [
  "Vestimenta de gimnasia y ropa oscura",
  "No se permite el uso de shorts ni calzas",
];

const ELEMENTOS = [
  { icon: "edit", texto: "Lápiz negro 2HB" },
  { icon: "edit", texto: "Goma de borrar" },
  { icon: "edit", texto: "Birome azul" },
];

const FORMULARIOS = [
  "Declaración Jurada de Inscripción",
  "Declaración Jurada Médica",
  "Declaración Jurada Socioambiental",
  "Declaración Jurada Psicológica",
];

const ETAPAS = [
  "Examen premédico y examen psicológico",
  "Entrega de carpeta médica, examen intelectual y examen físico",
  "Examen socioambiental",
  "Período propedéutico",
];

const REQUISITOS = [
  "Ser argentino",
  "Tener entre 18 y 30 años al inicio del curso propedéutico previsto para febrero de 2027",
  "Poseer título secundario o polimodal completo o constancia de finalización",
  "Acreditar aptitudes psicofísicas compatibles con la función policial",
  "Aprobar los exámenes médicos y psicológicos correspondientes",
  "No registrar condenas por delitos o contravenciones",
  "No encontrarse procesado judicialmente, salvo sobreseimiento definitivo o absolución",
  "No desempeñarse como empleado de la administración pública nacional, provincial, municipal o comunal",
  "No haber sido destituido, cesanteado o exonerado de organismos públicos",
  "Presentar toda la documentación requerida dentro de los plazos establecidos",
];

const INSCRIPCION_PASOS = [
  { paso: 1, titulo: "Creá tu usuario", desc: "Creá tu usuario en MI ISEP utilizando un correo electrónico al que tengas acceso frecuente." },
  { paso: 2, titulo: "Confirmá tu cuenta", desc: "Confirmá tu cuenta mediante el correo electrónico recibido." },
  { paso: 3, titulo: "Inscribite", desc: "Ingresá a MI ISEP y seleccioná Inscripción. Aceptá los términos y condiciones." },
  { paso: 4, titulo: "Completá los formularios", desc: "Completá el primer formulario. En la pestaña Mis Procesos estarán disponibles los formularios restantes." },
];

const LISTADO_URL = "https://www.isepsantafe.edu.ar/images/Publicaciones/LISTADO_PRESENTACION_PROCESO_SELECCION_2027_2028_0900.pdf";

/** Página completa del proceso de selección — Escuela de Policía 2027–2028. */
export default function Convocatorias() {
  const fechaPresentacion = "2026-12-01T09:00:00";

  return (
<<<<<<< HEAD
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      <SEO title="Convocatorias" description="Proceso de selección — Escuela de Policía 2027-2028" />
=======
    <main className="conv-main">
>>>>>>> b2abd80d2a935bc7c174419e87dadaf8c710b708
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
              href="https://mi.isepsantafe.edu.ar/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Inscribirme en MI ISEP
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
            { label: "Ingreso" },
            { label: "Convocatorias" },
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

        {/* Documentación */}
        <section className="conv-section">
          <h2 className="section-title">
            Documentación que deberán presentar
          </h2>
          <div className="grid-auto">
            {DOCUMENTACION.map((doc, i) => (
              <div key={i} className="inst-card conv-doc-row">
                <div className="icon-box">
                  <span className="material-symbols-outlined conv-icon-white">{doc.icon}</span>
                </div>
                <div>
                  <h4 className="conv-card-title">{doc.titulo}</h4>
                  <p className="conv-card-text conv-card-text--muted">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="conv-footnote">
            La documentación será utilizada únicamente para su verificación y posteriormente será devuelta. Debe coincidir con la documentación cargada en MI ISEP.
          </p>
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

        {/* Cómo inscribirte */}
        <section className="conv-section">
          <h2 className="section-title">
            ¿Cómo inscribirte?
          </h2>
          <div className="grid-4col">
            {INSCRIPCION_PASOS.map((p) => (
              <div key={p.paso} className="conv-step-card">
                <div className="step-circle">
                  {p.paso}
                </div>
                <h4 className="conv-card-subtitle">
                  {p.titulo}
                </h4>
                <p className="conv-card-text">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Formularios obligatorios */}
        <section className="conv-section">
          <h2 className="section-title">
            Formularios obligatorios
          </h2>
          <div className="conv-forms-card">
            <p className="conv-forms-intro">
              La inscripción solo será válida cuando completes los cuatro formularios:
            </p>
            <ul className="check-list">
              {FORMULARIOS.map((f, i) => (
                <li key={i} className="check-item check-item--lg check-item--mb">
                  <span className="material-symbols-outlined conv-check-icon">check_circle</span>
                  {f}
                </li>
              ))}
            </ul>
            <p className="conv-footnote conv-footnote--lg">
              Todas las declaraciones tienen carácter excluyente. Deben completarse con datos reales y verificables. Tiempo estimado de carga: ~40 minutos.
            </p>
          </div>
        </section>

        {/* Edad y confirmación */}
        <section className="conv-section">
          <div className="grid-auto">
            <div className="inst-card">
              <h3 className="conv-card-heading conv-card-heading--sm">
                <span className="material-symbols-outlined icon-primary">cake</span>
                Edad requerida
              </h3>
              <p className="conv-card-text">
                Podrán inscribirse quienes tengan entre <strong>18 y 30 años</strong> al <strong>02/02/2027</strong>. No podrán participar quienes tengan menos de 18 años o más de 30 años en esa fecha.
              </p>
            </div>
            <div className="inst-card">
              <h3 className="conv-card-heading conv-card-heading--sm">
                <span className="material-symbols-outlined icon-primary">mail</span>
                Confirmación
              </h3>
              <p className="conv-card-text">
                Al finalizar correctamente la inscripción recibirás un correo electrónico con la confirmación, el formulario para presentar y un código QR para registrar asistencia.
              </p>
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

        {/* Requisitos */}
        <section id="requisitos" className="conv-section">
          <h2 className="section-title">
            Requisitos para la inscripción
          </h2>
          <div className="inst-card">
            <ul className="conv-req-list">
              {REQUISITOS.map((r, i) => (
                <li key={i} className="conv-req-item">
                  <span className="material-symbols-outlined conv-req-icon">check_circle</span>
                  {r}
                </li>
              ))}
            </ul>
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
              href="https://mi.isepsantafe.edu.ar/"
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
