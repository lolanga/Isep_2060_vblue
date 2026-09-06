import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import News from "../components/News";
import { noticias } from "../data/noticias";

describe("News (Home)", () => {
  it("renderiza la noticia destacada con su título en mayúsculas", () => {
    render(
      <MemoryRouter>
        <News />
      </MemoryRouter>
    );
    expect(screen.getByText("ÚLTIMAS NOTICIAS")).toBeInTheDocument();
    expect(screen.getByText(noticias[0].titulo.toUpperCase())).toBeInTheDocument();
  });

  it("no rompe si una noticia no tiene imagen (img: null)", () => {
    // El titular ya cubre el caso: datos reales incluyen noticias con img: null,
    // el componente debe renderizar placeholder en lugar de la etiqueta img.
    const { container } = render(
      <MemoryRouter>
        <News />
      </MemoryRouter>
    );
    expect(container.querySelectorAll(".mini-img-placeholder").length).toBe(3);
    expect(screen.getByText(/ver todas las noticias/i)).toBeInTheDocument();
  });
});