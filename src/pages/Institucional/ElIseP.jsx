import Placeholder from "../../components/Placeholder";

const FEATURES = [
  "Historia y trayectoria del Instituto",
  "Misión, visión y valores institucionales",
  "Cifras clave de la formación policial",
  "Sedes y sedes históricas",
];

export default function ElIseP() {
  return (
    <Placeholder
      badge="Institucional"
      title="El"
      highlight="ISeP"
      description="Conocé nuestra institución, misión y valores"
      features={FEATURES}
    />
  );
}
