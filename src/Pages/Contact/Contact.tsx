// Contact Page

// Imports
import React from "react";
import "./Contact.css";
import useClipboard from "../../hooks/useClipboard";

// Images
import profilePicture from "./profile.jpg";

const Contact: React.FC = () => {
  // Custom hook for copying text to clipboard
  const { copiedText, copyToClipboard } = useClipboard();

  return (
    <div className="contact-container">
      {/* Profile Image */}
      <div className="profile-section">
        <div className="profile-picture-container">
          <img
            src={profilePicture}
            alt="Joshua Swain Ham"
            className="profile-picture"
          />
        </div>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <h2>Contact Information</h2>
        <div
          className={`info-item ${copiedText === "phone" ? "copied" : ""}`}
          onClick={() => copyToClipboard("571-260-7117", "phone")}
        >
          <span className="contact-icon">📱</span>
          <p>571-260-7117</p>
          {copiedText === "phone" && (
            <span className="copied-tooltip">Copied!</span>
          )}
        </div>
        <div
          className={`info-item ${copiedText === "email" ? "copied" : ""}`}
          onClick={() => copyToClipboard("JoshuaSwainHam@proton.me", "email")}
        >
          <span className="contact-icon">✉️</span>
          <p>JoshuaSwainHam@proton.me</p>
          {copiedText === "email" && (
            <span className="copied-tooltip">Copied!</span>
          )}
        </div>
        <div
          className={`info-item ${copiedText === "linkedin" ? "copied" : ""}`}
          onClick={() =>
            copyToClipboard("https://linkedin.com/in/joshuaham", "linkedin")
          }
        >
          <span className="contact-icon">🔗</span>
          <p>linkedin.com/in/joshuaham</p>
          {copiedText === "linkedin" && (
            <span className="copied-tooltip">Copied!</span>
          )}
        </div>
        <div
          className={`info-item ${copiedText === "github" ? "copied" : ""}`}
          onClick={() =>
            copyToClipboard("https://github.com/joshuaham", "github")
          }
        >
          <span className="contact-icon">💻</span>
          <p>github.com/joshuaham</p>
          {copiedText === "github" && (
            <span className="copied-tooltip">Copied!</span>
          )}
        </div>
        <div
          className={`info-item ${copiedText === "website" ? "copied" : ""}`}
          onClick={() =>
            copyToClipboard("https://joshuaham.vercel.app", "website")
          }
        >
          <span className="contact-icon">🌐</span>
          <p>joshuaham.vercel.app</p>
          {copiedText === "website" && (
            <span className="copied-tooltip">Copied!</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
