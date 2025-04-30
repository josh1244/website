// Logo
// Navbar's rotating logo component
// This component creates a logo that rotates based on the scroll position of the page.
// It uses SVG for rendering and allows customization of size, color, and rotation behavior.

import React, { useEffect, useRef, useState } from "react";

const SCROLL_SPEED = 0.2; // Speed of rotation based on scroll
const NUMBER_OF_SEGMENTS = 5; // Number of segments in the logo

interface LogoProps {
  size?: number;
  color?: string;
  spin?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  size = 32,
  color = "#0099ff",
  spin = true,
}) => {
  // Using ref for rotation to avoid re-renders that might cause layout shifts
  const rotationRef = useRef<number>(0);
  const logoRef = useRef<SVGSVGElement>(null);

  // Normally false, but set to true to prevent flicker on first render
  const [mounted, setMounted] = useState(true); // Track if component is mounted

  // Set up scroll event listener to rotate the logo
  useEffect(() => {
    // Mark component as mounted to prevent flicker
    setMounted(true);

    if (!spin) return; // Don't spit

    // Initialize rotation at 0
    rotationRef.current = 0;
    if (logoRef.current) {
      logoRef.current.style.transform = `rotate(0deg)`;
    }

    const handleScroll = () => {
      if (!logoRef.current) return;

      // Calculate rotation based on scroll position
      const scrollY = window.scrollY;
      rotationRef.current = (scrollY * SCROLL_SPEED) % 360;

      // Apply rotation directly to DOM for better performance
      logoRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [spin]);

  // Generate the segments of the logo
  const numSegments = NUMBER_OF_SEGMENTS;
  const centerRadius = size * 0.2;
  const outerRadius = size * 0.5;
  const gapAngle = Math.PI / 12; // Small gap between segments

  // Generate the logo SVG paths
  const paths = [];

  for (let i = 0; i < numSegments; i++) {
    const startAngle = (i * 2 * Math.PI) / numSegments;
    const endAngle = ((i + 1) * 2 * Math.PI) / numSegments;

    // Calculate segment points with gap
    const innerStartX = 16 + centerRadius * Math.cos(startAngle + gapAngle);
    const innerStartY = 16 + centerRadius * Math.sin(startAngle + gapAngle);

    const outerStartX = 16 + outerRadius * Math.cos(startAngle + gapAngle);
    const outerStartY = 16 + outerRadius * Math.sin(startAngle + gapAngle);

    const outerEndX = 16 + outerRadius * Math.cos(endAngle - gapAngle);
    const outerEndY = 16 + outerRadius * Math.sin(endAngle - gapAngle);

    const innerEndX = 16 + centerRadius * Math.cos(endAngle - gapAngle);
    const innerEndY = 16 + centerRadius * Math.sin(endAngle - gapAngle);

    // Create segment path
    const pathData = `
      M ${innerStartX} ${innerStartY}
      L ${outerStartX} ${outerStartY}
      A ${outerRadius} ${outerRadius} 0 0 1 ${outerEndX} ${outerEndY}
      L ${innerEndX} ${innerEndY}
      A ${centerRadius} ${centerRadius} 0 0 0 ${innerStartX} ${innerStartY}
      Z
    `;

    paths.push(<path key={i} d={pathData} fill={color} />);
  }

  // Use a consistent size container that won't shift
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: "relative",
        display: "inline-block",
        overflow: "visible",
        flexShrink: 0, // Prevent flex container from shrinking the logo
        opacity: mounted ? 1 : 0, // Prevent flash of unstyled content
        transition: "opacity 0.3s ease", // Smooth fade in when mounted
      }}
    >
      <svg
        ref={logoRef}
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          transformOrigin: "center center", // Ensure rotation happens from the center
          transition: "transform 0.1s ease-out", // Smooth rotation
        }}
      >
        {/* Rendered segments */}
        {paths}

        {/* Central pentagon */}
        <polygon
          points={Array.from({ length: numSegments }, (_, i) => {
            const angle = (i * 2 * Math.PI) / numSegments - Math.PI / 2; // Start from top
            return `${16 + centerRadius * 0.8 * Math.cos(angle)},${
              16 + centerRadius * 0.8 * Math.sin(angle)
            }`;
          }).join(" ")}
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Logo;
