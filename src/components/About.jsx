import React from 'react';
import { portfolioData } from '../data/portfolioData';

function About() {
  const { personalInfo, skills } = portfolioData;

  return (
    <section className="about section--light" id="about">
      {/* Grid pattern overlay */}
      <div className="grid-pattern"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section__title">About Me</h2>
        <div className="about__grid">
          <div className="about__content">
            <p className="about__description">{personalInfo.description}</p>
            <div className="about__info">
              <div className="about__item">
                <span className="about__label">Location</span>
                <span className="about__value">{personalInfo.location}</span>
              </div>
              <div className="about__item">
                <span className="about__label">Email</span>
                <span className="about__value">{personalInfo.email}</span>
              </div>
              <div className="about__item">
                <span className="about__label">Phone</span>
                <span className="about__value">{personalInfo.phone}</span>
              </div>
            </div>
          </div>
          <div className="about__skills">
            <h3 className="about__skills-title">Skills & Technologies</h3>
            <div className="skills" id="skillsContainer">
              {skills.map((skill, index) => (
                <div className="skill" key={index}>
                  <div className="skill__info">
                    <span className="skill__name">{skill.name}</span>
                    <span className="skill__level">{skill.level}%</span>
                  </div>
                  <div className="skill__bar">
                    <div className="skill__progress" data-width={skill.level} style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
