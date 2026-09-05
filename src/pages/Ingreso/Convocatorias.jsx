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

export default function Convocatorias() {
  const fechaPresentacion = "2026-12-01T09:00:00";

  return (
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      <SEO title="Convocatorias" description="Proceso de selección — Escuela de Policía 2027-2028" />
      {/* Hero dedicado */}
      <section style={{
        background: "var(--gradient-primary)",
        padding: "4rem 2rem 3rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div className="container-max" style={{ position: "relative", zIndex: 1 }}>
          <span style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(4px)",
            color: "#fff",
            padding: "0.35rem 1rem",
            borderRadius: "999px",
            fontSize: "0.8rem",
            fontWeight: 600,
            marginBottom: "1rem",
            border: "1px solid rgba(255,255,255,0.2)",
          }}>
            Ciclo Lectivo 2027–2028
          </span>
          <h1 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "0.75rem",
            lineHeight: 1.2,
          }}>
            Proceso de <span style={{ color: "#ffe066" }}>Selección</span>
          </h1>
          <p style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.85)",
            maxWidth: "550px",
            margin: "0 auto 0.5rem",
            lineHeight: 1.6,
          }}>
            Escuela de Policía — Instituto de Seguridad Pública de la Provincia de Santa Fe
          </p>

          <Countdown targetDate={fechaPresentacion} label="Tiempo restante para la presentación" />

          <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
            <a
              href="https://mi.isepsantafe.edu.ar/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.85rem 2rem",
                borderRadius: "0.6rem",
                background: "#fff",
                color: "var(--primary)",
                fontSize: "1rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              Inscribirme en MI ISEP
              <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>arrow_forward</span>
            </a>
            <a
              href={LISTADO_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.85rem 2rem",
                borderRadius: "0.6rem",
                background: "transparent",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: 600,
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.4)",
              }}
            >
              Consultar Listado
              <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>open_in_new</span>
            </a>
          </div>
        </div>
      </section>

      <div className="container-max" style={{ padding: "2rem" }}>
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Ingreso" },
            { label: "Convocatorias" },
          ]}
        />

        {/* Alerta importante */}
        <div style={{
          background: "#fef3c7",
          border: "1px solid #f59e0b",
          borderRadius: "0.75rem",
          padding: "1.25rem 1.5rem",
          marginBottom: "2rem",
          display: "flex",
          alignItems: "flex-start",
          gap: "0.75rem",
        }}>
          <span className="material-symbols-outlined" style={{ color: "#d97706", fontSize: "1.5rem", marginTop: "0.1rem" }}>
            warning
          </span>
          <div>
            <strong style={{ color: "#92400e", fontSize: "0.95rem" }}>Información importante para postulantes</strong>
            <p style={{ color: "#92400e", fontSize: "0.85rem", margin: "0.25rem 0 0", lineHeight: 1.5 }}>
              Los postulantes detallados con DNI en el Listado de Presentación deberán concurrir según la sede, día y horario asignado para realizar la primera etapa del proceso de selección. Horario: <strong>09:00 hs</strong>. Tolerancia máxima: <strong>20 minutos</strong>.
            </p>
          </div>
        </div>

        {/* Documentación */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--slate-900)", marginBottom: "1rem" }}>
            Documentación que deberán presentar
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "1rem" }}>
            {DOCUMENTACION.map((doc, i) => (
              <div key={i} style={{
                background: "#fff",
                borderRadius: "0.75rem",
                padding: "1.25rem",
                border: "1px solid #eef2f7",
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
              }}>
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
                  <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: "1.25rem" }}>{doc.icon}</span>
                </div>
                <div>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--slate-900)", marginBottom: "0.25rem" }}>{doc.titulo}</h4>
                  <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.5, margin: 0 }}>{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.8rem", color: "#94a3b8", marginTop: "0.75rem", fontStyle: "italic" }}>
            La documentación será utilizada únicamente para su verificación y posteriormente será devuelta. Debe coincidir con la documentación cargada en MI ISEP.
          </p>
        </section>

        {/* Vestimenta y elementos */}
        <section style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "1rem" }}>
            <div style={{
              background: "#fff",
              borderRadius: "0.75rem",
              padding: "1.25rem",
              border: "1px solid #eef2f7",
            }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--slate-900)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "1.25rem" }}>checkroom</span>
                Vestimenta para la presentación
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {VESTIMENTA.map((v, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#475569", marginBottom: "0.4rem" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "1rem", color: v.includes("No") ? "#ef4444" : "var(--secondary)" }}>
                      {v.includes("No") ? "cancel" : "check_circle"}
                    </span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{
              background: "#fff",
              borderRadius: "0.75rem",
              padding: "1.25rem",
              border: "1px solid #eef2f7",
            }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--slate-900)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "1.25rem" }}>edit</span>
                Elementos que deberán traer
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {ELEMENTOS.map((e, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#475569", marginBottom: "0.4rem" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "1rem", color: "var(--secondary)" }}>check_circle</span>
                    {e.texto}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Cómo inscribirte */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--slate-900)", marginBottom: "1rem" }}>
            ¿Cómo inscribirte?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))", gap: "1rem" }}>
            {INSCRIPCION_PASOS.map((p) => (
              <div key={p.paso} style={{
                background: "#fff",
                borderRadius: "0.75rem",
                padding: "1.25rem",
                border: "1px solid #eef2f7",
                textAlign: "center",
              }}>
                <div style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "50%",
                  background: "var(--gradient-primary)",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 0.75rem",
                }}>
                  {p.paso}
                </div>
                <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--slate-900)", marginBottom: "0.3rem" }}>
                  {p.titulo}
                </h4>
                <p style={{ fontSize: "0.8rem", color: "#64748b", lineHeight: 1.5 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Formularios obligatorios */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--slate-900)", marginBottom: "1rem" }}>
            Formularios obligatorios
          </h2>
          <div style={{
            background: "#fff",
            borderRadius: "0.75rem",
            padding: "1.5rem",
            border: "1px solid #eef2f7",
          }}>
            <p style={{ fontSize: "0.9rem", color: "#475569", marginBottom: "1rem", lineHeight: 1.5 }}>
              La inscripción solo será válida cuando completes los cuatro formularios:
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {FORMULARIOS.map((f, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "#475569", marginBottom: "0.5rem" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "1rem", color: "var(--secondary)" }}>check_circle</span>
                  {f}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: "0.8rem", color: "#94a3b8", marginTop: "1rem", fontStyle: "italic" }}>
              Todas las declaraciones tienen carácter excluyente. Deben completarse con datos reales y verificables. Tiempo estimado de carga: ~40 minutos.
            </p>
          </div>
        </section>

        {/* Edad y confirmación */}
        <section style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "1rem" }}>
            <div style={{
              background: "#fff",
              borderRadius: "0.75rem",
              padding: "1.25rem",
              border: "1px solid #eef2f7",
            }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--slate-900)", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "1.25rem" }}>cake</span>
                Edad requerida
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#475569", lineHeight: 1.5, margin: 0 }}>
                Podrán inscribirse quienes tengan entre <strong>18 y 30 años</strong> al <strong>02/02/2027</strong>. No podrán participar quienes tengan menos de 18 años o más de 30 años en esa fecha.
              </p>
            </div>
            <div style={{
              background: "#fff",
              borderRadius: "0.75rem",
              padding: "1.25rem",
              border: "1px solid #eef2f7",
            }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--slate-900)", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "1.25rem" }}>mail</span>
                Confirmación
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#475569", lineHeight: 1.5, margin: 0 }}>
                Al finalizar correctamente la inscripción recibirás un correo electrónico con la confirmación, el formulario para presentar y un código QR para registrar asistencia.
              </p>
            </div>
          </div>
        </section>

        {/* Etapas del proceso */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--slate-900)", marginBottom: "1rem" }}>
            Etapas del proceso de selección
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))", gap: "1rem" }}>
            {ETAPAS.map((e, i) => (
              <div key={i} style={{
                background: "#fff",
                borderRadius: "0.75rem",
                padding: "1.25rem",
                border: "1px solid #eef2f7",
                textAlign: "center",
              }}>
                <div style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "50%",
                  background: "var(--gradient-primary)",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 0.75rem",
                }}>
                  {i + 1}
                </div>
                <p style={{ fontSize: "0.85rem", color: "#475569", lineHeight: 1.5, margin: 0 }}>
                  {e}
                </p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.85rem", color: "var(--slate-700)", marginTop: "1rem", textAlign: "center", fontWeight: 600 }}>
            Quienes aprueben satisfactoriamente todas las etapas serán incorporados como <strong>Cadetes</strong>.
          </p>
        </section>

        {/* Requisitos */}
        <section id="requisitos" style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--slate-900)", marginBottom: "1rem" }}>
            Requisitos para la inscripción
          </h2>
          <div style={{
            background: "#fff",
            borderRadius: "0.75rem",
            padding: "1.5rem",
            border: "1px solid #eef2f7",
          }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "0.6rem" }}>
              {REQUISITOS.map((r, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.9rem", color: "#475569" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "1rem", color: "var(--secondary)", marginTop: "0.15rem", flexShrink: 0 }}>check_circle</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Consultas */}
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
            <p style={{ fontSize: "0.9rem", color: "#475569", marginBottom: "0.75rem" }}>
              Consultá el Manual de Aptitud Psicofísica para conocer todas las causales de exclusión del proceso de selección.
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--primary)", fontWeight: 600, margin: 0 }}>
              📧 prensaydifusion@isepsantafe.edu.ar
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section style={{
          background: "var(--gradient-primary)",
          borderRadius: "1rem",
          padding: "2.5rem 2rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 80% 30%, rgba(255,255,255,0.12) 0%, transparent 50%)",
            pointerEvents: "none",
          }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 800, color: "#fff", marginBottom: "0.75rem" }}>
              ¿Listo para empezar tu carrera?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: "450px", margin: "0 auto 1.5rem", lineHeight: 1.6 }}>
              No dejes pasar la oportunidad. Las vacantes son limitadas.
            </p>
            <a
              href="https://mi.isepsantafe.edu.ar/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.85rem 2.5rem",
                borderRadius: "0.6rem",
                background: "#fff",
                color: "var(--primary)",
                fontSize: "1rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              Inscribirme en MI ISEP
              <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>arrow_forward</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}