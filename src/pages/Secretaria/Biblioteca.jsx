/**
 * pages/Secretaria/Biblioteca.jsx
 *
 * Biblioteca virtual del ISeP — Recursos bibliográficos
 * para la formación en seguridad pública.
 */

import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";

const RECURSOS = [
  {
    titulo: "La formación de formadores en S.I.S., nivel superior",
    tipo: "Manual",
    formato: "PDF",
    tamano: "3 MB",
    descripcion:
      "Guía integral de capacitación para formadores en seguridad integral situacional, con ejercicios y protocolos prácticos.",
  },
  {
    titulo: "Diversidad sexual: Construyendo inclusión en la Policía de Santa Fe",
    tipo: "Publicación",
    formato: "PDF",
    tamano: "1.8 MB",
    descripcion:
      "Material de sensibilización y protocolo de actuación para la diversidad sexual en el ámbito de la seguridad pública.",
  },
  {
    titulo: "La cuestión policial en la Argentina actual. Abordajes desde las ciencias sociales",
    tipo: "Publicación",
    formato: "PDF",
    tamano: "2.1 MB",
    descripcion:
      "Análisis académico sobre la institución policial argentina desde una perspectiva interdisciplinaria.",
  },
  {
    titulo: "Grupos Comparativos de Gestión de Crisis",
    tipo: "Protocolo",
    formato: "PDF",
    tamano: "2.7 MB",
    descripcion:
      "Protocolo operativo para la conformación y actuación de grupos comparativos en situaciones de crisis.",
  },
  {
    titulo: "Fundamentos de análisis forense en audio, video y fotografía",
    tipo: "Manual",
    formato: "PDF",
    tamano: "3.5 MB",
    descripcion:
      "Guía técnica sobre métodos de análisis forense aplicados a evidencia digital de audio, video y fotografía.",
  },
  {
    titulo: "Cómo funcionan las chalecos antibalas",
    tipo: "Manual",
    formato: "PDF",
    tamano: "1.5 MB",
    descripcion:
      "Manual técnico sobre el funcionamiento, clasificación y mantenimiento de chalecos antibalas.",
  },
  {
    titulo: "Capacitación para personal en Curling. Res. 1357/2020",
    tipo: "Resolución",
    formato: "PDF",
    tamano: "800 KB",
    descripcion:
      "Programa de capacitación en curling para personal institucional, aprobado por Resolución 1357/2020.",
  },
  {
    titulo: "Los orígenes de la Policía Científica en la Argentina",
    tipo: "Publicación",
    formato: "PDF",
    tamano: "4.2 MB",
    descripcion:
      "Estudio histórico sobre el origen y desarrollo de la policía científica en la República Argentina.",
  },
  {
    titulo: "Abordaje del delito",
    tipo: "Manual",
    formato: "PDF",
    tamano: "2.3 MB",
    descripcion:
      "Protocolo de abordaje del delito con perspectiva de derechos humanos y buenas prácticas policiales.",
  },
  {
    titulo: "Protocolo de actuación en caso de hallazgo de material sospechoso explosivo o narcotóxico",
    tipo: "Protocolo",
    formato: "PDF",
    tamano: "1.2 MB",
    descripcion:
      "Protocolo operativo para la actuación policial ante hallazgos de material sospechoso de naturaleza explosiva o narcotóxica.",
  },
  {
    titulo: "El delito de feminicidio: Tipificación y abordaje",
    tipo: "Publicación",
    formato: "PDF",
    tamano: "2.8 MB",
    descripcion:
      "Análisis jurídico-penal del feminicidio con orientación al abordaje institucional y protocolos de actuación.",
  },
  {
    titulo: "Introducción a la Criminología",
    tipo: "Manual",
    formato: "PDF",
    tamano: "5.1 MB",
    descripcion:
      "Manual introductorio a la criminología como ciencia, con conceptos fundamentales aplicados a la seguridad pública.",
  },
];

const TIPOS = [...new Set(RECURSOS.map((r) => r.tipo))];

const TIPO_COLORS = {
  Manual: { bg: "#dbeafe", text: "#1e40af" },
  Publicación: { bg: "#dcfce7", text: "#166534" },
  Protocolo: { bg: "#fef3c7", text: "#92400e" },
  Resolución: { bg: "#f3e8ff", text: "#7c3aed" },
};

export default function Biblioteca() {
  const [filtro, setFiltro] = useState("Todos");

  const filtrados =
    filtro === "Todos"
      ? RECURSOS
      : RECURSOS.filter((r) => r.tipo === filtro);

  return (
    <main style={{ paddingTop: "var(--navbar-height)", minHeight: "100vh" }}>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="badge">Secretaría</span>
          <h1 className="hero-title">
            Nuestra <span>Biblioteca</span>
          </h1>
          <p className="hero-description">
            Recursos bibliográficos para la formación en seguridad pública
          </p>
        </div>
      </section>

      <div className="container-max oferta-section" style={{ padding: "2rem" }}>
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/", icon: "home" },
            { label: "Secretaría" },
            { label: "Biblioteca" },
          ]}
        />

        <p
          style={{
            textAlign: "center",
            maxWidth: "40rem",
            margin: "0 auto 2rem",
            color: "var(--slate-600)",
            lineHeight: 1.6,
          }}
        >
          Accedé a la colección de recursos bibliográficos del Instituto de
          Seguridad Pública de Santa Fe. Manuales, publicaciones académicas y
          protocolos operativos para la formación continua del personal.
        </p>

        {/* Filtros por tipo */}
        <div className="oferta-tabs" style={{ marginBottom: "2rem" }}>
          {["Todos", ...TIPOS].map((t) => (
            <button
              key={t}
              type="button"
              className={`oferta-tab${filtro === t ? " oferta-tab--active" : ""}`}
              onClick={() => setFiltro(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid de recursos */}
        <div className="grid-2">
          {filtrados.map((r, i) => {
            const color = TIPO_COLORS[r.tipo] || {
              bg: "#f1f5f9",
              color: "#475569",
            };
            return (
              <div className="card" key={i}>
                <div className="card__meta" style={{ marginBottom: "0.75rem" }}>
                  <span
                    className="chip"
                    style={{
                      backgroundColor: color.bg,
                      color: color.text,
                      fontSize: "0.78rem",
                      fontWeight: 600,
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                      category
                    </span>
                    {r.tipo}
                  </span>
                  <span className="card__chip" data-type="formato">
                    <span className="material-symbols-outlined">description</span>
                    {r.formato} · {r.tamano}
                  </span>
                </div>

                <h3
                  className="card__title"
                  style={{ fontSize: "1rem", lineHeight: 1.4 }}
                >
                  {r.titulo}
                </h3>
                <p className="card__desc">{r.descripcion}</p>

                <div style={{ marginTop: "auto" }}>
                  <a
                    className="btn-cta"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      alignSelf: "flex-start",
                      fontSize: "0.85rem",
                      padding: "0.75rem 1.5rem",
                    }}
                  >
                    <span className="material-symbols-outlined">download</span>
                    Descargar
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {filtrados.length === 0 && (
          <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "3rem", color: "var(--slate-300)" }}
            >
              search_off
            </span>
            <p style={{ color: "var(--slate-500)", marginTop: "1rem" }}>
              No hay recursos disponibles para este filtro.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}