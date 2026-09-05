/**
 * components/JsonLd.jsx
 *
 * Componente que inyecta structured data (JSON-LD) en el <head>.
 * Mejora el SEO: Google muestra rich snippets en los resultados de búsqueda.
 *
 * Tipos disponibles:
 * - EducationalOrganization: datos de la institución (home)
 */

import { useEffect } from "react";

/** Inyecta JSON-LD de EducationalOrganization en el <head> para SEO. */
export function EducationalOrganizationLd() {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Instituto de Seguridad Pública de Santa Fe",
      "alternateName": "ISeP",
      "url": "https://www.isepsantafe.edu.ar",
      "logo": "https://www.isepsantafe.edu.ar/images/Escudos%20Isep/escudo_Isep_sin_fondopeque.png",
      "description": "Instituto de Seguridad Pública de la Provincia de Santa Fe — Formación profesional para la seguridad pública.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Leandro N. Alem 2050",
        "addressLocality": "Rosario",
        "addressRegion": "Santa Fe",
        "postalCode": "S2000FMH",
        "addressCountry": "AR"
      },
      "telephone": "+54-342-457-9000",
      "email": "contacto@isepsantafe.edu.ar",
      "sameAs": [
        "https://facebook.com/isepsantafe/",
        "https://www.youtube.com/c/InstitutodeSeguridadP%C3%BAblicadeSantaFe",
        "https://instagram.com/isepsantafe",
        "https://tiktok.com/@isepsantafe"
      ],
      "founder": {
        "@type": "GovernmentOrganization",
        "name": "Provincia de Santa Fe"
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    script.id = "ld-organization";
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById("ld-organization");
      if (existing) existing.remove();
    };
  }, []);

  return null;
}