import React from 'react';
import '../styles/components/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            As an engineer passionate about merging technical expertise with creative innovation, I'm captivated by the transformative potential of artificial intelligence. 
            Large Language Models can extract meaning from content, restructure information, and make agentic assessments. 
            The agenticity of AI represents just one example of how these capabilities, when thoughtfully implemented, can revolutionize numerous fields and streamline complex tasks.
            I'm a developer and AI builder who specializes in creating custom LLM-powered tools for businesses.
            With a background in data engineering and hands-on experience building fast, scalable apps, I help clients turn messy ideas or internal workflows into AI tools that actually work.
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