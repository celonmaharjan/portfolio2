import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-name">{data.name}</h3>
            <p className="footer-tagline">{data.title}</p>
          </div>

          <div className="footer-links">
            <a href={data.github} target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${data.email}`} className="footer-link" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {data.name}. All rights reserved.
          </p>
          <p className="footer-credit">
            Made with <Heart size={14} className="heart-icon" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
