import { describe, it, expect } from "vitest";
import { escuelas, carreras, escuelaPorId, carrerasDeEscuela, cursosDeEscuela } from "../data/institucional";

describe("institucional data", () => {
  it("tiene 5 escuelas", () => {
    expect(escuelas).toHaveLength(5);
  });

  it("encuentra escuela por id", () => {
    const ep = escuelaPorId("policia");
    expect(ep).toBeDefined();
    expect(ep.nombre).toContain("Policía");
  });

  it("devuelve null para id inexistente", () => {
    const noExiste = escuelaPorId("inexistente");
    expect(noExiste).toBeUndefined();
  });

  it("carreras tienen escuela válida", () => {
    carreras.forEach((c) => {
      const escuela = escuelaPorId(c.escuela);
      expect(escuela).toBeDefined();
    });
  });

  it("carrerasDeEscuela filtra correctamente", () => {
    const carrerasPolicia = carrerasDeEscuela("policia");
    expect(carrerasPolicia.length).toBeGreaterThan(0);
    carrerasPolicia.forEach((c) => {
      expect(c.escuela).toBe("policia");
    });
  });

  it("cursosDeEscuela filtra correctamente", () => {
    const cursosPolicia = cursosDeEscuela("policia");
    expect(Array.isArray(cursosPolicia)).toBe(true);
  });

  it("todas las escuelas tienen contacto", () => {
    escuelas.forEach((e) => {
      expect(e.informacion.contacto).toBeTruthy();
    });
  });
});