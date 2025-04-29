import React from "react";
import { Link } from "react-router-dom";
import AFRL_banner from "./afrl_word_mark.png";
import Franciscan from "./franciscan_university.png";
import computer from "./IMG_20230528_123525.jpg";

const About: React.FC = () => {
  return (
    <div className="container">
      <div className="content-section">
        <h2>About Me</h2>
        <p>
          I'm Joshua Ham, a Software Developer with a strong foundation in
          software engineering and cybersecurity. Currently pursuing my Bachelor
          of Science in Software Engineering with a concentration in
          Cybersecurity at Franciscan University of Steubenville, maintaining a
          3.93 GPA.
        </p>
        <div className="image-container">
          <Link to="/resume">
            <img
              src="https://placehold.co/600x400/0099ff/ffffff?text=About+Me"
              alt="About Me"
              className="centered-image"
            />
          </Link>
        </div>
      </div>

      <div className="content-section">
        <h2>Skills & Expertise</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img
              src={computer}
              alt="Technical Skills"
              className="project-image"
            />
            <div className="project-content">
              <h3>Technical Skills</h3>
              <div className="skills-container">
                <div className="skill-group">
                  <h4>Programming Languages</h4>
                  <p>C++, C#, Python, JavaScript, HTML, CSS</p>
                </div>

                <div className="skill-group">
                  <h4>Web Technologies</h4>
                  <p>React, Blazor, REST API, Yarn, NodeJS</p>
                </div>

                <div className="skill-group">
                  <h4>Cloud & Infrastructure</h4>
                  <p>AWS, Azure, Google Cloud, Database, Storage</p>
                </div>

                <div className="skill-group">
                  <h4>Security & Networking</h4>
                  <p>Metasploit, Wireshark, Networking Administration</p>
                </div>

                <div className="skill-group">
                  <h4>DevOps & Tools</h4>
                  <p>Docker, Singularity, Git, CI/CD, Agile, DevSecOps</p>
                </div>

                <div className="skill-group">
                  <h4>Other Skills</h4>
                  <p>
                    Linux, Bash, Perl, Regex, MATLAB, 3D Printing, Blender, CAD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Professional Experience</h2>
        <div className="experience-container">
          <div
            className="project-card experience-card"
            style={{ marginBottom: "2rem" }}
          >
            <img
              src={AFRL_banner}
              alt="Air Force Research Lab"
              className="project-image"
              style={{ paddingLeft: "20px", paddingRight: "20px" }}
            />
            <div className="project-content">
              <div className="experience-header">
                <h3>Software Developer</h3>
                <span className="date-badge">May 2024 – Present</span>
              </div>
              <p className="company">
                Air Force Research Lab and University of Dayton | Fairborn, OH
              </p>
              <div className="achievements">
                <div className="achievement-item">
                  ⚡ Improved CAD model tool performance with 5x speed increase
                </div>
                <div className="achievement-item">
                  🔔 Implemented feedback system with custom toast notifications
                </div>
                <div className="achievement-item">
                  📋 Designed well-documented API architecture
                </div>
                <div className="achievement-item">
                  🖥️ Created intuitive user interface for CAD and RF tools
                </div>
                <div className="achievement-item">
                  🔄 Refactored codebase for improved maintainability
                </div>
              </div>
            </div>
          </div>

          <div className="project-card experience-card">
            <img
              src={Franciscan}
              alt="Franciscan University"
              className="project-image"
            />
            <div className="project-content">
              <div className="experience-header">
                <h3>Software Engineer</h3>
                <span className="date-badge">August 2024 – Present</span>
              </div>
              <p className="company">
                Franciscan University of Steubenville | Steubenville, OH
              </p>
              <div className="achievements">
                <div className="achievement-item">
                  🖥️ Developing custom app for US Conference of Catholic Bishops
                </div>
                <div className="achievement-item">
                  📄 Implementing PDF system, email notifications, and secure
                  cloud storage
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
