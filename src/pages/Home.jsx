/**
 * Home.jsx — Página principal del sitio ISeP
 *
 * Ensambla las secciones de landing: Hero, Audiencia, News, Trámites, CTA,
 * Schools, Contadores y Testimonios. Contadores y Testimonios
 * se ocultan en móvil (hide-mobile).
 */
import Hero from "../components/Hero";
import Audiencia from "../components/Audiencia";
import Tramites from "../components/Tramites";
import Contadores from "../components/Contadores";
import CTA from "../components/CTA";
import News from "../components/News";
import Schools from "../components/Schools";
import Testimonios from "../components/Testimonios";
import SEO from "../components/SEO";

/** Página principal — landing completa del ISeP. */
export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <Audiencia />
      <News />
      <Tramites />
      <CTA />
      <Schools />
      <div className="hide-mobile">
        <Contadores />
      </div>
      <div className="hide-mobile">
        <Testimonios />
      </div>
    </>
  );
}