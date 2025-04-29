import React from "react";
import Scriptos_Home from "./Scriptos Home.png";
import Scriptos_Login from "./Scriptos Login.png";
import USCCB_Logo from "./usccb.png";
import "./Scriptos.css";

const Scriptos: React.FC = () => {
  return (
    <div className="container">
      {/* Banner Section */}
      <div className="scriptos-banner">
        <h2>USCCB Scriptos App</h2>
        <p>
          A comprehensive digital platform that revolutionizes the Declaration
          of Conformity (DoC) process for the US Conference of Catholic Bishops,
          transforming a largely manual document review system into a
          streamlined digital workflow.
        </p>
        <div className="scriptos-image-container">
          <img src={Scriptos_Home} alt="Scriptos Dashboard" />
        </div>
      </div>

      {/* Project Overview Card */}
      <div className="project-overview-card">
        <h3>Project Overview</h3>
        <p>
          Since the 1990s, the USCCB's Subcommittee on the Catechism has
          overseen the national conformity review process for catechetical texts
          referencing the Catechism. The Scriptos application digitizes this
          process, allowing publishers and consultants to manage text reviews in
          a time-effective, efficient, and secure way by automating the
          management of Consultants' comments and the entire workflow for
          issuing a Declaration of Conformity.
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <h4>
              <span className="feature-icon">📄</span>
              Digital DoC System
            </h4>
            <p>
              Digital Declaration of Conformity (DoC) issuance for manuscripts
              through a centralized workflow
            </p>
          </div>
          <div className="feature-item">
            <h4>
              <span className="feature-icon">⚙️</span>
              Automated Workflow
            </h4>
            <p>
              Streamlined process automation replacing manual email-based
              reviews with structured digital steps
            </p>
          </div>
          <div className="feature-item">
            <h4>
              <span className="feature-icon">🔒</span>
              Secure Repository
            </h4>
            <p>
              Access-controlled, encrypted storage with logical separation of
              publisher data
            </p>
          </div>
          <div className="feature-item">
            <h4>
              <span className="feature-icon">👥</span>
              User Management
            </h4>
            <p>
              Comprehensive system for managing publishers, consultants, and
              administrators
            </p>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="features-section">
        <h3>Key System Features</h3>
        <div className="feature-columns">
          <div className="feature-column">
            <div className="feature-box">
              <h4>Easy to Use UI</h4>
              <p>
                Intuitive interface for managing users, proposals, projects, and
                summaries
              </p>
            </div>
            <div className="feature-box">
              <h4>Comment System</h4>
              <p>
                Sophisticated annotation tools for document review and feedback
              </p>
            </div>
            <div className="feature-box">
              <h4>Document Versioning</h4>
              <p>Track changes across multiple manuscript revisions</p>
            </div>
          </div>
          <div className="feature-column">
            <div className="feature-box">
              <h4>Secure Architecture</h4>
              <ul>
                <li>Azure cloud hosting</li>
                <li>ReCaptcha validation</li>
                <li>Secure password storage</li>
                <li>Multi-layer security</li>
                <li>Back-end validation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className="process-section">
        <h3>Development Process</h3>
        <div className="process-columns">
          <div className="process-column">
            <div className="process-box">
              <h4>Agile Development</h4>
              <ul>
                <li>Interactive approach with stakeholders</li>
                <li>Flexibility with adaptive requirements</li>
                <li>Think-tank style collaboration meetings</li>
                <li>Regular product demonstrations</li>
                <li>2-week sprint cycles</li>
              </ul>
            </div>
          </div>
          <div className="process-column">
            <div className="process-box">
              <h4>Development Tools</h4>
              <ul>
                <li>GitLab Repository with CI/CD pipeline</li>
                <li>Google Drive for documentation</li>
                <li>Jira for Agile workflow management</li>
                <li>Model-View-Controller architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Stakeholders Section */}
      <div className="stakeholders-section">
        <h3>Project Stakeholders</h3>
        <div className="stakeholders-grid">
          <div className="stakeholder-card">
            <h4>Jon Crumpacker</h4>
            <p>Consultant, USCCB</p>
          </div>
          <div className="stakeholder-card">
            <h4>Andrew Montanaro</h4>
            <p>Consultant, USCCB</p>
          </div>
          <div className="stakeholder-card">
            <h4>Fr. Daniel Mahan</h4>
            <p>Director of the Institute on the Catechism, USCCB</p>
          </div>
          <div className="stakeholder-card">
            <h4>Jim Wessel</h4>
            <p>Professor of Software Engineering, FUS</p>
          </div>
          <div className="stakeholder-card">
            <h4>Bryce Meyer</h4>
            <p>Professor of Software Engineering, FUS</p>
          </div>
        </div>
      </div>

      {/* Technology Stack Section */}
      <div className="tech-stack-section">
        <h3>Technology Stack</h3>
        <div className="tech-tags">
          <span className="tech-tag">Ruby on Rails</span>
          <span className="tech-tag">React</span>
          <span className="tech-tag">Material UI</span>
          <span className="tech-tag">Azure</span>
          <span className="tech-tag">PDF Processing</span>
          <span className="tech-tag">MVC Architecture</span>
          <span className="tech-tag">CI/CD</span>
          <span className="tech-tag">ReCaptcha</span>
        </div>
      </div>

      {/* Authentication Section */}
      <div className="auth-section">
        <h3>Secure Authentication</h3>
        <p>
          Scriptos features a secure login system with role-based access
          control, ensuring that publishers, consultants, bishops, and
          administrators can only access the appropriate content and features
          based on their role.
        </p>
        <div className="auth-image-container">
          <img src={Scriptos_Login} alt="Scriptos Login Screen" />
        </div>
      </div>

      {/* Client Section */}
      <div className="client-section">
        <div className="client-info">
          <img src={USCCB_Logo} alt="USCCB Logo" className="client-logo" />
          <div className="client-details">
            <h3>Client: United States Conference of Catholic Bishops</h3>
            <p>
              The United States Conference of Catholic Bishops (USCCB) is an
              assembly of bishops who jointly exercise certain pastoral
              functions for the Catholic Church in the United States. The
              Subcommittee on the Catechism oversees the national conformity
              review process for catechetical texts.
            </p>
          </div>
        </div>
      </div>

      {/* Project Links */}
      <div className="project-links-section">
        <a
          href="https://scriptos.net"
          target="_blank"
          rel="noopener noreferrer"
          className="scriptos-button"
        >
          <span className="button-text">Try SCRIPTOS</span>
          <span className="button-icon">→</span>
        </a>
      </div>
    </div>
  );
};

export default Scriptos;
