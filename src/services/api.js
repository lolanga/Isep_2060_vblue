/**
 * services/api.js
 *
 * Capa de acceso a datos. Por ahora retorna datos mock,
 * pero al conectar un backend solo se cambian las funciones internas.
 *
 * Uso:
 *   import { getNoticias, getEscuela } from "../services/api";
 *   const noticias = await getNoticias();
 */

import { noticias } from "../data/noticias";
import { escuelas, carreras, cursos, convocatorias, escuelaPorId, carrerasDeEscuela, cursosDeEscuela, preguntasFrecuentes } from "../data/institucional";
import { resoluciones } from "../data/normativa";

// Simula latencia de red (para testing de Skeleton/loading states)
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