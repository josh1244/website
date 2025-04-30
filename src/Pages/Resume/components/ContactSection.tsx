// Contact Section
// Contact Data for Resume

import React from "react";
// Import icons
import phoneIcon from "../icons/phone.png";
import emailIcon from "../icons/email.png";
import locationIcon from "../icons/location.png";
import linkedinIcon from "../icons/linkedin.png";

const ContactSection: React.FC = () => {
  return (
    <div className="section">
      <div className="section-header">
        <h2>CONTACT</h2>
      </div>

      {/* Contact Items */}
      <div className="contact-item phone">
        <img src={phoneIcon} alt="  " className="contact-icon phone-icon" />
        <p>571-260-7117</p>
      </div>

      <div className="contact-item email">
        <img src={emailIcon} alt="  " className="contact-icon email-icon" />
        <p>
          <a href="mailto:JoshuaSwainHam@proton.me">JoshuaSwainHam@proton.me</a>
        </p>
      </div>

      <div className="contact-item location">
        <img
          src={locationIcon}
          alt="  "
          className="contact-icon location-icon"
        />
        <p>Cincinnati Tri-State Area</p>
      </div>

      <div className="contact-item linkedin">
        <img
          src={linkedinIcon}
          alt="  "
          className="contact-icon linkedin-icon"
        />
        <p>
          <a
            href="https://www.linkedin.com/in/joshsham/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/joshsham
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
