/**
 * Navbar.jsx — Barra de navegación global
 * 
 * Features:
 * - Sticky en todas las páginas
 * - Dropdowns desktop: Institucional, Formación (con submenú Escuelas), Ingreso
 * - Menú hamburguesa mobile con acordeones
 * - Links con react-router-dom (navegación SPA sin recargar)
 */

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

// ── Datos de menús desplegables ──
const institucional = [
  { label: "El ISeP",                 href: "/institucional/el-isep" },
  { label: "Autoridades",             href: "/institucional/autoridades" },
  { label: "Organización",            href: "/institucional/organizacion" },
  { label: "Normativa y Resoluciones", href: "/institucional/resoluciones" },
  { label: "Sedes y Contacto",        href: "/institucional/sedes-contacto" },
];

const escuelas = [
  { label: "Escuela de Policía",          href: "/escuelas/policia" },
  { label: "Escuela de Especialidades",   href: "/escuelas/especialidades" },
  { label: "Escuela Superior",            href: "/escuelas/superior" },
  { label: "Escuela de Investigaciones",  href: "/escuelas/investigaciones" },
  { label: "Educación a Distancia",       href: "/escuelas/educacion-a-distancia" },
];

// Formación: item con submenú (Escuelas) o link directo
const formacion = [
  { label: "Oferta Académica",       href: "/institucional/oferta-educativa", type: "link" },
  { label: "Escuelas",               submenu: escuelas,                       type: "submenu" },
  { label: "Títulos y Certificaciones", href: "/secretaria/titulos",          type: "link" },
  { label: "Biblioteca Virtual",     href: "/secretaria/biblioteca",          type: "link" },
];

const ingreso = [
  { label: "Convocatorias vigentes",  href: "/ingreso/convocatorias" },
  { label: "Próximas convocatorias",  href: "/ingreso/proximas-convocatorias" },
  { label: "Requisitos",              href: "/ingreso/requisitos" },
  { label: "Proceso de ingreso",      href: "/ingreso/proceso" },
  { label: "Preguntas frecuentes",    href: "/ingreso/faq" },
];

/**
 * Componente reutilizable: Dropdown desktop
 */
