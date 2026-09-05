import { describe, it, expect } from "vitest";
import { buscar, buscarAgrupado } from "../data/buscador";

describe("buscador", () => {
  it("devuelve resultados para 'policía'", () => {
    const resultados = buscar("policía");
    expect(resultados.length).toBeGreaterThan(0);
  });

  it("devuelve resultados agrupados por tipo", () => {
    const agrupados = buscarAgrupado("escuela");
    expect(agrupados).toBeDefined();
    expect(Object.keys(agrupados).length).toBeGreaterThan(0);
  });

  it("devuelve vacío para query vacía", () => {
    const resultados = buscar("");
    expect(resultados).toEqual([]);
  });

  it("encuentra noticias por título", () => {
    const resultados = buscar("capacitación");
    expect(resultados.length).toBeGreaterThan(0);
  });

  it("encuentra resoluciones", () => {
    const resultados = buscar("resolución");
    expect(resultados.length).toBeGreaterThan(0);
  });
});