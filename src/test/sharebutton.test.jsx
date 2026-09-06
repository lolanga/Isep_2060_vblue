import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ShareButton from "../components/ShareButton";

const NOTICIA = {
  id: 5,
  titulo: "Título de prueba",
  excerpt: "Extracto de prueba",
};

describe("ShareButton", () => {
  it("muestra el botón con ícono share", () => {
    render(<ShareButton noticia={NOTICIA} />);
    expect(screen.getByRole("button", { name: /compartir/i })).toBeInTheDocument();
  });

  it("copia al portapapeles sin Web Share API (desktop)", async () => {
    // Sin navigator.share → usa clipboard
    Object.assign(navigator, {
      share: undefined,
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });

    render(<ShareButton noticia={NOTICIA} />);
    const btn = screen.getByRole("button", { name: /compartir/i });
    fireEvent.click(btn);

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalled();
      expect(screen.getByText("¡Copiado!")).toBeInTheDocument();
    });
  });

  it("usa Web Share API si está disponible", async () => {
    const shareMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { share: shareMock });

    render(<ShareButton noticia={NOTICIA} />);
    fireEvent.click(screen.getByRole("button", { name: /compartir/i }));

    await waitFor(() => {
      expect(shareMock).toHaveBeenCalled();
    });
  });
});