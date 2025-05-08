import React from 'react';
import '../styles/components/Resume.css';

function Resume() {
  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      
      <div className="resume-section">
        <h3>Education</h3>
        <div className="resume-item">
          <h4>Bachelor in Computer Science</h4>
          <p className="institution">Texas State University</p>
          <p className="period">Class of 2023</p>
        </div>
      </div>
      
      <div className="resume-section">
        <h3>Experience</h3>
        <div className="resume-item">
          <h4>Data Engineer</h4>
          <p className="institution">USAA</p>
          <p className="period">2023 - Present</p>
          <p>
            Developed user interfaces and APIs for business automation projects, enhancing
            operational efficiency. Engineered and optimized data schemas and DDL scripts to ensure

            robust, scalable database structures for application development. Collaborated with cross-
            functional teams, including data scientists, product managers, and stakeholders, to deliver

            data solutions aligned with organizational goals. Engineered data pipelines and schemas
            supporting AI applications while collaborating with data scientists to implement
            production-ready solutions.
          </p>
        </div>
      </div>
      
      <div className="resume-section">
        <h3>Skills</h3>
        <ul className="skills-list">
          <li>Programing Languages: Python, Java, JavaScript, SQL</li>
          <li>Tools: React, SpringBoot, Gradle, Pandas, FastAPI, LangChain, Streamlit, YOLO</li>
          <li>Platforms: Control-M, Openshift, HuggingFace, SQuirreL SQL</li>
          <li>Other: Spanish, RESTful APIs, RAGs, Model Development</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume; 