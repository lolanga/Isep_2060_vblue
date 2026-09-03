// Escuelas (data-driven simple)
import escudoEP from "../assets/escudo_EP.png";
import escudoES from "../assets/escudo_ES.png";
import escudoEE from "../assets/escudo_EE.png";
import escudoEI from "../assets/escudo_EI.png";

const schools = [
  { title: "Escuela de Policía", desc: "Reclutamiento inicial y Formación profesional para el personal en actividad.", escudo: escudoEP },
  { title: "Escuela Superior", desc: "Formación de oficiales superiores.", escudo: escudoES },
  { title: "Escuela de Especialidades", desc: "Entrenamiento técnico y académico para el agrupamiento Ejecución.", escudo: escudoEE },
  { title: "Escuela de Investigaciones", desc: "Entrenamiento técnico y académico para el agrupamiento Ejecución.", escudo: escudoEI },
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
                <img src={s.escudo} alt={`Escudo ${s.title}`} className="school-icon__img" />
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