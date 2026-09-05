/**
 * data/config.js
 *
 * Datos centralizados del ISeP: teléfonos, emails, URLs, redes sociales.
 * TODA la información de contacto y enlaces institucionales vive aquí.
 *
 * CÓMO MODIFICAR:
 * - Si el teléfono cambia → modificar TELEFONO_ISR
 * - Si cambia el email → modificar EMAIL_CONTACTO
 * - Si cambia la URL de Mi ISeP → modificar MI_ISEP_URL
 * - Si cambia el WhatsApp → modificar WHATSAPP_URL
 *
 * CÓMO USAR:
 *   import { TELEFONO_ISR, EMAIL_CONTACTO } from "../data/config";
 *
 *   <a href={`tel:${TELEFONO_ISR}`}>{TELEFONO_ISR}</a>
 *   <a href={`mailto:${EMAIL_CONTACTO}`}>{EMAIL_CONTACTO}</a>
 */

// ── Teléfono institucional ──
export const TELEFONO_ISR = "+54 342 457-9000";
export const TELEFONO_LIMPIO = "5493424579000"; // Sin espacios ni guiones, para wa.me

// ── Emails ──
export const EMAIL_CONTACTO = "contacto@isepsantafe.edu.ar";
export const EMAIL_PRENSA = "prensaydifusion@isepsantafe.edu.ar";
export const EMAIL_TITULOS = "titulosisep@isepsantafe.edu.ar";

// ── URLs institucionales ──
export const MI_ISEP_URL = "https://mi.isepsantafe.edu.ar";
export const GESTION_URL = "https://gestion.isepsantafe.edu.ar";
export const CADETES_URL = "https://cadetes.isepsantafe.edu.ar";
export const WEBMAIL_URL = "https://webmail.isepsantafe.net.ar";

// ── WhatsApp ──
export const WHATSAPP_URL = `https://wa.me/${TELEFONO_LIMPIO}`;

// ── Redes sociales ──
export const REDES_SOCIALES = {
  facebook: "https://facebook.com/isepsantafe/",
  youtube: "https://youtube.com/c/InstitutodeSeguridadPúblicaDeSantaFe",
  instagram: "https://instagram.com/isepsantafe",
  tiktok: "https://tiktok.com/@isepsantafe",
};

// ── Google Analytics (placeholder) ──
// Reemplazar con el ID real de GA4 cuando esté configurado
export const GA_ID = "G-XXXXXXXXXX";
