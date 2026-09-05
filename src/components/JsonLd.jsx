/**
 * components/JsonLd.jsx
 *
 * Componente que inyecta structured data (JSON-LD) en el <head>.
 * Mejora el SEO: Google muestra rich snippets en los resultados de búsqueda.
 *
 * Tipos disponibles:
 * - EducationalOrganization: datos de la institución (home)
 * - NewsArticle: cada noticia individual (usar en NoticiaDetalle)
 * - BreadcrumbList: migas de pan para Google (usar en todas las páginas)
 */

import { useEffect } from "react";

/**
 * Inyecta JSON-LD de EducationalOrganization en el <head>.
 * Se renderiza en App.jsx (todas las páginas).
 */
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

/**
 * Inyecta JSON-LD de NewsArticle para una noticia individual.
 * Usar en NoticiaDetalle.jsx: <NewsArticleLd noticia={noticia} />
 *
 * @param {{ noticia: object }} props - Objeto noticia con id, titulo, excerpt, img, fecha
 */
export function NewsArticleLd({ noticia }) {
  useEffect(() => {
    if (!noticia) return;

    const data = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": noticia.titulo,
      "description": noticia.excerpt,
      "image": noticia.img,
      "datePublished": noticia.fecha,
      "author": {
        "@type": "Organization",
        "name": "ISeP Santa Fe"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Instituto de Seguridad Pública de Santa Fe",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.isepsantafe.edu.ar/images/Escudos%20Isep/escudo_Isep_sin_fondopeque.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.isepsantafe.edu.ar/noticias/${noticia.id}`
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    script.id = "ld-newsarticle";
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById("ld-newsarticle");
      if (existing) existing.remove();
    };
  }, [noticia]);

  return null;
}

/**
 * Inyecta JSON-LD de BreadcrumbList para migas de pan.
 * Usar en cualquier página: <BreadcrumbLd items={[{ label: "Inicio", to: "/" }, ...]} />
 *
 * @param {{ items: Array<{ label: string, to?: string }> }} props - Array de items del breadcrumb
 */
export function BreadcrumbLd({ items }) {
  useEffect(() => {
    if (!items || items.length === 0) return;

    const data = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items
        .filter((item) => item.to)
        .map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.label,
          "item": `https://www.isepsantafe.edu.ar${item.to}`
        }))
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    script.id = "ld-breadcrumb";
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById("ld-breadcrumb");
      if (existing) existing.remove();
    };
  }, [items]);

  return null;
}