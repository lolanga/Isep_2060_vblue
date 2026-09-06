import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Hero from "../components/Hero";

// jsdom no implementa matchMedia: mock estándar para prefers-reduced-motion
beforeEach(() => {
  window.matchMedia =
    window.matchMedia ||
    (() => ({
      matches: false,
      media: "",
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
    }));
});

describe("Hero", () => {
  it("renderiza el título del primer slide", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    expect(screen.getByText(/formación profesional/i)).toBeInTheDocument();
  });

  it("muestra CTA de oferta educativa y CTA de inscripciones 2027", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    expect(screen.getByRole("link", { name: /conoce nuestras propuestas/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /inscripciones 2027/i })).toBeInTheDocument();
  });

  it("navega al siguiente slide con la flecha derecha", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole("button", { name: /siguiente/i }));
    expect(screen.getByText(/nuestras escuelas/i)).toBeInTheDocument();
  });

  it("salta al slide seleccionado con los dots", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const dots = screen.getAllByRole("button", { name: /ir al slide/i });
    fireEvent.click(dots[2]);
    expect(screen.getByText(/oferta académica/i)).toBeInTheDocument();
  });

  it("tiene 3 imágenes de fondo montadas (una activa)", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    // Cada imagen tiene alt = título del slide
    const imgs = screen.getAllByRole("img");
    expect(imgs.length).toBe(3);
  });
});