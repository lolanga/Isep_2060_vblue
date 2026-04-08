// Página principal (Home)
import Hero from "../components/Hero";
import News from "../components/News";
import Schools from "../components/Schools";
import CTA from "../components/cta";
import Footer from "../components/footer";

// Home ahora contiene landing completa
export default function Home() {
  return (
    <>
      <Hero />
      <News />
      <Schools />
      <CTA />
      <Footer />
    </>
  );
}