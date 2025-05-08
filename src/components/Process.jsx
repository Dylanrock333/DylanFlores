import React from 'react';
import '../styles/components/Process.css';

function Process() {
  return (
    <section id="process" className="process-section">
      <h2>How It Works</h2>
      <div className="process-grid">
        <div className="process-card">
          <h3>1. Discovery</h3>
          <p>We'll have a quick call to understand your goals, data, and what success looks like.</p>
        </div>

        <div className="process-card">
          <h3>2. Proposal</h3>
          <p>I'll scope the work and send you a plan with pricing, timeline, and deliverables.</p>
        </div>

        <div className="process-card">
          <h3>3. Build</h3>
          <p>I'll develop your AI solution (app or API) and send regular updates as we go.</p>
        </div>

        <div className="process-card">
          <h3>4. Delivery</h3>
          <p>You get a working solution, full documentation, and optional handoff or deployment support.</p>
        </div>

        <div className="process-card">
          <h3>5. Support (Optional)</h3>
          <p>If you want ongoing updates or hosting, I offer monthly support packages.</p>
        </div>
      </div>
    </section>
  );
}

export default Process; 