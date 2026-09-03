import Placeholder from "../../components/Placeholder";

const FEATURES = [
  "Organigrama institucional interactivo",
  "Dirección General y areas dependientes",
  "Vicerrectorados y secretarías",
  "Relaciones interinstitucionales",
];

export default function Organizacion() {
  return (
    <Placeholder
      badge="Institucional"
      title="Nuestra"
      highlight="Organización"
      description="Estructura organizativa del Instituto de Seguridad Pública"
      features={FEATURES}
    />
  );
}
