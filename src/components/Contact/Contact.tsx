import React, { useState } from "react";
import "./Contact.css";
import profilePicture from "./profile.jpg";

const Contact: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2000);
    });
  };

  return (
    <div className="contact-container">
      <div className="profile-section">
        <div className="profile-picture-container">
          <img
            src={profilePicture}
            alt="Joshua Swain Ham"
            className="profile-picture"
          />
        </div>
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <div
          className={`info-item ${copiedText === "phone" ? "copied" : ""}`}
          onClick={() => copyToClipboard("571-260-7117", "phone")}
        >
          <i className="fas fa-phone contact-icon"></i>
          <p>571-260-7117</p>
          {copiedText === "phone" && (
            <span className="copied-tooltip">Copied!</span>
          )}
        </div>
        <div
          className={`info-item ${copiedText === "email" ? "copied" : ""}`}
          onClick={() => copyToClipboard("JoshuaSwainHam@proton.me", "email")}
        >
          <i className="fas fa-envelope contact-icon"></i>
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
          <i className="fab fa-linkedin contact-icon"></i>
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
          <i className="fab fa-github contact-icon"></i>
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
          <i className="fas fa-globe contact-icon"></i>
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
