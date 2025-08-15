"use client"

import { MaterialIcon } from '@/components/MaterialIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Code, Smartphone, TrendingUp, Search, Database, Cloud, SmartphoneIcon, PhoneIcon, Code2, MonitorSmartphone, Share2, Mail, BarChart3, Key, FileText } from 'lucide-react';
import './styles/Services.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Desarrollo Web",
      description: "Aplicaciones web modernas y responsivas",
      features: ["React & Next.js", "Node.js", "Bases de datos", "APIs REST"],
      techIcons: [Code, Database, Cloud, Code2]
    },
    {
      icon: Smartphone,
      title: "Desarrollo Móvil", 
      description: "Apps nativas y multiplataforma",
      features: ["React Native", "Flutter", "iOS Nativo", "Android Nativo"],
      techIcons: [SmartphoneIcon, PhoneIcon, Code2, MonitorSmartphone]
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      description: "Estrategias para hacer crecer tu negocio",
      features: ["Social Media", "Email Marketing", "Analytics", "Growth Hacking"],
      techIcons: [Share2, Mail, BarChart3, TrendingUp]
    },
    {
      icon: Search,
      title: "SEO & SEM",
      description: "Posicionamiento y campañas publicitarias",
      features: ["SEO Técnico", "Google Ads", "Keywords", "Reporting"],
      techIcons: [Search, Key, FileText, BarChart3]
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Nuestros Servicios</h2>
          <p className="services-subtitle">
            Soluciones integrales para impulsar tu presencia digital y hacer crecer tu negocio
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2}
          centeredSlides={false}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="services-swiper"
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
              slidesPerView: 4,
              spaceBetween: 24,
            }
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="services-card">
                <div className="services-card-header">
                  <div className="services-card-icon-wrapper">
                    <service.icon size={32} className="services-card-icon" />
                  </div>
                  <div className="services-card-content">
                    <h3 className="services-card-title">{service.title}</h3>
                    <p className="services-card-description">{service.description}</p>
                  </div>
                </div>
                
                <div className="services-card-features">
                  {service.features.map((feature, idx) => {
                    const TechIcon = service.techIcons[idx];
                    return (
                      <span key={idx} className="services-feature-tag">
                        <TechIcon size={16} className="services-feature-icon" />
                        {feature}
                      </span>
                    );
                  })}
                </div>
                
                <div className="services-card-action">
                  <a href="#contact" className="services-card-btn">
                    Cotizar
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
