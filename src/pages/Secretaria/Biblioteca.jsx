import Placeholder from "../../components/Placeholder";

const FEATURES = [
  "Catálogo de publicaciones institucionales",
  "Manuales y guías de estudio",
  "Repositorio digital de tesis",
  "Acceso a bases de datos jurídicas",
];

export default function Biblioteca() {
  return (
    <Placeholder
      badge="Secretaría"
      title="Nuestra"
      highlight="Biblioteca"
      description="Recursos y servicios disponibles para apoyar el aprendizaje y la investigación"
      features={FEATURES}
    />
  );
}
