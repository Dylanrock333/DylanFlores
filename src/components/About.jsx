import React from 'react';
import '../styles/components/About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm a [Your Profession] passionate about [Your Interests]. 
            With experience in [Your Skills], I enjoy creating [What You Create].
          </p>
          <p>
            When I'm not working, you can find me [Your Hobbies/Interests].
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