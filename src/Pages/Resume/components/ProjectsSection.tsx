// Projects Section
// Projects part of Resume

import React from "react";

const ProjectsSection: React.FC = () => {
  return (
    <div className="section">
      <div className="section-header2">
        <h2>PROJECTS</h2>
      </div>
      <ul className="projects-list">
        <li>
          Invented DailyTrackPro, a cross-platform calendar app which allows
          users to track aspects of daily living
        </li>
        <li>
          Conducted hacking duels and capture the flag to gain access to
          computers remotely using Metasploit and other cyber tools
        </li>
        <li>
          Designed a secure corporate network involving several locations and
          guest Wi-Fi using Cisco Packet Tracer
        </li>
        <li>
          Performed a cybersecurity project involving attacking and monitoring
          several server nodes in AWS
        </li>
      </ul>
    </div>
  );
};

export default ProjectsSection;
