/**
 * components/SearchBox.jsx
 *
 * Buscador global con resultados agrupados por tipo.
 * Soporta navegación por teclado (flechas, Enter, Escape).
 */

import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { buscarAgrupado } from "../data/buscador";

const ORDEN_GRUPOS = ["Escuela", "Carrera", "Curso", "Convocatoria", "Noticia", "Normativa", "Página"];

const GRUPO_CONFIG = {
  Escuela:      { icon: "school",          color: "#0a7c61" },
  Carrera:      { icon: "menu_book",       color: "#175ea8" },
  Curso:        { icon: "school",          color: "#175ea8" },
  Convocatoria: { icon: "description",     color: "#b45309" },
  Noticia:      { icon: "newspaper",       color: "#7c3aed" },
  Normativa:    { icon: "gavel",           color: "#00254d" },
  Página:       { icon: "article",         color: "#475569" },
};

export default function SearchBox({ onClose }) {
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(-1);
  const inputRef = useRef(null);
  const boxRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Resultados aplanados para navegación por teclado
  const flatResults = useMemo(() => {
    const q = (query || "").trim();
    if (!q) return [];
    const grupos = buscarAgrupado(q, 3);
    const flat = [];
    ORDEN_GRUPOS.forEach((tipo) => {
      if (grupos[tipo]) {
        grupos[tipo].forEach((r) => flat.push(r));
      }
    });
    return flat;
  }, [query]);

  // Grupos para render
  const grupos = useMemo(() => {
    const q = (query || "").trim();
    if (!q) return {};
    return buscarAgrupado(q, 3);
  }, [query]);

  const hayResultados = flatResults.length > 0;
  const hayQuery = query.trim().length > 0;

  useEffect(() => {
    const handler = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        onClose?.();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  const go = (ruta) => {
    navigate(ruta);
    setQuery("");
    onClose?.();
  };

  const handleKey = (e) => {
    if (e.key === "Escape") {
      onClose?.();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, flatResults.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIdx >= 0 && flatResults[activeIdx]) {
        go(flatResults[activeIdx].ruta);
      } else if (flatResults.length > 0) {
        go(flatResults[0].ruta);
      }
    }
  };

  const getGrupoConfig = (tipo) => GRUPO_CONFIG[tipo] || GRUPO_CONFIG["Página"];

  return (
    <div className="search-box" ref={boxRef}>
      <div className="search-input-wrap">
        <span className="material-symbols-outlined search-icon">search</span>
        <input
          ref={inputRef}
          type="text"
          className="search-input"
          placeholder="Buscar escuelas, carreras, noticias, normativa..."
          value={query}
          onChange={(e) => { setQuery(e.target.value); setActiveIdx(-1); }}
          onKeyDown={handleKey}
          aria-label="Buscar"
        />
        {query && (
          <button
            type="button"
            className="search-clear"
            onClick={() => { setQuery(""); setActiveIdx(-1); }}
            aria-label="Limpiar búsqueda"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        )}
        <button
          type="button"
          className="search-close-btn"
          onClick={onClose}
          aria-label="Cerrar buscador"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
      </div>

      {hayQuery && hayResultados && (
        <div className="search-results search-results--grouped">
          {ORDEN_GRUPOS.map((tipo) => {
            const items = grupos[tipo];
            if (!items || items.length === 0) return null;
            const cfg = getGrupoConfig(tipo);

            return (
              <div key={tipo} className="search-group">
                <div className="search-group__header">
                  <span className="material-symbols-outlined" style={{ fontSize: "0.85rem", color: cfg.color }}>
                    {cfg.icon}
                  </span>
                  <span className="search-group__label" style={{ color: cfg.color }}>
                    {tipo}{items.length > 1 ? "s" : ""}
                  </span>
                </div>
                {items.map((r) => {
                  const idx = flatResults.indexOf(r);
                  return (
                    <button
                      key={r.id}
                      type="button"
                      className={`search-result${idx === activeIdx ? " search-result--active" : ""}`}
                      onClick={() => go(r.ruta)}
                      onMouseEnter={() => setActiveIdx(idx)}
                    >
                      <div className="search-result__info">
                        <span className="search-result__title">{r.title}</span>
                        <span className="search-result__sub">{r.subtitle}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}

      {hayQuery && !hayResultados && (
        <div className="search-results search-results--empty">
          <span className="material-symbols-outlined" style={{ fontSize: "2rem", color: "#cbd5e1", display: "block", marginBottom: "0.5rem" }}>
            search_off
          </span>
          <p>No se encontraron resultados para "<strong>{query}</strong>"</p>
          <p style={{ fontSize: "0.75rem", color: "#94a3b8", marginTop: "0.25rem" }}>
            Intentá con otros términos: escuelas, carreras, noticias, normativa...
          </p>
        </div>
      )}

      {hayQuery && hayResultados && (
        <div style={{
          padding: "0.5rem 1rem",
          borderTop: "1px solid #eef2f7",
          fontSize: "0.7rem",
          color: "#94a3b8",
          display: "flex",
          justifyContent: "space-between",
        }}>
          <span>{flatResults.length} resultado{flatResults.length !== 1 ? "s" : ""}</span>
          <span>↑↓ navegar · Enter seleccionar · Esc cerrar</span>
        </div>
      )}
    </div>
  );
}
