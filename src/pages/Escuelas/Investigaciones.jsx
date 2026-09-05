/**
 * pages/Escuelas/Investigaciones.jsx
 * Escuela de Investigaciones — usa la plantilla común EscuelaTemplate
 */

import EscuelaTemplate from "../../components/EscuelaTemplate";
import SEO from "../../components/SEO";

export default function Investigaciones() {
  return (
    <>
      <SEO title="Escuela de Investigaciones" description="Escuela de Investigaciones del Instituto de Seguridad Pública de Santa Fe" />
      <EscuelaTemplate escuelaId="investigaciones" />
    </>
  );
}
