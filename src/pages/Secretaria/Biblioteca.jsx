/**
 * pages/Secretaria/Biblioteca.jsx
 *
 * Biblioteca virtual del ISeP.
 * Fuente: isepsantafe.edu.ar/index.php/academico/biblioteca
 */

import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import SEO from "../../components/SEO";

const BASE = "https://www.isepsantafe.edu.ar/index.php/academico/biblioteca";

const ARTICULOS = [
  { titulo: "Ficha Censal", url: "https://www.isepsantafe.edu.ar/images/BIBLIOTECA/anexo%20para%20ficha%20censal.pdf", categoria: "Institucional" },
  { titulo: "Constitución de la Provincia Invencible de Santa Fe - Reforma 2025", url: "https://www.isepsantafe.edu.ar/images/BIBLIOTECA/CONSTITUCION-DE-LA-PROV-DE-SF-2025_VF-WEB.pdf", categoria: "Normativa" },
  { titulo: "Manual de Contenidos para Aspirantes", url: "https://www.isepsantafe.edu.ar/images/BIBLIOTECA/MANUAL%20DE%20CONTENIDOS%20PARA%20ASPIRANTES.pdf", categoria: "Formación" },
  { titulo: "Protocolo para el Uso Progresivo de la Fuerza", url: "https://www.isepsantafe.edu.ar/images/BIBLIOTECA/r0208223725%201.pdf", categoria: "Protocolos" },
  { titulo: "Capacitaciones Gobierno de Santa Fe", url: "https://www.santafe.gob.ar/formacionrrhh/site/index.php", categoria: "Formación" },
  { titulo: "Protocolo de Actuación del Programa de Abordaje Integral de Prevención del Suicidio en la Policía de la Provincia de Santa Fe (Res. Ministerial Nro 151220)", url: "https://www.isepsantafe.edu.ar/images/BIBLIOTECA/PROTOCOLO%20DE%20ACTUACION%20DEL%20PROGRAMA%20DE%20ABORDAJE%20INTEGRAL%20DE%20PREVENCION%20DEL%20SUICIDIO%20EN%20LA%20POLICIA%20DE%20LA%20PROVINCIA%20DE%20SANTA%20FE%20Res.%20Ministerial%20Nro%20151220.pdf", categoria: "Protocolos" },
  { titulo: "Ley N° 14258 - Modifica el Código Procesal Penal de Santa Fe y el Art. 10 Bis de la Ley Orgánica Policial", url: "https://www.isepsantafe.edu.ar/images/BIBLIOTECA/LEY%20N%2014258%20MODIFICA%20EL%20CODIGO%20PROCESAL%20PENAL%20DE%20SANTA%20FE%20Y%20EL%20ART%2010%20BIS%20DE%20LA%20LEY%20ORGANICA%20POLICIAL.pdf", categoria: "Normativa" },
  { titulo: "Constitución Nacional", url: null, categoria: "Normativa" },
  { titulo: "Manual de Apto Psicofísico para Aspirantes", url: "https://www.isepsantafe.edu.ar/images/BIBLIOTECA/REGLAMENTO%20APTITUD%20PSICOFISICA-ISEP-%20ACTUALIZADO%202025.pdf", categoria: "Formación" },
  { titulo: "Pruebas de Aptitud Física para Aspirantes", url: "https://www.isepsantafe.edu.ar/images/BIBLIOTECA/EXAMEN%20DE%20INGRESO%20Tec.%20Seg.%20Pub.y%20Ciudadana.pdf", categoria: "Formación" },
  { titulo: "Modelo de Recurso", url: "https://www.isepsantafe.edu.ar/images/BIBLIOTECA/MODELO%20DE%20RECURSO%20%20DE%20REVOCATORIA.pdf", categoria: "Institucional" },
  { titulo: "Ley 14181 - Derechos de la Víctima", url: "https://www.isepsantafe.edu.ar/images/BIBLIOTECA/Ley%2014.181%20-%20%20Derechos%20de%20la%20Victima.pdf", categoria: "Normativa" },
  { titulo: "Código Procesal Penal de Santa Fe", url: "https://www.isepsantafe.edu.ar/images/BIBLIOTECA/CODIGO%20PROCESAL%20CIVIL%20Y%20COMERCIAL%20DE%20SANTA%20FE%20LEY%205531.pdf", categoria: "Normativa" },
  { titulo: "Código Procesal Civil y Comercial de Santa Fe (Ley 5531)", url: "https://www.isepsantafe.edu.ar/images/BIBLIOTECA/CODIGO%20DE%20CONVIVENCIA%20LEY%2013774.pdf", categoria: "Normativa" },
  { titulo: "Código Procesal de Menores de Santa Fe (Ley 11452)", url: "https://www.isepsantafe.edu.ar/images/BIBLIOTECA/CODIGO%20PROCESAL%20DE%20MENORES%20DE%20SANTA%20FE%20LEY%2011452.pdf", categoria: "Normativa" },
  { titulo: "Código de Faltas de Santa Fe (Ley 10703)", url: "https://www.isepsantafe.edu.ar/images/BIBLIOTECA/CODIGO%20DE%20FALTAS%20DE%20SANTA%20FE%20LEY%2010703.pdf", categoria: "Normativa" },
  { titulo: "Código de Convivencia (Ley 13774)", url: "https://www.isepsantafe.edu.ar/images/BIBLIOTECA/CODIGO%20DE%20CONVIVENCIA%20LEY%2013774.pdf", categoria: "Normativa" },
  { titulo: "Declaración Universal de Derechos Humanos", url: "https://www.isepsantafe.edu.ar/images/BIBLIOTECA/DECLARACION%20UNIVERSAL%20DE%20DERECHOS%20HUMANOS.pdf", categoria: "Normativa" },
  { titulo: "Ley 12333 (Creación del ISeP)", url: "https://www.isepsantafe.edu.ar/images/BIBLIOTECA/LEY%2012333%20CREACION%20DEL%20ISEP.pdf", categoria: "Normativa" },
  { titulo: "Ley 12521 del Personal Policial", url: "https://www.isepsantafe.edu.ar/images/BIBLIOTECA/LEY%20DEL%20PERSONAL%20POLICIAL%20N%2012521.pdf", categoria: "Normativa" },
  { titulo: "Ley Orgánica de la Policía de Santa Fe", url: "https://www.isepsantafe.edu.ar/images/BIBLIOTECA/LEY%20ORGANICA%20DE%20LA%20POLICIA%20DE%20SANTA%20FE.pdf", categoria: "Normativa" },
];

