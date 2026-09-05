/**
 * analytics.js
 *
 * Funciones de tracking para Google Analytics.
 * Importar desde aquí: import { trackPageView, trackEvent } from "../analytics";
 */

const GA_ID = "G-XXXXXXXXXX";

export function trackPageView(path) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("config", GA_ID, { page_path: path });
}

export function trackEvent(action, category, label) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, { event_category: category, event_label: label });
}