/**
 * Organizacion.jsx — Página de organización institucional (placeholder)
 *
 * Muestra un placeholder indicando que la sección está en construcción.
 */
import Placeholder from "../../components/Placeholder";
import SEO from "../../components/SEO";

const FEATURES = [
  "Organigrama institucional interactivo",
  "Dirección General y areas dependientes",
  "Vicerrectorados y secretarías",
  "Relaciones interinstitucionales",
];

/** Página placeholder de la sección Organización. */
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
