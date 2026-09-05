/**
 * pages/Ingreso/Proceso.jsx
 * Proceso de ingreso — Ingreso
 */

export default function Proceso() {
  const pasos = [
    { titulo: "Registro en Mi ISeP", texto: "Creá tu cuenta en la plataforma Mi ISeP para poder iniciar la inscripción." },
    { titulo: "Completar la inscripción", texto: "Elegí la convocatoria vigente y completá el formulario con tus datos." },
    { titulo: "Adjuntar documentación", texto: "Subí la documentación requerida (DNI, estudios, antecedentes, etc.)." },
    { titulo: "Evaluaciones", texto: "Participá de las evaluaciones médicas, psicofísicas y de aptitud." },
    { titulo: "Confirmación del ingreso", texto: "Recibí la confirmación formal y la propuesta de incorporación." },
  ];

  return (
    <main className="page-main">
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

      <div className="container-max oferta-section proceso-section">
        <div className="grid-2">
          {pasos.map((paso, i) => (
            <div className="card" key={i}>
              <span
                className="card__chip proceso-chip"
                data-type="paso"
              >
                Paso {i + 1}
              </span>
              <h3 className="card__title proceso-card-title">{paso.titulo}</h3>
              <p className="card__desc">{paso.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
