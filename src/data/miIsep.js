/**
 * data/miIsep.js
 *
 * Información y pasos transversales de Mi ISeP.
 * Todas las convocatorias y formaciones del ISeP requieren cuenta en Mi ISeP;
 * esta es la fuente única para no atomizar contenido en las vistas.
 */

import { MI_ISEP_URL } from "./config";

export const miIsepInfo = {
  titulo: "Mi ISeP: punto de partida para todas las inscripciones",
  descripcion:
    "Todas las convocatorias y formaciones del ISeP se gestionan a través de Mi ISeP. Creá tu usuario una sola vez para inscribirte, completar formularios, cargar documentación y hacer seguimiento de tu proceso.",
  url: MI_ISEP_URL,
  cta: "Ir a Mi ISeP",
};

export const pasosMiIsep = [
  {
    icon: "person_add",
    titulo: "Creá tu usuario",
    desc: "Ingresá a Mi ISeP y registrate con un correo electrónico al que tengas acceso frecuente.",
  },
  {
    icon: "mark_email_read",
    titulo: "Confirmá tu cuenta",
    desc: "Revisá tu correo y activá tu cuenta desde el enlace de confirmación que recibas.",
  },
  {
    icon: "login",
    titulo: "Ingresá a la plataforma",
    desc: "Iniciá sesión, aceptá los términos y condiciones y seleccioná la convocatoria o formación que te corresponda.",
  },
  {
    icon: "assignment",
    titulo: "Completá tu proceso",
    desc: "Cargá tus datos y documentación. En “Mis Procesos” vas a encontrar los formularios requeridos y el estado de tu trámite.",
  },
];
