// Escuelas (data-driven simple)
const schools = [
  { title: "Escuela de Policía", desc: "Reclutamiento inicial y Formación profesional para el personal en actividad." },
  { title: "Escuela Superior", desc: "Formación de oficiales superiores." },
  { title: "Escuela de Especialidades", desc: "Entrenamiento técnico y académico para el agrupamiento Ejecución." },
  { title: "Escuela de Investigaciones", desc: "Entrenamiento técnico y académico para el agrupamiento Ejecución." },
];

export default function Schools() {
  return (
    <section className="schools-section">
      <div className="container-max">

        <div className="text-center">
          <h2 className="section-title">NUESTRAS ESCUELAS</h2>
        </div>

        <div className="schools-grid">
          {schools.map((s, i) => (
            <div className="school-card" key={i}>
              <div className="school-icon">
                <span className="material-symbols-outlined">school</span>
              </div>

              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}