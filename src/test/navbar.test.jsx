import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

// ── Mocks de assets y react-router deps ──
vi.mock("../assets/escudo_ISeP.png", () => ({ default: "escudo.png" }));
vi.mock("../components/SearchBox", () => ({
  default: () => <div data-testid="searchbox" />,
}));

// MatchMedia no existe en jsdom (necesario para hooks responsive)
beforeEach(() => {
  window.matchMedia =
    window.matchMedia ||
    (() => ({
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    }));
});

function renderNavbar(path = "/") {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Navbar />
    </MemoryRouter>
  );
}

describe("Navbar", () => {
  it("renderiza el logo y el enlace Mi ISeP", () => {
    renderNavbar();
    expect(screen.getByText("ISeP Santa Fe")).toBeInTheDocument();
    expect(screen.getByText("Mi ISeP")).toBeInTheDocument();
  });

  it("abre el dropdown Institucional en desktop y muestra sus ítems", () => {
    const { container } = renderNavbar();
    const navLinks = container.querySelector(".nav-links");
    fireEvent.click(within(navLinks).getByRole("button", { name: /institucional/i }));
    expect(within(navLinks).getByText("Autoridades")).toBeInTheDocument();
    expect(within(navLinks).getByText("Sedes y Contacto")).toBeInTheDocument();
  });

  it("abre el menú hamburguesa en mobile", () => {
    renderNavbar();
    const hamburguesa = screen.getByRole("button", { name: /abrir menú/i });
    fireEvent.click(hamburguesa);
    expect(hamburguesa).toHaveClass("hamburger--open");
  });

  it("muestra 'Inicio de ingreso' como primer destino del dropdown Ingreso", () => {
    const { container } = renderNavbar();
    const navLinks = container.querySelector(".nav-links");
    fireEvent.click(within(navLinks).getByRole("button", { name: /ingreso/i }));
    const firstItem = within(navLinks).getByText("Inicio de ingreso");
    expect(firstItem).toBeInTheDocument();
    expect(firstItem.closest("a")).toHaveAttribute("href", "/ingreso");
  });

  it("marca la sección Institucional como activa en /institucional/autoridades", () => {
    const { container } = renderNavbar("/institucional/autoridades");
    const navLinks = container.querySelector(".nav-links");
    expect(within(navLinks).getByRole("button", { name: /institucional/i })).toHaveClass(
      "nav-is-active"
    );
  });

  it("marca la sección Ingreso como activa en /ingreso/faq", () => {
    const { container } = renderNavbar("/ingreso/faq");
    const navLinks = container.querySelector(".nav-links");
    expect(within(navLinks).getByRole("button", { name: /ingreso/i })).toHaveClass(
      "nav-is-active"
    );
  });
});