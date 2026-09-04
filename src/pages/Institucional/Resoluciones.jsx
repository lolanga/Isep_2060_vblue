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
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
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

      <div className="container-max" style={{ padding: "2rem" }}>
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Institucional" },
            { label: "Resoluciones" },
          ]}
        />

        {/* ── Info verificación de firmas ── */}
        <div style={{
          background: "#f0f9ff",
          border: "1px solid #bae6fd",
          borderRadius: "0.75rem",
          padding: "1rem 1.25rem",
          marginTop: "1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          flexWrap: "wrap",
        }}>
          <span className="material-symbols-outlined" style={{ color: "#0284c7", fontSize: "1.5rem", flexShrink: 0 }}>
            verified
          </span>
          <div style={{ flex: 1, minWidth: 200 }}>
            <p style={{ fontWeight: 700, color: "#0c4a6e", fontSize: "0.9rem", margin: 0 }}>
              Verificación de firmas digitales
            </p>
            <p style={{ fontSize: "0.8rem", color: "#0369a1", margin: "0.15rem 0 0" }}>
              Podés verificar la autenticidad de cualquier resolución en el sitio oficial del Estado Nacional.
            </p>
          </div>
          <a
            href={VERIFICADOR_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3rem",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              background: "#0284c7",
              color: "#fff",
              fontSize: "0.8rem",
              fontWeight: 600,
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>open_in_new</span>
            Verificar firma
          </a>
        </div>

        {/* ── Filtros ── */}
        <div style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          margin: "1.5rem 0",
          alignItems: "flex-end",
        }}>
          {/* Búsqueda */}
          <div style={{ flex: "1 1 250px" }}>
            <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--primary)", display: "block", marginBottom: "0.3rem" }}>
              Buscar
            </label>
            <div style={{ position: "relative" }}>
              <span className="material-symbols-outlined" style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", fontSize: "1.1rem", color: "#94a3b8" }}>
                search
              </span>
              <input
                type="text"
                placeholder="Buscar resolución..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.55rem 0.75rem 0.55rem 2.25rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #e2e8f0",
                  fontSize: "0.85rem",
                  fontFamily: "inherit",
                  outline: "none",
                  transition: "border-color 0.15s",
                }}
                onFocus={(e) => e.target.style.borderColor = "var(--secondary)"}
                onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
              />
            </div>
          </div>

          {/* Año */}
          <div>
            <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--primary)", display: "block", marginBottom: "0.3rem" }}>
              Año
            </label>
            <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
              {ANIOS.map((a) => (
                <button
                  key={a}
                  type="button"
                  className={`filtro-btn${anioFiltro === a ? " filtro-btn--active" : ""}`}
                  onClick={() => setAnioFiltro(a)}
                >
                  {a}
                  {a !== "Todos" && totalPorAnio[a] && (
                    <span style={{ fontSize: "0.65rem", opacity: 0.7, marginLeft: "0.2rem" }}>
                      ({totalPorAnio[a]})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tipo */}
          <div>
            <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--primary)", display: "block", marginBottom: "0.3rem" }}>
              Tipo
            </label>
            <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
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
        <p style={{ fontSize: "0.8rem", color: "#64748b", marginBottom: "1rem" }}>
          {filtradas.length} resultado{filtradas.length !== 1 ? "s" : ""} encontrado{filtradas.length !== 1 ? "s" : ""}
        </p>

        {/* ── Listado ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {filtradas.map((r) => (
            <div
              key={r.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem 1.25rem",
                background: "#fff",
                borderRadius: "0.75rem",
                border: "1px solid #eef2f7",
                boxShadow: "0 1px 2px rgba(15,23,42,0.04)",
                flexWrap: "wrap",
                transition: "box-shadow 0.15s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 2px 8px rgba(15,23,42,0.08)"}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 1px 2px rgba(15,23,42,0.04)"}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "1.5rem", color: "var(--secondary)", flexShrink: 0 }}>
                {TIPO_ICONS[r.tipo] || "description"}
              </span>
              <div style={{ flex: 1, minWidth: 200 }}>
                <p style={{ fontWeight: 600, color: "var(--slate-900)", fontSize: "0.95rem", margin: 0 }}>{r.titulo}</p>
                <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.3rem", flexWrap: "wrap", alignItems: "center" }}>
                  <span className="chip" data-type="tipo" style={{ fontSize: "0.7rem", padding: "0.15rem 0.5rem" }}>{r.tipo}</span>
                  <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{r.fecha}</span>
                  <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{r.tamaño}</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
                <a
                  href={VERIFICADOR_URL}
                  target="_blank"
                  rel="noreferrer"
                  title="Verificar firma digital"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                    background: "#fff",
                    color: "#64748b",
                    textDecoration: "none",
                    transition: "border-color 0.15s, color 0.15s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--secondary)"; e.currentTarget.style.color = "var(--secondary)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.color = "#64748b"; }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>verified</span>
                </a>
                <a
                  href={r.archivo}
                  download
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    background: "var(--gradient-primary)",
                    color: "#fff",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>download</span>
                  Descargar
                </a>
              </div>
            </div>
          ))}
        </div>

        {filtradas.length === 0 && (
          <div style={{ textAlign: "center", padding: "3rem 1rem", color: "#94a3b8" }}>
            <span className="material-symbols-outlined" style={{ fontSize: "2.5rem", display: "block", marginBottom: "0.75rem" }}>search_off</span>
            <p style={{ margin: 0 }}>No se encontraron documentos con los filtros seleccionados.</p>
            {(busqueda || anioFiltro !== "Todos" || tipoFiltro !== "Todos") && (
              <button
                type="button"
                onClick={() => { setBusqueda(""); setAnioFiltro("Todos"); setTipoFiltro("Todos"); }}
                style={{
                  marginTop: "1rem",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #e2e8f0",
                  background: "#fff",
                  color: "var(--primary)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
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
