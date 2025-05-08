import React from 'react';
import '../styles/components/Pitch.css';

function Pitch() {
  return (
    <section id="pitch" className="pitch-section">
      <h2>Custom AI & LLM Solutions That Work for You</h2>
      <div className="pitch-content">
        <div className="pitch-card">
          <p>
            I turn business ideas and workflows into real, working AI solutions that automate tasks and drive efficiency. 
            Get more from your data with tools powered by Large Language Models. 
            Whether it's chatbots, retrieval systems, or end-to-end automation—you bring the challenge, I'll handle the build.
          </p>
          <div className="pitch-cta">
            <p>Interested? Let's talk</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pitch; 