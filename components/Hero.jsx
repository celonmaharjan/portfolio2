import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = ({ data }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hero-name">{data.name}</span>
          </h1>
          <h2 className="hero-subtitle">{data.title}</h2>
          <p className="hero-tagline">{data.tagline}</p>
          
          <div className="hero-cta">
            <button className="btn-primary" onClick={scrollToContact}>
              Get In Touch
              <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </button>
            <button className="btn-secondary" onClick={scrollToProjects}>
              View Projects
            </button>
          </div>

          <div className="hero-social">
            <a href={data.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href={`mailto:${data.email}`} className="social-link" aria-label="Email">
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="decoration-circle"></div>
          <div className="decoration-line"></div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text">Scroll Down</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
