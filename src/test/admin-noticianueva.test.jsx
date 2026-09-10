import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NoticiaNueva from "../pages/admin/NoticiaNueva";

describe("NoticiaNueva (/admin/noticias/nueva)", () => {
  it("renderiza formulario, vista previa y genera el código JS", async () => {
    render(
      <MemoryRouter initialEntries={["/admin/noticias/nueva"]}>
        <NoticiaNueva />
      </MemoryRouter>
    );

    expect(screen.getByText("Crear noticia")).toBeInTheDocument();
    expect(screen.getByText("Vista previa")).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText("Título de la noticia"), {
      target: { value: "Nueva conceptualización" },
    });
    expect(screen.getByText("Nueva conceptualización")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Generar código"));
    expect(screen.getByText("Copiar")).toBeInTheDocument();

    const codeEl = document.querySelector(".admin-code-block pre");
    expect(codeEl).toBeTruthy();
    expect(codeEl.textContent).toContain('titulo: "Nueva conceptualización"');
    expect(codeEl.textContent).toContain("categoria:");
  });
});