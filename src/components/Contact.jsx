import React from 'react';
import '../styles/components/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p>Feel free to reach out to me via email or LinkedIn.</p>
          <div className="header-contact">
            <a href="mailto:dylanf36200@gmail.com">dylanf36200@gmail.com</a>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/dylan-c-flores/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      
      </div>
    </section>
  );
}

export default Contact; 