/**
 * SumariosPostulantes.jsx
 *
 * Reproduce los dos bloques <details>/<summary> de "Acceso Postulantes"
 * del sitio oficial dentro del landing /ingreso. Cada summary muestra el
 * encabezado del proceso y, al desplegarse, sus actualizaciones, etapas,
 * documentación y enlaces.
 */

import { Link } from "react-router-dom";
import { convocatorias } from "../data/institucional";
import { resumenesPostulantes } from "../data/postulantes";
import { MI_ISEP_URL } from "../data/config";

const CONTACTO_EMAIL = "prensaydifusion@isepsantafe.edu.ar";

/** Lista de enlaces de utilidad dentro de un summary desplegado. */
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
          className="postulante-enlace"
        >
          <span className="material-symbols-outlined postulante-enlace-icon">
            description
          </span>
          {enlace.label}
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
        <div className="postulante-novedad">
          <span className="postulante-novedad__etiqueta">
            {contenido.actualizacion.etiqueta}
          </span>
          <h4 className="postulante-novedad__titulo">
            {contenido.actualizacion.titulo}
          </h4>
          <p className="postulante-novedad__texto">
            {contenido.actualizacion.texto}
          </p>
          <Enlaces enlaces={contenido.actualizacion.enlaces} />
        </div>
      )}

      {contenido.secciones.map((seccion) => (
        <section key={seccion.titulo} className="postulante-seccion">
          <h5 className="postulante-seccion__titulo">{seccion.titulo}</h5>
          {seccion.parrafos?.map((parrafo) => (
            <p key={parrafo} className="postulante-seccion__texto">
              {parrafo}
            </p>
          ))}
          {seccion.aviso && (
            <div className="postulante-aviso">
              <strong>{seccion.aviso.titulo}</strong>
              <p>{seccion.aviso.texto}</p>
            </div>
          )}
          {seccion.items && (
            <ul className="postulante-lista">
              {seccion.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          <Enlaces enlaces={seccion.enlaces} />
        </section>
      ))}

      <p className="postulante-contacto">
        📧 Consultas: <a href={`mailto:${CONTACTO_EMAIL}`}>{CONTACTO_EMAIL}</a>
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
          className="postulante-detail"
          open={index === 0}
        >
          <summary className="postulante-summary">
            <div className="postulante-summary__main">
              <span className="postulante-summary__badge">
                {convocatoria.etiqueta}
              </span>
              <h3 className="postulante-summary__nombre">{convocatoria.nombre}</h3>
              <p className="postulante-summary__titulo">{convocatoria.titulo}</p>
              <p className="postulante-summary__descripcion">
                {convocatoria.descripcion}
              </p>
              <p className="postulante-summary__fecha">{convocatoria.fecha}</p>
              {convocatoria.vacantes && (
                <p className="postulante-summary__fecha">
                  {convocatoria.vacantes}
                </p>
              )}
            </div>
            <Link
              to={convocatoria.cta.to}
              className="postulante-summary__cta"
              onClick={(event) => event.stopPropagation()}
            >
              {convocatoria.cta.label}
            </Link>
          </summary>

          <ContenidoSummary contenido={resumenesPostulantes[convocatoria.id]} />
        </details>
      ))}
    </div>
  );
}
