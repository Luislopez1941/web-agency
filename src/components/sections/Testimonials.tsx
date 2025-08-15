import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { MaterialIcon } from '@/components/MaterialIcon';
import './styles/Testimonials.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      position: "CEO",
      company: "TechStart Solutions",
      text: "DevAgency transformó completamente nuestra presencia digital. El equipo demostró un nivel de profesionalismo excepcional y entregaron resultados que superaron nuestras expectativas. Nuestras ventas online aumentaron un 250%.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "Carlos Ruiz",
      position: "Director de Marketing",
      company: "Digital Commerce",
      text: "Trabajar con DevAgency fue una experiencia increíble. No solo desarrollaron una aplicación móvil fantástica, sino que también nos ayudaron con la estrategia de marketing digital. Los resultados hablan por sí solos.",
      rating: 5,
      avatar: "CR"
    },
    {
      name: "Ana López",
      position: "Fundadora",
      company: "MobileFirst Startup",
      text: "La app que desarrollaron para nosotros es simplemente perfecta. Interfaz intuitiva, rendimiento excepcional y un diseño que nuestros usuarios adoran. El soporte post-lanzamiento ha sido extraordinario.",
      rating: 5,
      avatar: "AL"
    },
    {
      name: "Roberto Martínez",
      position: "Gerente General", 
      company: "Retail Express",
      text: "DevAgency no solo entregó un e-commerce de alta calidad, sino que nos educó en cada paso del proceso. Su enfoque colaborativo y transparente nos dio mucha confianza durante todo el proyecto.",
      rating: 5,
      avatar: "RM"
    },
    {
      name: "Sofia Chen",
      position: "CTO",
      company: "FinTech Innovations",
      text: "La expertise técnica del equipo es impresionante. Lograron integrar sistemas complejos de manera elegante y segura. El código es limpio, bien documentado y fácil de mantener.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Diego Hernández",
      position: "Propietario",
      company: "Restaurante Gourmet",
      text: "Nuestro sitio web ahora es nuestra mejor herramienta de ventas. Las reservas online se han triplicado y la gestión del menú digital es súper sencilla. Excelente inversión.",
      rating: 5,
      avatar: "DH"
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Lo que dicen nuestros clientes</h2>
          <p className="testimonials-subtitle">
            Testimonios reales de empresas que han transformado su negocio con nosotros
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2}
          centeredSlides={false}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="testimonials-swiper"
          breakpoints={{
            640: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3.2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonials-card">
                <div className="testimonials-card-header">
                  <MaterialIcon name="format_quote" className="testimonials-quote-icon" size="large" />
                  <div className="testimonials-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <MaterialIcon key={i} name="star" className="testimonials-star-icon" />
                    ))}
                  </div>
                </div>
                
                <p className="testimonials-text">"{testimonial.text}"</p>
                
                <div className="testimonials-author">
                  <div className="testimonials-avatar">
                    <span className="testimonials-avatar-text">{testimonial.avatar}</span>
                  </div>
                  <div className="testimonials-author-info">
                    <div className="testimonials-author-name">{testimonial.name}</div>
                    <div className="testimonials-author-position">
                      {testimonial.position} en {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="testimonials-stats">
          <div className="testimonials-stat">
            <MaterialIcon name="grade" className="testimonials-stat-icon" size="large" />
            <div className="testimonials-stat-value">4.9/5</div>
            <div className="testimonials-stat-label">Calificación promedio</div>
          </div>
          <div className="testimonials-stat">
            <MaterialIcon name="people" className="testimonials-stat-icon" size="large" />
            <div className="testimonials-stat-value">150+</div>
            <div className="testimonials-stat-label">Clientes satisfechos</div>
          </div>
          <div className="testimonials-stat">
            <MaterialIcon name="check_circle" className="testimonials-stat-icon" size="large" />
            <div className="testimonials-stat-value">95%</div>
            <div className="testimonials-stat-label">Proyectos exitosos</div>
          </div>
        </div>
      </div>
    </section>
  );
}
