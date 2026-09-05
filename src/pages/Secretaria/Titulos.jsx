/**
 * pages/Secretaria/Titulos.jsx
 *
 * Títulos y Certificaciones del ISeP.
 * Fuente: isepsantafe.edu.ar/index.php/academico/titulos-y-certificaciones
 */

import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import SEO from "../../components/SEO";

const PASOS = [
  {
    numero: "1",
    titulo: "Verificar título secundario inscripto",
    descripcion: "Hacé click y verificá que tu título secundario se encuentre inscripto. Solo necesitás tu número de DNI.",
    url: "https://www.santafe.gov.ar/docentes/titulos/#/inicio",
    urlLabel: "Consultar en santafe.gov.ar",
  },
  {
    numero: "2",
    titulo: "Escanear o fotografiar documentos",
    descripcion: "Escanear o fotografiar la partida de nacimiento (solo certificada para quienes nacieron fuera de la provincia) y el DNI de ambos lados. Lo vas a necesitar para el trámite del paso 3.",
  },
  {
    numero: "3",
    titulo: "Completar el formulario online",
    descripcion: "Completar el formulario online. Solo necesitás tu correo electrónico personal.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSf4-HftBzUNWcF-ZlGlwbkePsiJ-JqBKzey7wAbs5ktVYlbyQ/viewform?vc=0&c=0&w=1&flr=0",
    urlLabel: "Abrir formulario online",
  },
];

const TITULOS_DESCARGA = [
  {
    titulo: "Títulos formato nuevo",
    actualizado: "actualizada al 10/11/2023",
    url: "https://drive.google.com/file/d/1qeqbm7J9ROixX_0EMp8f1G069jRk79ua/view?usp=share_link",
  },
  {
    titulo: "Títulos formato anterior",
    actualizado: "actualizada al 26/07/2023",
    url: "https://drive.google.com/file/d/1r8B8lu18_qdWe1W85tWuHiJIr0dIKrAv/view?usp=sharing",
  },
];

const SEDES = [
  { nombre: "D.Z.S — Rosario", direccion: "Leandro N. Alem 2050, S2000FMH Rosario, Santa Fe" },
  { nombre: "DZCN — Recreo", direccion: "RN11, km 482, Recreo, Santa Fe" },
];

