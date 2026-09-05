/**
 * pages/Institucional/Autoridades.jsx
 *
 * Autoridades del Instituto de Seguridad Pública de Santa Fe.
 * Datos extraídos de isepsantafe.edu.ar/index.php/institucional/autoridades
 */

import Breadcrumb from "../../components/Breadcrumb";
import escudoIsep from "../../assets/escudo_ISeP.png";
import escudoEP from "../../assets/escudo_EP.png";
import escudoES from "../../assets/escudo_ES.png";
import escudoEE from "../../assets/escudo_EE.png";
import escudoEI from "../../assets/escudo_EI.png";

const AUTORIDADES_SUPERIORES = [
  {
    cargo: "Gobernador de la Provincia",
    nombre: "Lic. Maximiliano Pullaro",
    icon: "flag",
  },
  {
    cargo: "Ministro de Justicia y Seguridad",
    nombre: "Abog. Pablo Cococcioni",
    icon: "balance",
  },
  {
    cargo: "Subsecretario de Formación y Carrera Policial",
    nombre: "Crio Gral (r) Dardo Simil",
    icon: "shield",
  },
  {
    cargo: "Director Provincial de Formación para la Seguridad y Gestión de Carrera",
    nombre: "Lic. Federico Zingerling von der Thüsen",
    icon: "school",
  },
];

const CONCEJO = [
  {
    nombre: "Federico Zingerling von der Thüsen",
    representacion: "Ministerio de Justicia y Seguridad",
  },
  {
    nombre: "Lic. Gabriel Andrés Maurer",
    representacion: "Ministerio de Educación",
  },
  {
    nombre: "Subdirectora de Policía Dra. Debora V. Noroña",
    representacion: "Policía de la Provincia de Santa Fe",
  },
];

const DIRECTORGENERAL = {
  cargo: "Director General del Instituto de Seguridad Pública",
  nombre: "Director de Policía Lic. Mario Ismael Goyenechea",
  icon: "account_balance",
  escudo: escudoIsep,
};

const DIRECTORES_ESCUELAS = [
  {
    escuela: "Escuela de Policía",
    nombre: "Director de Policía Lic. González Iván",
    escudo: escudoEP,
    href: "/escuelas/policia",
  },
  {
    escuela: "Escuela Superior de Seguridad Pública",
    nombre: "Director de Policía Lic. Néstor Tomassi",
    escudo: escudoES,
    href: "/escuelas/superior",
  },
  {
    escuela: "Escuela de Especialidades en Seguridad",
    nombre: "Director de Policía Vega Víctor",
    escudo: escudoEE,
    href: "/escuelas/especialidades",
  },
  {
    escuela: "Escuela de Investigaciones",
    nombre: "Directora de Policía Bartolini Cecilia",
    escudo: escudoEI,
    href: "/escuelas/investigaciones",
  },
];

export default function Autoridades() {
  return (
    <main className="autoridades-main">
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="badge">Institucional</span>
          <h1 className="hero-title">
            Nuestras <span>Autoridades</span>
          </h1>
          <p className="hero-description">
            Conducción del Instituto de Seguridad Pública de la Provincia de Santa Fe
          </p>
        </div>
      </section>

      <div className="container-max autoridades-content">
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Institucional" },
            { label: "Autoridades" },
          ]}
        />

        {/* ── Autoridades superiores ── */}
        <section className="page-section">
          <h2 className="autoridades-heading">
            Autoridades Provinciales
          </h2>
          <div className="grid-3col">
            {AUTORIDADES_SUPERIORES.map((a) => (
              <div
                key={a.cargo}
                className="inst-card flex-row autoridades-card"
              >
                <div className="autoridades-icon-box">
                  <span className="material-symbols-outlined autoridades-icon-white">{a.icon}</span>
                </div>
                <div>
                  <p className="autoridades-label">
                    {a.cargo}
                  </p>
                  <p className="autoridades-name">
                    {a.nombre}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Concejo Interinstitucional ── */}
        <section className="page-section autoridades-section">
          <h2 className="autoridades-heading">
            Concejo Interinstitucional
          </h2>
          <div className="inst-card autoridades-concejo-card">
            {CONCEJO.map((c, i) => (
              <div
                key={c.nombre}
                className={`flex-row-center autoridades-concejo-row${i < CONCEJO.length - 1 ? "" : ""}`}
              >
                <span className="material-symbols-outlined autoridades-concejo-icon">
                  person
                </span>
                <div>
                  <p className="autoridades-concejo-name">{c.nombre}</p>
                  <p className="autoridades-concejo-rep">{c.representacion}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Director General ── */}
        <section className="page-section autoridades-section">
          <h2 className="autoridades-heading">
            Dirección General del ISeP
          </h2>
          <div className="inst-card autoridades-director-card">
            <div className="autoridades-avatar">
              <img src={DIRECTORGENERAL.escudo} alt="Escudo ISeP" className="autoridades-avatar-img" />
            </div>
            <div>
              <p className="autoridades-label">
                {DIRECTORGENERAL.cargo}
              </p>
              <p className="autoridades-director-name">
                {DIRECTORGENERAL.nombre}
              </p>
            </div>
          </div>
        </section>

        {/* ── Directores de Escuelas ── */}
        <section className="page-section autoridades-section">
          <h2 className="autoridades-heading">
            Directores de Escuelas
          </h2>
          <div className="grid-3col">
            {DIRECTORES_ESCUELAS.map((d) => (
              <a
                key={d.escuela}
                href={d.href}
                className="inst-card flex-row-center autoridades-school-link"
              >
                <img src={d.escudo} alt={`Escudo ${d.escuela}`} className="autoridades-school-img" />
                <div>
                  <p className="autoridades-school-label">
                    {d.escuela}
                  </p>
                  <p className="autoridades-school-name">
                    {d.nombre}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
