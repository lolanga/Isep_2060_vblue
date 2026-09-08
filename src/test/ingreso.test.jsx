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

  it("muestra las 4 etapas resumidas del proceso", () => {
    renderIngreso();
    expect(screen.getByText("Creá tu usuario")).toBeInTheDocument();
    expect(screen.getByText("Completá la inscripción")).toBeInTheDocument();
    expect(screen.getByText("Superá las etapas")).toBeInTheDocument();
    expect(screen.getByText("Incorporación")).toBeInTheDocument();
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