/**
 * src/data/postulantes.js
 *
 * Contenido de los dos bloques <details>/<summary> de
 * https://www.isepsantafe.edu.ar/index.php/inscripciones/postulantes
 *
 * Se usa en el landing /ingreso para mostrar no sólo los encabezados de los
 * procesos vigentes sino también las actualizaciones y enlaces que el sitio
 * oficial publica dentro de cada "summary".
 */

const ISSEP = "https://www.isepsantafe.edu.ar";

export const resumenesPostulantes = {
  1: {
    actualizacion: {
      etiqueta: "📢 NUEVA PUBLICACIÓN",
      titulo: "Pasan a segunda etapa – Resultado revertido por recurso",
      texto:
        "Los postulantes incluidos en el listado adjunto que se presentaron a la etapa recursiva han revertido su situación de no aptos en el examen psicológico, examen pre médico o ambos, y se encuentran en condiciones de pasar a la segunda etapa del proceso de selección.",
      enlaces: [
        {
          label: "📄 Ver listado de postulantes que revierten resultado",
          href: "/docs/Listado_Revierten_Dictamen_ISeP_Publicacion.pdf",
        },
      ],
    },
    secciones: [
      {
        titulo: "📋 ¿Qué realizarás en la segunda etapa?",
        items: [
          "🩺 Entrega de estudios médicos (carpeta médica completa)",
          "📚 Examen intelectual",
          "🏃 Examen de aptitud física",
        ],
      },
      {
        titulo: "🩺 Carpeta médica",
        parrafos: [
          "Deberás realizar la carpeta médica completa y subir los estudios digitalizados a tu usuario de MI ISeP.",
        ],
        aviso: {
          titulo: "⚠️ MUY IMPORTANTE – APTO DEPORTIVO CARDIOLÓGICO",
          texto:
            "El apto deportivo cardiológico debe contener la firma de un MÉDICO CARDIÓLOGO e incluir textualmente la frase “APTO PARA REALIZAR ACTIVIDAD FÍSICA”.",
        },
        enlaces: [
          {
            label: "📄 Lista de estudios – Carpeta médica",
            href: "/docs/Estudios_Requeridos_Carpeta_Medica_ISeP.pdf",
          },
        ],
      },
      {
        titulo: "📚 Examen intelectual",
        parrafos: [
          "Para el examen intelectual deberás estudiar el Manual de Contenidos para Aspirantes.",
        ],
        enlaces: [
          {
            label: "📘 Manual de contenidos para aspirantes",
            href: `${ISSEP}/images/BIBLIOTECA/MANUAL%20DE%20CONTENIDOS%20PARA%20ASPIRANTES.pdf`,
          },
        ],
      },
      {
        titulo: "🏃 Examen de aptitud física",
        parrafos: [
          "Las pruebas se detallan en el manual correspondiente. Se recomienda traer agua, una barrita de cereal, toalla de mano y jabón para manos.",
        ],
        enlaces: [
          {
            label: "📄 Manual de pruebas físicas",
            href: `${ISSEP}/images/BIBLIOTECA/EXAMEN%20DE%20INGRESO%20Tec.%20Seg.%20Pub.y%20Ciudadana.pdf`,
          },
        ],
      },
      {
        titulo: "🪪 Documentación y vestimenta",
        items: [
          "Concurrí con tu DNI físico o digital desde la aplicación Mi Argentina y tu código QR de MI ISeP para registrar asistencia.",
          "Asistí con ropa de gimnasia, preferentemente de colores oscuros.",
          "No se permite el uso de shorts ni calzas.",
          "Presentate 15 minutos antes del horario de citación.",
        ],
      },
      {
        titulo: "ℹ️ Información general de inscripción",
        items: [
          "Creá tu usuario en MI ISeP con un correo de uso frecuente y confirmá la cuenta.",
          "Completá los cuatro formularios obligatorios: Declaración Jurada de Inscripción, Médica, Socioambiental y Psicológica.",
          "La carga completa de la documentación demanda aproximadamente 40 minutos.",
          "Edad requerida: entre 18 y 30 años al 02/02/2027.",
          "Etapas: examen premédico y psicológico, carpeta médica + examen intelectual y físico, examen socioambiental y período propedéutico.",
        ],
        enlaces: [
          {
            label: "📖 Reglamento de Aptitud Psicofísica",
            href: "/docs/REGLAMENTO-APTITUD-PSICOFISICA-ISEP-ACTUALIZADO-2025.pdf",
          },
        ],
      },
    ],
  },
  2: {
    actualizacion: {
      etiqueta: "📢 NUEVA PUBLICACIÓN — SEGUNDO LLAMADO",
      titulo: "Segunda convocatoria — Investigación Criminal",
      texto:
        "Los postulantes detallados en el nuevo listado deberán presentarse el día, horario y sede asignados para realizar la primera etapa del proceso de selección. Primera etapa: examen psicológico y examen pre médico · 08:00 h.",
      enlaces: [
        {
          label: "📄 Consultar segundo listado de convocados (PDF)",
          href: "/docs/Listado_Convocados_Investigacion_Criminal_2026.pdf",
        },
      ],
    },
    secciones: [
      {
        titulo: "🎒 Vestimenta y elementos necesarios",
        items: [
          "Ropa de gimnasia de colores oscuros. No se permite el uso de shorts ni calzas.",
          "Lápiz negro 2HB, goma de borrar y birome azul.",
        ],
      },
      {
        titulo: "🪪 Documentación obligatoria",
        items: [
          "DNI original (físico o disponible en Mi Argentina).",
          "Título secundario, constancia de finalización de estudios o constancia de título en trámite.",
          "La documentación se carga digitalmente en MI ISeP y se presenta también el día de la convocatoria.",
        ],
      },
      {
        titulo: "📋 Declaraciones juradas obligatorias",
        parrafos: [
          "Antes de concurrir, completá en MI ISeP la Declaración Jurada Médica, la Declaración Jurada Psicológica y la Declaración Jurada Socioambiental.",
        ],
        enlaces: [{ label: "Ingresar a MI ISeP", href: "https://mi.isepsantafe.edu.ar/" }],
      },
      {
        titulo: "🎓 Sobre la carrera",
        items: [
          "Inscripción: 05 de octubre al 05 de noviembre · 300 vacantes disponibles.",
          "Duración: 3 años. Primeros 2 años presenciales (marzo 2027 a diciembre 2028) y 3.er año virtual.",
          "Sede Rosario y Recreo. Horario aproximado de 06:00 a 18:00, régimen de externado.",
          "Al cumplir el trayecto formativo se puede aspirar a Suboficial de Policía, Escalafón General, Subescalafón Investigación Criminal.",
        ],
      },
      {
        titulo: "⚠️ Incompatibilidades para la inscripción",
        items: [
          "Personal policial en actividad.",
          "Cadetes en condición regular de cursado en el ISeP.",
          "Postulantes que durante el presente año hayan participado de otros procesos de selección del ISeP y se hayan presentado a alguna etapa de evaluación.",
        ],
      },
      {
        titulo: "🎁 Beneficios durante el cursado",
        items: [
          "Boleto Educativo Gratuito durante los dos años presenciales.",
          "Cobertura médica mediante IAPOS y atención psicológica y médica.",
          "Racionamiento y sistema de becas para cursantes.",
        ],
      },
      {
        titulo: "📄 Documentos de la convocatoria",
        enlaces: [
          {
            label: "📄 Ver listado de convocados (PDF)",
            href: "/docs/LISTADO_CONVOCADOS_INVESTIGACION_CRIMINAL.pdf",
          },
          {
            label: "VER RESOLUCIÓN MINISTERIAL",
            href: "/docs/r0208334726.pdf",
          },
          {
            label: "VER PLAN DE ESTUDIO",
            href: "/docs/PLAN-ESTUDIO-RECTIFICADO-IC_260908_123707.pdf",
          },
        ],
      },
    ],
  },
};
