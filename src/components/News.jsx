// Layout tipo: izquierda grande + derecha lista + bloque promo
export default function News() {
  return (
    <section className="news-section">
      <div className="container-max">

        {/* Header */}
        <div className="section-header">
          <div>
            <span className="section-subtitle">Actualidad Institucional</span>
            <h2 className="section-title">ÚLTIMAS NOTICIAS</h2>
          </div>

          <a className="view-all" href="#">
            Ver todas las noticias
            <span className="material-symbols-outlined">open_in_new</span>
          </a>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="news-grid">

          {/* 🔵 NOTICIA DESTACADA */}
          <div className="featured-news">
            <article className="card">

              <div className="card-img-container">
                <img src="https://picsum.photos/900/500" alt="noticia" />
                <span className="news-badge">INSTITUCIONAL</span>
              </div>

              <div className="card-body">
                <span className="card-date">24 DE MAYO, 2024</span>

                <h3 className="card-title">
                  NUEVA CITACIÓN Y NOTIFICACIÓN PARA EGRESADOS
                </h3>

                <p className="card-excerpt">
                  Se informa a los egresados de la cohorte 2022–2023 sobre el cronograma de notificaciones y entrega de certificaciones finales...
                </p>

                <div className="read-more">
                  LEER MÁS
                  <span className="material-symbols-outlined">chevron_right</span>
                </div>
              </div>

            </article>
          </div>

          {/* 🟣 SIDEBAR */}
          <div className="sidebar-news">

            {/* Item */}
            <div className="mini-card">
              <div className="mini-img">
                <img src="https://picsum.photos/100?1" />
              </div>

              <div className="mini-content">
                <span className="mini-date">18 MAY</span>
                <h4 className="mini-title">
                  Capacitación en Primeros Auxilios Tácticos
                </h4>
              </div>
            </div>

            {/* Item */}
            <div className="mini-card">
              <div className="mini-img">
                <img src="https://picsum.photos/100?2" />
              </div>

              <div className="mini-content">
                <span className="mini-date">15 MAY</span>
                <h4 className="mini-title">
                  Convenio Marco con la Universidad Nacional del Litoral
                </h4>
              </div>
            </div>

            {/* Item */}
            <div className="mini-card">
              <div className="mini-img">
                <img src="https://picsum.photos/100?3" />
              </div>

              <div className="mini-content">
                <span className="mini-date">10 MAY</span>
                <h4 className="mini-title">
                  Ciclo de Conferencias sobre Derecho Procesal Penal
                </h4>
              </div>
            </div>

            {/* 🔷 PROMO */}
            <div className="calendar-promo">
              <span className="material-symbols-outlined bg-icon">
                shield
              </span>

              <h4 className="promo-title">Calendario Académico</h4>

              <p className="promo-text">
                Consulta todas las fechas importantes del ciclo lectivo 2024.
              </p>

              <button className="btn-download">
                DESCARGAR PDF
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}