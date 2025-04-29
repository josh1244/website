// Work Experience Section
// Takes array of jobs and displays them in a list

// Imports
import React from "react";

interface WorkExperienceProps {
  title: string;
  dates: string;
  company: string;
  location: string;
  description?: string;
  achievements: string[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  title,
  dates,
  company,
  location,
  description,
  achievements,
}) => {
  return (
    <div className="section">
      <div className="section-header">
        <h2>{title}</h2>
        <span className="resume-date">{dates}</span>
      </div>
      <p className="company">
        {company} | {location}
      </p>
      {description && <p>{description}</p>}
      <ul style={{ margin: 0, color: "#737373" }}>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperience;
