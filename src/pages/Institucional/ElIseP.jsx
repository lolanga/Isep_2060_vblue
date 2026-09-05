/**
 * pages/Institucional/ElIseP.jsx
 *
 * El Instituto de Seguridad Pública — Presentación institucional.
 * Datos extraídos de isepsantafe.edu.ar/index.php/institucional/objetivos-del-isep
 */

import Breadcrumb from "../../components/Breadcrumb";
import SEO from "../../components/SEO";
import escudoIsep from "../../assets/escudo_ISeP.png";

const SEDES = [
  {
    id: "rosario",
    nombre: "D.Z.S — Rosario",
    direccion: "Leandro N. Alem 2050, S2000FMH Rosario, Santa Fe",
    telefono: "+54 342 457-9000",
  },
  {
    id: "recreo",
    nombre: "DZCN — Recreo",
    direccion: "RN11, km 482, Recreo, Santa Fe",
    telefono: "+54 342 457-9000",
  },
];

export default function ElIseP() {
  return (
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      <SEO title="El ISeP" description="Conocé al Instituto de Seguridad Pública de Santa Fe" />
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="badge">Institucional</span>
          <h1 className="hero-title">
            El <span>ISeP</span>
          </h1>
          <p className="hero-description">
            Instituto de Seguridad Pública de la Provincia de Santa Fe
          </p>
        </div>
      </section>

      <div className="container-max" style={{ padding: "2rem" }}>
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Institucional" },
            { label: "El ISeP" },
          ]}
        />

        {/* ── Presentación + escudo ── */}
        <section className="page-section" style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 300px" }}>
            <h2 className="page-section-title">
              ¿Qué es el ISeP?
            </h2>
            <p className="page-text">
              En el I.Se.P. se forman recursos humanos en el área de la seguridad, con especialización en seguridad pública. Para esto, el instituto gestiona carreras terciarias, cursos de perfeccionamiento y de grado junto a otras actividades educativas, complementando así las competencias necesarias para la prevención del delito, la resolución pacífica de conflictos y la protección de la vida y la seguridad de los bienes de las personas.
            </p>
            <p className="page-text">
              El perfil del graduado del ISeP debe asegurarle la capacidad de trabajar en ambientes interdisciplinarios y multiculturales, para desenvolverse con solvencia en procedimientos judiciales, administrativos, criminológicos y de investigación científica. Asimismo, lo capacita para hacer uso racional de la fuerza y toma de decisiones, en virtud de su cargo y en respeto de la ética ciudadana y los derechos humanos.
            </p>
          </div>
          <div style={{ flex: "0 0 auto", textAlign: "center" }}>
            <img
              src={escudoIsep}
              alt="Escudo del ISeP"
              style={{ width: "10rem", height: "10rem", objectFit: "contain" }}
            />
          </div>
        </section>

        {/* ── Misión ── */}
        <section className="page-section" style={{ marginTop: "3rem" }}>
          <div className="inst-card" style={{ borderRadius: "1rem", padding: "2rem" }}>
            <div className="flex-row-center" style={{ marginBottom: "1rem" }}>
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
                <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: "1.25rem" }}>flag</span>
              </div>
              <h2 className="page-section-title--sm">Misión</h2>
            </div>
            <p className="page-text">
              Formar profesionales de la seguridad pública con excelencia académica, compromiso ético y respeto a los derechos humanos, contribuyendo a la prevención del delito, la resolución pacífica de conflictos y la protección de la vida y los bienes de las personas de la Provincia de Santa Fe.
            </p>
          </div>
        </section>

        {/* ── Visión ── */}
        <section className="page-section" style={{ marginTop: "1.5rem" }}>
          <div className="inst-card" style={{ borderRadius: "1rem", padding: "2rem" }}>
            <div className="flex-row-center" style={{ marginBottom: "1rem" }}>
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
                <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: "1.25rem" }}>visibility</span>
              </div>
              <h2 className="page-section-title--sm">Visión</h2>
            </div>
            <p className="page-text">
              Ser referente provincial y nacional en la formación de profesionales de la seguridad pública, con estándares de calidad internacional, promoviendo la innovación educativa, la investigación científica y la modernización continua de las fuerzas de seguridad.
            </p>
          </div>
        </section>

        {/* ── Valores ── */}
        <section className="page-section" style={{ marginTop: "3rem" }}>
          <h2 className="page-section-title" style={{ marginBottom: "1.25rem" }}>
            Valores institucionales
          </h2>
          <div className="grid-4col">
            {[
              { icon: "balance", titulo: "Ética", desc: "Actuación con integridad, transparencia y respeto a la ley en todas nuestras acciones." },
              { icon: "groups", titulo: "Comunidad", desc: "Compromiso con la seguridad y el bienestar de la sociedad santafesina." },
              { icon: "school", titulo: "Excelencia", desc: "Formación de calidad con estándares académicos elevados y mejora continua." },
              { icon: "diversity_3", titulo: "Inclusión", desc: "Ambientes interdisciplinarios y multiculturales que valoran la diversidad." },
            ].map((v) => (
              <div
                key={v.titulo}
                className="inst-card"
              >
                <span className="material-symbols-outlined" style={{ fontSize: "1.75rem", color: "var(--secondary)", display: "block", marginBottom: "0.75rem" }}>
                  {v.icon}
                </span>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--slate-900)", marginBottom: "0.35rem" }}>{v.titulo}</h3>
                <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.5, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Sedes ── */}
        <section className="page-section" style={{ marginTop: "3rem" }}>
          <h2 className="page-section-title" style={{ marginBottom: "1.25rem" }}>
            Nuestras Sedes
          </h2>
          <div className="grid-2col">
            {SEDES.map((s) => (
              <div
                key={s.id}
                className="inst-card"
              >
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--primary)", marginBottom: "0.75rem" }}>
                  {s.nombre}
                </h3>
                <div className="flex-col">
                  <div className="flex-row">
                    <span className="material-symbols-outlined icon-sm-top">location_on</span>
                    <span style={{ color: "#475569", fontSize: "0.9rem" }}>{s.direccion}</span>
                  </div>
                  <div className="flex-row-center">
                    <span className="material-symbols-outlined icon-sm">call</span>
                    <span style={{ color: "#475569", fontSize: "0.9rem" }}>{s.telefono}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
