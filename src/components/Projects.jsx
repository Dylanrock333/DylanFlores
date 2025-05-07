import React from 'react';
import '../styles/components/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Project Name</h3>
          <p>Description of the project and what technologies were used.</p>
          <div className="project-links">
            <a href="https://example.com/yourproject" target="_blank" rel="noreferrer">View Project</a>
            <a href="https://github.com/yourusername/yourprojectrepo" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        
        <div className="project-card">
          <h3>Another Project</h3>
          <p>Description of the project and what technologies were used.</p>
          <div className="project-links">
            <a href="https://example.com/anotherproject" target="_blank" rel="noreferrer">View Project</a>
            <a href="https://github.com/yourusername/anotherprojectrepo" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects; 