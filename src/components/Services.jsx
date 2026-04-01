import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Services() {
  return (
    <section className="services section--light" id="services">
      <div className="grid-pattern"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section__title section__title--center">Services</h2>
        <div className="services__grid" id="servicesGrid">
          {portfolioData.services.map((service, index) => (
            <div className="service" key={index}>
              <span className="service__icon">{service.icon}</span>
              <h3 className="service__title">{service.title}</h3>
              <p className="service__description">{service.description}</p>
              <div className="service__price">{service.price}</div>
              <ul className="service__features">
                {service.features.map((feature, i) => (
                  <li className="service__feature" key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
