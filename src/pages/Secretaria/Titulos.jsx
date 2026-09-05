/**
 * pages/Secretaria/Titulos.jsx
 *
 * Títulos y Certificaciones del ISeP.
 * Fuente: isepsantafe.edu.ar/index.php/academico/titulos-y-certificaciones
 */

import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";

const PASOS = [
  {
    numero: "1",
    titulo: "Verificar título secundario inscripto",
    descripcion: "Hacé click y verificá que tu título secundario se encuentre inscripto. Solo necesitás tu número de DNI.",
    url: "https://www.santafe.gov.ar/docentes/titulos/#/inicio",
    urlLabel: "Consultar en santafe.gov.ar",
  },
  {
    numero: "2",
    titulo: "Escanear o fotografiar documentos",
    descripcion: "Escanear o fotografiar la partida de nacimiento (solo certificada para quienes nacieron fuera de la provincia) y el DNI de ambos lados. Lo vas a necesitar para el trámite del paso 3.",
  },
  {
    numero: "3",
    titulo: "Completar el formulario online",
    descripcion: "Completar el formulario online. Solo necesitás tu correo electrónico personal.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSf4-HftBzUNWcF-ZlGlwbkePsiJ-JqBKzey7wAbs5ktVYlbyQ/viewform?vc=0&c=0&w=1&flr=0",
    urlLabel: "Abrir formulario online",
  },
];

const TITULOS_DESCARGA = [
  {
    titulo: "Títulos formato nuevo",
    actualizado: "actualizada al 10/11/2023",
    url: "https://drive.google.com/file/d/1qeqbm7J9ROixX_0EMp8f1G069jRk79ua/view?usp=share_link",
  },
  {
    titulo: "Títulos formato anterior",
    actualizado: "actualizada al 26/07/2023",
    url: "https://drive.google.com/file/d/1r8B8lu18_qdWe1W85tWuHiJIr0dIKrAv/view?usp=sharing",
  },
];

const SEDES = [
  { nombre: "D.Z.S — Rosario", direccion: "Leandro N. Alem 2050, S2000FMH Rosario, Santa Fe" },
  { nombre: "DZCN — Recreo", direccion: "RN11, km 482, Recreo, Santa Fe" },
];

