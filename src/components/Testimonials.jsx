import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % portfolioData.testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? portfolioData.testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section__title">Testimonials</h2>
        <div className="testimonials__slider" id="testimonialsSlider">
          {portfolioData.testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimonial ${index === current ? 'active' : ''}`}
              style={{ display: index === current ? 'block' : 'none', opacity: index === current ? 1 : 0 }}
            >
              <img src={testimonial.avatar} alt={testimonial.name} className="testimonial__avatar" loading="lazy" />
              <blockquote className="testimonial__quote">"{testimonial.quote}"</blockquote>
              <div className="testimonial__author">{testimonial.name}</div>
              <div className="testimonial__role">{testimonial.role}</div>
              <div className="testimonial__rating">{'★'.repeat(testimonial.rating)}</div>
            </div>
          ))}
        </div>
        <div className="testimonials__controls">
          <button className="testimonials__btn testimonials__btn--prev" id="testPrev" onClick={handlePrev}>‹</button>
          <button className="testimonials__btn testimonials__btn--next" id="testNext" onClick={handleNext}>›</button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
