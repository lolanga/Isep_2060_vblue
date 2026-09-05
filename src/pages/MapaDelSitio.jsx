/**
 * pages/MapaDelSitio.jsx
 *
 * Mapa del Sitio visual — Árbol de rutas organizado por sección.
 */

import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import SEO from "../components/SEO";
import { BreadcrumbLd } from "../components/JsonLd";

const SECCIONES = [
  {
    titulo: "Inicio",
    icono: "home",
    items: [
      { label: "Página principal", to: "/" },
    ],
  },
  {
    titulo: "Institucional",
    icono: "account_balance",
    items: [
      { label: "El ISeP", to: "/institucional/el-isep" },
      { label: "Autoridades", to: "/institucional/autoridades" },
      { label: "Organización", to: "/institucional/organizacion" },
      { label: "Normativa y Resoluciones", to: "/institucional/resoluciones" },
      { label: "Sedes y Contacto", to: "/institucional/sedes-contacto" },
      { label: "Galería de Fotos", to: "/institucional/galeria" },
    ],
  },
  {
    titulo: "Formación",
    icono: "school",
    items: [
      { label: "Oferta Académica", to: "/institucional/oferta-educativa" },
      { label: "Escuela de Policía", to: "/escuelas/policia" },
      { label: "Escuela de Especialidades", to: "/escuelas/especialidades" },
      { label: "Escuela Superior", to: "/escuelas/superior" },
      { label: "Escuela de Investigaciones", to: "/escuelas/investigaciones" },
      { label: "Educación a Distancia", to: "/escuelas/educacion-a-distancia" },
      { label: "Títulos y Certificaciones", to: "/secretaria/titulos" },
      { label: "Biblioteca Virtual", to: "/secretaria/biblioteca" },
      { label: "Cursos", to: "/secretaria/cursos" },
    ],
  },
  {
    titulo: "Ingreso",
    icono: "login",
    items: [
      { label: "Convocatorias vigentes", to: "/ingreso/convocatorias" },
      { label: "Próximas convocatorias", to: "/ingreso/proximas-convocatorias" },
      { label: "Requisitos", to: "/ingreso/requisitos" },
      { label: "Proceso de ingreso", to: "/ingreso/proceso" },
      { label: "Preguntas frecuentes", to: "/ingreso/faq" },
    ],
  },
  {
    titulo: "Noticias",
    icono: "newspaper",
    items: [
      { label: "Últimas noticias", to: "/noticias" },
    ],
  },
];

/** Página del Mapa del Sitio — visualización de todas las rutas organizadas por sección. */
export default function MapaDelSitio() {
  return (
    <main id="main-content" className="page-main">
      <SEO title="Mapa del Sitio" description="Mapa del sitio del ISeP Santa Fe — Todas las secciones y páginas del sitio web institucional." />
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="badge">Navegación</span>
          <h1 className="hero-title">
            <span>Mapa</span> del Sitio
          </h1>
          <p className="hero-description">
            Explorá todas las secciones del sitio web del ISeP
          </p>
        </div>
      </section>

      <div className="container-max mapa-content">
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Mapa del Sitio" },
          ]}
        />
        <BreadcrumbLd
          items={[
            { label: "Inicio", to: "/" },
            { label: "Mapa del Sitio" },
          ]}
        />

        <div className="mapa-grid">
          {SECCIONES.map((seccion) => (
            <div key={seccion.titulo} className="mapa-section inst-card">
              <div className="mapa-section__header">
                <span className="material-symbols-outlined mapa-section__icon">
                  {seccion.icono}
                </span>
                <h2 className="mapa-section__title">{seccion.titulo}</h2>
              </div>
              <ul className="mapa-list">
                {seccion.items.map((item) => (
                  <li key={item.to} className="mapa-list__item">
                    <Link to={item.to} className="mapa-link">
                      <span className="material-symbols-outlined mapa-link__icon">chevron_right</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
