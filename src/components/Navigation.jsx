import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);

function Navigation({ isGSAPLoaded }) {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add scrolled class for visual change
      setScrolled(currentScrollY > 50);
      
      // Auto-hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    scrolled ? 'nav--scrolled' : '',
    hidden ? 'nav--hidden' : ''
  ].filter(Boolean).join(' ');

  return (
    <nav className={navClasses} id="navigation">
      <div className="nav__container">
        <a href="#home" className="nav__logo" onClick={(e) => handleLinkClick(e, '#home')}>BKP</a>
        <ul className={`nav__menu ${isActive ? 'active' : ''}`} id="navMenu">
          <li><a href="#home" className="nav__link" onClick={(e) => handleLinkClick(e, '#home')}>Home</a></li>
          <li><a href="#about" className="nav__link" onClick={(e) => handleLinkClick(e, '#about')}>About</a></li>
          <li><a href="#portfolio" className="nav__link" onClick={(e) => handleLinkClick(e, '#portfolio')}>Portfolio</a></li>
          <li><a href="#services" className="nav__link" onClick={(e) => handleLinkClick(e, '#services')}>Services</a></li>
          <li><a href="#experience" className="nav__link" onClick={(e) => handleLinkClick(e, '#experience')}>Experience</a></li>
          <li><a href="#testimonials" className="nav__link" onClick={(e) => handleLinkClick(e, '#testimonials')}>Reviews</a></li>
        </ul>
        <a href="#contact" className="nav__cta" onClick={(e) => handleLinkClick(e, '#contact')}>Contact Me</a>
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
