// Skills Section
// Skills List of Resume

import React from "react";

const SkillsSection: React.FC = () => {
  return (
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
  );
};

export default SkillsSection;
