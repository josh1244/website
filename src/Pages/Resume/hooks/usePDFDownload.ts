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

      // Store all links and their data to restore later
      const links = element.querySelectorAll("a");
      const linkData = Array.from(links).map((link) => ({
        element: link,
        href: link.getAttribute("href"),
        target: link.getAttribute("target"),
        style: link.getAttribute("style"),
        hasUnderline: window
          .getComputedStyle(link)
          .textDecoration.includes("underline"),
      }));

      // Create a deep clone of the element to modify for PDF creation
      const tempElement = element.cloneNode(true) as HTMLElement;
      document.body.appendChild(tempElement);
      tempElement.style.position = "absolute";
      tempElement.style.left = "-9999px";
      tempElement.style.top = "-9999px";

      // Fix contact icons in the cloned element
      const contactIcons = tempElement.querySelectorAll(".contact-icon");
      contactIcons.forEach((icon) => {
        const htmlIcon = icon as HTMLElement;
        htmlIcon.style.width = "16px";
        htmlIcon.style.height = "16px";
        htmlIcon.style.display = "inline-block";
        htmlIcon.style.objectFit = "contain";
        htmlIcon.style.verticalAlign = "middle";
        htmlIcon.style.marginRight = "8px";
      });

      // Convert links to plain text in the cloned element
      const clonedLinks = tempElement.querySelectorAll("a");
      clonedLinks.forEach((link) => {
        link.removeAttribute("href");
        link.removeAttribute("target");
        link.style.textDecoration = "none";
        link.style.color = "inherit";
      });

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

      // Convert the cloned HTML element to canvas with improved settings
      const canvas = await html2canvas(tempElement, {
        scale: 4,
        logging: false,
        useCORS: true,
        allowTaint: true,
        imageTimeout: 15000,
        onclone: (clonedDoc) => {
          // Additional image processing in the cloned document
          const clonedImages = clonedDoc.querySelectorAll("img");
          clonedImages.forEach((img) => {
            img.style.maxWidth = "100%";
            if (img.classList.contains("contact-icon")) {
              img.style.width = "16px";
              img.style.height = "16px";
              img.style.minWidth = "16px";
              img.style.minHeight = "16px";
              img.style.objectFit = "contain";
              img.style.display = "inline-block";
              img.style.verticalAlign = "middle";
            }
          });
        },
      });

      // Clean up the temporary element
      document.body.removeChild(tempElement);

      // Restore the links back to their original state in the original element
      linkData.forEach(({ element, href, target, style, hasUnderline }) => {
        if (href) element.setAttribute("href", href);
        if (target) element.setAttribute("target", target);
        if (style) element.setAttribute("style", style);
        else if (hasUnderline) element.style.textDecoration = "underline";
      });

      // Calculate dimensions to fit the content properly
      const imgWidth = 8.5; // Letter size width in inches
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add the image to the PDF
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        imgWidth,
        imgHeight,
        undefined,
        "FAST"
      );

      // Save the PDF
      pdf.save(`Joshua Ham - Resume - ${formattedDate}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return { handleDownloadPDF };
};

export default usePDFDownload;
