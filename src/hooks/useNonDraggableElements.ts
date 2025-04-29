import { useEffect } from "react";

/**
 * Custom hook that prevents elements from being draggable
 * Applies to images, buttons, navbar links, and other interactive elements
 */
const useNonDraggableElements = () => {
  useEffect(() => {
    const makeElementsNonDraggable = () => {
      // Make images non-draggable
      const images = document.querySelectorAll("img");
      images.forEach((img) => {
        img.setAttribute("draggable", "false");
        img.addEventListener("dragstart", (e) => e.preventDefault());
      });

      // Make buttons non-draggable
      const buttons = document.querySelectorAll("button");
      buttons.forEach((button) => {
        button.setAttribute("draggable", "false");
        button.addEventListener("dragstart", (e) => e.preventDefault());
      });

      // Make navbar links non-draggable
      const navLinks = document.querySelectorAll("nav a, header a, .logo, a");
      navLinks.forEach((link) => {
        link.setAttribute("draggable", "false");
        link.addEventListener("dragstart", (e) => e.preventDefault());
      });
    };

    // Initial call
    makeElementsNonDraggable();

    // Set up a MutationObserver to handle dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          makeElementsNonDraggable();
        }
      });
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, { childList: true, subtree: true });

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);
};

export default useNonDraggableElements;
