/**
 * components/SearchBox.jsx
 *
 * Buscador funcional con datos simulados.
 * Muestra resultados dinámicos en un dropdown flotante.
 */

import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { buscar } from "../data/buscador";

const MAX = 8;

export default function SearchBox({ onClose }) {
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(-1);
  const inputRef = useRef(null);
  const boxRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = useMemo(() => {
    const q = (query || "").trim().toLowerCase();
    if (!q) return [];
    return buscar(query, MAX);
  }, [query]);

  const open = results.length > 0;

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
      setActiveIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && activeIdx >= 0 && results[activeIdx]) {
      go(results[activeIdx].ruta);
    }
  };

  const tipoIcon = (tipo) => {
    const map = {
      "Escuela":       "school",
      "Carrera":       "menu_book",
      "Curso":         "school",
      "Convocatoria":  "description",
      "Página":        "article",
    };
    return map[tipo] || "search";
  };

  const catColor = (cat) => {
    const map = {
      "Escuelas":    "#0a7c61",
      "Formación":   "#175ea8",
      "Ingreso":     "#b45309",
      "Institucional":"#00254d",
    };
    return map[cat] || "#475569";
  };

  return (
    <div className="search-box" ref={boxRef}>
      <div className="search-input-wrap">
        <span className="material-symbols-outlined search-icon">search</span>
        <input
          ref={inputRef}
          type="text"
          className="search-input"
          placeholder="Buscar escuelas, carreras, cursos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKey}
          aria-label="Buscar"
        />
        {query && (
          <button
            type="button"
            className="search-clear"
            onClick={() => setQuery("")}
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

      {open && (
        <div className="search-results">
          {results.map((r, i) => (
            <button
              key={r.id}
              type="button"
              className={`search-result${i === activeIdx ? " search-result--active" : ""}`}
              onClick={() => go(r.ruta)}
              onMouseEnter={() => setActiveIdx(i)}
            >
              <span className="material-symbols-outlined search-result__icon" style={{ color: catColor(r.categoria) }}>
                {tipoIcon(r.tipo)}
              </span>
              <div className="search-result__info">
                <span className="search-result__title">{r.title}</span>
                <span className="search-result__sub">{r.subtitle}</span>
              </div>
              <span className="search-result__cat" style={{ color: catColor(r.categoria) }}>
                {r.tipo}
              </span>
            </button>
          ))}
        </div>
      )}

      {!open && query.trim() && (
        <div className="search-results search-results--empty">
          <p>No se encontraron resultados para "{query}"</p>
        </div>
      )}
    </div>
  );
}
