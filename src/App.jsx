import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isReady, setIsReady] = useState(false);
  const container = useRef();

  const handleLoaderComplete = useCallback(() => {
    setIsReady(true);
  }, []);

  // Back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById('backToTop');
      if (btn) {
        if (window.scrollY > 500) {
          btn.classList.add('visible');
        } else {
          btn.classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // =============================================
  // INTERACTIVE 3D TILT EFFECT — on mousemove
  // =============================================
  useEffect(() => {
    if (!isReady) return;

    const tiltElements = document.querySelectorAll('.portfolio__item, .service, .timeline__content');

    const handleMouseMove = (e) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    };

    const handleMouseLeave = (e) => {
      const el = e.currentTarget;
      el.style.transform = '';
    };

    tiltElements.forEach(el => {
      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      tiltElements.forEach(el => {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isReady]);

  useGSAP(() => {
    if (!isReady) return;

    // =============================================
    // 0. LAYERED SCROLLING (Stacked Cards Effect)
    // =============================================
    const panels = gsap.utils.toArray('.scroll-panel');
    
    // Create pins so each panel stays in place while the next one slides over it
    panels.forEach((panel, i) => {
      // Don't pin the last panel, let it scroll naturally with the footer
      if (i === panels.length - 1) return;

      ScrollTrigger.create({
        trigger: panel,
        // If panel is taller than viewport, wait until user sees the bottom before pinning
        start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    });

    // =============================================
    // 1. HERO TEXT SPLIT REVEAL (3D Character Flip)
    // =============================================
    const chars = document.querySelectorAll('.hero__name .char');
    if (chars.length > 0) {
      gsap.fromTo(chars,
        { 
          opacity: 0, 
          y: 80, 
          rotateX: -90,
          scale: 0.5,
          transformPerspective: 1000
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1,
          stagger: 0.03,
          ease: "back.out(1.7)",
          delay: 0.2
        }
      );
    }

    // Hero subtitle and tagline — smooth cascade
    const heroTimeline = gsap.timeline({ delay: 0.5 });
    heroTimeline
      .fromTo('.hero__title',
        { opacity: 0, y: 40, rotateX: -20, transformPerspective: 600 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1, ease: "power3.out" }
      )
      .fromTo('.hero__tagline',
        { opacity: 0, y: 30, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: "power3.out" }, "-=0.5"
      )
      .fromTo('.hero__cta',
        { opacity: 0, y: 30, scale: 0.85 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.7)" }, "-=0.4"
      )
      .fromTo('.hero__tags',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3"
      )
      .fromTo('.hero__scroll',
        { opacity: 0 },
        { opacity: 1, duration: 0.6 }, "-=0.2"
      );

    // =============================================
    // 2. SECTION TITLE REVEALS — Smooth 3D
    // =============================================
    gsap.utils.toArray('.section__title').forEach(title => {
      // Main title text animation
      gsap.fromTo(title,
        { 
          opacity: 0, 
          y: 80, 
          rotateX: -15,
          transformPerspective: 800,
          filter: 'blur(4px)'
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 88%",
            end: "top 40%",
            toggleActions: "play none none reverse",
            // Smooth scrub for fluid feel
          }
        }
      );

      // Underline grows in
      gsap.fromTo(title,
        { '--underline-scale': 0 },
        {
          '--underline-scale': 1,
          duration: 0.8,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // =============================================
    // 3. ALL PARAGRAPH/DESCRIPTION TEXT — Smooth Fade Up
    // =============================================
    gsap.utils.toArray('.about__description, .service__description, .portfolio__description, .timeline__description, .contact__subtitle, .hero__tagline').forEach(el => {
      gsap.fromTo(el,
        { 
          opacity: 0, 
          y: 40,
          filter: 'blur(3px)'
        },
        {
          opacity: 1, 
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // =============================================
    // 4. ABOUT SECTION — Staggered 3D Reveal
    // =============================================
    gsap.utils.toArray('.about__item').forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, x: -40, rotateY: -10, transformPerspective: 600 },
        {
          opacity: 1, x: 0, rotateY: 0,
          duration: 0.8,
          delay: index * 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 90%" }
        }
      );
    });

    // About skills title
    gsap.fromTo('.about__skills-title',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: '.about__skills-title', start: "top 88%" }
      }
    );

    // Skills pills — 3D pop-in stagger
    gsap.utils.toArray('.skill').forEach((skill, index) => {
      gsap.fromTo(skill,
        { 
          opacity: 0, 
          y: 25, 
          scale: 0.7, 
          rotateX: -30,
          transformPerspective: 400
        },
        {
          opacity: 1, y: 0, scale: 1, rotateX: 0,
          duration: 0.6,
          delay: index * 0.08,
          ease: "back.out(2)",
          scrollTrigger: { trigger: '.skills', start: "top 82%" }
        }
      );
    });

    // =============================================
    // 5. PORTFOLIO FILTER BUTTONS — Slide in
    // =============================================
    gsap.fromTo('.portfolio__filter',
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: '.portfolio__filter', start: "top 90%" }
      }
    );

    // =============================================
    // 6. PORTFOLIO CARDS — 3D Staggered Rise
    // =============================================
    gsap.utils.toArray('.portfolio__item').forEach((item, index) => {
      gsap.fromTo(item,
        { 
          opacity: 0, 
          y: 80, 
          rotateX: -15, 
          scale: 0.92,
          transformPerspective: 1000
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1,
          delay: (index % 3) * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 92%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // =============================================
    // 7. SERVICE CARDS — 3D Tilt Stagger
    // =============================================
    gsap.utils.toArray('.service').forEach((service, index) => {
      gsap.fromTo(service,
        { 
          opacity: 0, 
          y: 60, 
          rotateY: index % 2 === 0 ? -8 : 8,
          scale: 0.9,
          transformPerspective: 800
        },
        {
          opacity: 1, y: 0, rotateY: 0, scale: 1,
          duration: 0.9,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: service,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Service titles and prices
    gsap.utils.toArray('.service__title').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 92%" }
        }
      );
    });

    gsap.utils.toArray('.service__price').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)",
          scrollTrigger: { trigger: el, start: "top 92%" }
        }
      );
    });

    // Service features staggered
    gsap.utils.toArray('.service__feature').forEach((feature, index) => {
      gsap.fromTo(feature,
        { opacity: 0, x: -15 },
        {
          opacity: 1, x: 0,
          duration: 0.4,
          delay: (index % 4) * 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: feature, start: "top 95%" }
        }
      );
    });

    // =============================================
    // 8. TIMELINE — 3D Alternating Slide
    // =============================================
    gsap.utils.toArray('.timeline__item').forEach((item, index) => {
      const isOdd = index % 2 === 0;
      const content = item.querySelector('.timeline__content');
      
      if (content) {
        gsap.fromTo(content,
          { 
            opacity: 0, 
            x: isOdd ? 80 : -80,
            rotateY: isOdd ? -12 : 12,
            scale: 0.9,
            transformPerspective: 1000
          },
          {
            opacity: 1, x: 0, rotateY: 0, scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Marker pop with glow
      const marker = item.querySelector('.timeline__marker');
      if (marker) {
        gsap.fromTo(marker,
          { scale: 0, boxShadow: '0 0 0px rgba(255, 107, 53, 0)' },
          {
            scale: 1,
            boxShadow: '0 0 20px rgba(255, 107, 53, 0.4)',
            duration: 0.5,
            ease: "back.out(3)",
            scrollTrigger: {
              trigger: item,
              start: "top 85%"
            }
          }
        );
      }

      // Timeline period and title text
      const period = item.querySelector('.timeline__period');
      if (period) {
        gsap.fromTo(period,
          { opacity: 0, y: 15 },
          {
            opacity: 1, y: 0, duration: 0.5, delay: 0.2,
            ease: "power2.out",
            scrollTrigger: { trigger: item, start: "top 85%" }
          }
        );
      }

      const title = item.querySelector('.timeline__title');
      if (title) {
        gsap.fromTo(title,
          { opacity: 0, y: 15 },
          {
            opacity: 1, y: 0, duration: 0.5, delay: 0.3,
            ease: "power2.out",
            scrollTrigger: { trigger: item, start: "top 85%" }
          }
        );
      }
    });

    // =============================================
    // 9. TESTIMONIALS — 3D Card Flip In
    // =============================================
    gsap.fromTo('.testimonials__slider',
      { 
        opacity: 0, 
        y: 50, 
        rotateX: -10,
        transformPerspective: 800
      },
      {
        opacity: 1, y: 0, rotateX: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.testimonials__slider',
          start: "top 85%"
        }
      }
    );

    // =============================================
    // 10. CONTACT SECTION — 3D Split Reveal
    // =============================================
    gsap.fromTo('.contact__info',
      { 
        opacity: 0, 
        x: -60, 
        rotateY: -8,
        transformPerspective: 800
      },
      {
        opacity: 1, x: 0, rotateY: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.contact__grid',
          start: "top 82%"
        }
      }
    );

    gsap.fromTo('.contact__form',
      { 
        opacity: 0, 
        x: 60, 
        rotateY: 8,
        transformPerspective: 800,
        scale: 0.95
      },
      {
        opacity: 1, x: 0, rotateY: 0, scale: 1,
        duration: 1,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.contact__grid',
          start: "top 82%"
        }
      }
    );

    // Contact info items stagger
    gsap.utils.toArray('.contact__item').forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, x: -30, rotateY: -5, transformPerspective: 400 },
        {
          opacity: 1, x: 0, rotateY: 0,
          duration: 0.6,
          delay: index * 0.12,
          ease: "power2.out",
          scrollTrigger: { trigger: item, start: "top 90%" }
        }
      );
    });

    // Contact social links
    gsap.utils.toArray('.contact__social-link').forEach((link, index) => {
      gsap.fromTo(link,
        { opacity: 0, y: 15, scale: 0.8 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.4,
          delay: index * 0.1,
          ease: "back.out(2)",
          scrollTrigger: { trigger: '.contact__social', start: "top 92%" }
        }
      );
    });

    // Form fields staggered reveal
    gsap.utils.toArray('.form-group').forEach((group, index) => {
      gsap.fromTo(group,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0,
          duration: 0.5,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: group, start: "top 95%" }
        }
      );
    });

    // =============================================
    // 11. PARALLAX — Decorative Elements (3D Depth)
    // =============================================
    gsap.utils.toArray('.gradient-orb').forEach(orb => {
      gsap.to(orb, {
        y: -120,
        rotateZ: 15,
        ease: "none",
        scrollTrigger: {
          trigger: orb.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });
    });

    // Hero orb — deep parallax
    gsap.to('.hero__orb', {
      y: 250,
      scale: 0.7,
      opacity: 0.2,
      ease: "none",
      scrollTrigger: {
        trigger: '.hero',
        start: "top top",
        end: "bottom top",
        scrub: 1.5
      }
    });

    // Hero text parallax — text moves up faster than scroll
    gsap.to('.hero__content', {
      y: -80,
      opacity: 0.3,
      ease: "none",
      scrollTrigger: {
        trigger: '.hero',
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    // Grid patterns parallax
    gsap.utils.toArray('.grid-pattern').forEach(grid => {
      gsap.to(grid, {
        backgroundPositionY: '40px',
        ease: "none",
        scrollTrigger: {
          trigger: grid.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 2
        }
      });
    });

    // =============================================
    // 12. FLOATING TECH TAGS — Diverge on Scroll
    // =============================================
    gsap.utils.toArray('.hero__tag').forEach((tag, i) => {
      gsap.to(tag, {
        y: `${-40 - (i * 8)}`,
        x: i % 2 === 0 ? -15 : 15,
        rotateY: i % 2 === 0 ? -5 : 5,
        opacity: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: '.hero',
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });
    });

    // =============================================
    // 13. PORTFOLIO FILTER PILLS — Parallax lift
    // =============================================
    gsap.utils.toArray('.portfolio__filter-btn').forEach((btn, i) => {
      gsap.fromTo(btn,
        { opacity: 0, y: 20, scale: 0.85 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.5,
          delay: i * 0.08,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: '.portfolio__filter', start: "top 90%" }
        }
      );
    });

    // =============================================
    // 14. FOOTER — Fade up
    // =============================================
    gsap.fromTo('.footer__content',
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.footer',
          start: "top 95%"
        }
      }
    );

  }, { scope: container, dependencies: [isReady] });

  return (
    <div ref={container}>
      {!isReady && <Loader onComplete={handleLoaderComplete} isGSAPLoaded={true} />}
      <div style={{ 
        visibility: isReady ? 'visible' : 'hidden', 
        opacity: isReady ? 1 : 0, 
        transition: 'opacity 0.5s ease' 
      }}>
        <Navigation isGSAPLoaded={true} />
        <div className="scroll-panel"><Hero /></div>
        <div className="scroll-panel"><About /></div>
        <div className="scroll-panel"><Portfolio /></div>
        <div className="scroll-panel"><Services /></div>
        <div className="scroll-panel"><Experience /></div>
        <div className="scroll-panel"><Testimonials /></div>
        <div className="scroll-panel"><Contact /></div>
        <Footer isGSAPLoaded={true} />
      </div>
    </div>
  );
}

export default App;
