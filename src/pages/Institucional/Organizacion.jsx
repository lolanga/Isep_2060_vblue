import Placeholder from "../../components/Placeholder";
import SEO from "../../components/SEO";

const FEATURES = [
  "Organigrama institucional interactivo",
  "Dirección General y areas dependientes",
  "Vicerrectorados y secretarías",
  "Relaciones interinstitucionales",
];

export default function Organizacion() {
  return (
    <>
      <SEO title="Organización" description="Organización del Instituto de Seguridad Pública de Santa Fe" />
      <Placeholder
        badge="Institucional"
        title="Nuestra"
        highlight="Organización"
        description="Estructura organizativa del Instituto de Seguridad Pública"
        features={FEATURES}
      />
    </>
  );
}
