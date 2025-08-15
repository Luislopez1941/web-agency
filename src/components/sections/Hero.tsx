import './styles/Hero.css';

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">
          Transformamos tus ideas en 
          <span className="hero-highlight"> realidad digital</span>
        </h1>
        
        <p className="hero-subtitle">
          Agencia especializada en desarrollo web y aplicaciones móviles
        </p>

        <div className="hero-actions">
          <a href="#contact" className="hero-btn hero-btn-primary">
            Solicitar Cotización
          </a>
          <a href="#portfolio" className="hero-btn hero-btn-outline">
            Ver Portafolio
          </a>
        </div>
      </div>
    </section>
  );
}
