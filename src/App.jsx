/**
 * App.jsx — Router principal del sitio ISeP
 * 
 * Centraliza todas las rutas de la aplicación.
 * El Navbar y Footer son globales (aparecen en todas las páginas).
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";

// ── Layout global ──
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatWhatsApp from "./components/FloatWhatsApp";
import ScrollToTop from "./components/ScrollToTop";

// ── Páginas ──
import Home from "./pages/Home";
import Noticias from "./pages/Noticias";
import NoticiaDetalle from "./pages/NoticiaDetalle";

// ── Institucional ──
import ElIseP from "./pages/Institucional/ElIseP";
import Autoridades from "./pages/Institucional/Autoridades";
import Organizacion from "./pages/Institucional/Organizacion";
import SedesContacto from "./pages/Institucional/SedesContacto";
import OfertaEducativa from "./pages/Institucional/OfertaEducativa";
import Carrera from "./pages/Institucional/Carrera";
import Resoluciones from "./pages/Institucional/Resoluciones";

// ── Escuelas ──
import EscuelaPolicia from "./pages/Escuelas/Policia.jsx";
import EscuelaSuperior from "./pages/Escuelas/Superior";
import EscuelaEspecialidades from "./pages/Escuelas/Especialidades";
import EscuelaInvestigaciones from "./pages/Escuelas/Investigaciones";
import EducacionDistancia from "./pages/Escuelas/EducacionDistancia";

// ── Ingreso ──
import Convocatorias from "./pages/Ingreso/Convocatorias";
import ProximasConvocatorias from "./pages/Ingreso/ProximasConvocatorias";
import Requisitos from "./pages/Ingreso/Requisitos";
import Proceso from "./pages/Ingreso/Proceso";
import Faq from "./pages/Ingreso/Faq";

// ── Secretaría Académica ──
import Titulos from "./pages/Secretaria/Titulos";
import Biblioteca from "./pages/Secretaria/Biblioteca";
import Cursos from "./pages/Secretaria/Cursos";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Noticias */}
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticias/:id" element={<NoticiaDetalle />} />

        {/* Institucional */}
        <Route path="/institucional/el-isep" element={<ElIseP />} />
        <Route path="/institucional/autoridades" element={<Autoridades />} />
        <Route path="/institucional/organizacion" element={<Organizacion />} />
        <Route path="/institucional/sedes-contacto" element={<SedesContacto />} />
        <Route path="/institucional/oferta-educativa" element={<OfertaEducativa />} />
        <Route path="/institucional/carreras" element={<Carrera />} />
        <Route path="/institucional/resoluciones" element={<Resoluciones />} />

        {/* Escuelas */}
        <Route path="/escuelas/policia" element={<EscuelaPolicia />} />
        <Route path="/escuelas/superior" element={<EscuelaSuperior />} />
        <Route path="/escuelas/especialidades" element={<EscuelaEspecialidades />} />
        <Route path="/escuelas/investigaciones" element={<EscuelaInvestigaciones />} />
        <Route path="/escuelas/educacion-a-distancia" element={<EducacionDistancia />} />

        {/* Ingreso */}
        <Route path="/ingreso/convocatorias" element={<Convocatorias />} />
        <Route path="/ingreso/proximas-convocatorias" element={<ProximasConvocatorias />} />
        <Route path="/ingreso/requisitos" element={<Requisitos />} />
        <Route path="/ingreso/proceso" element={<Proceso />} />
        <Route path="/ingreso/faq" element={<Faq />} />

        {/* Secretaría Académica */}
        <Route path="/secretaria/titulos" element={<Titulos />} />
        <Route path="/secretaria/biblioteca" element={<Biblioteca />} />
        <Route path="/secretaria/cursos" element={<Cursos />} />
      </Routes>

      <Footer />

      {/* Botón flotante WhatsApp — siempre visible */}
      <FloatWhatsApp />

      {/* Botón ir arriba — aparece al hacer scroll */}
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
