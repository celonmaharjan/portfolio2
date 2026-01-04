import React from 'react';
import { Code2, Database, Wrench, Layers } from 'lucide-react';
import './Skills.css';

const Skills = ({ skills }) => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 size={24} />,
      items: skills.frontend,
      color: '#d9fb06'
    },
    {
      title: 'Backend',
      icon: <Layers size={24} />,
      items: skills.backend,
      color: '#d9fb06'
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      items: skills.databases,
      color: '#d9fb06'
    },
    {
      title: 'Tools & DevOps',
      icon: <Wrench size={24} />,
      items: skills.tools,
      color: '#d9fb06'
    },
    {
      title: 'Architecture',
      icon: <Layers size={24} />,
      items: skills.architecture,
      color: '#d9fb06'
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <span className="section-label">My Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <div className="category-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="category-items">
                {category.items.map((item, idx) => (
                  <span key={idx} className="skill-item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
