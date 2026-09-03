/**
 * Apps.jsx — Aplicaciones institucionales para el personal
 * Accesos rápidos: Mi ISeP, SIGEDI y Webmail
 */

const apps = [
  {
    name: "Mi ISeP",
    description: "Trámites y consultas personales",
    url: "https://mi.isepsantafe.edu.ar/",
    external: true,
    icon: "account_circle",
  },
  {
    name: "SIGEDI",
    description: "Sistema de Gestión Educativa",
    url: "https://gestion.isepsantafe.edu.ar",
    external: true,
    icon: "table_chart",
  },
  {
    name: "Webmail",
    description: "Correo institucional",
    url: "https://webmail.isepsantafe.net.ar",
    external: true,
    icon: "mail",
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
                <span className="material-symbols-outlined">{app.icon}</span>
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