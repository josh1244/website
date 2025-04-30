// Use PDF Download
// This hook handles the HTML download functionality for the resume component.

import { useState, useEffect, RefObject } from "react";
import resumeCSS from "../Resume.css?raw"; // Dynamically import CSS content

// Take in the resumeRef as a prop
interface UsePDFDownloadProps {
  resumeRef: RefObject<HTMLDivElement | null>;
}

const usePDFDownload = ({ resumeRef }: UsePDFDownloadProps) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Check if we're in the browser environment
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // Process images in the HTML to make them work in the downloaded file
  const processImagesForDownload = (html: string, element: Element) => {
    // Create a temporary document to work with
    const tempDoc = document.implementation.createHTMLDocument();
    const div = tempDoc.createElement("div");
    div.innerHTML = html;

    // Find all images in the content
    const images = div.querySelectorAll("img");

    // Process each image
    images.forEach((img) => {
      const originalSrc = img.getAttribute("src");
      if (!originalSrc) return;

      // Skip images that are already data URLs or absolute URLs
      if (originalSrc.startsWith("data:") || originalSrc.startsWith("http"))
        return;

      // Find the original image in the DOM
      const originalImg = element.querySelector(
        `img[src="${originalSrc}"]`
      ) as HTMLImageElement;
      if (!originalImg || !originalImg.complete) return;

      try {
        // Create a canvas element to convert the image to a data URL
        const canvas = document.createElement("canvas");
        canvas.width = originalImg.naturalWidth;
        canvas.height = originalImg.naturalHeight;

        // Draw the image to the canvas
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(originalImg, 0, 0);

          // Get the data URL
          const dataUrl = canvas.toDataURL("image/png");

          // Replace the src with the data URL
          img.setAttribute("src", dataUrl);

          // Add display and vertical alignment attributes to ensure inline rendering
          img.style.display = "inline-block";
          img.style.verticalAlign = "middle";
          img.style.position = "relative";
        }
      } catch (error) {
        console.error("Error converting image to data URL:", error);
      }
    });

    return div.innerHTML;
  };

  // When the button is clicked
  const handleDownloadPDF = async () => {
    // Check that we have the element and are in the browser
    const element = resumeRef.current;
    if (!element || !isBrowser) return;

    setIsLoading(true);

    try {
      // Get the current date for the filename
      const currentDate = new Date();
      const formattedDate = `${
        currentDate.getMonth() + 1
      }-${currentDate.getDate()}-${currentDate.getFullYear()}`; // Format date as M-D-YYYY

      // Extract the content from the left and right columns
      const leftColumn = element.querySelector(".left-column");
      const rightColumn = element.querySelector(".right-column");

      if (!leftColumn || !rightColumn) {
        throw new Error("Could not find required resume elements");
      }

      // Extract the HTML content of each column
      let leftColumnHtml = leftColumn.innerHTML;
      let rightColumnHtml = rightColumn.innerHTML;

      // Process images in both columns
      leftColumnHtml = processImagesForDownload(leftColumnHtml, leftColumn);
      rightColumnHtml = processImagesForDownload(rightColumnHtml, rightColumn);

      // Create a complete HTML document with the columns side by side
      const fullHtml = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Joshua Ham - Resume</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  <style type="text/css">
    /* Reset CSS to remove unwanted spacing */
    html, body {
      margin: 0;
      padding: 0;
      width: 8.5in;
      height: 11in;
      overflow: hidden;
    }
    
    /* Import directly from Resume.css */
    ${resumeCSS}
    
    /* Override specific styles to fix PDF spacing */
    body {
      font-family: 'Lato', 'Times New Roman', Times, serif;
      background-color: white;
    }
    
    .resume-container {
      margin: 0 !important;
      padding: 0 0.4in 0 0.4in !important;
      box-shadow: none !important;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 8.5in !important;
      height: 11in !important;
      max-height: 11in !important;
      overflow: hidden !important;
    }
    
    /* Fix wkhtmltopdf specific issues */
    @page {
      size: 8.5in 11in;
      margin: 0;
    }
    
    .left-column, .right-column {
      height: 100%;
      overflow: hidden;
      max-height: 11in !important;
    }
    
    /* Ensure images display correctly */
    img {
      max-width: 100%;
      height: auto;
      display: inline-block;
    }
    
    /* Adjust section spacing to fit within 11in */
    .section {
      margin-bottom: 1.5rem !important;
    }
    
    .right-column .section {
      margin-bottom: 0 !important;
    }
    
    /* Adjust line heights to be more compact */
    .right-column .section p,
    .right-column .section li {
      line-height: 1.1 !important;
    }
    
    .experience-item li {
      margin-bottom: 0.2rem !important;
    }
  </style>
</head>
<body>
  <div class="resume-container">
    <div class="left-column">
      ${leftColumnHtml}
    </div>
    <div class="right-column">
      ${rightColumnHtml}
    </div>
  </div>
</body>
</html>`;

      // Create a Blob with the HTML content
      const htmlBlob = new Blob([fullHtml], { type: "text/html" });

      // Create a download link
      const url = window.URL.createObjectURL(htmlBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Joshua Ham - Resume - ${formattedDate}.html`;

      // Trigger download
      document.body.appendChild(link);
      link.click();

      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error generating HTML:", error);
      alert("Failed to generate HTML. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return { handleDownloadPDF, isLoading };
};

export default usePDFDownload;

// ./wkhtmltopdf.exe --disable-smart-shrinking --page-size Letter --margin-top 0 --margin-right 0 --margin-bottom 0 --margin-left 0 'C:\Users\label\Downloads\Joshua Ham - Resume - 4-29-2025(59).html' C:\Users\label\resume59.pdf
