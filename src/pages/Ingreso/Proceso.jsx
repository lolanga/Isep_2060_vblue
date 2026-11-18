/**
 * Proceso.jsx — Página del proceso de ingreso al ISeP
 *
 * Muestra el paso transversal de Mi ISeP y las etapas generales del proceso
 * para todas las convocatorias y formaciones del ISeP.
 */

import SEO from "../../components/SEO";
import Breadcrumb from "../../components/Breadcrumb";
import { BreadcrumbLd } from "../../components/JsonLd";
import GuiaMiIsep from "../../components/GuiaMiIsep";

export default function Proceso() {
  const etapas = [
    { titulo: "Seleccioná tu convocatoria o formación", texto: "Elegí en Mi ISeP la convocatoria o formación que te corresponda y completá los formularios requeridos." },
    { titulo: "Adjuntá documentación", texto: "Cargá la documentación solicitada en la plataforma según el trámite o convocatoria." },
    { titulo: "Superá las instancias de evaluación", texto: "Participá de las instancias y evaluaciones que correspondan a la formación elegida." },
    { titulo: "Seguimiento y confirmación", texto: "Consultá el estado de tu trámite en “Mis Procesos” y seguí las indicaciones hasta la confirmación." },
  ];

  return (
    <main id="main-content" className="page-main">
      <SEO title="Proceso de Ingreso" description="Proceso de ingreso al ISeP Santa Fe" />
      <BreadcrumbLd items={[{ label: "Inicio", to: "/" }, { label: "Ingreso" }, { label: "Proceso de Ingreso" }]} />
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="badge">Ingreso</span>
          <h1 className="hero-title">
            Proceso <span>de Ingreso</span>
          </h1>
          <p className="hero-description">
            Pasos para formar parte del ISeP
          </p>
        </div>
      </section>

      <div className="container-max">
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Ingreso" },
            { label: "Proceso de Ingreso" },
          ]}
        />

        <section className="conv-section mi-isep-section">
          <GuiaMiIsep />
        </section>

        <section className="conv-section">
          <h2 className="section-title">Etapas generales del proceso</h2>
          <p className="section-text mi-isep-guide__intro">
            Una vez creada tu cuenta en Mi ISeP, el proceso continúa según la convocatoria o formación elegida. Estas etapas resumen el recorrido general.
          </p>
          <div className="grid-2 proceso-section">
            {etapas.map((paso, i) => (
              <div className="card" key={paso.titulo}>
                <span
                  className="card__chip proceso-chip"
                  data-type="paso"
                >
                  Etapa {i + 1}
                </span>
                <h3 className="card__title proceso-card-title">{paso.titulo}</h3>
                <p className="card__desc">{paso.texto}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
