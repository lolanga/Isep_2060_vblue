/**
 * components/Analytics.jsx
 *
 * Componente que carga Google Analytics 4 (gtag.js).
 * Se carga de forma asíncrona para no bloquear el render.
 * Solo funciona en producción (DEV = sin tracking).
 *
 * Uso: <Analytics /> en App.jsx
 *
 * Para tracking manual, ver: src/utils/analytics.js
 */

const GA_ID = "G-XXXXXXXXXX"; // Reemplazar con el ID real de GA4

/** Carga el script de GA4 de forma asíncrona (solo producción). */
function loadGA() {
  if (typeof window === "undefined" || document.getElementById("ga-script")) return;

  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID, { send_page_view: false });
}

/** Componente que carga GA4. No renderiza nada visible. */
export default function Analytics() {
  if (import.meta.env.DEV) return null;
  loadGA();
  return null;
}