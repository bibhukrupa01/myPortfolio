import React, { useEffect, useRef } from 'react';

function Hero() {
  const nameRef = useRef(null);

  // Split text into spans for character animation
  useEffect(() => {
    const nameEl = nameRef.current;
    if (!nameEl) return;
    
    const text = nameEl.textContent;
    nameEl.innerHTML = '';
    
    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.transitionDelay = `${i * 0.03}s`;
      nameEl.appendChild(span);
    });
  }, []);

  const techTags = [
    'React.js',
    'Node.js',
    'Three.js',
    'JavaScript',
    'Full Stack'
  ];

  return (
    <section className="hero" id="home">
      {/* Background elements */}
      <div className="hero__bg">
        <div className="hero__orb"></div>
        <div className="hero__grid-bg"></div>
      </div>

      {/* Main content */}
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__name" ref={nameRef}>BIBHU KRUPA PRADHAN</h1>
            <p className="hero__title">Full Stack Web Developer</p>
            <p className="hero__tagline">Crafting Digital Experiences with Precision</p>
            <a href="#contact" className="btn btn--primary hero__cta">
              Let's Work Together
              <span style={{ marginLeft: '0.3rem' }}>→</span>
            </a>
          </div>
        </div>

        {/* Floating tech tags */}
        <div className="hero__tags">
          {techTags.map((tag, index) => (
            <div className="hero__tag" key={index}>
              <span className="hero__tag-dot"></span>
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
