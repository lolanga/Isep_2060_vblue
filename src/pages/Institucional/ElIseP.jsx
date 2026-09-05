/**
 * pages/Institucional/ElIseP.jsx
 *
 * El Instituto de Seguridad Pública — Presentación institucional.
 * Datos extraídos de isepsantafe.edu.ar/index.php/institucional/objetivos-del-isep
 */

import Breadcrumb from "../../components/Breadcrumb";
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
    <main className="page-main">
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

      <div className="container-max elisep-content">
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Institucional" },
            { label: "El ISeP" },
          ]}
        />

        {/* ── Presentación + escudo ── */}
        <section className="page-section elisep-presentation">
          <div className="elisep-text-col">
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
          <div className="elisep-escudo-col">
            <img
              src={escudoIsep}
              alt="Escudo del ISeP"
              className="elisep-escudo-img"
            />
          </div>
        </section>

        {/* ── Misión ── */}
        <section className="page-section elisep-mission">
          <div className="inst-card elisep-card-padded">
            <div className="flex-row-center elisep-card-header">
              <div className="icon-box">
                <span className="material-symbols-outlined icon-primary">flag</span>
              </div>
              <h2 className="page-section-title--sm">Misión</h2>
            </div>
            <p className="page-text">
              Formar profesionales de la seguridad pública con excelencia académica, compromiso ético y respeto a los derechos humanos, contribuyendo a la prevención del delito, la resolución pacífica de conflictos y la protección de la vida y los bienes de las personas de la Provincia de Santa Fe.
            </p>
          </div>
        </section>

        {/* ── Visión ── */}
        <section className="page-section elisep-vision">
          <div className="inst-card elisep-card-padded">
            <div className="flex-row-center elisep-card-header">
              <div className="icon-box">
                <span className="material-symbols-outlined icon-primary">visibility</span>
              </div>
              <h2 className="page-section-title--sm">Visión</h2>
            </div>
            <p className="page-text">
              Ser referente provincial y nacional en la formación de profesionales de la seguridad pública, con estándares de calidad internacional, promoviendo la innovación educativa, la investigación científica y la modernización continua de las fuerzas de seguridad.
            </p>
          </div>
        </section>

        {/* ── Valores ── */}
        <section className="page-section elisep-values">
          <h2 className="page-section-title elisep-values-title">
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
                <span className="material-symbols-outlined elisep-values-icon">
                  {v.icon}
                </span>
                <h3 className="elisep-values-name">{v.titulo}</h3>
                <p className="elisep-values-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Sedes ── */}
        <section className="page-section elisep-sedes">
          <h2 className="page-section-title elisep-sedes-title">
            Nuestras Sedes
          </h2>
          <div className="grid-2col">
            {SEDES.map((s) => (
              <div
                key={s.id}
                className="inst-card"
              >
                <h3 className="elisep-sede-name">
                  {s.nombre}
                </h3>
                <div className="flex-col">
                  <div className="flex-row">
                    <span className="material-symbols-outlined icon-sm-top">location_on</span>
                    <span className="elisep-sede-detail">{s.direccion}</span>
                  </div>
                  <div className="flex-row-center">
                    <span className="material-symbols-outlined icon-sm">call</span>
                    <span className="elisep-sede-detail">{s.telefono}</span>
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
