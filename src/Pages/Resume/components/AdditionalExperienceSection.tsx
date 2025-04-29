// Additional Work Experience Section
// Less important jobs

import React from "react";

const AdditionalExperienceSection: React.FC = () => {
  return (
    <div className="section">
      <div className="section-header2">
        <h2>WORK EXPERIENCE</h2>
      </div>
      <div className="experience-item">
        <div className="section-header">
          <h3>Tech Tutor and Assistant</h3>
          <p className="resume-date">August 2023 – Present</p>
        </div>
        <p className="company">
          Franciscan University of Steubenville | Steubenville, OH 43952
        </p>
        <ul>
          <li style={{ color: "#737373" }}>
            Maintained a cybersecurity lab, taught students ethical hacking
            tools, and repaired computers with hardware and software issues
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="section-header">
          <h3>Entrepreneur</h3>
          <p className="resume-date">July 2021 – January 2024</p>
        </div>
        <p className="company">
          Josh's Ice Cream Business | Manassas, VA 20112
        </p>
        <ul>
          <li style={{ color: "#737373" }}>
            Established my own ice cream business and sold my custom-made
            products at Giorgio's Family Restaurant and to various other
            customers
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="section-header">
          <h3>Restaurant Staff</h3>
          <p className="resume-date">July 2020 – January 2024</p>
        </div>
        <p className="company">
          Giorgio's Family Restaurant | Montclair, VA 22025
        </p>
        <ul>
          <li style={{ color: "#737373" }}>
            Performed bussing, cashiering, food running, dishwashing, and
            cooking in addition to training the new employees
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdditionalExperienceSection;
