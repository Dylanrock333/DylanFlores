import React from 'react';
import '../styles/components/Resume.css';

function Resume() {
  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      
      <div className="resume-section">
        <h3>Education</h3>
        <div className="resume-item">
          <h4>Degree Name</h4>
          <p className="institution">Institution Name</p>
          <p className="period">2018 - 2022</p>
          <p>Brief description of your education, achievements, etc.</p>
        </div>
      </div>
      
      <div className="resume-section">
        <h3>Experience</h3>
        <div className="resume-item">
          <h4>Job Title</h4>
          <p className="institution">Company Name</p>
          <p className="period">2022 - Present</p>
          <p>Description of your responsibilities and achievements.</p>
        </div>
      </div>
      
      <div className="resume-section">
        <h3>Skills</h3>
        <ul className="skills-list">
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
          <li>Skill 4</li>
          <li>Skill 5</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume; 