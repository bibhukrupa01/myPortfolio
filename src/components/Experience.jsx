import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Experience() {
  return (
    <section className="experience section--dark" id="experience">
      <div className="container">
        <h2 className="section__title section__title--center">Experience</h2>
        <div className="timeline" id="timelineContainer">
          {portfolioData.experience.map((exp, index) => (
            <div className="timeline__item" key={index}>
              <div className="timeline__marker"></div>
              <div className="timeline__content">
                <div className="timeline__period">{exp.period}</div>
                <h3 className="timeline__title">{exp.title}</h3>
                <div className="timeline__company">{exp.company}</div>
                <p className="timeline__description">{exp.description}</p>
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul>
                    {exp.achievements.map((achieve, i) => (
                      <li key={i}>{achieve}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