export default function Titulos() {
  const [dni, setDni] = useState("");
  const [consultando, setConsultando] = useState(false);
  const [resultado, setResultado] = useState(null);

  const handleConsulta = (e) => {
    e.preventDefault();
    if (!dni.trim()) return;
    setConsultando(true);
    setResultado(null);
    setTimeout(() => {
      setConsultando(false);
      setResultado({ encontrado: false, dni: dni.trim() });
    }, 2000);
  };

  return (
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      <SEO title="Títulos y Certificaciones" description="Trámites de títulos y certificaciones del ISeP" />
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="badge">Secretaría Académica</span>
          <h1 className="hero-title">
            Títulos <span>y Certificaciones</span>
          </h1>
          <p className="hero-description">
            Trámites de títulos, certificaciones y consulta de egresados
          </p>
        </div>
      </section>

      <div className="container-max" style={{ padding: "2rem" }}>
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Secretaría Académica" },
            { label: "Títulos y Certificaciones" },
          ]}
        />

        {/* ── Consulta de certificados ── */}
        <section style={{ background: "#f8fafc", borderRadius: "0.75rem", padding: "1.5rem", border: "1px solid #eef2f7", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--primary)", marginBottom: "0.75rem" }}>
            Consulta de Certificados
          </h2>
          <p style={{ fontSize: "0.9rem", color: "#475569", marginBottom: "1rem" }}>
            ISeP Provincia de Santa Fe
          </p>
          <form onSubmit={handleConsulta} style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap" }}>
            <input
              type="text"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              placeholder="Ingresá tu número de DNI"
              style={{
                flex: "1 1 200px",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                border: "1px solid #cbd5e1",
                fontSize: "0.9rem",
                outline: "none",
              }}
            />
            <button
              type="submit"
              disabled={consultando}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                background: consultando ? "#94a3b8" : "var(--gradient-primary)",
                color: "#fff",
                border: "none",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: consultando ? "not-allowed" : "pointer",
              }}
            >
              {consultando ? "Consultando certificados…" : "Consultar"}
            </button>
          </form>
          {resultado && !resultado.encontrado && (
            <div style={{
              marginTop: "1rem",
              padding: "0.75rem 1rem",
              borderRadius: "0.5rem",
              background: "rgba(245,158,11,0.1)",
              border: "1px solid rgba(245,158,11,0.2)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: "1.1rem", color: "#f59e0b" }}>info</span>
              <span style={{ fontSize: "0.85rem", color: "#92400e" }}>
                No se encontró un certificado asociado al DNI <strong>{resultado.dni}</strong>. Verificá que los datos sean correctos o contactate con la sección Títulos y Registros.
              </span>
            </div>
          )}
        </section>

        {/* ── Títulos y Registros ── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--slate-900)", marginBottom: "1rem" }}>
            Títulos y Registros
          </h2>
          <p className="page-text" style={{ marginBottom: "1.5rem" }}>
            La Dirección General con la colaboración del Departamento Tecnología, Desarrollo e Innovación y de la Secretaría Académica,
            en su proceso de innovación constante pone a disposición de sus egresados el <strong>formulario online</strong> para pedidos
            de títulos y certificaciones. En la búsqueda de simplificar y agilizar los procesos hemos creado una manera más simple de
            solicitar la documentación que requieren nuestros egresados.
          </p>

          {/* Pasos */}
          <div className="flex-col">
            {PASOS.map((paso) => (
              <div
                key={paso.numero}
                className="inst-card flex-row"
                style={{ gap: "1rem" }}
              >
                <div style={{
                  width: "2.2rem",
                  height: "2.2rem",
                  borderRadius: "50%",
                  background: "var(--gradient-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                }}>
                  {paso.numero}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--slate-900)", marginBottom: "0.35rem" }}>
                    Paso {paso.numero}: {paso.titulo}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.5, marginBottom: paso.url ? "0.75rem" : 0 }}>
                    {paso.descripcion}
                  </p>
                  {paso.url && (
                    <a
                      href={paso.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--primary)",
                        textDecoration: "none",
                      }}
                    >
                      {paso.urlLabel}
                      <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>open_in_new</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Títulos para retirar ── */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--slate-900)", marginBottom: "0.75rem" }}>
            Títulos de Técnico Superior para retirar
          </h2>
          <p className="page-text" style={{ marginBottom: "1rem" }}>
            Se pone a disposición de quienes hayan solicitado la impresión del título de la <strong>"Tecnicatura Superior"</strong>,
            dictada por la Ex – Escuela de Cadetes de Policía (ECP) y el actual Instituto de Seguridad Pública (I.Se.P.),
            la lista de aquellos que se encuentran para retirar en la sección "Títulos y Registros".
          </p>
          <div className="grid-3col">
            {TITULOS_DESCARGA.map((t) => (
              <div
                key={t.titulo}
                className="inst-card"
              >
                <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--slate-900)", marginBottom: "0.25rem" }}>
                  {t.titulo}
                </h4>
                <p style={{ fontSize: "0.78rem", color: "#94a3b8", marginBottom: "0.75rem" }}>
                  {t.actualizado}
                </p>
                <a
                  href={t.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    background: "var(--gradient-primary)",
                    color: "#fff",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "0.9rem" }}>download</span>
                  Descargar
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contacto ── */}
        <section style={{ background: "#f8fafc", borderRadius: "0.75rem", padding: "1.5rem", border: "1px solid #eef2f7", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary)", marginBottom: "0.75rem" }}>
            Te ayudamos
          </h2>
          <p style={{ fontSize: "0.85rem", color: "#475569", marginBottom: "0.5rem" }}>
            Sección Títulos y Registros
          </p>
          <div className="flex-col">
            <div className="flex-row-center">
              <span className="material-symbols-outlined icon-sm">call</span>
              <span style={{ fontSize: "0.85rem", color: "#475569" }}>0341-4728526</span>
            </div>
            <div className="flex-row-center">
              <span className="material-symbols-outlined icon-sm">mail</span>
              <span style={{ fontSize: "0.85rem", color: "#475569" }}>titulosisep@isepsantafe.edu.ar</span>
            </div>
          </div>
        </section>

        {/* ── Sedes ── */}
        <section>
          <p className="page-text" style={{ marginBottom: "1rem" }}>
            La Dirección General junto a la Secretaría Académica y su área de Títulos y Certificaciones siguen innovando para facilitar gestiones.
            Ahora podés buscar tu título en cualquiera de nuestras sedes:
          </p>
          <div className="grid-3col">
            {SEDES.map((s) => (
              <div
                key={s.nombre}
                className="inst-card flex-row"
                style={{ padding: "1rem", gap: "0.75rem" }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "1.2rem", color: "var(--primary)", marginTop: "0.1rem" }}>location_on</span>
                <div>
                  <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--slate-900)" }}>{s.nombre}</p>
                  <p style={{ fontSize: "0.8rem", color: "#64748b" }}>{s.direccion}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
