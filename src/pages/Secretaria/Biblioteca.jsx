/**
 * pages/Secretaria/Biblioteca.jsx
 *
 * Biblioteca virtual del ISeP.
 * Fuente: isepsantafe.edu.ar/index.php/academico/biblioteca
 */

import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";

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

/** Página de biblioteca virtual con buscador, filtros por categoría y grid de artículos. */
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
    <main className="page-main">
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

      <div className="container-max biblio-content">
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Secretaría Académica" },
            { label: "Biblioteca" },
          ]}
        />

        {/* ── Buscador ── */}
        <div className="biblio-search-section">
          <div className="biblio-search-wrap">
            <span
              className="material-symbols-outlined biblio-search-icon"
            >
              search
            </span>
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar artículos..."
              className="biblio-search-input"
            />
          </div>
        </div>

        {/* ── Filtros por categoría ── */}
        <div className="oferta-tabs biblio-filters">
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
        <div className="biblio-grid">
          {filtrados.map((a) => {
            const color = CAT_COLORS[a.categoria] || { bg: "#f1f5f9", text: "#475569" };
            const icon = CAT_ICONS[a.categoria] || "article";
            return (
              <a
                key={a.titulo}
                href={a.url || "#"}
                target="_blank"
                rel="noreferrer"
                className="biblio-card"
              >
                <div className="biblio-card-header">
                  <span
                    className="biblio-badge"
                    style={{
                      "--badge-bg": color.bg,
                      "--badge-color": color.text,
                    }}
                  >
                    <span className="material-symbols-outlined biblio-badge-icon">{icon}</span>
                    {a.categoria}
                  </span>
                  <span
                    className="material-symbols-outlined biblio-open-icon"
                  >
                    open_in_new
                  </span>
                </div>
                <h3 className="biblio-card-title">
                  {a.titulo}
                </h3>
                <div className="biblio-card-spacer">
                  <span className="biblio-card-link">
                    <span className="material-symbols-outlined biblio-card-link-icon">description</span>
                    Ver artículo
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {filtrados.length === 0 && (
          <div className="biblio-empty">
            <span className="material-symbols-outlined biblio-empty-icon">
              search_off
            </span>
            <p className="biblio-empty-text">
              No se encontraron artículos para "{busqueda || filtro}".
            </p>
          </div>
        )}

        {/* ── Contador ── */}
        <div className="biblio-count">
          {filtrados.length} artículo{filtrados.length !== 1 && "s"} disponible{filtrados.length !== 1 && "s"}
        </div>
      </div>
    </main>
  );
}
