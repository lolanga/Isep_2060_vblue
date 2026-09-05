/**
 * pages/Institucional/Resoluciones.jsx
 *
 * Resoluciones Generales y normativa del ISeP.
 * Incluye enlace al verificador de firmas digitales del Estado Nacional.
 */

import { useState, useMemo } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { resoluciones } from "../../data/normativa";

const ANIOS = ["Todos", ...new Set(resoluciones.map((r) => r.anio))].sort((a, b) => {
  if (a === "Todos") return -1;
  if (b === "Todos") return 1;
  return b.localeCompare(a);
});
const TIPOS = ["Todos", ...new Set(resoluciones.map((r) => r.tipo))];

const VERIFICADOR_URL = "https://validadordefirmas.gob.ar/upload";

const TIPO_ICONS = {
  Resolución: "description",
  Convenio: "handshake",
  "Plan Estratégico:": "route",
  Estatuto: "gavel",
};

export default function Resoluciones() {
  const [anioFiltro, setAnioFiltro] = useState("Todos");
  const [tipoFiltro, setTipoFiltro] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  const filtradas = useMemo(() => {
    return resoluciones.filter((r) => {
      if (anioFiltro !== "Todos" && r.anio !== anioFiltro) return false;
      if (tipoFiltro !== "Todos" && r.tipo !== tipoFiltro) return false;
      if (busqueda) {
        const q = busqueda.toLowerCase();
        if (!r.titulo.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [anioFiltro, tipoFiltro, busqueda]);

  const totalPorAnio = useMemo(() => {
    const counts = {};
    resoluciones.forEach((r) => {
      counts[r.anio] = (counts[r.anio] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <main className="resoluciones-main">
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="badge">Institucional</span>
          <h1 className="hero-title">
            <span>Resoluciones</span> y Normativa
          </h1>
          <p className="hero-description">
            Documentos oficiales que regulan la actividad del Instituto de Seguridad Pública
          </p>
        </div>
      </section>

      <div className="container-max resoluciones-content">
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Institucional" },
            { label: "Resoluciones" },
          ]}
        />

        {/* ── Info verificación de firmas ── */}
        <div className="alert-info">
          <span className="material-symbols-outlined alert-info__icon">
            verified
          </span>
          <div className="alert-info__content">
            <p className="alert-info__title">
              Verificación de firmas digitales
            </p>
            <p className="alert-info__text">
              Podés verificar la autenticidad de cualquier resolución en el sitio oficial del Estado Nacional.
            </p>
          </div>
          <a
            href={VERIFICADOR_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-solid-blue"
          >
            <span className="material-symbols-outlined icon-xs">open_in_new</span>
            Verificar firma
          </a>
        </div>

        {/* ── Filtros ── */}
        <div className="resoluciones-filtros">
          {/* Búsqueda */}
          <div className="resoluciones-search">
            <label className="filter-label">
              Buscar
            </label>
            <div className="search-wrapper">
              <span className="material-symbols-outlined search-icon">
                search
              </span>
              <input
                type="text"
                placeholder="Buscar resolución..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="form-input form-input--search"
              />
            </div>
          </div>

          {/* Año */}
          <div>
            <label className="filter-label">
              Año
            </label>
            <div className="flex-row flex-wrap">
              {ANIOS.map((a) => (
                <button
                  key={a}
                  type="button"
                  className={`filtro-btn${anioFiltro === a ? " filtro-btn--active" : ""}`}
                  onClick={() => setAnioFiltro(a)}
                >
                  {a}
                  {a !== "Todos" && totalPorAnio[a] && (
                    <span className="filtro-count">
                      ({totalPorAnio[a]})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tipo */}
          <div>
            <label className="filter-label">
              Tipo
            </label>
            <div className="flex-row flex-wrap">
              {TIPOS.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`filtro-btn${tipoFiltro === t ? " filtro-btn--active" : ""}`}
                  onClick={() => setTipoFiltro(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Contador ── */}
        <p className="result-count">
          {filtradas.length} resultado{filtradas.length !== 1 ? "s" : ""} encontrado{filtradas.length !== 1 ? "s" : ""}
        </p>

        {/* ── Listado ── */}
        <div className="flex-col resoluciones-card-list">
          {filtradas.map((r) => (
            <div
              key={r.id}
              className="inst-card flex-row-center resoluciones-card"
            >
              <span className="material-symbols-outlined resoluciones-type-icon">
                {TIPO_ICONS[r.tipo] || "description"}
              </span>
              <div className="flex-1 resoluciones-card-content">
                <p className="resoluciones-card-title">{r.titulo}</p>
                <div className="card-meta">
                  <span className="chip" data-type="tipo">{r.tipo}</span>
                  <span className="resoluciones-meta">{r.fecha}</span>
                  <span className="resoluciones-meta">{r.tamaño}</span>
                </div>
              </div>
              <div className="card-actions">
                <a
                  href={VERIFICADOR_URL}
                  target="_blank"
                  rel="noreferrer"
                  title="Verificar firma digital"
                  className="btn-ghost"
                >
                  <span className="material-symbols-outlined icon-xs">verified</span>
                </a>
                <a
                  href={r.archivo}
                  download
                  className="btn-gradient"
                >
                  <span className="material-symbols-outlined icon-xs">download</span>
                  Descargar
                </a>
              </div>
            </div>
          ))}
        </div>

        {filtradas.length === 0 && (
          <div className="empty-state">
            <span className="material-symbols-outlined empty-state__icon">search_off</span>
            <p className="resoluciones-empty-text">No se encontraron documentos con los filtros seleccionados.</p>
            {(busqueda || anioFiltro !== "Todos" || tipoFiltro !== "Todos") && (
              <button
                type="button"
                onClick={() => { setBusqueda(""); setAnioFiltro("Todos"); setTipoFiltro("Todos"); }}
                className="resoluciones-clear-btn"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
