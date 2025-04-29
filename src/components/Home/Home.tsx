// Home Page

// Imports
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="container">
      {/* Welcome */}
      <div className="content-section">
        <h2>Welcome to My Gallery</h2>
        <p>
          Software Engineer specializing in full-stack development,
          cybersecurity, and RF analysis.
        </p>
        <img
          src="https://placehold.co/800x400/0099ff/ffffff?text=Featured+Image"
          alt="Featured Image"
          className="centered-image"
        />
      </div>

      {/* Vision */}
      <div className="content-section">
        <h2>Our Vision</h2>
        <p>Creating beautiful experiences through visual storytelling.</p>
        <img
          src="https://placehold.co/600x400/ff6b6b/ffffff?text=Vision+Image"
          alt="Vision Image"
          className="centered-image"
        />
      </div>

      {/* Projects */}
      <div className="content-section">
        <h2>Featured Projects</h2>
        <p>Explore my recent work and professional contributions.</p>
        <Link
          to="/projects"
          className="project-link"
          style={{ marginBottom: "20px", fontSize: "1.1rem" }}
        >
          View All Projects →
        </Link>
        <img
          src="https://placehold.co/700x400/4ecdc4/ffffff?text=Featured+Projects"
          alt="Projects Preview"
          className="centered-image"
        />
      </div>
    </div>
  );
};

export default Home;
