import React from 'react';
import '../styles/components/Services.css';

function Services() {
  return (
    <section id="services" className="services-section">
      <h2>Services I Offer</h2>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">🛠️</div>
          <h3>Custom AI-Powered Applications</h3>
          <p>End-to-end tools to help you summarize, answer, automate, or analyze. Built to match your workflow</p>
        </div>

        <div className="service-card">
          <div className="service-icon">🔌</div>
          <h3>LLM API Integrations</h3>
          <p>Bring intelligent features to your product with custom-built API endpoints for search, sorting, answering, and more</p>
        </div>

        <div className="service-card">
          <div className="service-icon">🧠</div>
          <h3>Document & Knowledge Assistants</h3>
          <p>Chat with your files, contracts, policies, or reports using tailored knowledge bots</p>
        </div>

        <div className="service-card">
          <div className="service-icon">📊</div>
          <h3>Data Insights & Text Analysis</h3>
          <p>Extract insights from your data, whether it's documents, chats, or voice with AI that understands context and tone</p>
        </div>

        <div className="service-card">
          <div className="service-icon">🔁</div>
          <h3>Process Automation</h3>
          <p>Use AI to eliminate repetitive tasks and streamline manual workflows</p>
        </div>

        <div className="service-card">
          <div className="service-icon">🤝</div>
          <h3>LLM Integration Consulting</h3>
          <p>Not sure what's possible? I'll help you explore, scope, and implement smart AI solutions that fit your business</p>
        </div>
      </div>
    </section>
  );
}

export default Services; 