const CATEGORIAS = ["Todas", ...new Set(ARTICULOS.map((a) => a.categoria))];

const CAT_ICONS = {
  Normativa: "gavel",
  Protocolos: "policy",
  Formación: "school",
  Institucional: "domain",
};

const CAT_COLORS = {
  Normativa: { bg: "#dbeafe", text: "#1e40af" },
  Protocolos: { bg: "#fef3c7", text: "#92400e" },
  Formación: { bg: "#dcfce7", text: "#166534" },
  Institucional: { bg: "#f3e8ff", text: "#7c3aed" },
};

export default function Biblioteca() {
  const [filtro, setFiltro] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");

  const filtrados = ARTICULOS.filter((a) => {
    const coincideFiltro = filtro === "Todas" || a.categoria === filtro;
    const coincideBusqueda =
      !busqueda ||
      a.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      a.categoria.toLowerCase().includes(busqueda.toLowerCase());
    return coincideFiltro && coincideBusqueda;
  });

  return (
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      <SEO title="Biblioteca Virtual" description="Recursos digitales de la biblioteca del ISeP" />
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="badge">Secretaría Académica</span>
          <h1 className="hero-title">
            Biblioteca <span>Virtual</span>
          </h1>
          <p className="hero-description">
            Artículos, normativa, protocolos y material de formación
          </p>
        </div>
      </section>

      <div className="container-max" style={{ padding: "2rem" }}>
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Secretaría Académica" },
            { label: "Biblioteca" },
          ]}
        />

        {/* ── Buscador ── */}
        <div style={{ marginTop: "2rem", marginBottom: "1.5rem" }}>
          <div style={{ position: "relative", maxWidth: "28rem" }}>
            <span
              className="material-symbols-outlined"
              style={{
                position: "absolute",
                left: "0.85rem",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "1.2rem",
                color: "#94a3b8",
              }}
            >
              search
            </span>
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar artículos..."
              style={{
                width: "100%",
                padding: "0.75rem 1rem 0.75rem 2.75rem",
                borderRadius: "0.5rem",
                border: "1px solid #cbd5e1",
                fontSize: "0.9rem",
                outline: "none",
              }}
            />
          </div>
        </div>

        {/* ── Filtros por categoría ── */}
        <div className="oferta-tabs" style={{ marginBottom: "2rem" }}>
          {CATEGORIAS.map((c) => (
            <button
              key={c}
              type="button"
              className={`oferta-tab${filtro === c ? " oferta-tab--active" : ""}`}
              onClick={() => setFiltro(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* ── Grid de artículos ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: "1rem" }}>
          {filtrados.map((a) => {
            const color = CAT_COLORS[a.categoria] || { bg: "#f1f5f9", text: "#475569" };
            const icon = CAT_ICONS[a.categoria] || "article";
            return (
              <a
                key={a.titulo}
                href={a.url || "#"}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  padding: "1.25rem",
                  background: "#fff",
                  borderRadius: "0.75rem",
                  border: "1px solid #eef2f7",
                  textDecoration: "none",
                  transition: "box-shadow 0.2s, transform 0.2s",
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
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "999px",
                      backgroundColor: color.bg,
                      color: color.text,
                      fontSize: "0.72rem",
                      fontWeight: 600,
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: "0.85rem" }}>{icon}</span>
                    {a.categoria}
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "1.1rem", color: "#94a3b8" }}
                  >
                    open_in_new
                  </span>
                </div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--slate-900)", lineHeight: 1.4 }}>
                  {a.titulo}
                </h3>
                <div style={{ marginTop: "auto" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--primary)",
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: "0.95rem" }}>description</span>
                    Ver artículo
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {filtrados.length === 0 && (
          <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
            <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "var(--slate-300)" }}>
              search_off
            </span>
            <p style={{ color: "var(--slate-500)", marginTop: "1rem" }}>
              No se encontraron artículos para "{busqueda || filtro}".
            </p>
          </div>
        )}

        {/* ── Contador ── */}
        <div style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.8rem", color: "#94a3b8" }}>
          {filtrados.length} artículo{filtrados.length !== 1 && "s"} disponible{filtrados.length !== 1 && "s"}
        </div>
      </div>
    </main>
  );
}
