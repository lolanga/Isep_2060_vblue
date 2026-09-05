/**
 * pages/Secretaria/Cursos.jsx
 *
 * Vista general de cursos. Permite navegar por Escuela, Tipo y Estado.
 * Muestra cursos Actuales y Próximos; los Finalizados se conservan en el historial.
 * Cada curso es un acordeón con: Nombre, Tipo, Información breve, Período y
 * botón de acceso a Mi ISeP.
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import { cursos, escuelas } from "../../data/institucional";

const MI_ISEP = "https://mi.isepsantafe.edu.ar";

/**
 * Badge de estado del curso (actual, próximo, finalizado).
 * @param {"actual"|"proximo"|"finalizado"} estado
 */
function EstadoBadge({ estado }) {
  const map = {
    actual: "Actual",
    proximo: "Próximo",
    finalizado: "Finalizado",
  };
  return <span className={`curso-estado curso-estado--${estado}`}>{map[estado]}</span>;
}

/** Página de cursos con filtros por escuela, tipo y estado, y acordeón expandible. */
export default function Cursos() {
  const [filtroEscuela, setFiltroEscuela] = useState("todas");
  const [filtroTipo, setFiltroTipo] = useState("todos");
  const [filtroEstado, setFiltroEstado] = useState("todos");
  const [openId, setOpenId] = useState(null);

  // Obtener tipos y escuelas únicos disponibles
  const tipos = [...new Set(cursos.map((c) => c.tipo))].sort();

  const escuelaNombre = (id) => {
    const e = escuelas.find((x) => x.id === id);
    return e ? e.nombre : id;
  };

  const filtrados = cursos.filter((c) => {
    if (filtroEscuela !== "todas" && c.escuela !== filtroEscuela) return false;
    if (filtroTipo !== "todos" && c.tipo !== filtroTipo) return false;
    if (filtroEstado !== "todos" && c.estado !== filtroEstado) return false;
    return true;
  });

  const grupos = [
    { clave: "actual", titulo: "Cursos Actuales" },
    { clave: "proximo", titulo: "Próximos Cursos" },
    { clave: "finalizado", titulo: "Historial (Finalizados)" },
  ];

  return (
    <main className="cursos-main">
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="badge">Formación</span>
          <h1 className="hero-title">
            Cursos <span>Generales</span>
          </h1>
          <p className="hero-description">
            Consultá todos los cursos del ISeP por escuela, tipo y estado
          </p>
        </div>
      </section>

      <div className="container-max oferta-section">
        {/* Filtros */}
        <div className="cursos-filters">
          <div className="cursos-filters__group">
            <label>Escuela</label>
            <select value={filtroEscuela} onChange={(e) => setFiltroEscuela(e.target.value)}>
              <option value="todas">Todas</option>
              {escuelas.map((e) => (
                <option key={e.id} value={e.id}>{e.nombre}</option>
              ))}
            </select>
          </div>

          <div className="cursos-filters__group">
            <label>Tipo</label>
            <select value={filtroTipo} onChange={(e) => setFiltroTipo(e.target.value)}>
              <option value="todos">Todos</option>
              {tipos.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="cursos-filters__group">
            <label>Estado</label>
            <select value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)}>
              <option value="todos">Todos</option>
              <option value="actual">Actuales</option>
              <option value="proximo">Próximos</option>
              <option value="finalizado">Finalizados</option>
            </select>
          </div>
        </div>

        {grupos.map((grupo) => {
          const items = filtrados.filter((c) => c.estado === grupo.clave);
          if (items.length === 0) return null;
          return (
            <div className="curso-group" key={grupo.clave}>
              <h2 className="curso-group__title">
                <span className="material-symbols-outlined">school</span>
                {grupo.titulo}
              </h2>

              <div className="cursos-accordion">
                {items.map((curso) => {
                  const isOpen = openId === curso.id;
                  return (
                    <div className={`curso-acc${isOpen ? " curso-acc--open" : ""}`} key={curso.id}>
                      <button
                        type="button"
                        className="curso-acc__header"
                        onClick={() => setOpenId(isOpen ? null : curso.id)}
                        aria-expanded={isOpen}
                      >
                        <div className="curso-acc__info">
                          <span className="curso-acc__nombre">{curso.nombre}</span>
                          <div className="curso-acc__badges">
                            <EstadoBadge estado={curso.estado} />
                            <span className="curso-estado curso-estado--proximo cursos-tipo-badge">
                              {curso.tipo}
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined curso-acc__chevron">expand_more</span>
                      </button>

                      <div className="curso-acc__body">
                        <div className="curso-acc__content">
                          <p className="cursos-info-text">{curso.informacion}</p>
                          <p className="curso-acc__periodo">
                            <span className="material-symbols-outlined">calendar_today</span>
                            {curso.periodo}
                          </p>
                          <p className="cursos-escuela-text">
                            Escuela: {escuelaNombre(curso.escuela)}
                          </p>
                          <a className="btn-cta" href={MI_ISEP} target="_blank" rel="noreferrer">
                            Acceso a Mi ISeP
                            <span className="material-symbols-outlined">arrow_forward</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {filtrados.length === 0 && (
          <p className="cursos-empty">
            No hay cursos que coincidan con los filtros seleccionados.
          </p>
        )}

        <div className="cursos-footer">
          <Link to="/institucional/oferta-educativa" className="read-more cursos-footer-link">
            Volver a la oferta académica
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
