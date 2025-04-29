// Contact Section
// Contact Data for Resume

import React from "react";

const ContactSection: React.FC = () => {
  return (
    <div className="section">
      <div className="section-header">
        <h2>CONTACT</h2>
      </div>
      <div className="contact-item phone">
        <p>571-260-7117</p>
      </div>
      <div className="contact-item email">
        <p>JoshuaSwainHam@proton.me</p>
      </div>
      <div className="contact-item location">
        <p>Cincinnati Tri-State Area</p>
      </div>
      <div className="contact-item linkedin">
        <p>
          <a
            href="https://linkedin.com/in/joshaham"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/joshaham
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
