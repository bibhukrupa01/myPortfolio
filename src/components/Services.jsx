import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section__title">Services</h2>
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
