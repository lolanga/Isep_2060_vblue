/**
 * pages/Ingreso/Requisitos.jsx
 *
 * Requisitos de ingreso — Escuela de Policía
 * Fuente: isepsantafe.edu.ar/index.php/inscripciones/postulantes
 */

import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";

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

export default function Requisitos() {
  return (
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
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

      <div className="container-max" style={{ padding: "2rem" }}>
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Ingreso" },
            { label: "Requisitos" },
          ]}
        />

        {/* ── Requisitos para la inscripción ── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 className="page-section-title">
            Requisitos para la inscripción
          </h2>
          <div className="inst-card" style={{ padding: "1.5rem" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: "0.75rem" }}>
              {REQUISITOS.map((r, i) => (
                <li key={i} className="flex-row" style={{ padding: "0.6rem 0.75rem", borderRadius: "0.5rem", background: "#f8fafc", gap: "0.6rem" }}>
                  <span className="material-symbols-outlined icon-sm-top">
                    {r.icono}
                  </span>
                  <span style={{ fontSize: "0.88rem", color: "#334155", lineHeight: 1.5 }}>
                    {r.texto}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Documentación ── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 className="page-section-title">
            Documentación que deberán presentar
          </h2>
          <div className="grid-3col">
            {DOCUMENTACION.map((doc, i) => (
              <div key={i} className="inst-card flex-row" style={{ gap: "0.75rem" }}>
                <div style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "0.5rem",
                  background: "var(--gradient-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: "1.25rem" }}>{doc.icono}</span>
                </div>
                <div>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--slate-900)", marginBottom: "0.25rem" }}>{doc.titulo}</h4>
                  <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.5, margin: 0 }}>{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.8rem", color: "#94a3b8", marginTop: "0.75rem", fontStyle: "italic" }}>
            La documentación será utilizada únicamente para su verificación y posteriormente será devuelta.
            Debe coincidir con la documentación cargada en MI ISEP.
          </p>
        </section>

        {/* ── Formularios obligatorios ── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 className="page-section-title">
            Formularios obligatorios
          </h2>
          <div className="inst-card" style={{ padding: "1.5rem" }}>
            <p className="page-text" style={{ marginBottom: "1rem" }}>
              La inscripción solo será válida cuando completes los cuatro formularios:
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {FORMULARIOS.map((f, i) => (
                <li key={i} className="flex-row-center" style={{ fontSize: "0.9rem", color: "#475569", marginBottom: "0.5rem" }}>
                  <span className="material-symbols-outlined icon-sm">check_circle</span>
                  {f}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: "0.8rem", color: "#94a3b8", marginTop: "1rem", fontStyle: "italic" }}>
              Todas las declaraciones tienen carácter excluyente. Deben completarse con datos reales y verificables.
            </p>
          </div>
        </section>

        {/* ── Información adicional ── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <div className="grid-3col">
            <div className="inst-card">
              <h3 className="flex-row-center" style={{ fontSize: "1rem", fontWeight: 700, color: "var(--slate-900)", marginBottom: "0.5rem" }}>
                <span className="material-symbols-outlined icon-primary">cake</span>
                Edad requerida
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#475569", lineHeight: 1.5, margin: 0 }}>
                Podrán inscribirse quienes tengan entre <strong>18 y 30 años</strong> al <strong>02/02/2027</strong>.
                No podrán participar quienes tengan menos de 18 años o más de 30 años en esa fecha.
              </p>
            </div>
            <div className="inst-card">
              <h3 className="flex-row-center" style={{ fontSize: "1rem", fontWeight: 700, color: "var(--slate-900)", marginBottom: "0.5rem" }}>
                <span className="material-symbols-outlined icon-primary">info</span>
                Información importante
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#475569", lineHeight: 1.5, margin: 0 }}>
                Si tenés dudas médicas, consultá el <strong>Manual de Aptitud Psicofísica</strong> para conocer todas las causales de exclusión del proceso de selección.
              </p>
            </div>
          </div>
        </section>

        {/* ── Consultas ── */}
        <section style={{ marginBottom: "2rem" }}>
          <div style={{
            background: "#f8fafc",
            borderRadius: "0.75rem",
            padding: "1.5rem",
            border: "1px solid #eef2f7",
            textAlign: "center",
          }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--slate-900)", marginBottom: "0.5rem" }}>
              ¿Tenés dudas?
            </h3>
            <p style={{ fontSize: "0.85rem", color: "var(--primary)", fontWeight: 600, margin: 0 }}>
              prensaydifusion@isepsantafe.edu.ar
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link to="/ingreso/convocatorias" className="btn-cta" style={{ fontSize: "0.9rem" }}>
            Ver convocatoria vigente
            <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>arrow_forward</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
