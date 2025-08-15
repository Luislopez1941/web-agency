"use client"

import { useState } from 'react';
import { ThemeToggle } from "@/components/theme-toggle";
import { MaterialIcon } from '@/components/MaterialIcon';
import './styles/Header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-section">
      <nav className="header-nav">
        <div className="header-logo">
          <div className="header-logo-icon">
            <MaterialIcon name="flash_on" className="header-icon" />
          </div>
          <span className="header-logo-text">DevAgency</span>
        </div>
        
        <div className="header-nav-links">
          <a href="#features" className="header-nav-link">Características</a>
          <a href="#services" className="header-nav-link">Servicios</a>
          <a href="#pricing" className="header-nav-link">Precios</a>
          <a href="#portfolio" className="header-nav-link">Portafolio</a>
          <a href="#testimonials" className="header-nav-link">Testimonios</a>
        </div>

                <div className="header-nav-actions">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="header-mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <MaterialIcon 
            name={isMenuOpen ? "close" : "menu"} 
            className="header-mobile-menu-icon" 
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="header-mobile-overlay" onClick={closeMenu}>
          <div className="header-mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="header-mobile-menu-header">
              <div className="header-logo">
                <div className="header-logo-icon">
                  <MaterialIcon name="flash_on" className="header-icon" />
                </div>
                <span className="header-logo-text">DevAgency</span>
              </div>
              <button 
                className="header-mobile-close-btn"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <MaterialIcon name="close" className="header-mobile-close-icon" />
              </button>
            </div>
            
            <div className="header-mobile-nav-links">
              <a href="#features" className="header-mobile-nav-link" onClick={closeMenu}>
                Características
              </a>
              <a href="#services" className="header-mobile-nav-link" onClick={closeMenu}>
                Servicios
              </a>
              <a href="#pricing" className="header-mobile-nav-link" onClick={closeMenu}>
                Precios
              </a>
              <a href="#portfolio" className="header-mobile-nav-link" onClick={closeMenu}>
                Portafolio
              </a>
              <a href="#testimonials" className="header-mobile-nav-link" onClick={closeMenu}>
                Testimonios
              </a>
            </div>

            <div className="header-mobile-actions">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
