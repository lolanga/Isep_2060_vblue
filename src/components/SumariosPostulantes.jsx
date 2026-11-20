/**
 * SumariosPostulantes.jsx
 *
 * Reproduce los dos bloques <details>/<summary> de "Acceso Postulantes"
 * del sitio oficial dentro del landing /ingreso. Mantiene la semántica de
 * acordeón y usa los mismos componentes visuales que el resto del sitio
 * (inst-card, icon-box degradado, ingreso-badge, read-more, alert-info,
 * alert-warning y check-list).
 */

import { Link } from "react-router-dom";
import { convocatorias } from "../data/institucional";
import { resumenesPostulantes } from "../data/postulantes";
import { MI_ISEP_URL } from "../data/config";

const CONTACTO_EMAIL = "prensaydifusion@isepsantafe.edu.ar";

/** Ícono del encabezado según el proceso (mismo patrón que las cards de Ingreso). */
const ICONO_PROCESO = { 1: "shield", 2: "travel_explore" };

/** Enlaces de utilidad dentro de un summary desplegado. */
function Enlaces({ enlaces }) {
  if (!enlaces?.length) return null;
  return (
    <div className="postulante-enlaces">
      {enlaces.map((enlace) => (
        <a
          key={enlace.href + enlace.label}
          href={enlace.label === "Ingresar a MI ISeP" ? MI_ISEP_URL : enlace.href}
          target="_blank"
          rel="noreferrer"
          className="read-more postulante-enlace"
        >
          <span className="material-symbols-outlined">description</span>
          <span>{enlace.label}</span>
        </a>
      ))}
    </div>
  );
}

/** Contenido completo de un summary (actualización + secciones). */
function ContenidoSummary({ contenido }) {
  if (!contenido) return null;

  return (
    <div className="postulante-detail__content">
      {contenido.actualizacion && (
        <div className="alert-info postulante-novedad">
          <span className="material-symbols-outlined alert-info__icon">
            campaign
          </span>
          <div className="postulante-novedad__body">
            <span className="postulante-novedad__etiqueta">
              {contenido.actualizacion.etiqueta}
            </span>
            <h4 className="conv-card-heading conv-card-heading--sm postulante-novedad__titulo">
              {contenido.actualizacion.titulo}
            </h4>
            <p className="conv-card-text">{contenido.actualizacion.texto}</p>
            <Enlaces enlaces={contenido.actualizacion.enlaces} />
          </div>
        </div>
      )}

      {contenido.secciones.map((seccion) => (
        <section key={seccion.titulo} className="postulante-seccion">
          <h5 className="conv-card-heading conv-card-heading--sm postulante-seccion__titulo">
            {seccion.titulo}
          </h5>
          {seccion.parrafos?.map((parrafo) => (
            <p key={parrafo} className="conv-card-text postulante-seccion__texto">
              {parrafo}
            </p>
          ))}
          {seccion.aviso && (
            <div className="alert-warning postulante-aviso">
              <span className="material-symbols-outlined alert-warning__icon">
                warning
              </span>
              <div>
                <strong className="alert-warning__title">
                  {seccion.aviso.titulo}
                </strong>
                <p className="alert-warning__text">{seccion.aviso.texto}</p>
              </div>
            </div>
          )}
          {seccion.items && (
            <ul className="check-list">
              {seccion.items.map((item) => (
                <li key={item} className="check-item check-item--start">
                  <span className="material-symbols-outlined conv-check-icon">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          <Enlaces enlaces={seccion.enlaces} />
        </section>
      ))}

      <p className="postulante-contacto">
        📧 Consultas:{" "}
        <a href={`mailto:${CONTACTO_EMAIL}`}>{CONTACTO_EMAIL}</a>
      </p>
    </div>
  );
}

/** Dos acordeones con los procesos vigentes del sitio oficial. */
export default function SumariosPostulantes() {
  return (
    <div className="postulantes-sumarios">
      {convocatorias.map((convocatoria, index) => (
        <details
          key={convocatoria.id}
          className="postulante-detail inst-card"
          open={index === 0}
        >
          <summary className="postulante-summary ingreso-conv-card">
            <div className="icon-box ingreso-conv-icon">
              <span className="material-symbols-outlined ingreso-conv-icon__img">
                {ICONO_PROCESO[convocatoria.id] ?? "campaign"}
              </span>
            </div>

            <div className="postulante-summary__main">
              <div className="ingreso-timeline__head">
                <h3 className="conv-card-title">{convocatoria.nombre}</h3>
                <span className="ingreso-badge">{convocatoria.etiqueta}</span>
              </div>
              {convocatoria.titulo && (
                <h4 className="conv-card-subtitle">{convocatoria.titulo}</h4>
              )}
              <p className="conv-card-text conv-card-text--muted">
                {convocatoria.descripcion}
              </p>
              <p className="ingreso-timeline__fecha">
                <span className="material-symbols-outlined ingreso-cal-icon">
                  calendar_month
                </span>
                {convocatoria.fecha}
              </p>
              {convocatoria.vacantes && (
                <p className="ingreso-timeline__fecha">
                  <span className="material-symbols-outlined ingreso-cal-icon">
                    groups
                  </span>
                  {convocatoria.vacantes}
                </p>
              )}
            </div>

            <Link
              to={convocatoria.cta.to}
              className="read-more postulante-summary__cta"
              onClick={(event) => event.stopPropagation()}
            >
              <span className="postulante-summary__cta-label">
                {convocatoria.cta.label}
              </span>
              <span className="material-symbols-outlined postulante-chevron">
                expand_more
              </span>
            </Link>
          </summary>

          <ContenidoSummary contenido={resumenesPostulantes[convocatoria.id]} />
        </details>
      ))}
    </div>
  );
}
