import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be integrated with backend later
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-label">Let's Connect</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              I'm currently open to new opportunities and collaborations. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="contact-methods">
              <a href={`mailto:${data.email}`} className="contact-method">
                <div className="method-icon">
                  <Mail size={22} />
                </div>
                <div className="method-text">
                  <span className="method-label">Email</span>
                  <span className="method-value">{data.email}</span>
                </div>
              </a>

              <a href={`tel:${data.phone}`} className="contact-method">
                <div className="method-icon">
                  <Phone size={22} />
                </div>
                <div className="method-text">
                  <span className="method-label">Phone</span>
                  <span className="method-value">{data.phone}</span>
                </div>
              </a>

              <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="method-icon">
                  <Linkedin size={22} />
                </div>
                <div className="method-text">
                  <span className="method-label">LinkedIn</span>
                  <span className="method-value">Connect with me</span>
                </div>
              </a>

              <a href={data.github} target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="method-icon">
                  <Github size={22} />
                </div>
                <div className="method-text">
                  <span className="method-label">GitHub</span>
                  <span className="method-value">View my repositories</span>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {isSubmitted ? (
              <div className="success-message">
                <CheckCircle size={48} />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary submit-btn">
                  Send Message
                  <Send size={18} style={{ marginLeft: '8px' }} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
