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

// ── Páginas ──
import Home from "./pages/Home";
import Noticias from "./pages/Noticias";

// ── Páginas Institucional ──
import Objetivos from "./pages/Institucional/Objetivos";
import OfertaEducativa from "./pages/Institucional/OfertaEducativa";
import Autoridades from "./pages/Institucional/Autoridades";
import Carrera from "./pages/Institucional/Carrera";
import Resoluciones from "./pages/Institucional/Resoluciones";

// ── Páginas Escuelas (minisitios) ──
import EscuelaPolicia from "./pages/Escuelas/Policia.jsx";
import EscuelaSuperior from "./pages/Escuelas/Superior";
import EscuelaEspecialidades from "./pages/Escuelas/Especialidades";
import EscuelaInvestigaciones from "./pages/Escuelas/Investigaciones";

// ── Páginas Postulantes ──
import Ingresos from "./pages/Postulantes/Ingresos";
import Inscripciones from "./pages/Postulantes/Inscripciones.jsx";
import Procesos from "./pages/Postulantes/Procesos";

// ── Páginas Secretaría Académica ──
import Titulos from "./pages/Secretaria/Titulos";
import Biblioteca from "./pages/Secretaria/Biblioteca";
import Cursos from "./pages/Secretaria/Cursos";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar sticky — visible en todas las páginas */}
      <Navbar />

      {/* Rutas de la aplicación */}
      <Routes>
        {/* ── Home ── */}
        <Route path="/" element={<Home />} />

        {/* ── Noticias ── */}
        <Route path="/noticias" element={<Noticias />} />

        {/* ── Institucional ── */}
        <Route path="/institucional/objetivos" element={<Objetivos />} />
        <Route path="/institucional/oferta-educativa" element={<OfertaEducativa />} />
        <Route path="/institucional/autoridades" element={<Autoridades />} />
        <Route path="/institucional/carrera" element={<Carrera />} />
        <Route path="/institucional/resoluciones" element={<Resoluciones />} />

        {/* ── Escuelas (minisitios independientes) ── */}
        <Route path="/escuelas/policia" element={<EscuelaPolicia />} />
        <Route path="/escuelas/superior" element={<EscuelaSuperior />} />
        <Route path="/escuelas/especialidades" element={<EscuelaEspecialidades />} />
        <Route path="/escuelas/investigaciones" element={<EscuelaInvestigaciones />} />

        {/* ── Postulantes ── */}
        <Route path="/postulantes/ingresos" element={<Ingresos />} />
        <Route path="/postulantes/inscripciones" element={<Inscripciones />} />
        <Route path="/postulantes/procesos" element={<Procesos />} />

        {/* ── Secretaría Académica ── */}
        <Route path="/secretaria/titulos" element={<Titulos />} />
        <Route path="/secretaria/biblioteca" element={<Biblioteca />} />
        <Route path="/secretaria/cursos" element={<Cursos />} />
      </Routes>

      {/* Footer — visible en todas las páginas */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;