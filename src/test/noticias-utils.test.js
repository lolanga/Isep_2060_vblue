import { describe, it, expect, vi } from "vitest";

vi.mock("../data/noticias", () => ({
  noticias: [
    { id: 3, titulo: "Tercera publicada", escuelas: ["policia"] },
    { id: 1, titulo: "Primera publicada", escuelas: ["policia"] },
    { id: 4, titulo: "Cuarta publicada", escuelas: ["especialidades"] },
    { id: 2, titulo: "Segunda publicada", escuelas: [] },
  ],
}));

import { noticias } from "../utils/noticias";

describe("noticias (nuevas primero)", () => {
  it("ordena por id descendente: la más reciente queda primera", () => {
    expect(noticias.map((n) => n.id)).toEqual([4, 3, 2, 1]);
  });

  it("la destacada de un filtro por escuela es la más reciente de esa escuela", () => {
    const dePolicia = noticias.filter((n) => n.escuelas.includes("policia"));
    expect(dePolicia.map((n) => n.id)).toEqual([3, 1]);
  });
});