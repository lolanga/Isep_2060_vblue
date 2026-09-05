/**
 * components/SEO.jsx
 *
 * Componente que setea <title> y meta tags por página.
 * Usa useEffect para modificar el document head dinámicamente.
 */

import { useEffect } from "react";

const SITE_NAME = "ISeP Santa Fe";
const DEFAULT_DESCRIPTION = "Instituto de Seguridad Pública de la Provincia de Santa Fe — Formación profesional para la seguridad pública.";

export default function SEO({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME;
    document.title = fullTitle;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description || DEFAULT_DESCRIPTION);

    let og = document.querySelector('meta[property="og:title"]');
    if (!og) {
      og = document.createElement("meta");
      og.setAttribute("property", "og:title");
      document.head.appendChild(og);
    }
    og.setAttribute("content", fullTitle);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", description || DEFAULT_DESCRIPTION);

    return () => {
      document.title = SITE_NAME;
    };
  }, [title, description]);

  return null;
}