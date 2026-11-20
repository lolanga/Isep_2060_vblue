import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Ingreso from "../pages/Ingreso/Ingreso";
import { cronograma, preguntasFrecuentes, convocatorias } from "../data/institucional";

function renderIngreso() {
  return render(
    <MemoryRouter initialEntries={["/ingreso"]}>
      <Ingreso />
    </MemoryRouter>
  );
}

describe("Ingreso landing (/ingreso)", () => {
  it("renderiza el hero con el título principal", () => {
    renderIngreso();
    expect(
      screen.getByRole("heading", { level: 1, name: /ingreso al isep/i })
    ).toBeInTheDocument();
  });

  it("muestra el aviso de trámite gratuito", () => {
    renderIngreso();
    expect(screen.getByText(/trámite es gratuito/i)).toBeInTheDocument();
    expect(screen.getByText(/ningún gestor ni intermediario/i)).toBeInTheDocument();
  });

  it("destaca Mi ISeP como punto de partida transversal para todas las formaciones", () => {
    renderIngreso();
    expect(screen.getByText("Requisito transversal")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /mi isep: punto de partida para todas las inscripciones/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/todas las convocatorias y formaciones del isep se gestionan a través de mi isep/i)
    ).toBeInTheDocument();
    expect(screen.getByText("Creá tu usuario")).toBeInTheDocument();
    expect(screen.getByText("Ir a Mi ISeP").closest("a")).toHaveAttribute(
      "href",
      "https://mi.isepsantafe.edu.ar"
    );
  });

  it("muestra cada etapa del cronograma con su fecha", () => {
    renderIngreso();
    cronograma.forEach((etapa) => {
      expect(screen.getByText(etapa.etapa)).toBeInTheDocument();
      expect(screen.getAllByText(etapa.fecha).length).toBeGreaterThan(0);
    });
  });

  it("muestra las convocatorias desde los datos", () => {
    renderIngreso();
    convocatorias.forEach((c) => {
      expect(screen.getByText(c.nombre)).toBeInTheDocument();
    });
  });

  it("muestra los procesos en curso con acceso directo a cada uno", () => {
    renderIngreso();
    expect(screen.getByRole("heading", { name: "Procesos en curso" })).toBeInTheDocument();
    convocatorias.forEach((c) => {
      const link = screen.getByText(c.cta.label).closest("a");
      expect(link).toHaveAttribute("href", c.cta.to);
    });
  });

  it("incluye los dos summarys oficiales de Acceso Postulantes", () => {
    renderIngreso();
    expect(screen.getByText("PROCESO EN CURSO")).toBeInTheDocument();
    expect(screen.getByText("👮 Escuela de Policía")).toBeInTheDocument();
    expect(screen.getByText("Proceso de Selección – Ciclo Lectivo 2027-2028")).toBeInTheDocument();
    expect(screen.getByText("VER PROCESO ▼")).toBeInTheDocument();

    expect(screen.getByText("NUEVA INSCRIPCIÓN")).toBeInTheDocument();
    expect(screen.getByText("🔎 Investigación Criminal")).toBeInTheDocument();
    expect(screen.getByText("Tecnicatura Superior en Investigación Criminal")).toBeInTheDocument();
    expect(screen.getByText("📅 Inscripción: 05 de octubre al 05 de noviembre")).toBeInTheDocument();
    expect(screen.getByText("👥 300 vacantes disponibles")).toBeInTheDocument();
    expect(screen.getByText("VER INSCRIPCIÓN ▼")).toBeInTheDocument();
  });

  it("muestra el contenido de los dos summarys dentro de acordeones", () => {
    const { container } = renderIngreso();
    const details = container.querySelectorAll("details.postulante-detail");
    expect(details).toHaveLength(2);
    expect(details[0]).toHaveAttribute("open");
    expect(
      screen.getByText(/pasan a segunda etapa – resultado revertido por recurso/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/segunda convocatoria — investigación criminal/i)
    ).toBeInTheDocument();
    expect(screen.getAllByText(/carpeta médica completa/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/300 vacantes disponibles/i).length).toBeGreaterThan(0);
  });

  it("destaca preguntas frecuentes desde los datos y enlaza al FAQ completo", () => {
    renderIngreso();
    preguntasFrecuentes.slice(0, 3).forEach((f) => {
      expect(screen.getByText(f.pregunta)).toBeInTheDocument();
    });
    const link = screen.getByText("Ver todas las preguntas frecuentes");
    expect(link.closest("a")).toHaveAttribute("href", "/ingreso/faq");
  });

  it("enlaza a la pre-inscripción y a los requisitos", () => {
    renderIngreso();
    expect(screen.getByText("Pre-Inscripción Online").closest("a")).toHaveAttribute(
      "href",
      "/ingreso/convocatorias"
    );
    expect(screen.getByText("Ver Requisitos").closest("a")).toHaveAttribute(
      "href",
      "/ingreso/requisitos"
    );
  });
});