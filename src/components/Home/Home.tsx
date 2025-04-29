import React from "react";

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="content-section">
        <h2>Welcome to My Gallery</h2>
        <p>
          Discover our collection of beautiful images and inspiring content.
        </p>
        <img
          src="https://placehold.co/800x400/0099ff/ffffff?text=Featured+Image"
          alt="Featured Image"
          className="centered-image"
        />
      </div>

      <div className="content-section">
        <h2>Our Vision</h2>
        <p>Creating beautiful experiences through visual storytelling.</p>
        <img
          src="https://placehold.co/600x400/ff6b6b/ffffff?text=Vision+Image"
          alt="Vision Image"
          className="centered-image"
        />
      </div>

      <div className="content-section">
        <h2>Latest Work</h2>
        <p>Explore our most recent projects and creative endeavors.</p>
        <img
          src="https://placehold.co/700x400/4ecdc4/ffffff?text=Latest+Work"
          alt="Latest Work"
          className="centered-image"
        />
      </div>
    </div>
  );
};

export default Home;
