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

    window.addEventListener('scroll', handleScroll, { passive: true });
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
          duration: 1.2,
          scrollTo: {
            y: targetSection,
            offsetY: 80
          },
          ease: "power3.inOut"
        });
      } else {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const navClasses = [
    'nav',
    scrolled ? 'nav--scrolled' : ''
  ].filter(Boolean).join(' ');

  return (
    <nav className={navClasses} id="navigation">
      <div className="nav__container">
        <a href="#home" className="nav__logo" onClick={(e) => handleLinkClick(e, '#home')}>BKP</a>
        <ul className={`nav__menu ${isActive ? 'active' : ''}`} id="navMenu">
          <li><a href="#home" className="nav__link" onClick={(e) => handleLinkClick(e, '#home')}><span className="nav__link-text">Home</span></a></li>
          <li><a href="#about" className="nav__link" onClick={(e) => handleLinkClick(e, '#about')}><span className="nav__link-text">About</span></a></li>
          <li><a href="#portfolio" className="nav__link" onClick={(e) => handleLinkClick(e, '#portfolio')}><span className="nav__link-text">Portfolio</span></a></li>
          <li><a href="#services" className="nav__link" onClick={(e) => handleLinkClick(e, '#services')}><span className="nav__link-text">Services</span></a></li>
          <li><a href="#experience" className="nav__link" onClick={(e) => handleLinkClick(e, '#experience')}><span className="nav__link-text">Experience</span></a></li>
          <li><a href="#testimonials" className="nav__link" onClick={(e) => handleLinkClick(e, '#testimonials')}><span className="nav__link-text">Reviews</span></a></li>
        </ul>
        <a href="#contact" className="nav__cta" onClick={(e) => handleLinkClick(e, '#contact')}>
          <span className="nav__cta-text">Contact Me</span>
        </a>
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
