import Placeholder from "../../components/Placeholder";

const FEATURES = [
  "Certificados y títulos otorgados",
  "Requisitos para la emisión de títulos",
  "Historial de títulos emitidos por cohorte",
  "Trámites de duplicate de título",
];

export default function Titulos() {
  return (
    <Placeholder
      badge="Secretaría"
      title="Nuestros"
      highlight="Títulos"
      description="Títulos y certificaciones que ofrecemos a nuestros estudiantes al completar sus estudios"
      features={FEATURES}
    />
  );
}
