export default function Footer() {
  return (
    <footer>

      <div className="footer-grid">

        {/* Marca */}
        <div className="footer-brand">
          <h4>ISeP Santa Fe</h4>

          <p>
            Comprometidos con la excelencia académica y profesional.
            Desde el Reclutamiento hasta el retiro.
          </p>

            <p>
              Buscanos en nuestras redes
            </p>
          <div className="social-links">
            <span className="social-link">facebook</span>
            <span className="social-link">YouTube</span>
            <span className="social-link">Instagram</span>
          </div>
        </div>

        {/* Contacto */}
        <div className="footer-col">
          <h5>Contacto</h5>

          <ul className="contact-list">
            <li>
              <span className="material-symbols-outlined">location_on</span>
              <span>Leandro N. Alem 2050, Santa Fe</span>
            </li>

            <li>
              <span className="material-symbols-outlined">call</span>
              <span>+54 342 457-9000</span>
            </li>

            <li>
              <span className="material-symbols-outlined">mail</span>
              <span>contacto@isepsantafe.edu.ar</span>
            </li>
          </ul>
        </div>

        {/* Navegación */}
        <div className="footer-col">
          <h5>Navegación</h5>

          <ul className="footer-links">
            <li><a href="#">Privacidad</a></li>
            <li><a href="#">Términos y condiciones</a></li>
            <li><a href="#">Mapa del sitio</a></li>
            <li><a href="#">Transparencia</a></li>
          </ul>
        </div>

        {/* Mapa */}
        <div className="footer-col">
          <h5>Mapa de Ubicación</h5>

          <div className="map-box">
            <img src="https://picsum.photos/300/150" alt="mapa" />
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <span className="copyright">
          © 2024 INSTITUTO DE SEGURIDAD PÚBLICA DE SANTA FE
        </span>

        <div className="footer-legal">
          <span className="legal-text">PROVINCIA DE SANTA FE</span>
          <div className="legal-icon">
            <span className="material-symbols-outlined">account_balance</span>
          </div>
        </div>
      </div>

    </footer>
  );
}