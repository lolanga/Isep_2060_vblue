/**
 * Apps.jsx — Aplicaciones institucionales para el personal
 * Accesos rápidos: Mi ISeP, SIGEDI, Gestión Cadetes y Webmail
 */

import escudoIsep from "../assets/escudo_ISeP.png";

const WebmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const CadetesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const apps = [
  {
    name: "Mi ISeP",
    description: "Trámites y consultas personales",
    url: "https://mi.isepsantafe.edu.ar/",
    external: true,
    img: escudoIsep,
  },
  {
    name: "SIGEDI",
    description: "Sistema de Gestión Educativa",
    url: "https://gestion.isepsantafe.edu.ar",
    external: true,
    img: escudoIsep,
  },
  {
    name: "Gestión Cadetes",
    description: "Seguimiento académico de cadetes",
    url: "https://cadetes.isepsantafe.edu.ar",
    external: true,
    svg: true,
    SvgIcon: CadetesIcon,
  },
  {
    name: "Webmail",
    description: "Correo institucional",
    url: "https://webmail.isepsantafe.net.ar",
    external: true,
    svg: true,
    SvgIcon: WebmailIcon,
  },
];

export default function Apps() {
  return (
    <section className="apps-section">
      <div className="container-max">
        <div className="apps-header">
          <h2 className="apps-title">Aplicaciones Institucionales</h2>
          <p className="apps-subtitle">
            Accesos para el personal que trabaja en el ISeP
          </p>
        </div>

        <div className="apps-grid">
          {apps.map((app) => (
            <a
              key={app.name}
              className="app-card"
              href={app.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="app-icon">
                {app.img ? (
                  <img src={app.img} alt={app.name} className="app-icon__img" />
                ) : app.svg ? (
                  <app.SvgIcon />
                ) : (
                  <span className="material-symbols-outlined">{app.icon}</span>
                )}
              </div>
              <h3 className="app-name">{app.name}</h3>
              <p className="app-desc">{app.description}</p>
              <span className="app-link">
                Acceder
                <span className="material-symbols-outlined">arrow_forward</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
