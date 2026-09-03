// Página principal (Home)
import Hero from "../components/Hero";
import Apps from "../components/Apps";
import CTA from "../components/CTA";
import News from "../components/News";
import Schools from "../components/Schools";
import Testimonios from "../components/Testimonios";

// Home ahora contiene landing completa
export default function Home() {
  return (
    <>
      <Hero />
      <Apps />
      <CTA />
      <News />
      <Schools />
      <Testimonios />
    </>
  );
}