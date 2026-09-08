import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Audiencia from "../components/Audiencia";

function renderAudiencia() {
  return render(
    <MemoryRouter initialEntries={["/"]}>
      <Audiencia />
    </MemoryRouter>
  );
}

describe("Audiencia (Home — sección por audiencia)", () => {
  it("renderiza el título y las 3 audiencias", () => {
    renderAudiencia();
    expect(screen.getByText("Elegí tu camino")).toBeInTheDocument();
    expect(screen.getByText("Quiero ingresar")).toBeInTheDocument();
    expect(screen.getByText("Soy personal")).toBeInTheDocument();
    expect(screen.getByText("Ciudadano")).toBeInTheDocument();
  });

  it("orienta al postulante hacia el camino de ingreso", () => {
    renderAudiencia();
    expect(screen.getByText("Pre-Inscripción Online").closest("a")).toHaveAttribute(
      "href",
      "/ingreso/convocatorias"
    );
    expect(screen.getByText("Empezar mi ingreso").closest("a")).toHaveAttribute(
      "href",
      "/ingreso"
    );
  });

  it("orienta al personal hacia los sistemas internos (enlaces externos)", () => {
    renderAudiencia();
    expect(screen.getByText("Mi ISeP").closest("a")).toHaveAttribute(
      "href",
      "https://mi.isepsantafe.edu.ar"
    );
    expect(screen.getByText("Acceder a Mi ISeP").closest("a")).toHaveAttribute(
      "href",
      "https://mi.isepsantafe.edu.ar"
    );
  });

  it("orienta al ciudadano hacia noticias y oferta educativa", () => {
    renderAudiencia();
    expect(screen.getByText("Últimas noticias").closest("a")).toHaveAttribute(
      "href",
      "/noticias"
    );
    expect(screen.getByText("Conocer el instituto").closest("a")).toHaveAttribute(
      "href",
      "/institucional/el-isep"
    );
  });
});