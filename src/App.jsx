import React, { useState, useEffect, useRef } from 'react';
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

  const handleLoaderComplete = () => {
    setIsReady(true);
  };

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

  useGSAP(() => {
    if (!isReady) return;

    // =============================================
    // 1. HERO TEXT SPLIT REVEAL
    // =============================================
    const chars = document.querySelectorAll('.hero__name .char');
    if (chars.length > 0) {
      gsap.fromTo(chars,
        { opacity: 0, y: 60, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.03,
          ease: "back.out(1.7)",
          delay: 0.2
        }
      );
    }

    // Hero subtitle and tagline
    const heroTimeline = gsap.timeline({ delay: 0.5 });
    heroTimeline
      .fromTo('.hero__title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
      .fromTo('.hero__tagline',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4"
      )
      .fromTo('.hero__cta',
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.3"
      )
      .fromTo('.hero__tags',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.2"
      )
      .fromTo('.hero__scroll',
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }, "-=0.1"
      );

    // =============================================
    // 2. SECTION TITLE REVEALS (Text Split)
    // =============================================
    gsap.utils.toArray('.section__title').forEach(title => {
      gsap.fromTo(title,
        { opacity: 0, y: 60, skewY: 2 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate the ::after underline
      gsap.fromTo(title,
        { '--underline-scale': 0 },
        {
          '--underline-scale': 1,
          duration: 0.8,
          delay: 0.3,
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
    // 3. ABOUT SECTION - Staggered Reveal
    // =============================================
    gsap.fromTo('.about__description',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: '.about__description', start: "top 85%" }
      }
    );

    gsap.utils.toArray('.about__item').forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: item, start: "top 90%" }
        }
      );
    });

    // Skills pills staggered animation
    gsap.utils.toArray('.skill').forEach((skill, index) => {
      gsap.fromTo(skill,
        { opacity: 0, y: 20, scale: 0.8 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.5,
          delay: index * 0.08,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: '.skills', start: "top 80%" }
        }
      );
    });

    // =============================================
    // 4. PORTFOLIO CARDS - Staggered Rise
    // =============================================
    gsap.utils.toArray('.portfolio__item').forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, y: 60, rotateX: -10 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          delay: (index % 3) * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // =============================================
    // 5. SERVICE CARDS - Slide Up Stagger
    // =============================================
    gsap.utils.toArray('.service').forEach((service, index) => {
      gsap.fromTo(service,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 0.7,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: service,
            start: "top 88%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // =============================================
    // 6. TIMELINE - Alternating Slide In
    // =============================================
    gsap.utils.toArray('.timeline__item').forEach((item, index) => {
      const isOdd = index % 2 === 0;
      gsap.fromTo(item.querySelector('.timeline__content'),
        { opacity: 0, x: isOdd ? 50 : -50 },
        {
          opacity: 1, x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Marker pop
      gsap.fromTo(item.querySelector('.timeline__marker'),
        { scale: 0 },
        {
          scale: 1,
          duration: 0.4,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: item,
            start: "top 85%"
          }
        }
      );
    });

    // =============================================
    // 7. TESTIMONIALS - Fade In
    // =============================================
    gsap.fromTo('.testimonials__slider',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.testimonials__slider',
          start: "top 85%"
        }
      }
    );

    // =============================================
    // 8. CONTACT SECTION - Split Reveal
    // =============================================
    gsap.fromTo('.contact__info',
      { opacity: 0, x: -40 },
      {
        opacity: 1, x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.contact__grid',
          start: "top 80%"
        }
      }
    );

    gsap.fromTo('.contact__form',
      { opacity: 0, x: 40 },
      {
        opacity: 1, x: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.contact__grid',
          start: "top 80%"
        }
      }
    );

    // =============================================
    // 9. PARALLAX on Decorative Elements
    // =============================================
    gsap.utils.toArray('.gradient-orb').forEach(orb => {
      gsap.to(orb, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: orb.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });
    });

    // Hero orb parallax
    gsap.to('.hero__orb', {
      y: 200,
      scale: 0.8,
      ease: "none",
      scrollTrigger: {
        trigger: '.hero',
        start: "top top",
        end: "bottom top",
        scrub: 1.5
      }
    });

    // Grid patterns subtle parallax
    gsap.utils.toArray('.grid-pattern').forEach(grid => {
      gsap.to(grid, {
        backgroundPositionY: '30px',
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
    // 10. FLOATING TECH TAGS
    // =============================================
    gsap.utils.toArray('.hero__tag').forEach((tag, i) => {
      gsap.to(tag, {
        y: `${-30 - (i * 5)}`,
        ease: "none",
        scrollTrigger: {
          trigger: '.hero',
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });
    });

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
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer isGSAPLoaded={true} />
      </div>
    </div>
  );
}

export default App;
