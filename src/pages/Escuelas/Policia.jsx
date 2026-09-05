/**
 * pages/Escuelas/Policia.jsx
 * Escuela de Policía — usa la plantilla común EscuelaTemplate
 */

import EscuelaTemplate from "../../components/EscuelaTemplate";
import SEO from "../../components/SEO";

export default function Policia() {
  return (
    <>
      <SEO title="Escuela de Policía" description="Escuela de Policía del Instituto de Seguridad Pública de Santa Fe" />
      <EscuelaTemplate escuelaId="policia" />
    </>
  );
}
