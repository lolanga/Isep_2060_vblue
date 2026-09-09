/**
 * components/Audiencia.jsx
 *
 * Sección "¿Qué estás buscando?" — separa el Home por audiencia:
 * Quiero ingresar · Soy personal · Ciudadano.
 * Se ubica inmediatamente después del Hero.
 */

import { Link } from "react-router-dom";
import {
  MI_ISEP_URL,
  GESTION_URL,
  CADETES_URL,
  WEBMAIL_URL,
} from "../data/config";

const audiencias = [
  {
    key: "ingresar",
    titulo: "Quiero ingresar",
    descripcion: "¿Querés ser parte de la Policía de Santa Fe como Cadete?",
    icon: "login",
    className: "audiencia-card--primary",
    links: [
      { label: "Pre-Inscripción Online", icon: "how_to_reg", to: "/ingreso/convocatorias" },
      { label: "Requisitos de ingreso", icon: "checklist", to: "/ingreso/requisitos" },
      { label: "Cronograma y proceso", icon: "event_note", to: "/ingreso" },
      { label: "Preguntas frecuentes", icon: "help", to: "/ingreso/faq" },
    ],
    cta: { label: "Empezar mi ingreso", to: "/ingreso", external: false },
  },
  {
    key: "personal",
    titulo: "Soy personal",
    descripcion: "Accedé a los sistemas y trámites para el personal del ISeP.",
    icon: "badge",
    className: "audiencia-card--secondary",
    links: [
      { label: "Mi ISeP", icon: "laptop_mac", to: MI_ISEP_URL, external: true },
      { label: "SIGEDI (solo personal ISeP)", icon: "folder_open", to: GESTION_URL, external: true },
      { label: "Gestión Cadetes", icon: "military_tech", to: CADETES_URL, external: true },
      { label: "WebMail (solo personal ISeP)", icon: "mail", to: WEBMAIL_URL, external: true },
    ],
    cta: { label: "Acceder a Mi ISeP", to: MI_ISEP_URL, external: true },
  },
  {
    key: "ciudadano",
    titulo: "Ciudadano",
    descripcion: "Información institucional, formación y actualidad del ISeP.",
    icon: "groups",
    className: "audiencia-card--tertiary",
    links: [
      { label: "Últimas noticias", icon: "newspaper", to: "/noticias" },
      { label: "Oferta educativa", icon: "school", to: "/institucional/oferta-educativa" },
      { label: "Biblioteca virtual", icon: "library_books", to: "/secretaria/biblioteca" },
      { label: "Galería de fotos", icon: "photo_library", to: "/institucional/galeria" },
    ],
    cta: { label: "Conocer el instituto", to: "/institucional/el-isep", external: false },
  },
];

/** Sección del Home que orienta por audiencia. */
export default function Audiencia() {
  return (
    <section className="audiencia-section" id="por-audiencia">
      <div className="audiencia-inner">
        <div className="audiencia-header">
          <span className="section-subtitle">¿Qué estás buscando?</span>
          <h2 className="audiencia-title">Elegí tu camino</h2>
          <p className="audiencia-subtitle">
            Cada visitante tiene un destino distinto en el ISeP. Elegí el tuyo.
          </p>
        </div>

        <div className="audiencia-grid">
          {audiencias.map((a) => (
            <div key={a.key} className={`audiencia-card inst-card ${a.className}`}>
              <div className="audiencia-card__head">
                <div className="audiencia-card__icon-wrap">
                  <span className="material-symbols-outlined audiencia-card__icon">
                    {a.icon}
                  </span>
                </div>
                <h3 className="audiencia-card__title">{a.titulo}</h3>
              </div>
              <p className="audiencia-card__desc">{a.descripcion}</p>

              <ul className="audiencia-card__links">
                {a.links.map((l) =>
                  l.external ? (
                    <li key={l.label}>
                      <a href={l.to} target="_blank" rel="noreferrer">
                        <span className="material-symbols-outlined audiencia-link-icon">
                          {l.icon}
                        </span>
                        {l.label}
                        <span className="material-symbols-outlined audiencia-link-ext">
                          open_in_new
                        </span>
                      </a>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <Link to={l.to}>
                        <span className="material-symbols-outlined audiencia-link-icon">
                          {l.icon}
                        </span>
                        {l.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>

              {a.cta.external ? (
                <a
                  href={a.cta.to}
                  target="_blank"
                  rel="noreferrer"
                  className="audiencia-card__cta"
                >
                  {a.cta.label}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              ) : (
                <Link to={a.cta.to} className="audiencia-card__cta">
                  {a.cta.label}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}