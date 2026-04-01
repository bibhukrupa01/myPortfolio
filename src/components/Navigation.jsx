import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);

function Navigation({ isGSAPLoaded }) {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsActive(!isActive);
  const closeMenu = () => setIsActive(false);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    closeMenu();

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      if (isGSAPLoaded) {
        gsap.to(window, {
          duration: 1.5,
          scrollTo: {
            y: targetSection,
            offsetY: 80
          },
          ease: "power2.inOut"
        });
      } else {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <nav className="nav" id="navigation" style={{ background: scrolled ? 'rgba(15, 15, 15, 0.95)' : 'rgba(15, 15, 15, 0.9)' }}>
      <div className="nav__container">
        <a href="#home" className="nav__logo" onClick={(e) => handleLinkClick(e, '#home')}>BKP</a>
        <ul className={`nav__menu ${isActive ? 'active' : ''}`} id="navMenu">
          <li><a href="#home" className="nav__link" onClick={(e) => handleLinkClick(e, '#home')}>Home</a></li>
          <li><a href="#about" className="nav__link" onClick={(e) => handleLinkClick(e, '#about')}>About</a></li>
          <li><a href="#portfolio" className="nav__link" onClick={(e) => handleLinkClick(e, '#portfolio')}>Portfolio</a></li>
          <li><a href="#services" className="nav__link" onClick={(e) => handleLinkClick(e, '#services')}>Services</a></li>
          <li><a href="#experience" className="nav__link" onClick={(e) => handleLinkClick(e, '#experience')}>Experience</a></li>
          <li><a href="#testimonials" className="nav__link" onClick={(e) => handleLinkClick(e, '#testimonials')}>Testimonials</a></li>
          <li><a href="#contact" className="nav__link" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a></li>
        </ul>
        <div className={`nav__toggle ${isActive ? 'active' : ''}`} id="navToggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
