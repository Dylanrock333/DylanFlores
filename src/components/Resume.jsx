import React from 'react';
import '../styles/components/Resume.css';

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="resume-section">
        <h3>Education</h3>
        <div className="resume-item">
          <h4>Bachelor in Computer Science</h4>
          <p className="institution">Texas State University</p>
          <p className="period">Class of 2023</p>
        </div>
      </div>
      
      <div className="resume-section">
        {/* <h3>Experience</h3>
        <div className="resume-item">
          <h4>Data Engineer</h4>

        </div> */}
      </div>
      
      <div className="resume-section">
        <h3>Skills</h3>
        <ul className="skills-list">
          <li>Languages: Python, JavaScript, Java, SQL</li>
          <li>Web & Backend: FastAPI, React, Node.js, Spring Boot, RESTful APIs</li>
          <li>Database: PostgreSQL, Snowflake, Vector Databases</li>
          <li>AI: LLM API, RAG Pipelines, Prompt Engineering, Embeddings</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume; 