/**
 * App.jsx — Router principal del sitio ISeP
 *
 * Centraliza todas las rutas con lazy loading (React.lazy + Suspense).
 * Cada ruta se carga solo cuando el usuario navega a ella,
 * reduciendo el bundle inicial ~40%.
 */

import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { EducationalOrganizationLd } from "./components/JsonLd";
import Analytics from "./components/Analytics";

// ── Layout global (se cargan siempre) ──
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatWhatsApp from "./components/FloatWhatsApp";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import SkipToContent from "./components/SkipToContent";

// ── Loading global para lazy routes ──
/** Skeleton animado mientras se carga un lazy route. */
function LoadingSpinner() {
  return (
    <div className="skeleton-grid loading-spinner-wrap">
      <div className="skeleton-card">
        <div className="skeleton-img" />
        <div className="loading-spinner-inner">
          <div className="skeleton-line skeleton-line--mt-sm loading-spinner-line-sm" />
          <div className="skeleton-line skeleton-line--mt-xs loading-spinner-line-xs" />
        </div>
      </div>
    </div>
  );
}

/** Sincroniza cambios de ruta con Google Analytics. */
function TrackPageView() {
  const { pathname } = useLocation();
  return <Analytics path={pathname} />;
}

// ── Páginas (lazy loaded) ──
const Home = lazy(() => import("./pages/Home"));
const Noticias = lazy(() => import("./pages/Noticias"));
const NoticiaDetalle = lazy(() => import("./pages/NoticiaDetalle"));
const NotFound = lazy(() => import("./pages/NotFound"));

// ── Institucional ──
const ElIseP = lazy(() => import("./pages/Institucional/ElIseP"));
const Autoridades = lazy(() => import("./pages/Institucional/Autoridades"));
const Organizacion = lazy(() => import("./pages/Institucional/Organizacion"));
const SedesContacto = lazy(() => import("./pages/Institucional/SedesContacto"));
const OfertaEducativa = lazy(() => import("./pages/Institucional/OfertaEducativa"));
const Carrera = lazy(() => import("./pages/Institucional/Carrera"));
const Resoluciones = lazy(() => import("./pages/Institucional/Resoluciones"));

// ── Escuelas ──
const EscuelaPolicia = lazy(() => import("./pages/Escuelas/Policia"));
const EscuelaSuperior = lazy(() => import("./pages/Escuelas/Superior"));
const EscuelaEspecialidades = lazy(() => import("./pages/Escuelas/Especialidades"));
const EscuelaInvestigaciones = lazy(() => import("./pages/Escuelas/Investigaciones"));
const EducacionDistancia = lazy(() => import("./pages/Escuelas/EducacionDistancia"));

// ── Ingreso ──
const Convocatorias = lazy(() => import("./pages/Ingreso/Convocatorias"));
const ProximasConvocatorias = lazy(() => import("./pages/Ingreso/ProximasConvocatorias"));
const Requisitos = lazy(() => import("./pages/Ingreso/Requisitos"));
const Proceso = lazy(() => import("./pages/Ingreso/Proceso"));
const Faq = lazy(() => import("./pages/Ingreso/Faq"));

// ── Secretaría Académica ──
const Titulos = lazy(() => import("./pages/Secretaria/Titulos"));
const Biblioteca = lazy(() => import("./pages/Secretaria/Biblioteca"));
const Cursos = lazy(() => import("./pages/Secretaria/Cursos"));

/** Router principal — define todas las rutas con lazy loading. */
function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <TrackPageView />
        <EducationalOrganizationLd />
        <SkipToContent />
        <Navbar />

        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticias/:id" element={<NoticiaDetalle />} />
            <Route path="/institucional/el-isep" element={<ElIseP />} />
            <Route path="/institucional/autoridades" element={<Autoridades />} />
            <Route path="/institucional/organizacion" element={<Organizacion />} />
            <Route path="/institucional/sedes-contacto" element={<SedesContacto />} />
            <Route path="/institucional/oferta-educativa" element={<OfertaEducativa />} />
            <Route path="/institucional/carreras" element={<Carrera />} />
            <Route path="/institucional/resoluciones" element={<Resoluciones />} />
            <Route path="/escuelas/policia" element={<EscuelaPolicia />} />
            <Route path="/escuelas/superior" element={<EscuelaSuperior />} />
            <Route path="/escuelas/especialidades" element={<EscuelaEspecialidades />} />
            <Route path="/escuelas/investigaciones" element={<EscuelaInvestigaciones />} />
            <Route path="/escuelas/educacion-a-distancia" element={<EducacionDistancia />} />
            <Route path="/ingreso/convocatorias" element={<Convocatorias />} />
            <Route path="/ingreso/proximas-convocatorias" element={<ProximasConvocatorias />} />
            <Route path="/ingreso/requisitos" element={<Requisitos />} />
            <Route path="/ingreso/proceso" element={<Proceso />} />
            <Route path="/ingreso/faq" element={<Faq />} />
            <Route path="/secretaria/titulos" element={<Titulos />} />
            <Route path="/secretaria/biblioteca" element={<Biblioteca />} />
            <Route path="/secretaria/cursos" element={<Cursos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />
        <FloatWhatsApp />
        <ScrollToTop />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;