/**
 * components/Tramites.jsx
 *
 * Sección "Trámites y Sistemas" — Accesos a aplicaciones institucionales
 * con información detallada de cada sistema.
 */

import { MI_ISEP_URL, GESTION_URL, CADETES_URL, WEBMAIL_URL } from "../data/config";

const tramites = [
  {
    name: "Mi ISeP",
    icon: "laptop_mac",
    url: MI_ISEP_URL,
    paraQuien: "Docentes, personal policial cursante (carreras/cursos), postulantes inscriptos",
    queHace: "Acceso a aulas virtuales, material de cursado, notas, asistencia",
  },
  {
    name: "SIGEDI",
    icon: "folder_open",
    url: GESTION_URL,
    paraQuien: "Personal interno del ISeP únicamente",
    queHace: "Sistema de gestión de expedientes internos",
  },
  {
    name: "Gestión Cadetes",
    icon: "badge",
    url: CADETES_URL,
    paraQuien: "Cadetes de 1° y 2° año",
    queHace: "Control y notificaciones generales del cursado",
  },
  {
    name: "Webmail",
    icon: "mail",
    url: WEBMAIL_URL,
    paraQuien: "Todo el personal del ISeP",
    queHace: "Correo electrónico institucional",
  },
];

/** Sección de trámites y sistemas institucionales. */
export default function Tramites() {
  return (
    <section className="tramites-section">
      <div className="tramites-inner">
        <div className="tramites-header">
          <span className="section-subtitle">Accesos</span>
          <h2 className="tramites-title">Trámites y Sistemas</h2>
          <p className="tramites-subtitle">
            Plataformas digitales del ISeP para cada comunidad
          </p>
        </div>

        <div className="tramites-grid">
          {tramites.map((t) => (
            <div key={t.name} className="tramites-card inst-card">
              <div className="tramites-card__icon-wrap">
                <span className="material-symbols-outlined tramites-card__icon">
                  {t.icon}
                </span>
              </div>
              <h3 className="tramites-card__name">{t.name}</h3>
              <div className="tramites-card__detail">
                <span className="tramites-card__label">Para quién:</span>
                <span className="tramites-card__value">{t.paraQuien}</span>
              </div>
              <div className="tramites-card__detail">
                <span className="tramites-card__label">Qué hace:</span>
                <span className="tramites-card__value">{t.queHace}</span>
              </div>
              <a
                href={t.url}
                target="_blank"
                rel="noreferrer"
                className="tramites-card__btn"
              >
                Acceder
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
