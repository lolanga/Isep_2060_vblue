/**
 * pages/Institucional/SedesContacto.jsx
 *
 * Sedes y contacto del ISeP.
 * Datos oficiales extraídos del footer de isepsantafe.edu.ar
 */

import Breadcrumb from "../../components/Breadcrumb";

const SEDES = [
  {
    id: 1,
    nombre: "D.Z.S — Rosario (Sede Central)",
    direccion: "Leandro N. Alem 2050, S2000FMH Rosario, Santa Fe",
    telefono: "341-4728526",
    email: "contacto@isepsantafe.edu.ar",
    horario: "Lunes a Viernes de 8:00 a 17:00",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.5!2d-60.64!3d-32.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b75f4d1e2e3f3b%3A0x1234567890abcdef!2sLeandro+N.+Alem+2050%2C+Rosario%2C+Santa+Fe!5e0!3m2!1ses!2sar!4v1",
  },
  {
    id: 2,
    nombre: "DZCN — Recreo",
    direccion: "RN11, km 482, Recreo, Santa Fe",
    telefono: "342-4815570",
    email: "contacto@isepsantafe.edu.ar",
    horario: "Lunes a Viernes de 8:00 a 17:00",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.5!2d-60.7!3d-31.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM4JzI0LjAiUyA2MMKwNDInMDAuMCJX!5e0!3m2!1ses!2sar!4v1",
  },
];

const CANALES = [
  { icon: "call", label: "Teléfono", valor: "341-4728526 (Rosario) / 342-4815570 (Recreo)" },
  { icon: "mail", label: "Correo", valor: "contacto@isepsantafe.edu.ar" },
  { icon: "language", label: "Sitio web", valor: "www.isepsantafe.edu.ar" },
];

const REDES = [
  { nombre: "Facebook", url: "https://facebook.com/isepsantafe/", svg: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  { nombre: "YouTube", url: "https://www.youtube.com/c/InstitutodeSeguridadP%C3%BAblicadeSantaFe", svg: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
  { nombre: "Instagram", url: "https://instagram.com/isepsantafe?igshid=YmMyMTA2M2Y=", svg: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg> },
  { nombre: "TikTok", url: "https://tiktok.com/@isepsantafe", svg: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg> },
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

        {/* ── Sedes ── */}
        <div className="grid-2col" style={{ gap: "2rem", marginTop: "2rem" }}>
          {SEDES.map((sede) => (
            <div
              key={sede.id}
              className="inst-card"
              style={{ borderRadius: "1rem", overflow: "hidden" }}
            >
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--primary)", marginBottom: "1rem" }}>
                  {sede.nombre}
                </h3>
                <div className="flex-col" style={{ gap: "0.75rem" }}>
                  <div className="flex-row">
                    <span className="material-symbols-outlined icon-sm-top">location_on</span>
                    <span style={{ color: "#475569", fontSize: "0.9rem" }}>{sede.direccion}</span>
                  </div>
                  <div className="flex-row-center">
                    <span className="material-symbols-outlined icon-sm">call</span>
                    <span style={{ color: "#475569", fontSize: "0.9rem" }}>{sede.telefono}</span>
                  </div>
                  <div className="flex-row-center">
                    <span className="material-symbols-outlined icon-sm">mail</span>
                    <span style={{ color: "#475569", fontSize: "0.9rem" }}>{sede.email}</span>
                  </div>
                  <div className="flex-row-center">
                    <span className="material-symbols-outlined icon-sm">schedule</span>
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

        {/* ── Canales de contacto ── */}
        <section className="page-section" style={{ marginTop: "3rem" }}>
          <h2 className="page-section-title" style={{ marginBottom: "1.25rem" }}>
            Canales de contacto
          </h2>
          <div className="grid-3col">
            {CANALES.map((c) => (
              <div
                key={c.label}
                className="inst-card flex-row-center"
                style={{ gap: "0.75rem" }}
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
                  <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: "1.25rem" }}>{c.icon}</span>
                </div>
                <div>
                  <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: "0.1rem" }}>
                    {c.label}
                  </p>
                  <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--slate-900)" }}>{c.valor}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Redes sociales ── */}
        <section className="page-section">
          <h2 className="page-section-title" style={{ marginBottom: "1.25rem" }}>
            Seguinos en nuestras redes
          </h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {REDES.map((r) => (
              <a
                key={r.nombre}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="inst-card flex-row-center"
                style={{
                  gap: "0.6rem",
                  padding: "0.75rem 1.25rem",
                  color: "var(--slate-900)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(15,23,42,0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span style={{ color: "var(--primary)", display: "flex" }}>{r.svg}</span>
                {r.nombre}
              </a>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <div style={{
          marginTop: "3rem",
          background: "#f8fafc",
          borderRadius: "0.75rem",
          padding: "2rem",
          border: "1px solid #eef2f7",
          textAlign: "center",
        }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--primary)", marginBottom: "0.5rem" }}>
            ¿Tenés consultas?
          </h3>
          <p style={{ color: "#64748b", maxWidth: "500px", margin: "0 auto", lineHeight: 1.6, fontSize: "0.9rem" }}>
            Comunicate con nosotros a través de los canales indicados o acercate a cualquiera de nuestras sedes.
            Estamos para ayudarte.
          </p>
        </div>
      </div>
    </main>
  );
}
