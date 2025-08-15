import { MaterialIcon } from '@/components/MaterialIcon';
import './styles/CTA.css';

export function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">¿Listo para llevar tu negocio al siguiente nivel?</h2>
          <p className="cta-subtitle">
            Contáctanos hoy y descubre cómo podemos transformar tu idea en una solución digital exitosa
          </p>
          
          <div className="cta-benefits">
            <div className="cta-benefit">
              <MaterialIcon name="event" className="cta-benefit-icon" />
              <span className="cta-benefit-text">Consulta gratuita de 30 min</span>
            </div>
            <div className="cta-benefit">
              <MaterialIcon name="people" className="cta-benefit-icon" />
              <span className="cta-benefit-text">Propuesta personalizada</span>
            </div>
            <div className="cta-benefit">
              <MaterialIcon name="schedule" className="cta-benefit-icon" />
              <span className="cta-benefit-text">Respuesta en 24 horas</span>
            </div>
          </div>

          <div className="cta-actions">
            <a href="mailto:info@devagency.com" className="cta-btn cta-btn-primary">
              <MaterialIcon name="group" className="cta-btn-icon" />
              Agendar Consulta Gratuita
            </a>
            <a href="https://wa.me/1234567890" className="cta-btn cta-btn-outline">
              <MaterialIcon name="chat" className="cta-btn-icon" />
              WhatsApp
            </a>
          </div>

          <div className="cta-contact-info">
            <div className="cta-contact-item">
              <MaterialIcon name="email" className="mr-2" />
              <strong>Email:</strong> info@devagency.com
            </div>
            <div className="cta-contact-item">
              <MaterialIcon name="phone" className="mr-2" />
              <strong>Teléfono:</strong> +52 (555) 123-4567
            </div>
            <div className="cta-contact-item">
              <MaterialIcon name="location_on" className="mr-2" />
              <strong>Ubicación:</strong> Ciudad de México, México
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
