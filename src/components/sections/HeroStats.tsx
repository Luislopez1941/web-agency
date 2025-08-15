import './styles/HeroStats.css';

export function HeroStats() {
  return (
    <section className="hero-stats-section">
      <div className="hero-stats-container">
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value">150+</div>
            <div className="hero-stat-label">Proyectos</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">95%</div>
            <div className="hero-stat-label">Satisfacción</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">5+</div>
            <div className="hero-stat-label">Años</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">24/7</div>
            <div className="hero-stat-label">Soporte</div>
          </div>
        </div>
      </div>
    </section>
  );
}
