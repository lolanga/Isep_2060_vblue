import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { resoluciones } from "../../data/normativa";

const ANIOS = ["Todos", "2025", "2024", "2023", "2022"];
const TIPOS = ["Todos", "Resolución", "Convenio", "Plan Estratégico", "Estatuto"];

export default function Resoluciones() {
  const [anioFiltro, setAnioFiltro] = useState("Todos");
  const [tipoFiltro, setTipoFiltro] = useState("Todos");

  const filtradas = resoluciones.filter(
    (r) => (anioFiltro === "Todos" || r.anio === anioFiltro) && (tipoFiltro === "Todos" || r.tipo === tipoFiltro)
  );

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

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", margin: "1.5rem 0" }}>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--primary)", alignSelf: "center" }}>Año:</span>
            {ANIOS.map((a) => (
              <button
                key={a}
                type="button"
                className={`filtro-btn${anioFiltro === a ? " filtro-btn--active" : ""}`}
                onClick={() => setAnioFiltro(a)}
              >
                {a}
              </button>
            ))}
          </div>
          <div style={{ width: "1px", background: "#e2e8f0", margin: "0 0.5rem" }} />
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--primary)", alignSelf: "center" }}>Tipo:</span>
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

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1.5rem" }}>
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
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "1.5rem", color: "var(--secondary)", flexShrink: 0 }}>
                description
              </span>
              <div style={{ flex: 1, minWidth: 200 }}>
                <p style={{ fontWeight: 600, color: "var(--slate-900)", fontSize: "0.95rem", margin: 0 }}>{r.titulo}</p>
                <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.3rem", flexWrap: "wrap" }}>
                  <span className="chip" data-type="tipo" style={{ fontSize: "0.7rem", padding: "0.15rem 0.5rem" }}>{r.tipo}</span>
                  <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{r.fecha}</span>
                  <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{r.tamaño}</span>
                </div>
              </div>
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
                  flexShrink: 0,
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>download</span>
                Descargar
              </a>
            </div>
          ))}
        </div>

        {filtradas.length === 0 && (
          <div style={{ textAlign: "center", padding: "3rem 1rem", color: "#94a3b8" }}>
            <span className="material-symbols-outlined" style={{ fontSize: "2.5rem", display: "block", marginBottom: "0.75rem" }}>search_off</span>
            No se encontraron documentos con los filtros seleccionados.
          </div>
        )}
      </div>
    </main>
  );
}
