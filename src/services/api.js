/**
 * services/api.js
 *
 * MIGRATION PATH TO A REAL BACKEND
 * ---------------------------------
 * This module is the single entry point for all data access. Components should
 * import from here instead of directly from data/ files.
 *
 * Currently it wraps static mock data with a simulated network delay so that
 * loading states and Skeleton components can be tested during development.
 *
 * When connecting a real API (REST, GraphQL, etc.):
 *   1. Create a base HTTP client (fetch/axios) with auth, interceptors, etc.
 *   2. Replace the function bodies below with real fetch() calls.
 *   3. The return shape of each function MUST stay the same — components
 *      depend on the resolved value, not on how it was obtained.
 *   4. Remove the `delay()` helper and the mock data imports.
 *
 * Uso:
 *   import { getNoticias, getEscuela } from "../services/api";
 *   const noticias = await getNoticias();
 */

import { noticias } from "../data/noticias";
import { escuelas, carreras, cursos, convocatorias, escuelaPorId, carrerasDeEscuela, cursosDeEscuela, preguntasFrecuentes } from "../data/institucional";
import { resoluciones } from "../data/normativa";

/** Simula latencia de red para testing de Skeleton/loading states. */
const delay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getNoticias() {
  await delay();
  return noticias;
}

export async function getNoticia(id) {
  await delay(150);
  return noticias.find((n) => n.id === Number(id)) || null;
}

export async function getEscuelas() {
  await delay();
  return escuelas;
}

export async function getEscuela(id) {
  await delay(150);
  return escuelaPorId(id) || null;
}

export async function getCarreras() {
  await delay();
  return carreras;
}

export async function getCarrerasDeEscuela(escuelaId) {
  await delay(150);
  return carrerasDeEscuela(escuelaId);
}

export async function getCursos() {
  await delay();
  return cursos;
}

export async function getCursosDeEscuela(escuelaId) {
  await delay(150);
  return cursosDeEscuela(escuelaId);
}

export async function getConvocatorias() {
  await delay();
  return convocatorias;
}

export async function getResoluciones() {
  await delay();
  return resoluciones;
}

export async function getPreguntasFrecuentes() {
  await delay();
  return preguntasFrecuentes;
}
