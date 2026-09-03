import Placeholder from "../../components/Placeholder";

const FEATURES = [
  "Director General del ISeP",
  "Vicerrector de Formación",
  "Directores de cada Escuela",
  "Cargos y contactos oficiales",
];

export default function Autoridades() {
  return (
    <Placeholder
      badge="Institucional"
      title="Nuestras"
      highlight="Autoridades"
      description="Los responsables de la dirección que guían nuestra labor educativa"
      features={FEATURES}
    />
  );
}
