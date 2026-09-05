/**
 * pages/Escuelas/EducacionDistancia.jsx
 * Educación a Distancia — usa la plantilla común EscuelaTemplate
 */

import EscuelaTemplate from "../../components/EscuelaTemplate";
import SEO from "../../components/SEO";

export default function EducacionDistancia() {
  return (
    <>
      <SEO title="Educación a Distancia" description="Educación a Distancia del Instituto de Seguridad Pública de Santa Fe" />
      <EscuelaTemplate escuelaId="ead" />
    </>
  );
}