function DesktopDropdown({ label, items, isOpen, onToggle, onClose, dropRef }) {
  return (
    <div className="nav-dropdown" ref={dropRef}>
      <button
        type="button"
        className={`nav-dropdown__trigger${isOpen ? " active" : ""}`}
        onClick={onToggle}
      >
        {label}
        <span className={`dropdown-chevron${isOpen ? " dropdown-chevron--open" : ""}`}>
          <span className="material-symbols-outlined">expand_more</span>
        </span>
      </button>

      {/* Panel desplegable */}
      <div className={`dropdown-panel${isOpen ? " dropdown-panel--open" : ""}`}>
        {items.map((item) =>
          item.type === "submenu" ? (
            <div className="dropdown-group" key={item.label}>
              <span className="dropdown-group__label">{item.label}</span>
              {item.submenu.map((sub) => (
                <Link
                  key={sub.label}
                  className="dropdown-item dropdown-item--sub"
                  to={sub.href}
                  onClick={onClose}
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          ) : (
            <Link
              key={item.label}
              className="dropdown-item"
              to={item.href}
              onClick={onClose}
            >
              {item.label}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

/**
 * Componente reutilizable: Acordeón mobile
 */
function MobileAccordion({ label, items, isOpen, onToggle, onCloseAll }) {
  return (
    <div className="mobile-accordion">
      <button
        type="button"
        className={`mobile-link mobile-link--accordion${isOpen ? " mobile-link--accordion-open" : ""}`}
        onClick={onToggle}
      >
        {label}
        <span className={`dropdown-chevron${isOpen ? " dropdown-chevron--open" : ""}`}>
          <span className="material-symbols-outlined">expand_more</span>
        </span>
      </button>

      {/* Submenu desplegable */}
      <div className={`mobile-submenu${isOpen ? " mobile-submenu--open" : ""}`}>
        {items.map((item) =>
          item.type === "submenu" ? (
            <div key={item.label}>
              <span className="mobile-group__label">{item.label}</span>
              {item.submenu.map((sub) => (
                <Link
                  key={sub.label}
                  className="mobile-sublink"
                  to={sub.href}
                  onClick={onCloseAll}
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                  {sub.label}
                </Link>
              ))}
            </div>
          ) : (
            <Link
              key={item.label}
              className="mobile-sublink"
              to={item.href}
              onClick={onCloseAll}
            >
              <span className="material-symbols-outlined">chevron_right</span>
              {item.label}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

/**
 * Componente principal: Navbar
 */
export default function Navbar() {
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [scrolled,    setScrolled]    = useState(false);
  const [openDesktop, setOpenDesktop] = useState(null);
  const [openMobile,  setOpenMobile]  = useState(null);

  const refInstitucional = useRef(null);
  const refFormacion     = useRef(null);
  const refIngreso       = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const refs = [refInstitucional, refFormacion, refIngreso];
      const clickedInside = refs.some((r) => r.current && r.current.contains(e.target));
      if (!clickedInside) setOpenDesktop(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClose = () => { setMenuOpen(false); setOpenMobile(null); };
    document.addEventListener("click", handleClose);
    return () => document.removeEventListener("click", handleClose);
  }, [menuOpen]);

  const toggleDesktop = (key) => setOpenDesktop((prev) => (prev === key ? null : key));
  const toggleMobile  = (key) => setOpenMobile((prev) => (prev === key ? null : key));
  const closeAll      = () => { setMenuOpen(false); setOpenMobile(null); };

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar-content">

        {/* ── LOGO — siempre visible (desktop y móvil), linkeable al inicio ── */}
        <Link to="/" className="brand brand--desktop" aria-label="ISeP Santa Fe — Inicio">
          ISeP Santa Fe
        </Link>

        {/* ── LINKS DESKTOP ── */}
        <div className="nav-links">
          {/* Institucional (dropdown) */}
          <DesktopDropdown
            label="Institucional"
            items={institucional}
            isOpen={openDesktop === "institucional"}
            onToggle={() => toggleDesktop("institucional")}
            onClose={() => setOpenDesktop(null)}
            dropRef={refInstitucional}
          />

          {/* Formación (dropdown con submenú Escuelas) */}
          <DesktopDropdown
            label="Formación"
            items={formacion}
            isOpen={openDesktop === "formacion"}
            onToggle={() => toggleDesktop("formacion")}
            onClose={() => setOpenDesktop(null)}
            dropRef={refFormacion}
          />

          {/* Ingreso (dropdown) */}
          <DesktopDropdown
            label="Ingreso"
            items={ingreso}
            isOpen={openDesktop === "ingreso"}
            onToggle={() => toggleDesktop("ingreso")}
            onClose={() => setOpenDesktop(null)}
            dropRef={refIngreso}
          />

          {/* Últimas noticias */}
          <Link
            className={`nav-link${location.pathname === "/noticias" ? " active" : ""}`}
            to="/noticias"
          >
            Últimas noticias
          </Link>
        </div>

        {/* ── ACCIONES (Mi ISeP + hamburguesa) ── */}
        <div className="nav-actions">
          <a
            href="https://mi.isepsantafe.edu.ar/"
            className="btn-isep"
            target="_blank"
            rel="noreferrer"
          >
            Mi ISeP
          </a>

          <button
            type="button"
            className={`hamburger${menuOpen ? " hamburger--open" : ""}`}
            onClick={(e) => { e.stopPropagation(); setMenuOpen((prev) => !prev); }}
            aria-label="Abrir menú"
          >
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
          </button>
        </div>

      </div>

      {/* ── MENÚ MOBILE DESPLEGABLE ── */}
      <div
        className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Institucional (acordeón) */}
        <MobileAccordion
          label="Institucional"
          items={institucional}
          isOpen={openMobile === "institucional"}
          onToggle={() => toggleMobile("institucional")}
          onCloseAll={closeAll}
        />

        {/* Formación (acordeón) */}
        <MobileAccordion
          label="Formación"
          items={formacion}
          isOpen={openMobile === "formacion"}
          onToggle={() => toggleMobile("formacion")}
          onCloseAll={closeAll}
        />

        {/* Ingreso (acordeón) */}
        <MobileAccordion
          label="Ingreso"
          items={ingreso}
          isOpen={openMobile === "ingreso"}
          onToggle={() => toggleMobile("ingreso")}
          onCloseAll={closeAll}
        />

        {/* Últimas noticias */}
        <Link
          className={`mobile-link${location.pathname === "/noticias" ? " mobile-link--active" : ""}`}
          to="/noticias"
          onClick={closeAll}
        >
          Últimas noticias
        </Link>
      </div>
    </nav>
  );
}
