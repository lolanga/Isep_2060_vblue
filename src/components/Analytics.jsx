/**
 * components/Analytics.jsx
 *
 * Registra una vista de página (page_view) en Google Analytics 4 cada vez
 * que cambia la ruta en el SPA.
 *
 * El snippet base de gtag.js vive en index.html (código directo de Google)
 * y ya envía la vista de la primera carga con gtag('config', ...). Por eso
 * este componente solo reporta las navegaciones POSTERIORES: la ruta inicial
 * queda registrada por el config y no se vuelve a contar.
 *
 * Uso: <Analytics path={pathname} />
 */

import { useEffect, useRef } from "react";

export default function Analytics({ path }) {
  // Última ruta reportada. Arranca con la ruta inicial (ya contó gtag).
  const rutaRef = useRef(path);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;
    if (rutaRef.current === path) return;

    rutaRef.current = path;
    window.gtag("event", "page_view", {
      page_path: path,
      page_location: window.location.href,
      page_title: typeof document !== "undefined" ? document.title : path,
    });
  }, [path]);

  return null;
}
