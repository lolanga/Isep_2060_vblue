// Sección principal (landing)
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvaEOIMJGf0iuo77SwPXyeq58RisrCodJnHO_A5nWqC_u_d9qc1rmMIycEyPeU3tdW3_Sl9Z94S6MXFiyZxsWA4Rd0SoysiNuKJAzrbmf017_9ELCtLt5vtCVpluTIfKP93bJcuVWK5O9833CIrd8TcQ4eN0TWUVFgYpH6RHxNbux1DYMSMnSiXyywcDLLiP1zis5BTU5GO_3bSxg8lCzNK9T7gaXG7QSlj8XgKoos7-MuLTQJGzuorDGMaskd6viS06b4TT5cFyE"
          alt="hero"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text-box">
          <span className="badge">Excelencia Académica</span>

          <h1 className="hero-title">
            Formación Profesional para la <span>Seguridad Pública</span>
          </h1>

          <p className="hero-description">
            Excelencia en la capacitación policial de Santa Fe.
          </p>

          <button className="btn-cta">
            Conoce nuestras propuestas
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}