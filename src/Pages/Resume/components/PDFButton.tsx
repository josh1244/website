// Download PDF Button
// This is used in Resume.tsx and the hook does the downloading

// Imports
import React from "react";

interface PDFButtonProps {
  onDownload: () => void;
}

const PDFButton: React.FC<PDFButtonProps> = ({ onDownload }) => {
  return (
    <div className="pdf-button-container">
      <button onClick={onDownload} className="pdf-button">
        Open as PDF
      </button>
    </div>
  );
};

export default PDFButton;
