import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { ShoppingCart, Smartphone, BarChart3, Utensils, Truck, Users, ExternalLink, Github, Code, Database, Globe, Building2 } from 'lucide-react';
import './styles/Portfolio.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export function Portfolio() {
  const projects = [
    {
      title: "E-commerce TechStore",
      description: "Plataforma de comercio electrónico completa con pasarela de pagos",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "E-commerce",
      categoryIcon: ShoppingCart,
      techIcons: [Code, Database, Globe, Code],
      link: "#",
      github: "#"
    },
    {
      title: "App Fitness Tracker",
      description: "Aplicación móvil para seguimiento de ejercicios y nutrición",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Firebase", "Redux"],
      category: "Mobile App",
      categoryIcon: Smartphone,
      techIcons: [Smartphone, Code, Database],
      link: "#",
      github: "#"
    },
    {
      title: "Dashboard Analytics",
      description: "Panel de control con métricas en tiempo real para empresas",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      category: "Web App",
      categoryIcon: BarChart3,
      techIcons: [Code, BarChart3, Code, Database],
      link: "#",
      github: "#"
    },
    {
      title: "Landing Restaurante",
      description: "Sitio web con reservas online y menú digital interactivo",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Tailwind", "Sanity CMS"],
      category: "Website",
      categoryIcon: Utensils,
      techIcons: [Code, Globe, Database],
      link: "#",
      github: "#"
    },
    {
      title: "App Delivery",
      description: "Plataforma de delivery con tracking en tiempo real",
      image: "/api/placeholder/400/250",
      technologies: ["Flutter", "Node.js", "Socket.io", "Maps API"],
      category: "Mobile App",
      categoryIcon: Truck,
      techIcons: [Smartphone, Code, Globe, Globe],
      link: "#",
      github: "#"
    },
    {
      title: "CRM Empresarial",
      description: "Sistema de gestión de clientes con automatización de ventas",
      image: "/api/placeholder/400/250",
      technologies: ["Angular", "NestJS", "TypeORM", "MySQL"],
      category: "Enterprise",
      categoryIcon: Building2,
      techIcons: [Code, Code, Database, Database],
      link: "#",
      github: "#"
    }
  ];

  const categories = ["Todos", "E-commerce", "Mobile App", "Web App", "Website", "Enterprise"];

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="portfolio-title">Nuestro Portafolio</h2>
          <p className="portfolio-subtitle">
            Proyectos que demuestran nuestra experiencia y calidad
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`portfolio-filter ${index === 0 ? 'portfolio-filter-active' : ''}`}
            >
              {category}
            </button>
          ))}
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
          className="portfolio-swiper"
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
          {projects.map((project, index) => {
            const CategoryIcon = project.categoryIcon;
            return (
              <SwiperSlide key={index}>
                <div className="portfolio-card">
                  <div className="portfolio-card-image">
                    <div className="portfolio-placeholder">
                      <CategoryIcon size={48} className="portfolio-placeholder-icon" />
                      <span className="portfolio-placeholder-text">Imagen del Proyecto</span>
                    </div>
                    <div className="portfolio-card-overlay">
                      <div className="portfolio-card-actions">
                        <a href={project.link} className="portfolio-action-btn">
                          <ExternalLink size={20} />
                        </a>
                        <a href={project.github} className="portfolio-action-btn">
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="portfolio-card-content">
                    <div className="portfolio-card-category">
                      <CategoryIcon size={16} className="portfolio-category-icon" />
                      {project.category}
                    </div>
                    <h3 className="portfolio-card-title">{project.title}</h3>
                    <p className="portfolio-card-description">{project.description}</p>
                    
                    <div className="portfolio-technologies">
                      {project.technologies.map((tech, techIndex) => {
                        const TechIcon = project.techIcons[techIndex];
                        return (
                          <span key={techIndex} className="portfolio-tech-tag">
                            <TechIcon size={14} className="portfolio-tech-icon" />
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="portfolio-cta">
          <Code size={48} className="portfolio-cta-icon" />
          <p className="portfolio-cta-text">¿Tienes un proyecto en mente?</p>
          <a href="#contact" className="portfolio-cta-btn">
            <ExternalLink size={20} className="mr-2" />
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
}
