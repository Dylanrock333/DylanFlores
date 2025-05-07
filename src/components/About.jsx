import React from 'react';
import '../styles/components/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <p>
            Your local Tech Cowboy and Professional 'Hello World' developer.
          </p>
          <p>
            add stuff here
          </p>
        </div>
        <div className="about-image">
          {/* You can add your image here */}
          <div className="profile-placeholder">Your Photo</div>
        </div>
      </div>
    </section>
  );
}

export default About; 