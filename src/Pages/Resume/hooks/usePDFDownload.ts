// Use PDF Download
// This hook handles the PDF download functionality for the resume component.

import { useState, useEffect, RefObject } from "react";

// Take in the resumeRef as a prop
interface UsePDFDownloadProps {
  resumeRef: RefObject<HTMLDivElement | null>;
}

const usePDFDownload = ({ resumeRef }: UsePDFDownloadProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  // Check if we're in the browser environment
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // When the button is clicked
  const handleDownloadPDF = async () => {
    // Check that the PDF is present and that we're in the browser
    const element = resumeRef.current;
    if (!element || !isBrowser) return;

    try {
      // Dynamically import jsPDF and html2canvas
      const { jsPDF } = await import("jspdf");
      const html2canvas = (await import("html2canvas")).default;

      const currentDate = new Date();
      const formattedDate = `${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}-${currentDate.getFullYear()}`; // Format date as M-D-YYYY

      // Create a new jsPDF instance
      const pdf = new jsPDF({
        unit: "in",
        format: "letter",
        orientation: "portrait",
      });

      // Convert the HTML element to canvas
      const canvas = await html2canvas(element, {
        scale: 2,
        logging: false,
        useCORS: true,
      });

      // Calculate dimensions to fit the content properly
      const imgWidth = 8.5; // Letter size width in inches
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add the image to the PDF
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      // Save the PDF
      pdf.save(`Joshua Ham - Resume - ${formattedDate}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return { handleDownloadPDF };
};

export default usePDFDownload;
