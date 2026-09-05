/**
 * pages/Institucional/Galeria.jsx
 *
 * Galería de Fotos del ISeP — Grid de fotos con filtro por categoría y lightbox.
 */

import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import SEO from "../../components/SEO";
import { BreadcrumbLd } from "../../components/JsonLd";

const CATEGORIAS = ["Todas", "Eventos", "Formación", "Instalaciones", "Graduaciones"];

const FOTOS = [
  { id: 1,  caption: "Ceremonia de apertura del ciclo lectivo",       date: "2025-03-10", category: "Eventos",       img: "https://picsum.photos/seed/galeria-1/800/600" },
  { id: 2,  caption: "Clase práctica de tiro en polígono",            date: "2025-04-05", category: "Formación",     img: "https://picsum.photos/seed/galeria-2/800/600" },
  { id: 3,  caption: "Edificio principal de la D.Z.S. Rosario",       date: "2025-04-12", category: "Instalaciones", img: "https://picsum.photos/seed/galeria-3/800/600" },
  { id: 4,  caption: "Graduación de la Escuela de Policía",           date: "2025-05-20", category: "Graduaciones",  img: "https://picsum.photos/seed/galeria-4/800/600" },
  { id: 5,  caption: "Simulacro de emergencia en dependencias",       date: "2025-06-08", category: "Eventos",       img: "https://picsum.photos/seed/galeria-5/800/600" },
  { id: 6,  caption: "Taller de primeros auxilios avanzados",         date: "2025-06-15", category: "Formación",     img: "https://picsum.photos/seed/galeria-6/800/600" },
  { id: 7,  caption: "Sede DZCN Recreo — Campus exterior",           date: "2025-07-01", category: "Instalaciones", img: "https://picsum.photos/seed/galeria-7/800/600" },
  { id: 8,  caption: "Entrega de títulos de Especialización",         date: "2025-07-18", category: "Graduaciones",  img: "https://picsum.photos/seed/galeria-8/800/600" },
  { id: 9,  caption: "Jornada de puertas abiertas",                   date: "2025-08-03", category: "Eventos",       img: "https://picsum.photos/seed/galeria-9/800/600" },
  { id: 10, caption: "Curso de capacitación en tecnología",           date: "2025-08-20", category: "Formación",     img: "https://picsum.photos/seed/galeria-10/800/600" },
  { id: 11, caption: "Auditorio del instituto",                       date: "2025-09-05", category: "Instalaciones", img: "https://picsum.photos/seed/galeria-11/800/600" },
  { id: 12, caption: "Acto de egresados 2025",                        date: "2025-09-15", category: "Graduaciones",  img: "https://picsum.photos/seed/galeria-12/800/600" },
];

const CATEGORY_ICONS = {
  Eventos: "celebration",
  Formación: "school",
  Instalaciones: "domain",
  Graduaciones: "emoji_events",
};

/** Página de Galería de Fotos — grid con filtros y lightbox CSS puro. */
export default function Galeria() {
  const [filtro, setFiltro] = useState("Todas");
  const [lightbox, setLightbox] = useState(null);

  const filtradas = filtro === "Todas"
    ? FOTOS
    : FOTOS.filter((f) => f.category === filtro);

  const formatDate = (dateStr) => {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("es-AR", { day: "2-digit", month: "long", year: "numeric" });
  };

  return (
    <main id="main-content" className="page-main">
      <SEO title="Galería de Fotos" description="Galería de fotos del Instituto de Seguridad Pública de Santa Fe — Eventos, formación, instalaciones y graduaciones." />
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="badge">Institucional</span>
          <h1 className="hero-title">
            <span>Galería</span> de Fotos
          </h1>
          <p className="hero-description">
            Imágenes de eventos, formación, instalaciones y graduaciones del ISeP
          </p>
        </div>
      </section>

      <div className="container-max galeria-content">
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Institucional" },
            { label: "Galería" },
          ]}
        />
        <BreadcrumbLd
          items={[
            { label: "Inicio", to: "/" },
            { label: "Institucional" },
            { label: "Galería" },
          ]}
        />

        {/* ── Filtros ── */}
        <div className="galeria-filtros">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filtro-btn${filtro === cat ? " filtro-btn--active" : ""}`}
              onClick={() => setFiltro(cat)}
            >
              {cat !== "Todas" && (
                <span className="material-symbols-outlined galeria-filtro-icon">
                  {CATEGORY_ICONS[cat]}
                </span>
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* ── Grid de fotos ── */}
        <div className="galeria-grid">
          {filtradas.map((foto) => (
            <button
              key={foto.id}
              type="button"
              className="galeria-card inst-card"
              onClick={() => setLightbox(foto)}
              aria-label={`Ver: ${foto.caption}`}
            >
              <div className="galeria-card__img-wrap">
                <img
                  src={foto.img}
                  alt={foto.caption}
                  loading="lazy"
                  width="800"
                  height="600"
                  className="galeria-card__img"
                />
                <span className="galeria-card__category">
                  <span className="material-symbols-outlined galeria-card__category-icon">
                    {CATEGORY_ICONS[foto.category]}
                  </span>
                  {foto.category}
                </span>
              </div>
              <div className="galeria-card__body">
                <p className="galeria-card__caption">{foto.caption}</p>
                <span className="galeria-card__date">{formatDate(foto.date)}</span>
              </div>
            </button>
          ))}
        </div>

        {filtradas.length === 0 && (
          <div className="empty-state">
            <span className="material-symbols-outlined empty-state__icon">photo_library</span>
            <p>No se encontraron fotos en esta categoría.</p>
          </div>
        )}
      </div>

      {/* ── Lightbox CSS ── */}
      {lightbox && (
        <div
          className="galeria-lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Vista ampliada"
        >
          <button
            type="button"
            className="galeria-lightbox__close"
            onClick={() => setLightbox(null)}
            aria-label="Cerrar"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <img
            src={lightbox.img}
            alt={lightbox.caption}
            className="galeria-lightbox__img"
            width="1200"
            height="900"
          />
          <div className="galeria-lightbox__caption">
            <p className="galeria-lightbox__text">{lightbox.caption}</p>
            <span className="galeria-lightbox__date">{formatDate(lightbox.date)}</span>
          </div>
        </div>
      )}
    </main>
  );
}
