/**
 * pages/Escuelas/Superior.jsx
 * Escuela Superior — usa la plantilla común EscuelaTemplate
 */

import EscuelaTemplate from "../../components/EscuelaTemplate";
import SEO from "../../components/SEO";

export default function Superior() {
  return (
    <>
      <SEO title="Escuela Superior de Seguridad Pública" description="Escuela Superior del Instituto de Seguridad Pública de Santa Fe" />
      <EscuelaTemplate escuelaId="superior" />
    </>
  );
}
