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
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
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

      <div className="container-max" style={{ padding: "2rem" }}>
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Institucional" },
            { label: "Autoridades" },
          ]}
        />

        {/* ── Autoridades superiores ── */}
        <section style={{ marginTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--slate-900)", marginBottom: "1.25rem" }}>
            Autoridades Provinciales
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "1rem" }}>
            {AUTORIDADES_SUPERIORES.map((a) => (
              <div
                key={a.cargo}
                style={{
                  background: "#fff",
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                  border: "1px solid #eef2f7",
                  boxShadow: "0 1px 3px rgba(15,23,42,0.06)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                }}
              >
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
                  <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: "1.25rem" }}>{a.icon}</span>
                </div>
                <div>
                  <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: "0.2rem" }}>
                    {a.cargo}
                  </p>
                  <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--slate-900)", lineHeight: 1.3 }}>
                    {a.nombre}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Concejo Interinstitucional ── */}
        <section style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--slate-900)", marginBottom: "1.25rem" }}>
            Concejo Interinstitucional
          </h2>
          <div style={{
            background: "#fff",
            borderRadius: "0.75rem",
            border: "1px solid #eef2f7",
            overflow: "hidden",
          }}>
            {CONCEJO.map((c, i) => (
              <div
                key={c.nombre}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem 1.25rem",
                  borderBottom: i < CONCEJO.length - 1 ? "1px solid #eef2f7" : "none",
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "1.5rem", color: "var(--secondary)", flexShrink: 0 }}>
                  person
                </span>
                <div>
                  <p style={{ fontWeight: 700, color: "var(--slate-900)", fontSize: "0.95rem", margin: 0 }}>{c.nombre}</p>
                  <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "0.15rem 0 0" }}>{c.representacion}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Director General ── */}
        <section style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--slate-900)", marginBottom: "1.25rem" }}>
            Dirección General del ISeP
          </h2>
          <div
            style={{
              background: "#fff",
              borderRadius: "1rem",
              border: "1px solid #eef2f7",
              overflow: "hidden",
              boxShadow: "0 1px 3px rgba(15,23,42,0.06)",
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              padding: "1.5rem",
            }}
          >
            <div style={{
              width: "4rem",
              height: "4rem",
              borderRadius: "50%",
              background: "var(--gradient-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <img src={DIRECTORGENERAL.escudo} alt="Escudo ISeP" style={{ width: "2.5rem", height: "2.5rem", objectFit: "contain" }} />
            </div>
            <div>
              <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: "0.2rem" }}>
                {DIRECTORGENERAL.cargo}
              </p>
              <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--slate-900)" }}>
                {DIRECTORGENERAL.nombre}
              </p>
            </div>
          </div>
        </section>

        {/* ── Directores de Escuelas ── */}
        <section style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--slate-900)", marginBottom: "1.25rem" }}>
            Directores de Escuelas
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "1rem" }}>
            {DIRECTORES_ESCUELAS.map((d) => (
              <a
                key={d.escuela}
                href={d.href}
                style={{
                  textDecoration: "none",
                  background: "#fff",
                  borderRadius: "0.75rem",
                  border: "1px solid #eef2f7",
                  padding: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  boxShadow: "0 1px 3px rgba(15,23,42,0.06)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(15,23,42,0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 1px 3px rgba(15,23,42,0.06)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <img src={d.escudo} alt={`Escudo ${d.escuela}`} style={{ width: "3rem", height: "3rem", objectFit: "contain", flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: "0.15rem" }}>
                    {d.escuela}
                  </p>
                  <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--slate-900)", lineHeight: 1.3 }}>
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
