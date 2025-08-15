import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { MaterialIcon } from '@/components/MaterialIcon';
import './styles/Clients.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Clients() {
  const clients = [
    { name: "TechStart Solutions", industry: "Tecnología" },
    { name: "Digital Commerce", industry: "E-commerce" },
    { name: "MobileFirst", industry: "Startup" },
    { name: "Retail Express", industry: "Retail" },
    { name: "FinTech Innovations", industry: "Fintech" },
    { name: "Restaurante Gourmet", industry: "Gastronomía" },
    { name: "Health Plus", industry: "Salud" },
    { name: "EduLearn", industry: "Educación" },
    { name: "Green Energy Co", industry: "Energía" },
    { name: "Fashion Trends", industry: "Moda" },
    { name: "Auto Solutions", industry: "Automotriz" },
    { name: "Real Estate Pro", industry: "Inmobiliaria" }
  ];

  const industries = [
    { name: "Tecnología", count: 25, icon: "computer" },
    { name: "E-commerce", count: 18, icon: "shopping_cart" },
    { name: "Fintech", count: 12, icon: "credit_card" },
    { name: "Salud", count: 15, icon: "local_hospital" },
    { name: "Educación", count: 10, icon: "school" },
    { name: "Retail", count: 20, icon: "store" }
  ];

  return (
    <section className="clients-section">
      <div className="clients-container">
        <div className="clients-header">
          <h2 className="clients-title">Nuestros Clientes</h2>
          <p className="clients-subtitle">
            Empresas de diferentes industrias confían en nosotros para sus proyectos digitales
          </p>
        </div>

        <div className="clients-industries">
          <h3 className="clients-industries-title">Industrias donde tenemos experiencia</h3>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2}
            centeredSlides={false}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="clients-industries-swiper"
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
            {industries.map((industry, index) => (
              <SwiperSlide key={index}>
                <div className="clients-industry-card">
                  <div className="clients-industry-icon">
                    <MaterialIcon name={industry.icon} size="large" />
                  </div>
                  <div className="clients-industry-info">
                    <div className="clients-industry-name">{industry.name}</div>
                    <div className="clients-industry-count">{industry.count}+ proyectos</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="clients-logos">
          <h3 className="clients-logos-title">Algunos de nuestros clientes</h3>
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
            className="clients-logos-swiper"
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
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="clients-logo-card">
                  <div className="clients-logo-placeholder">
                    <MaterialIcon name="business" size="large" className="clients-logo-icon" />
                    <span className="clients-logo-text">{client.name}</span>
                  </div>
                  <div className="clients-logo-industry">{client.industry}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="clients-cta">
          <h3 className="clients-cta-title">¿Quieres ser nuestro próximo caso de éxito?</h3>
          <p className="clients-cta-text">
            Únete a las empresas que ya están transformando su negocio con tecnología
          </p>
          <a href="#contact" className="clients-cta-btn">
            <MaterialIcon name="rocket_launch" className="mr-2" />
            Empezar mi proyecto
          </a>
        </div>
      </div>
    </section>
  );
}
