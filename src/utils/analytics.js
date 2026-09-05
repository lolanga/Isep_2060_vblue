/**
 * utils/analytics.js
 *
 * Funciones de tracking para Google Analytics 4.
 * Importar cuando se necesite tracking manual:
 *
 *   import { trackPageView, trackEvent } from "../utils/analytics";
 *
 *   // Al navegar a una página:
 *   trackPageView("/noticias/1");
 *
 *   // Al hacer click en un botón:
 *   trackEvent("click", "navigation", "hero-cta-inscribirme");
 *
 * Nota: El componente <Analytics /> (components/Analytics.jsx) ya carga
 * gtag.js automáticamente. Estas funciones solo funcionan si GA ya está cargado.
 */

const GA_ID = "G-XXXXXXXXXX"; // Mismo ID que en Analytics.jsx

/**
 * Registra una vista de página en GA4.
 * @param {string} path - Ruta de la página (ej: "/noticias/1")
 */
export function trackPageView(path) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("config", GA_ID, { page_path: path });
}

/**
 * Registra un evento personalizado en GA4.
 * @param {string} action - Nombre del evento (ej: "click")
 * @param {string} category - Categoría (ej: "navigation")
 * @param {string} [label] - Label opcional (ej: "hero-cta")
 */
export function trackEvent(action, category, label) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, { event_category: category, event_label: label });
}