import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import News from "../components/News";

vi.mock("../data/noticias", () => ({
  noticias: [
    { id: 1, titulo: "Noticia A", categoria: "Institucional", fecha: "1 DE ENERO, 2026", fechaCorta: "1 ENE", excerpt: "extracto A", img: null },
    { id: 2, titulo: "Noticia B", categoria: "Institucional", fecha: "2 DE ENERO, 2026", fechaCorta: "2 ENE", excerpt: "extracto B", img: null },
    { id: 3, titulo: "Noticia C", categoria: "Institucional", fecha: "3 DE ENERO, 2026", fechaCorta: "3 ENE", excerpt: "extracto C", img: null },
    { id: 4, titulo: "Noticia D", categoria: "Institucional", fecha: "4 DE ENERO, 2026", fechaCorta: "4 ENE", excerpt: "extracto D", img: null },
  ],
}));

describe("News (Home)", () => {
  it("renderiza la noticia destacada con su título en mayúsculas", () => {
    render(
      <MemoryRouter>
        <News />
      </MemoryRouter>
    );
    expect(screen.getByText("ÚLTIMAS NOTICIAS")).toBeInTheDocument();
    expect(screen.getByText("NOTICIA A")).toBeInTheDocument();
  });

  it("renderiza placeholder si una noticia no tiene imagen (img: null)", () => {
    const { container } = render(
      <MemoryRouter>
        <News />
      </MemoryRouter>
    );
    expect(container.querySelectorAll(".card-img-placeholder").length).toBe(1);
    expect(container.querySelectorAll(".mini-img-placeholder").length).toBe(3);
    expect(screen.getByText(/ver todas las noticias/i)).toBeInTheDocument();
  });
});