import { MaterialIcon } from '@/components/MaterialIcon';
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
          Agencia especializada en desarrollo web, aplicaciones móviles, marketing digital y SEO. 
          Llevamos tu negocio al siguiente nivel con soluciones tecnológicas innovadoras.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="hero-btn hero-btn-primary">
            <MaterialIcon name="request_quote" className="mr-2" />
            Solicitar Cotización
          </a>
          <a href="#portfolio" className="hero-btn hero-btn-outline">
            <MaterialIcon name="work" className="mr-2" />
            Ver Portafolio
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <MaterialIcon name="task_alt" className="hero-stat-icon" size="large" />
            <div className="hero-stat-value">150+</div>
            <div className="hero-stat-label">Proyectos</div>
          </div>
          <div className="hero-stat">
            <MaterialIcon name="sentiment_very_satisfied" className="hero-stat-icon" size="large" />
            <div className="hero-stat-value">95%</div>
            <div className="hero-stat-label">Satisfacción</div>
          </div>
          <div className="hero-stat">
            <MaterialIcon name="workspace_premium" className="hero-stat-icon" size="large" />
            <div className="hero-stat-value">5+</div>
            <div className="hero-stat-label">Años</div>
          </div>
          <div className="hero-stat">
            <MaterialIcon name="support" className="hero-stat-icon" size="large" />
            <div className="hero-stat-value">24/7</div>
            <div className="hero-stat-label">Soporte</div>
          </div>
        </div>
      </div>
    </section>
  );
}
