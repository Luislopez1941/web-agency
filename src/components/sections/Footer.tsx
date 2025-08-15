import { Zap, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import './styles/Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Zap className="footer-icon" />
              </div>
              <span className="footer-logo-text">DevAgency</span>
            </div>
            <p className="footer-description">
              Transformamos ideas en experiencias digitales excepcionales. 
              Especializados en desarrollo web, móvil y marketing digital desde 2019.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link">
                <Github className="footer-social-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <Linkedin className="footer-social-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <Twitter className="footer-social-icon" />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-column-title">Servicios</h4>
              <ul className="footer-link-list">
                <li><a href="#" className="footer-link">Desarrollo Web</a></li>
                <li><a href="#" className="footer-link">Aplicaciones Móviles</a></li>
                <li><a href="#" className="footer-link">Marketing Digital</a></li>
                <li><a href="#" className="footer-link">SEO & SEM</a></li>
                <li><a href="#" className="footer-link">Consultoría</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-column-title">Empresa</h4>
              <ul className="footer-link-list">
                <li><a href="#" className="footer-link">Sobre Nosotros</a></li>
                <li><a href="#portfolio" className="footer-link">Portafolio</a></li>
                <li><a href="#testimonials" className="footer-link">Testimonios</a></li>
                <li><a href="#" className="footer-link">Blog</a></li>
                <li><a href="#" className="footer-link">Carreras</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-column-title">Contacto</h4>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <Mail className="footer-contact-icon" />
                  <span>info@devagency.com</span>
                </div>
                <div className="footer-contact-item">
                  <Phone className="footer-contact-icon" />
                  <span>+52 (555) 123-4567</span>
                </div>
                <div className="footer-contact-item">
                  <MapPin className="footer-contact-icon" />
                  <span>Ciudad de México, México</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              &copy; {currentYear} DevAgency. Todos los derechos reservados.
            </p>
            <div className="footer-legal">
              <a href="#" className="footer-legal-link">Política de Privacidad</a>
              <a href="#" className="footer-legal-link">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
