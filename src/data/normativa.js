/**
 * data/normativa.js
 * Datos compartidos de resoluciones/normativa (usado por Resoluciones.jsx y buscador.js)
 *
 * Fuente: https://www.isepsantafe.edu.ar/index.php/institucional/resoluciones
 * La página oficial carga el listado desde el sistema interno de expedientes:
 * https://wwwa.isepsantafe.net.ar/expedientes/resoluciones/obtieneResolucionesPublicas
 */

export const RESOLUCIONES_OFICIALES_URL =
  "https://www.isepsantafe.edu.ar/index.php/institucional/resoluciones";

const BASE_PDF = "https://wwwa.isepsantafe.net.ar/resoluciones/";

export const resoluciones = [
  {
    id: 1,
    titulo: "Resolución DG - 578 - 2024",
    tipo: "Resolución",
    anio: "2024",
    fecha: "2024",
    archivo: `${BASE_PDF}Resolucion%20DG%20-%20578%20-%202024.pdf`,
    tamaño: "3,14 MB",
  },
  {
    id: 2,
    titulo: "Resolución DG - 579 - 2024",
    tipo: "Resolución",
    anio: "2024",
    fecha: "2024",
    archivo: `${BASE_PDF}Resolucion%20DG%20-%20579%20-%202024.pdf`,
    tamaño: "3,19 MB",
  },
  {
    id: 3,
    titulo: "Resolución DG - 937-2025",
    tipo: "Resolución",
    anio: "2025",
    fecha: "2025",
    archivo: `${BASE_PDF}Resolucion%20DG%20-%20937-2025.pdf`,
    tamaño: "0,26 MB",
  },
  {
    id: 4,
    titulo: "Resolución DG - 001-26",
    tipo: "Resolución",
    anio: "2026",
    fecha: "2026",
    archivo: `${BASE_PDF}Resolucion%20DG%20-%20001-26.pdf`,
    tamaño: "1,90 MB",
  },
  {
    id: 5,
    titulo: "Resolución DG - 014-2026",
    tipo: "Resolución",
    anio: "2026",
    fecha: "2026",
    archivo: `${BASE_PDF}Resolucion%20DG%20-%20014-2026.pdf`,
    tamaño: "0,28 MB",
  },
];
