/**
 * pages/Escuelas/Especialidades.jsx
 * Escuela de Especialidades — usa la plantilla común EscuelaTemplate
 */

import EscuelaTemplate from "../../components/EscuelaTemplate";
import SEO from "../../components/SEO";

export default function Especialidades() {
  return (
    <>
      <SEO title="Escuela de Especialidades en Seguridad" description="Escuela de Especialidades del Instituto de Seguridad Pública de Santa Fe" />
      <EscuelaTemplate escuelaId="especialidades" />
    </>
  );
}
