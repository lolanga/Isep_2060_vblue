/**
 * Navbar.jsx — Barra de navegación global
 * 
 * Features:
 * - Sticky en todas las páginas
 * - Dropdowns desktop para: Institucional, Escuelas, Postulantes, Secretaría
 * - Menú hamburguesa mobile con acordeones
 * - Links con react-router-dom (navegación SPA sin recargar)
 */

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

// ── Datos de menús desplegables ──
const institucional = [
  { label: "Objetivos",         href: "/institucional/objetivos" },
  { label: "Oferta Educativa",  href: "/institucional/oferta-educativa" },
  { label: "Autoridades",       href: "/institucional/autoridades" },
  { label: "Carrera",           href: "/institucional/carrera" },
  { label: "Resoluciones",      href: "/institucional/resoluciones" },
];

const schools = [
  { label: "Escuela de Policia",         href: "/escuelas/policia" },
  { label: "Escuela Superior",           href: "/escuelas/superior" },
  { label: "Escuela de Especialidades",  href: "/escuelas/especialidades" },
  { label: "Escuela de Investigaciones", href: "/escuelas/investigaciones" },
];

const postulantes = [
  { label: "Ingresos",      href: "/postulantes/ingresos" },
  { label: "Inscripciones", href: "/postulantes/inscripciones" },
  { label: "Procesos",      href: "/postulantes/procesos" },
];

const secretaria = [
  { label: "Titulos",    href: "/secretaria/titulos" },
  { label: "Biblioteca", href: "/secretaria/biblioteca" },
  { label: "Cursos",     href: "/secretaria/cursos" },
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
        {items.map((item) => (
          <Link
            key={item.label}
            className="dropdown-item"
            to={item.href}
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
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
        {items.map((item) => (
          <Link
            key={item.label}
            className="mobile-sublink"
            to={item.href}
            onClick={onCloseAll}
          >
            <span className="material-symbols-outlined">chevron_right</span>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * Componente principal: Navbar
 */
export default function Navbar() {
  // ── Estado local ──
  const [menuOpen,    setMenuOpen]    = useState(false);  // Menú mobile abierto/cerrado
  const [scrolled,    setScrolled]    = useState(false);  // Sombra al hacer scroll
  const [openDesktop, setOpenDesktop] = useState(null);   // Qué dropdown está abierto en desktop
  const [openMobile,  setOpenMobile]  = useState(null);   // Qué acordeón está abierto en mobile

  // ── Refs para detectar clicks fuera ──
  const refInstitucional = useRef(null);
  const refSchools       = useRef(null);
  const refPostulantes   = useRef(null);
  const refSecretaria    = useRef(null);

  // ── Hook para detectar ruta activa ──
  const location = useLocation();

  // ── Efecto: sombra al hacer scroll ──
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Efecto: cerrar dropdown desktop al hacer click fuera ──
  useEffect(() => {
    const handleClickOutside = (e) => {
      const refs = [refInstitucional, refSchools, refPostulantes, refSecretaria];
      const clickedInside = refs.some((r) => r.current && r.current.contains(e.target));
      if (!clickedInside) setOpenDesktop(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ── Efecto: cerrar menú mobile al hacer click fuera ──
  useEffect(() => {
    if (!menuOpen) return;
    const handleClose = () => { setMenuOpen(false); setOpenMobile(null); };
    document.addEventListener("click", handleClose);
    return () => document.removeEventListener("click", handleClose);
  }, [menuOpen]);

  // ── Handlers ──
  const toggleDesktop = (key) => setOpenDesktop((prev) => (prev === key ? null : key));
  const toggleMobile  = (key) => setOpenMobile((prev) => (prev === key ? null : key));
  const closeAll      = () => { setMenuOpen(false); setOpenMobile(null); };

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar-content">

        {/* ── LOGO — solo visible en desktop ── */}
        <Link to="/" className="brand brand--desktop">
          ISeP Santa Fe
        </Link>

        {/* ── LINKS DESKTOP ── */}
        <div className="nav-links">
          {/* Inicio */}
          <Link
            className={`nav-link${location.pathname === "/" ? " active" : ""}`}
            to="/"
          >
            Inicio
          </Link>

          {/* Institucional (dropdown) */}
          <DesktopDropdown
            label="Institucional"
            items={institucional}
            isOpen={openDesktop === "institucional"}
            onToggle={() => toggleDesktop("institucional")}
            onClose={() => setOpenDesktop(null)}
            dropRef={refInstitucional}
          />

          {/* Escuelas (dropdown) */}
          <DesktopDropdown
            label="Escuelas"
            items={schools}
            isOpen={openDesktop === "schools"}
            onToggle={() => toggleDesktop("schools")}
            onClose={() => setOpenDesktop(null)}
            dropRef={refSchools}
          />

          {/* Postulantes (dropdown) */}
          <DesktopDropdown
            label="Postulantes"
            items={postulantes}
            isOpen={openDesktop === "postulantes"}
            onToggle={() => toggleDesktop("postulantes")}
            onClose={() => setOpenDesktop(null)}
            dropRef={refPostulantes}
          />

          {/* Secretaría Académica (dropdown) */}
          <DesktopDropdown
            label="Secretaria Academica"
            items={secretaria}
            isOpen={openDesktop === "secretaria"}
            onToggle={() => toggleDesktop("secretaria")}
            onClose={() => setOpenDesktop(null)}
            dropRef={refSecretaria}
          />

          {/* Noticias */}
          <Link
            className={`nav-link${location.pathname === "/noticias" ? " active" : ""}`}
            to="/noticias"
          >
            Noticias
          </Link>
        </div>

        {/* ── ACCIONES (Mi ISeP + hamburguesa) ── */}
        <div className="nav-actions">
          {/* Botón Mi ISeP */}
          <button type="button" className="btn-isep">
            Mi ISeP
          </button>

          {/* Botón hamburguesa — solo mobile */}
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
        {/* Inicio */}
        <Link
          className={`mobile-link${location.pathname === "/" ? " mobile-link--active" : ""}`}
          to="/"
          onClick={closeAll}
        >
          Inicio
        </Link>

        {/* Institucional (acordeón) */}
        <MobileAccordion
          label="Institucional"
          items={institucional}
          isOpen={openMobile === "institucional"}
          onToggle={() => toggleMobile("institucional")}
          onCloseAll={closeAll}
        />

        {/* Escuelas (acordeón) */}
        <MobileAccordion
          label="Escuelas"
          items={schools}
          isOpen={openMobile === "schools"}
          onToggle={() => toggleMobile("schools")}
          onCloseAll={closeAll}
        />

        {/* Postulantes (acordeón) */}
        <MobileAccordion
          label="Postulantes"
          items={postulantes}
          isOpen={openMobile === "postulantes"}
          onToggle={() => toggleMobile("postulantes")}
          onCloseAll={closeAll}
        />

        {/* Secretaría Académica (acordeón) */}
        <MobileAccordion
          label="Secretaria Academica"
          items={secretaria}
          isOpen={openMobile === "secretaria"}
          onToggle={() => toggleMobile("secretaria")}
          onCloseAll={closeAll}
        />

        {/* Noticias */}
        <Link
          className={`mobile-link${location.pathname === "/noticias" ? " mobile-link--active" : ""}`}
          to="/noticias"
          onClick={closeAll}
        >
          Noticias
        </Link>
      </div>
    </nav>
  );
}