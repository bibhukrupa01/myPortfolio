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

  useGSAP(() => {
    if (!isReady) return;

    // Main Animations (Hero)
    const heroTimeline = gsap.timeline();
    heroTimeline
      .fromTo('.hero__name',
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
      .fromTo('.hero__title',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.5"
      )
      .fromTo('.hero__tagline',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3"
      )
      .fromTo('.hero__cta',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2"
      );

    // Scroll Animations
    gsap.utils.toArray('.section__title').forEach(title => {
      gsap.fromTo(title,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            end: "bottom 15%"
          }
        }
      );
    });

    gsap.utils.toArray('.skill').forEach((skill, index) => {
      gsap.fromTo(skill,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skill,
            start: "top 85%"
          }
        }
      );

      const progressBar = skill.querySelector('.skill__progress');
      if (progressBar) {
        const width = progressBar.getAttribute('data-width');
        gsap.fromTo(progressBar,
          { width: '0%' },
          {
            width: width + '%',
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: skill,
              start: "top 75%"
            }
          }
        );
      }
    });

    gsap.utils.toArray('.portfolio__item').forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, y: 50, rotationX: -15 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          delay: (index % 3) * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%"
          }
        }
      );
    });

  }, { scope: container, dependencies: [isReady] });

  return (
    <div ref={container}>
      {!isReady && <Loader onComplete={handleLoaderComplete} isGSAPLoaded={true} />}
      <div style={{ visibility: isReady ? 'visible' : 'hidden', opacity: isReady ? 1 : 0, transition: 'opacity 0.5s ease' }}>
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
