import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const Experience = ({ experiences }) => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="section-header">
          <span className="section-label">Career Journey</span>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index < experiences.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="timeline-content">
                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-position">{exp.position}</h3>
                      <h4 className="experience-company">
                        <Briefcase size={18} />
                        {exp.company}
                      </h4>
                    </div>
                    {exp.current && <span className="current-badge">Current</span>}
                  </div>

                  <div className="experience-meta">
                    <span className="meta-item">
                      <Calendar size={16} />
                      {exp.startDate} - {exp.endDate}
                    </span>
                    <span className="meta-item">
                      <MapPin size={16} />
                      {exp.location}
                    </span>
                  </div>

                  <p className="experience-description">{exp.description}</p>

                  <div className="experience-highlights">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="experience-tech">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
