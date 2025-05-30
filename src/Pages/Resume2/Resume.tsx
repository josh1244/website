import React from "react";
import "./Resume.css";

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1>Joshua Ham</h1>
      </div>

      <div className="left-column">
        <div className="section">
          <div className="section-header">
            <h2>CONTACT</h2>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <span>📞</span>
              <p>571-260-7117</p>
            </div>
            <div className="contact-item">
              <span>✉️</span>
              <p>JoshuaSwainHam@proton.me</p>
            </div>
            <div className="contact-item">
              <span>📍</span>
              <p>Cincinnati Tri-State Area</p>
            </div>
            <div className="contact-item">
              <span>🔗</span>
              <p>
                <a
                  href="https://linkedin.com/in/joshaham"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/joshaham
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h2>EDUCATION</h2>
          </div>
          <div className="education-item">
            <div className="edu-header">
              <h3>Bachelor of Science in Software Engineering</h3>
            </div>
            <p>Concentration in Cybersecurity</p>
            <p>Franciscan University of Steubenville</p>
            <p>Steubenville, OH 43952</p>
            <p className="resume-date">August 2022 – December 2025</p>
            <p className="gpa">GPA: 3.93</p>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h2>SKILLS</h2>
          </div>
          <ul className="skills-list">
            <li>C++, C#, Python</li>
            <li>Web, HTML, JS, CSS, React, Blazor, Rest API, Yarn, NodeJS</li>
            <li>Cloud, AWS, Azure, Google, Database, Storage</li>
            <li>Networking Administration</li>
            <li>Metasploit, Wireshark</li>
            <li>Docker, Singularity</li>
            <li>Linux, Bash, Perl, Regex</li>
            <li>3D Printing, Blender, CAD</li>
            <li>Agile, DevSecOps, CI/CD</li>
            <li>MATLAB</li>
            <li>Git</li>
          </ul>
        </div>
      </div>

      <div className="right-column">
        <div className="section">
          <div className="section-header">
            <h2>SOFTWARE DEVELOPER</h2>
          </div>
          <div className="experience-item">
            <p className="resume-date">May 2024 – Present</p>
            <p className="company">
              Air Force Research Lab and University of Dayton | Fairborn, OH
              45324
            </p>
            <p>
              Chosen for a competitive, full-time summer internship and then
              promoted to a year-round position based on completing assigned
              project within 50% of timeline. My accomplishments include:
            </p>
            <ul>
              <li>
                Improving CAD model tool performance by achieving 5x speed
                increase and introducing additional functionalities that were
                delivered to AFRL and other DoD/IC agencies
              </li>
              <li>
                Implementing a feedback system utilizing custom toast
                notifications and progress indicators
              </li>
              <li>
                Designing well-documented API architecture for our software
              </li>
              <li>
                Creating an intuitive user interface for professional CAD and
                Radio Frequency tools
              </li>
              <li>
                Refactoring a large code base for improved readability and
                future maintenance
              </li>
              <li>
                Administering and presenting multiple software demos in front of
                future users
              </li>
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h2>SOFTWARE ENGINEER</h2>
          </div>
          <div className="experience-item">
            <p className="resume-date">August 2024 – Present</p>
            <p className="company">
              Franciscan University of Steubenville | Steubenville, OH 43952
            </p>
            <p>
              Selected to develop a custom app for the United States Conference
              of Catholic Bishops to streamline the process of reviewing books
              and granting imprimaturs. My contributions include:
            </p>
            <ul>
              <li>
                Creating a custom PDF and comment system, email notifications,
                software testing pipeline, secure cloud database and file
                storage
              </li>
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h2>PROJECTS</h2>
          </div>
          <ul>
            <li>
              Invented DailyTrackPro, a cross-platform calendar app which allows
              users to track aspects of daily living
            </li>
            <li>
              Conducted hacking duels and capture the flag to gain access to
              computers remotely using Metasploit and other cyber tools
            </li>
            <li>
              Designed a secure corporate network involving several locations
              and guest Wi-Fi using Cisco Packet Tracer
            </li>
            <li>
              Performed a cybersecurity project involving attacking and
              monitoring several server nodes in AWS
            </li>
          </ul>
        </div>

        <div className="section">
          <div className="section-header">
            <h2>WORK EXPERIENCE</h2>
          </div>
          <div className="experience-item">
            <h3>Tech Tutor and Assistant</h3>
            <p className="resume-date">August 2023 – Present</p>
            <p className="company">
              Franciscan University of Steubenville | Steubenville, OH 43952
            </p>
            <ul>
              <li>
                Maintained a cybersecurity lab, taught students ethical hacking
                tools, and repaired computers with hardware and software issues
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Entrepreneur</h3>
            <p className="resume-date">July 2021 – January 2024</p>
            <p className="company">
              Josh's Ice Cream Business | Manassas, VA 20112
            </p>
            <ul>
              <li>
                Established my own ice cream business and sold my custom-made
                products at Giorgio's Family Restaurant and to various other
                customers
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Restaurant Staff</h3>
            <p className="resume-date">July 2020 – January 2024</p>
            <p className="company">
              Giorgio's Family Restaurant | Montclair, VA 22025
            </p>
            <ul>
              <li>
                Performed bussing, cashiering, food running, dishwashing, and
                cooking in addition to training the new employees
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
