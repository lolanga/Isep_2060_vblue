import { describe, it, expect } from "vitest";
import { buscar, buscarAgrupado } from "../data/buscador";
import { rankNoticias } from "../utils/buscarNoticias";

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

  it("encuentra noticias por título vía el índice de noticias", () => {
    const indice = [
      { id: 50, titulo: "Capacitación para el personal", categoria: "Academica", excerpt: "curso", anio: 2024 },
      { id: 49, titulo: "Firma de convenio", categoria: "Convenios", excerpt: "acuerdo", anio: 2026 },
    ];
    const resultados = rankNoticias(indice, "capacitación");
    expect(resultados.length).toBe(1);
    expect(resultados[0].tipo).toBe("Noticia");
    expect(resultados[0].ruta).toBe("/noticias/50");
  });

  it("rankNoticias no diferencia tildes y respeta el máximo", () => {
    const indice = [
      { id: 1, titulo: "Capacitación policial", categoria: "Escuelas", excerpt: "", anio: 2023 },
      { id: 2, titulo: "Colación y egresados", categoria: "Academica", excerpt: "", anio: 2024 },
    ];
    expect(rankNoticias(indice, "capacitacion", 1).length).toBe(1);
    expect(rankNoticias(indice, "", 5)).toEqual([]);
  });

  it("encuentra resoluciones", () => {
    const resultados = buscar("resolución");
    expect(resultados.length).toBeGreaterThan(0);
  });
});