/** Página de títulos y certificaciones: consulta de certificados, trámites y descargas. */
export default function Titulos() {
  const [dni, setDni] = useState("");
  const [consultando, setConsultando] = useState(false);
  const [resultado, setResultado] = useState(null);

  const handleConsulta = (e) => {
    e.preventDefault();
    if (!dni.trim()) return;
    setConsultando(true);
    setResultado(null);
    setTimeout(() => {
      setConsultando(false);
      setResultado({ encontrado: false, dni: dni.trim() });
    }, 2000);
  };

  return (
    <main className="page-main">
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="badge">Secretaría Académica</span>
          <h1 className="hero-title">
            Títulos <span>y Certificaciones</span>
          </h1>
          <p className="hero-description">
            Trámites de títulos, certificaciones y consulta de egresados
          </p>
        </div>
      </section>

      <div className="container-max titulos-container">
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Secretaría Académica" },
            { label: "Títulos y Certificaciones" },
          ]}
        />

        {/* ── Consulta de certificados ── */}
        <section className="info-box info-box--mb">
          <h2 className="section-title--sm section-title--primary">
            Consulta de Certificados
          </h2>
          <p className="card-subtitle">
            ISeP Provincia de Santa Fe
          </p>
          <form onSubmit={handleConsulta} className="form-row">
            <input
              type="text"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              placeholder="Ingresá tu número de DNI"
              className="form-input"
            />
            <button
              type="submit"
              disabled={consultando}
              className="btn-submit"
            >
              {consultando ? "Consultando certificados…" : "Consultar"}
            </button>
          </form>
          {resultado && !resultado.encontrado && (
            <div className="result-banner">
              <span className="material-symbols-outlined result-banner__icon">info</span>
              <span className="result-banner__text">
                No se encontró un certificado asociado al DNI <strong>{resultado.dni}</strong>. Verificá que los datos sean correctos o contactate con la sección Títulos y Registros.
              </span>
            </div>
          )}
        </section>

        {/* ── Títulos y Registros ── */}
        <section className="info-box--mb">
          <h2 className="section-title--sm">
            Títulos y Registros
          </h2>
          <p className="page-text page-text--mb">
            La Dirección General con la colaboración del Departamento Tecnología, Desarrollo e Innovación y de la Secretaría Académica,
            en su proceso de innovación constante pone a disposición de sus egresados el <strong>formulario online</strong> para pedidos
            de títulos y certificaciones. En la búsqueda de simplificar y agilizar los procesos hemos creado una manera más simple de
            solicitar la documentación que requieren nuestros egresados.
          </p>

          {/* Pasos */}
          <div className="flex-col">
            {PASOS.map((paso) => (
              <div
                key={paso.numero}
                className="inst-card flex-row titulos-step-row"
              >
                <div className="step-circle step-circle--sm">
                  {paso.numero}
                </div>
                <div className="card-content">
                  <h3 className="step-title">
                    Paso {paso.numero}: {paso.titulo}
                  </h3>
                  <p className="step-desc">
                    {paso.descripcion}
                  </p>
                  {paso.url && (
                    <a
                      href={paso.url}
                      target="_blank"
                      rel="noreferrer"
                      className="verified-link"
                    >
                      {paso.urlLabel}
                      <span className="material-symbols-outlined step-link-icon">open_in_new</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Títulos para retirar ── */}
        <section className="info-box--mb">
          <h2 className="section-title--sm">
            Títulos de Técnico Superior para retirar
          </h2>
          <p className="page-text page-text--mb">
            Se pone a disposición de quienes hayan solicitado la impresión del título de la <strong>"Tecnicatura Superior"</strong>,
            dictada por la Ex – Escuela de Cadetes de Policía (ECP) y el actual Instituto de Seguridad Pública (I.Se.P.),
            la lista de aquellos que se encuentran para retirar en la sección "Títulos y Registros".
          </p>
          <div className="grid-3col">
            {TITULOS_DESCARGA.map((t) => (
              <div
                key={t.titulo}
                className="inst-card"
              >
                <h4 className="titulos-card-title">
                  {t.titulo}
                </h4>
                <p className="titulos-card-updated">
                  {t.actualizado}
                </p>
                <a
                  href={t.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gradient"
                >
                  <span className="material-symbols-outlined icon-sm">download</span>
                  Descargar
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contacto ── */}
        <section className="info-box info-box--mb titulos-section-mb">
          <h2 className="section-title--sm section-title--primary">
            Te ayudamos
          </h2>
          <p className="contact-text">
            Sección Títulos y Registros
          </p>
          <div className="flex-col">
            <div className="flex-row-center">
              <span className="material-symbols-outlined icon-sm">call</span>
              <span className="contact-text">0341-4728526</span>
            </div>
            <div className="flex-row-center">
              <span className="material-symbols-outlined icon-sm">mail</span>
              <span className="contact-text">titulosisep@isepsantafe.edu.ar</span>
            </div>
          </div>
        </section>

        {/* ── Sedes ── */}
        <section>
          <p className="page-text page-text--mb-sm">
            La Dirección General junto a la Secretaría Académica y su área de Títulos y Certificaciones siguen innovando para facilitar gestiones.
            Ahora podés buscar tu título en cualquiera de nuestras sedes:
          </p>
          <div className="grid-3col">
            {SEDES.map((s) => (
              <div
                key={s.nombre}
                className="inst-card flex-row sede-card"
              >
                <span className="material-symbols-outlined sede-icon">location_on</span>
                <div>
                  <p className="sede-name">{s.nombre}</p>
                  <p className="sede-address">{s.direccion}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
