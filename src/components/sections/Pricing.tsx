"use client"

import { CheckCircle } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import './styles/Pricing.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export function Pricing() {
  const pricingPlans = [
    {
      name: "Básico",
      description: "Perfecto para pequeños negocios",
      price: "Desde $2,500",
      duration: "proyecto",
      features: [
        "Sitio web responsivo (hasta 5 páginas)",
        "Diseño personalizado",
        "Optimización SEO básica",
        "Formulario de contacto",
        "Google Analytics",
        "Soporte por email (3 meses)"
      ],
      buttonText: "Empezar",
      buttonClass: "pricing-btn-outline",
      popular: false,
      deliveryTime: "2-3 semanas"
    },
    {
      name: "Premium", 
      description: "Ideal para empresas en crecimiento",
      price: "Desde $5,500",
      duration: "proyecto",
      features: [
        "Todo lo del plan Básico",
        "Hasta 15 páginas",
        "Panel de administración",
        "Integración con redes sociales",
        "Blog/Noticias",
        "Optimización SEO avanzada",
        "Certificado SSL",
        "Soporte prioritario (6 meses)"
      ],
      buttonText: "Empezar",
      buttonClass: "pricing-btn-primary",
      popular: true,
      deliveryTime: "3-4 semanas"
    },
    {
      name: "Enterprise",
      description: "Soluciones a medida para grandes empresas",
      price: "Personalizado",
      duration: "",
      features: [
        "Todo lo del plan Premium",
        "Páginas ilimitadas",
        "E-commerce completo",
        "Integraciones personalizadas",
        "App móvil (opcional)",
        "Consultor dedicado",
        "Hosting premium incluido",
        "Soporte 24/7 (12 meses)"
      ],
      buttonText: "Contactar",
      buttonClass: "pricing-btn-outline",
      popular: false,
      deliveryTime: "A definir"
    }
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">Planes y Precios</h2>
          <p className="pricing-subtitle">
            Soluciones adaptadas a tu presupuesto y necesidades
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
          className="pricing-swiper"
          breakpoints={{
            640: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            }
          }}
        >
          {pricingPlans.map((plan, index) => (
            <SwiperSlide key={index}>
              <div className={`pricing-card ${plan.popular ? 'pricing-card-featured' : ''}`}>
                {plan.popular && (
                  <div className="pricing-badge">
                    <span className="pricing-badge-text">MÁS POPULAR</span>
                  </div>
                )}
                
                <div className="pricing-card-header">
                  <h3 className="pricing-card-title">{plan.name}</h3>
                  <p className="pricing-card-description">{plan.description}</p>
                  
                  <div className="pricing-card-price">
                    <span className="pricing-price-amount">{plan.price}</span>
                    {plan.duration && <span className="pricing-price-duration">/{plan.duration}</span>}
                  </div>
                  
                  <div className="pricing-delivery">
                    <span className="pricing-delivery-text">Entrega: {plan.deliveryTime}</span>
                  </div>
                </div>

                <div className="pricing-card-features">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="pricing-feature">
                      <CheckCircle className="pricing-feature-icon" />
                      <span className="pricing-feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pricing-card-footer">
                  <a href="#contact" className={`pricing-btn ${plan.buttonClass}`}>
                    {plan.buttonText}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pricing-note">
          <p className="pricing-note-text">
            * Los precios pueden variar según la complejidad del proyecto. 
            Solicita una cotización personalizada para obtener un presupuesto exacto.
          </p>
        </div>
      </div>
    </section>
  );
}
