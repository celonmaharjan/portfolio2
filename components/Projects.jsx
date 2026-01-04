import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.filter(p => p.featured).map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="Visit project"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View on GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="other-projects">
          <h3 className="other-projects-title">Other Notable Projects</h3>
          <div className="other-projects-list">
            {projects.filter(p => !p.featured).map((project) => (
              <div key={project.id} className="other-project-item">
                <div>
                  <h4 className="other-project-title">{project.title}</h4>
                  <p className="other-project-description">{project.description}</p>
                  <div className="other-project-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag-small">{tech}</span>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="other-project-link"
                    aria-label="Visit project"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
