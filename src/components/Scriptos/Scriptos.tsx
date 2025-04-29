import React from "react";

const Scriptos: React.FC = () => {
  return (
    <div className="container">
      <div className="content-section">
        <h2>USCCB Scriptos App</h2>
        <p>
          A comprehensive application developed for the US Conference of
          Catholic Bishops, streamlining document management and communication
          processes.
        </p>
      </div>

      <div className="project-detail">
        <img
          src="https://placehold.co/1200x600/003366/ffffff?text=Scriptos+Dashboard"
          alt="Scriptos Dashboard"
          className="project-hero-image"
        />

        <div className="project-overview">
          <h3>Project Overview</h3>
          <p>
            Scriptos is a modern web application designed to enhance the
            document management and communication workflow for the US Conference
            of Catholic Bishops. The platform integrates PDF processing, email
            notifications, and secure cloud storage to provide a seamless
            experience for users.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <h4>📄 PDF System</h4>
            <p>
              Advanced PDF processing and management system with real-time
              updates
            </p>
          </div>
          <div className="feature-card">
            <h4>📧 Email Integration</h4>
            <p>Automated email notifications and communication system</p>
          </div>
          <div className="feature-card">
            <h4>🔒 Secure Storage</h4>
            <p>
              Enterprise-grade cloud storage with advanced security features
            </p>
          </div>
          <div className="feature-card">
            <h4>👥 User Management</h4>
            <p>Comprehensive user roles and permissions system</p>
          </div>
        </div>

        <div className="tech-stack">
          <h3>Technology Stack</h3>
          <div className="technologies">
            <span className="tech-tag">React</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">AWS</span>
            <span className="tech-tag">PDF Processing</span>
            <span className="tech-tag">Email Integration</span>
            <span className="tech-tag">Cloud Storage</span>
            <span className="tech-tag">REST API</span>
          </div>
        </div>

        <div className="project-links">
          <a
            href="https://scriptos.net"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Live Project →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Scriptos;
