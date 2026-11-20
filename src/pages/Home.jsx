/**
 * Home.jsx — Página principal del sitio ISeP
 *
 * Ensambla las secciones de landing: Hero, Audiencia (con los sistemas
 * institucionales integrados), News, CTA, Schools y Testimonios.
 * Testimonios se oculta en móvil (hide-mobile).
 */
import Hero from "../components/Hero";
import Audiencia from "../components/Audiencia";
import CTA from "../components/CTA";
import News from "../components/News";
import Schools from "../components/Schools";
import Testimonios from "../components/Testimonios";
import SEO from "../components/SEO";

/** Página principal — landing completa del ISeP. */
export default function Home() {
  return (
    <main id="main-content">
      <SEO />
      <Hero />
      <Audiencia />
      <News />
      <CTA />
      <Schools />
      <div className="hide-mobile">
        <Testimonios />
      </div>
    </main>
  );
}