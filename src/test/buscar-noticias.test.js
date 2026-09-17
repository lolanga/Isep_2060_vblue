import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// `cargarIndiceNoticias` guarda estado en el módulo (cache/promesa), así que
// cada test importa una instancia fresca con vi.resetModules().
describe("cargarIndiceNoticias (cache y reintentos)", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("reintenta tras un fallo en vez de cachear el vacío para siempre", async () => {
    const fetchMock = vi
      .fn()
      .mockRejectedValueOnce(new Error("network"))
      .mockResolvedValueOnce({ ok: true, json: async () => [{ id: 1 }] });
    vi.stubGlobal("fetch", fetchMock);

    const { cargarIndiceNoticias } = await import("../utils/buscarNoticias");

    expect(await cargarIndiceNoticias()).toEqual([]);
    expect(await cargarIndiceNoticias()).toEqual([{ id: 1 }]);
    expect(fetchMock).toHaveBeenCalledTimes(2);

    // Una vez cargado, ya queda cacheado (sin nuevo fetch).
    expect(await cargarIndiceNoticias()).toEqual([{ id: 1 }]);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("cachea el índice en la primera carga exitosa", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => [{ id: 7 }] });
    vi.stubGlobal("fetch", fetchMock);

    const { cargarIndiceNoticias } = await import("../utils/buscarNoticias");

    expect(await cargarIndiceNoticias()).toEqual([{ id: 7 }]);
    expect(await cargarIndiceNoticias()).toEqual([{ id: 7 }]);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("trata una respuesta no-ok como fallo y permite reintentar", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce({ ok: false, status: 404, json: async () => [] })
      .mockResolvedValueOnce({ ok: true, json: async () => [{ id: 2 }] });
    vi.stubGlobal("fetch", fetchMock);

    const { cargarIndiceNoticias } = await import("../utils/buscarNoticias");

    expect(await cargarIndiceNoticias()).toEqual([]);
    expect(await cargarIndiceNoticias()).toEqual([{ id: 2 }]);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
});
