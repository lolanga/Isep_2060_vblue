/**
 * pages/ArchivoNoticias.jsx
 *
 * Histórico de noticias por año (antes del corte del listado principal).
 * Cada año se expande bajo demanda (lazy) y muestra sus notas en orden.
 * El conteo por año sale del índice liviano de noticias (no del contenido).
 *
 * Ruta: /noticias/archivo
 */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import SEO from "../components/SEO";
import { BreadcrumbLd } from "../components/JsonLd";
import { ANIOS_ARCHIVO, cargarNoticiasArchivo } from "../utils/noticias";
import { cargarIndiceNoticias } from "../utils/buscarNoticias";

/** Página de histórico de noticias organizado por año. */
export default function ArchivoNoticias() {
  const [conteos, setConteos] = useState(null);
  const [abiertos, setAbiertos] = useState({});
  const [cargados, setCargados] = useState({});
  const [cargando, setCargando] = useState({});

  // Conteo por año a partir del índice liviano (sin cargar los contenidos).
  useEffect(() => {
    let activo = true;
    cargarIndiceNoticias().then((indice) => {
      if (!activo) return;
      const c = {};
      indice.forEach((e) => {
        if (ANIOS_ARCHIVO.includes(e.anio)) c[e.anio] = (c[e.anio] || 0) + 1;
      });
      setConteos(c);
    });
    return () => { activo = false; };
  }, []);

  const toggleAnio = async (anio) => {
    setAbiertos((a) => ({ ...a, [anio]: !a[anio] }));
    if (!cargados[anio] && !cargando[anio]) {
      setCargando((s) => ({ ...s, [anio]: true }));
      const lista = await cargarNoticiasArchivo(anio);
      setCargados((s) => ({ ...s, [anio]: lista }));
      setCargando((s) => ({ ...s, [anio]: false }));
    }
  };

  return (
    <main id="main-content" className="archivo-noticias-page">
      <SEO
        title="Histórico de noticias"
        description="Archivo por año de las noticias del ISeP publicadas antes de 2026"
      />

      <section className="archivo-hero">
        <div className="container-max">
          <span className="badge">Hemeroteca</span>
          <h1 className="hero-title">
            Histórico de <span>Noticias</span>
          </h1>
          <p className="hero-description">
            Noticias anteriores a 2026, organizadas por año.
          </p>
        </div>
      </section>

      <div className="container-max noticias-breadcrumb-wrap">
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Noticias", to: "/noticias" },
            { label: "Histórico" },
          ]}
        />
        <BreadcrumbLd
          items={[
            { label: "Inicio", to: "/" },
            { label: "Noticias", to: "/noticias" },
            { label: "Histórico" },
          ]}
        />
      </div>

      <div className="container-max archivo-body">
        <div className="archivo-intro">
          <p>
            El listado de <Link to="/noticias">noticias</Link> muestra las publicaciones
            recientes. Acá se conserva todo el material anterior a 2026.
          </p>
        </div>

        {ANIOS_ARCHIVO.length === 0 ? (
          <p>No hay noticias históricas por el momento.</p>
        ) : (
          ANIOS_ARCHIVO.map((anio) => {
            const abierto = !!abiertos[anio];
            const lista = cargados[anio];
            return (
              <section key={anio} className={`archivo-anio${abierto ? " archivo-anio--open" : ""}`}>
                <button
                  type="button"
                  className="archivo-anio__header"
                  onClick={() => toggleAnio(anio)}
                  aria-expanded={abierto}
                >
                  <span className="archivo-anio__anio">{anio}</span>
                  <span className="archivo-anio__count">
                    {conteos ? `${conteos[anio] || 0} notas` : "…"}
                  </span>
                  <span className="material-symbols-outlined archivo-anio__chevron">
                    expand_more
                  </span>
                </button>

                {abierto && (
                  <div className="archivo-anio__cuerpo">
                    {!lista && cargando[anio] && (
                      <div className="archivo-cargando">
                        <div className="spinner" aria-hidden="true" />
                      </div>
                    )}
                    {lista && lista.length === 0 && (
                      <p className="archivo-vacio">No hay notas de este año.</p>
                    )}
                    {lista && lista.length > 0 && (
                      <ul className="archivo-lista">
                        {lista.map((n) => (
                          <li key={n.id}>
                            <Link to={`/noticias/${n.id}`} className="archivo-item">
                              <span className="archivo-item__fecha">{n.fechaCorta}</span>
                              <span className={`badge-categoria badge-categoria--${n.categoria.toLowerCase()} archivo-item__cat`}>
                                {n.categoria}
                              </span>
                              <span className="archivo-item__titulo">{n.titulo}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </section>
            );
          })
        )}

        <Link to="/noticias" className="btn-cta btn-inline archivo-volver">
          <span className="material-symbols-outlined">arrow_back</span>
          Volver a noticias
        </Link>
      </div>
    </main>
  );
}