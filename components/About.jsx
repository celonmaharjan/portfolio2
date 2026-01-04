import React from 'react';
import { User, MapPin, Award } from 'lucide-react';
import './About.css';

const About = ({ data }) => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <span className="section-label">Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-info">
            <div className="info-card">
              <div className="info-icon">
                <User size={24} />
              </div>
              <div className="info-text">
                <h3>Who I Am</h3>
                <p>{data.bio}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div className="info-text">
                <h3>Location</h3>
                <p>{data.location}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Award size={24} />
              </div>
              <div className="info-text">
                <h3>Experience</h3>
                <p>2+ years in software development, specializing in full-stack web applications and microservices architecture.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
