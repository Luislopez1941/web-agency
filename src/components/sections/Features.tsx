"use client"

import { MaterialIcon } from '@/components/MaterialIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './styles/Features.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Features() {
  const features = [
    {
      icon: "bolt",
      title: "Desarrollo Rápido",
      description: "Entregamos proyectos en tiempo récord sin comprometer la calidad"
    },
    {
      icon: "security",
      title: "Seguridad Garantizada",
      description: "Implementamos las mejores prácticas de seguridad en todos nuestros desarrollos"
    },
    {
      icon: "support_agent",
      title: "Soporte 24/7",
      description: "Estamos disponibles para resolver cualquier incidencia las 24 horas"
    },
    {
      icon: "group",
      title: "Equipo Experto",
      description: "Profesionales certificados con años de experiencia en tecnología"
    }
  ];

  const highlights = [
    "Metodología ágil probada",
    "Código limpio y escalable", 
    "Diseño responsive garantizado",
    "SEO optimizado desde el inicio",
    "Integración con cualquier API",
    "Mantenimiento incluido"
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">¿Por qué elegirnos?</h2>
          <p className="features-subtitle">
            Combinamos experiencia, tecnología y pasión para entregar soluciones excepcionales
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.2}
          centeredSlides={false}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="features-swiper"
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
              slidesPerView: 4.2,
              spaceBetween: 24,
            }
          }}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="features-card">
                <div className="features-card-icon">
                  <MaterialIcon name={feature.icon} size="large" />
                </div>
                <h3 className="features-card-title">{feature.title}</h3>
                <p className="features-card-description">{feature.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="features-highlights">
          <h3 className="features-highlights-title">Lo que incluimos en cada proyecto:</h3>
          <div className="features-highlights-grid">
            {highlights.map((highlight, index) => (
              <div key={index} className="features-highlight-item">
                <MaterialIcon name="check_circle" className="features-highlight-icon" />
                <span className="features-highlight-text">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
