// Education Section
// School part of Resume

import React from "react";

const EducationSection: React.FC = () => {
  return (
    <div className="section">
      <div className="section-header">
        <h2>EDUCATION</h2>
      </div>
      <div className="education-item">
        <h3 style={{ lineHeight: 1.0, paddingBottom: "1pt" }}>
          Bachelor of Science in Software Engineering
        </h3>
        <p
          style={{ lineHeight: 1.0, paddingBottom: "6pt" }}
          className="concentration"
        >
          Concentration in Cybersecurity
        </p>
        <p style={{ lineHeight: 0.1 }} className="university-info">
          Franciscan University of Steubenville
        </p>
        <p style={{ lineHeight: 1.9 }} className="university-info">
          Steubenville, OH 43952
        </p>
        <div style={{ lineHeight: 0.1 }} className="education-date-gpa">
          <span>August 2022 – December 2025</span>
          <span>
            <b>GPA:</b> 3.93
          </span>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
