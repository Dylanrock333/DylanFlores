import React from 'react';
import '../styles/components/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Video Claim Catcher</h3>
          <p>
            An innovative application that empowers users to evaluate the credibility of statements in video content through advanced language model technology. 
            The system employs dual AI agents that analyze video transcripts to identify verifiable claims, evaluate them across multiple metrics, and conduct targeted web searches to retrieve supporting evidence from credible sources. 
            This tool transforms passive viewing into active learning by providing immediate verification, contextual understanding, and pathways for deeper investigation. 
            Video Claim Catcher ultimately bridges the gap between content consumption and critical thinking, enhancing media literacy in an era of widespread misinformation.
          </p>
          <div className="project-links">
            <a href="https://videoclaimcatcher.com/" target="_blank" rel="noreferrer">View Project</a>
          </div>
        </div>
        
        <div className="project-card">
          <h3>Movie & TV Show Rating Matcher</h3>
          <p>
            Developed a website using React and FastAPI that integrates The Movie Database API to fetch 
            current movies and TV shows and match them with their Rotten Tomatoes scores. The user can filter 
            by category, streaming service, and video type. The project delivers a seamless, real-time experience 
            for users to discover and compare streaming content ratings. 
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects; 