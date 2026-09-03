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
import SearchBox from "./SearchBox";
import escudoIsep from "../assets/escudo_ISeP.png";

// ── Datos de menús desplegables ──
const institucional = [
  { label: "El ISeP",                 href: "/institucional/el-isep",        icon: "info" },
  { label: "Autoridades",             href: "/institucional/autoridades",    icon: "group" },
  { label: "Organización",            href: "/institucional/organizacion",   icon: "account_tree" },
  { label: "Normativa y Resoluciones", href: "/institucional/resoluciones",  icon: "gavel" },
  { label: "Sedes y Contacto",        href: "/institucional/sedes-contacto", icon: "location_on" },
];

const escuelas = [
  { label: "Escuela de Policía",          href: "/escuelas/policia",              icon: "local_police" },
  { label: "Escuela de Especialidades",   href: "/escuelas/especialidades",       icon: "military_tech" },
  { label: "Escuela Superior",            href: "/escuelas/superior",             icon: "workspace_premium" },
  { label: "Escuela de Investigaciones",  href: "/escuelas/investigaciones",      icon: "biotech" },
  { label: "Educación a Distancia",       href: "/escuelas/educacion-a-distancia", icon: "computer" },
];

// Formación: item con submenú (Escuelas) o link directo
const formacion = [
  { label: "Oferta Académica",          href: "/institucional/oferta-educativa", type: "link",  icon: "school" },
  { label: "Escuelas",                  submenu: escuelas,                       type: "submenu", icon: "account_balance" },
  { label: "Títulos y Certificaciones", href: "/secretaria/titulos",             type: "link",  icon: "emoji_events" },
  { label: "Biblioteca Virtual",        href: "/secretaria/biblioteca",          type: "link",  icon: "library_books" },
];

const ingreso = [
  { label: "Convocatorias vigentes",  href: "/ingreso/convocatorias",            icon: "campaign" },
  { label: "Próximas convocatorias",  href: "/ingreso/proximas-convocatorias",   icon: "event_upcoming" },
  { label: "Requisitos",              href: "/ingreso/requisitos",               icon: "checklist" },
  { label: "Proceso de ingreso",      href: "/ingreso/proceso",                  icon: "route" },
  { label: "Preguntas frecuentes",    href: "/ingreso/faq",                      icon: "help" },
];

/**
 * Componente reutilizable: Dropdown desktop
 */
function DesktopDropdown({ label, items, isOpen, onToggle, onClose, dropRef, icon }) {
  return (
    <div className="nav-dropdown" ref={dropRef}>
      <button
        type="button"
        className={`nav-dropdown__trigger${isOpen ? " active" : ""}`}
        onClick={onToggle}
      >
        {icon && <span className="material-symbols-outlined">{icon}</span>}
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
              <span className="dropdown-group__label">
                {item.icon && <span className="material-symbols-outlined" style={{ fontSize: "0.9rem", marginRight: "0.25rem" }}>{item.icon}</span>}
                {item.label}
              </span>
              {item.submenu.map((sub) => (
                <Link
                  key={sub.label}
                  className="dropdown-item dropdown-item--sub"
                  to={sub.href}
                  onClick={onClose}
                >
                  {sub.icon && <span className="material-symbols-outlined" style={{ fontSize: "1rem", marginRight: "0.5rem" }}>{sub.icon}</span>}
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
              {item.icon && <span className="material-symbols-outlined" style={{ fontSize: "1rem", marginRight: "0.5rem" }}>{item.icon}</span>}
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
function MobileAccordion({ label, items, isOpen, onToggle, onCloseAll, icon }) {
  return (
    <div className="mobile-accordion">
      <button
        type="button"
        className={`mobile-link mobile-link--accordion${isOpen ? " mobile-link--accordion-open" : ""}`}
        onClick={onToggle}
      >
        {icon && <span className="material-symbols-outlined" style={{ fontSize: "1.1rem", marginRight: "0.5rem" }}>{icon}</span>}
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
              <span className="mobile-group__label">
                {item.icon && <span className="material-symbols-outlined" style={{ fontSize: "0.9rem", marginRight: "0.25rem" }}>{item.icon}</span>}
                {item.label}
              </span>
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
  const [searchOpen,  setSearchOpen]  = useState(false);

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
          <img src={escudoIsep} alt="" className="brand__escudo" />
          <span className="brand__text">ISeP Santa Fe</span>
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
            icon="account_balance"
          />

          {/* Formación (dropdown con submenú Escuelas) */}
          <DesktopDropdown
            label="Formación"
            items={formacion}
            isOpen={openDesktop === "formacion"}
            onToggle={() => toggleDesktop("formacion")}
            onClose={() => setOpenDesktop(null)}
            dropRef={refFormacion}
            icon="school"
          />

          {/* Ingreso (dropdown) */}
          <DesktopDropdown
            label="Ingreso"
            items={ingreso}
            isOpen={openDesktop === "ingreso"}
            onToggle={() => toggleDesktop("ingreso")}
            onClose={() => setOpenDesktop(null)}
            dropRef={refIngreso}
            icon="login"
          />

          {/* Últimas noticias */}
          <Link
            className={`nav-link${location.pathname === "/noticias" ? " active" : ""}`}
            to="/noticias"
          >
            <span className="material-symbols-outlined">newspaper</span>
            Últimas noticias
          </Link>
        </div>

        {/* ── ACCIONES (Buscador + Mi ISeP + hamburguesa) ── */}
        <div className="nav-actions">
          {searchOpen ? (
            <SearchBox onClose={() => setSearchOpen(false)} />
          ) : (
            <button
              type="button"
              className="btn-search"
              onClick={() => setSearchOpen(true)}
              aria-label="Buscar"
            >
              <span className="material-symbols-outlined">search</span>
            </button>
          )}

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
          icon="account_balance"
        />

        {/* Formación (acordeón) */}
        <MobileAccordion
          label="Formación"
          items={formacion}
          isOpen={openMobile === "formacion"}
          onToggle={() => toggleMobile("formacion")}
          onCloseAll={closeAll}
          icon="school"
        />

        {/* Ingreso (acordeón) */}
        <MobileAccordion
          label="Ingreso"
          items={ingreso}
          isOpen={openMobile === "ingreso"}
          onToggle={() => toggleMobile("ingreso")}
          onCloseAll={closeAll}
          icon="login"
        />

        {/* Últimas noticias */}
        <Link
          className={`mobile-link${location.pathname === "/noticias" ? " mobile-link--active" : ""}`}
          to="/noticias"
          onClick={closeAll}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "1.1rem", marginRight: "0.5rem" }}>newspaper</span>
          Últimas noticias
        </Link>
      </div>
    </nav>
  );
}
