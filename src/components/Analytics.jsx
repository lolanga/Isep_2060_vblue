/**
 * components/Analytics.jsx
 *
 * Carga Google Analytics 4 (gtag.js) de forma asíncrona y registra una
 * vista de página por cada cambio de ruta. Solo funciona en producción
 * (DEV = sin tracking).
 *
 * Uso: <Analytics path={pathname} /> en App.jsx
 * El ID de medición se configura UNA sola vez en: src/data/config.js (GA_ID).
 */

import { useEffect } from "react";
import { GA_ID } from "../data/config";

/** GA solo se activa si el ID tiene formato real de GA4 (G-XXXXXXX). */
const GA_ENABLED = typeof GA_ID === "string" && /^G-[A-Z0-9]+$/i.test(GA_ID);

/** Carga el script de GA4 de forma asíncrona (una sola vez). */
function loadGA() {
  if (!GA_ENABLED || typeof window === "undefined" || document.getElementById("ga-script")) return;

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

/** Componente que carga GA4 y registra cada ruta. No renderiza nada visible. */
export default function Analytics({ path }) {
  const enabled = !import.meta.env.DEV && GA_ENABLED;

  useEffect(() => {
    if (!enabled) return;
    loadGA();

    const send = () => {
      if (window.gtag) {
        window.gtag("event", "page_view", {
          page_path: path,
          page_title: typeof document !== "undefined" ? document.title : path,
        });
      }
    };

    // Si el script todavía no terminó de cargar, esperar a que cargue.
    if (!window.gtag) {
      document.getElementById("ga-script")?.addEventListener("load", send, { once: true });
    } else {
      send();
    }
  }, [enabled, path]);

  return null;
}