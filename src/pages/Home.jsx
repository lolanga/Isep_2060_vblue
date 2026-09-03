// Página principal (Home)
import Hero from "../components/Hero";
import News from "../components/News";
import Apps from "../components/Apps";
import Schools from "../components/Schools";
import CTA from "../components/cta";


// Home ahora contiene landing completa
export default function Home() {
  return (
    <>
      <Hero />
      <News />
      <Apps />
      <Schools />
      <CTA />

    </>
  );
}