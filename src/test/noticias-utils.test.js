import { describe, it, expect, vi } from "vitest";

vi.mock("../data/noticias", () => ({
  noticias: [
    { id: 3, titulo: "Tercera publicada", escuelas: ["policia"] },
    { id: 1, titulo: "Primera publicada", escuelas: ["policia"] },
    { id: 4, titulo: "Cuarta publicada", escuelas: ["especialidades"] },
    { id: 2, titulo: "Segunda publicada", escuelas: [] },
  ],
}));

import { noticias, obtenerNoticia, cargarNoticiasArchivo, ANIOS_ARCHIVO } from "../utils/noticias";

describe("noticias (nuevas primero)", () => {
  it("ordena por id descendente: la más reciente queda primera", () => {
    expect(noticias.map((n) => n.id)).toEqual([4, 3, 2, 1]);
  });

  it("la destacada de un filtro por escuela es la más reciente de esa escuela", () => {
    const dePolicia = noticias.filter((n) => n.escuelas.includes("policia"));
    expect(dePolicia.map((n) => n.id)).toEqual([3, 1]);
  });
});

describe("histórico y detalle", () => {
  it("resuelve una noticia reciente (sin anio de histórico)", async () => {
    const res = await obtenerNoticia(4);
    expect(res.noticia.titulo).toBe("Cuarta publicada");
    expect(res.anio).toBeNull();
    expect(res.relacionadas.some((r) => r.id !== 4)).toBe(true);
  });

  it("resuelve una noticia del histórico por id", async () => {
    const res = await obtenerNoticia(5);
    expect(res.noticia).toBeTruthy();
    expect(res.anio).toBeTypeOf("number");
  });

  it("devuelve noticia null cuando el id no existe", async () => {
    const res = await obtenerNoticia(999999);
    expect(res.noticia).toBeNull();
  });

  it("expone los años de histórico y carga un año ordenado (nuevas primero)", async () => {
    expect(ANIOS_ARCHIVO.length).toBeGreaterThan(0);
    const lista = await cargarNoticiasArchivo(ANIOS_ARCHIVO[0]);
    expect(lista.length).toBeGreaterThan(0);
    const ids = lista.map((n) => n.id);
    expect(ids).toEqual([...ids].sort((a, b) => b - a));
  });
});