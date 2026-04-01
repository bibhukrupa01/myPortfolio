import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function Portfolio() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = portfolioData.projects.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'featured') return p.featured;
    if (filter === 'web') return p.category.toLowerCase().includes('web') || p.category.toLowerCase().includes('ai');
    if (filter === '3d') return p.category.toLowerCase().includes('3d') || p.category.toLowerCase().includes('ar');
    return true;
  });

  return (
    <section className="portfolio section--dark" id="portfolio">
      {/* Decorative orb */}
      <div className="gradient-orb gradient-orb--accent" style={{ 
        width: '400px', height: '400px', 
        top: '-10%', right: '-5%',
        opacity: 0.15
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section__title section__title--center">Portfolio</h2>
        <div className="portfolio__filter">
          <button 
            className={`portfolio__filter-btn ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => setFilter('all')}>All</button>
          <button 
            className={`portfolio__filter-btn ${filter === 'featured' ? 'active' : ''}`} 
            onClick={() => setFilter('featured')}>Featured</button>
          <button 
            className={`portfolio__filter-btn ${filter === 'web' ? 'active' : ''}`} 
            onClick={() => setFilter('web')}>Web Development</button>
          <button 
            className={`portfolio__filter-btn ${filter === '3d' ? 'active' : ''}`} 
            onClick={() => setFilter('3d')}>3D Experience</button>
        </div>
        <div className="portfolio__grid" id="portfolioGrid">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`portfolio__item ${project.featured ? 'featured' : ''}`} 
              data-category={project.category.toLowerCase().replace(/[^a-z0-9]/g, '')}>
              <img src={project.image} alt={project.title} className="portfolio__image" loading="lazy" />
              <div className="portfolio__content">
                <h3 className="portfolio__title">{project.title}</h3>
                <p className="portfolio__description">{project.description}</p>
                <div className="portfolio__technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="portfolio__tech">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="portfolio__link" target="_blank" rel="noreferrer">
                  View Project <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
