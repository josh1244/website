// Resume Page

// Imports
import React, { useRef } from "react";
import "./Resume.css";

// Components
import ResumeHeader from "./components/ResumeHeader";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import WorkExperience from "./components/WorkExperience";
import ProjectsSection from "./components/ProjectsSection";
import AdditionalExperienceSection from "./components/AdditionalExperienceSection";
import PDFButton from "./components/PDFButton";

// Hooks
import usePDFDownload from "./hooks/usePDFDownload";

const Resume: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const { handleDownloadPDF } = usePDFDownload({ resumeRef });

  return (
    <div className="resume-wrapper">
      <div
        className="resume-container"
        style={{ marginBottom: "20px" }}
        ref={resumeRef}
      >
        {/* Left Column */}
        <div className="left-column">
          <ContactSection />
          <EducationSection />
          <SkillsSection />
        </div>

        {/* Right Header */}
        <div className="right-column">
          <ResumeHeader />

          <WorkExperience
            title="SOFTWARE DEVELOPER"
            dates="May 2024 – Present"
            company="Air Force Research Lab and University of Dayton"
            location="Fairborn, OH 45324"
            description="Chosen for a competitive, full-time summer internship and then promoted to a year-round position based on completing assigned project within 50% of timeline. My accomplishments include:"
            achievements={[
              "Improving CAD model tool performance by achieving 5x speed increase and introducing additional functionalities that were delivered to AFRL and other DoD/IC agencies",
              "Implementing a feedback system utilizing custom toast notifications and progress indicators",
              "Designing well-documented API architecture for our software",
              "Creating an intuitive user interface for professional CAD and Radio Frequency tools",
              "Refactoring a large code base for improved readability and future maintenance",
              "Administering and presenting multiple software demos in front of future users",
            ]}
          />

          <WorkExperience
            title="SOFTWARE ENGINEER"
            dates="August 2024 – Present"
            company="Franciscan University of Steubenville"
            location="Steubenville, OH 43952"
            description="Selected to develop a custom app for the United States Conference of Catholic Bishops to streamline the process of reviewing books and granting imprimaturs. My contributions include:"
            achievements={[
              "Creating a custom PDF and comment system, email notifications, software testing pipeline, secure cloud database and file storage",
            ]}
          />

          <ProjectsSection />
          <AdditionalExperienceSection />
        </div>
      </div>

      {/* Download the Resume as a PDF */}
      <PDFButton onDownload={handleDownloadPDF} />
    </div>
  );
};

export default Resume;
