import { describe, it, expect } from "vitest";
import { noticias } from "../data/noticias";
import { resoluciones } from "../data/normativa";

describe("noticias data", () => {
  it("tiene noticias", () => {
    expect(noticias.length).toBeGreaterThan(0);
  });

  it("cada noticia tiene id único", () => {
    const ids = noticias.map((n) => n.id);
    const unicos = new Set(ids);
    expect(unicos.size).toBe(ids.length);
  });

  it("cada noticia tiene campos obligatorios", () => {
    noticias.forEach((n) => {
      expect(n.titulo).toBeTruthy();
      expect(n.categoria).toBeTruthy();
      expect(n.fecha).toBeTruthy();
      expect(n.img).toBeTruthy();
    });
  });

  it("las categorías son válidas", () => {
    const categoriasValidas = ["Institucional", "Academica", "Escuelas", "Eventos", "Convenios"];
    noticias.forEach((n) => {
      expect(categoriasValidas).toContain(n.categoria);
    });
  });
});

describe("normativa data", () => {
  it("tiene resoluciones", () => {
    expect(resoluciones.length).toBeGreaterThan(0);
  });

  it("cada resolución tiene campos obligatorios", () => {
    resoluciones.forEach((r) => {
      expect(r.titulo).toBeTruthy();
      expect(r.tipo).toBeTruthy();
      expect(r.fecha).toBeTruthy();
    });
  });
});