// Página principal (Home)
import Hero from "../components/Hero";
import Apps from "../components/Apps";
import Contadores from "../components/Contadores";
import CTA from "../components/CTA";
import News from "../components/News";
import Schools from "../components/Schools";
import Testimonios from "../components/Testimonios";
import SEO from "../components/SEO";

// Home ahora contiene landing completa
export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <Apps />
      <div className="hide-mobile">
        <Contadores />
      </div>
      <CTA />
      <News />
      <Schools />
      <div className="hide-mobile">
        <Testimonios />
      </div>
    </>
  );
}