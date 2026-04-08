// Componente de navegación superior
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="brand">ISeP Santa Fe</div>

        {/* Navegación desktop */}
        <div className="nav-links">
          <a className="nav-link active" href="#">Inicio</a>
          <a className="nav-link" href="#">Institucional</a>
          <a className="nav-link" href="#">Escuelas</a>
          <a className="nav-link" href="#">Secretaría Académica</a>
          <a className="nav-link" href="#">Noticias</a>
        </div>

        {/* Acciones */}
        <div className="nav-actions">
          {/* <button className="btn-mail">Correo Institucional</button> */}
          <button className="btn-isep">Mi ISeP</button>
        </div>
      </div>
    </nav>
  );
}