import React from 'react';
import '../styles/components/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m an engineer with a passion for merging technical depth and creative innovation to build practical AI solutions. I’m especially focused on Large Language Models—their ability to extract, reshape, and reason over content can unlock real operational value when applied correctly.
            My work centers on using LLMs to build tools that automate tasks, assist teams, and surface insights from complex or unstructured data. From internal document assistants to custom APIs, I create end-to-end solutions that help businesses turn messy processes into streamlined, intelligent systems.
            With a background in data engineering and full-stack development, I’ve helped clients bring AI ideas to life quickly, without the need for large teams or long build cycles.
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