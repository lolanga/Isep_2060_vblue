import Breadcrumb from "../../components/Breadcrumb";

const SEDES = [
  {
    id: 1,
    nombre: "Sede Central – Rosario",
    direccion: "Av. Pellegrini 1850, Rosario, Santa Fe",
    telefono: "(0341) 459-0400",
    email: "sede-central@isep.gov.ar",
    horario: "Lunes a Viernes de 8:00 a 17:00",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.8!2d-60.65!3d-32.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDU3JzAwLjAiUyA2MMKwMzknMDAuMCJX!5e0!3m2!1ses!2sar!4v1",
  },
  {
    id: 2,
    nombre: "Sede Santa Fe – Capital",
    direccion: "Bulevar España 2120, Santa Fe Capital, Santa Fe",
    telefono: "(0342) 455-2000",
    email: "sede-capital@isep.gov.ar",
    horario: "Lunes a Viernes de 8:00 a 17:00",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.5!2d-60.7!3d-31.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM4JzI0LjAiUyA2MMKwNDInMDAuMCJX!5e0!3m2!1ses!2sar!4v1",
  },
];

export default function SedesContacto() {
  return (
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="badge">Institucional</span>
          <h1 className="hero-title">
            <span>Sedes</span> y Contacto
          </h1>
          <p className="hero-description">
            Ubicación de nuestras sedes y canales de comunicación
          </p>
        </div>
      </section>

      <div className="container-max" style={{ padding: "2rem" }}>
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Institucional" },
            { label: "Sedes y Contacto" },
          ]}
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "2rem", marginTop: "2rem" }}>
          {SEDES.map((sede) => (
            <div
              key={sede.id}
              style={{
                background: "#fff",
                borderRadius: "1rem",
                border: "1px solid #eef2f7",
                overflow: "hidden",
                boxShadow: "0 1px 3px rgba(15,23,42,0.06)",
              }}
            >
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--primary)", marginBottom: "1rem" }}>
                  {sede.nombre}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "1.1rem", color: "var(--secondary)", marginTop: "0.1rem" }}>location_on</span>
                    <span style={{ color: "#475569", fontSize: "0.9rem" }}>{sede.direccion}</span>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "1.1rem", color: "var(--secondary)" }}>call</span>
                    <span style={{ color: "#475569", fontSize: "0.9rem" }}>{sede.telefono}</span>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "1.1rem", color: "var(--secondary)" }}>mail</span>
                    <span style={{ color: "#475569", fontSize: "0.9rem" }}>{sede.email}</span>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "1.1rem", color: "var(--secondary)" }}>schedule</span>
                    <span style={{ color: "#475569", fontSize: "0.9rem" }}>{sede.horario}</span>
                  </div>
                </div>
              </div>
              <div style={{ height: "220px", borderTop: "1px solid #eef2f7" }}>
                <iframe
                  src={sede.mapa}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${sede.nombre}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--primary)", marginBottom: "1rem" }}>
            ¿Tenés consultas?
          </h3>
          <p style={{ color: "#64748b", maxWidth: "500px", margin: "0 auto", lineHeight: 1.6 }}>
            Comunicate con nosotros a través de los canales indicados o acercate a cualquiera de nuestras sedes.
            Estamos para ayudarte.
          </p>
        </div>
      </div>
    </main>
  );
}
