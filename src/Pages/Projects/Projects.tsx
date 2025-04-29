// Projects: Portfolio Page

// Imports
import React from "react";
import { Link } from "react-router-dom";

// Images
import USCCB from "./USCCB.webp";

// Project variable declaration
// This is a TypeScript interface that defines the structure of a project object.
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
  internalLink?: string;
}

// Array of projects
const projects: Project[] = [
  {
    title: "USCCB Scriptos App",
    description:
      "A custom application for the US Conference of Catholic Bishops, featuring PDF system integration, email notifications, and secure cloud storage. Built with modern web technologies and a focus on user experience.",
    imageUrl: USCCB,
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "AWS",
      "PDF Processing",
      "Email Integration",
    ],
    internalLink: "/projects/scriptos",
  },
  {
    title: "CAD Model Tool",
    description:
      "Enhanced CAD model tool with 5x performance improvement, featuring intuitive user interface and real-time feedback system. Implemented at Air Force Research Lab.",
    imageUrl: "https://placehold.co/800x400/003875/ffffff?text=CAD+Tool",
    technologies: [
      "C++",
      "Python",
      "CAD Integration",
      "Performance Optimization",
      "UI/UX Design",
    ],
  },
  {
    title: "RF Analysis Platform",
    description:
      "Comprehensive RF analysis platform with well-documented API architecture and custom visualization tools. Developed for research and analysis purposes.",
    imageUrl: "https://placehold.co/800x400/003875/ffffff?text=RF+Platform",
    technologies: [
      "Python",
      "C++",
      "API Design",
      "Data Visualization",
      "Scientific Computing",
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <div className="container">
      {/* Introduction */}
      <div className="content-section">
        <h2>Portfolio</h2>
        <p>
          Explore my professional projects and contributions. Each project
          represents a unique challenge and solution in software development.
        </p>
      </div>

      {/* Map Projects into cards */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              {project.internalLink ? (
                <Link to={project.internalLink} className="project-link">
                  View Project →
                </Link>
              ) : project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
