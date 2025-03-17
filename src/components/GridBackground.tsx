import React, { useEffect, useRef, useState } from "react";
import "../styles/GridBackground.css";

const GridBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: "50%", y: "50%" });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;

      setPosition({ x, y });

      if (containerRef.current) {
        containerRef.current.style.setProperty("--cursor-x", x);
        containerRef.current.style.setProperty("--cursor-y", y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="grid-background"
      ref={containerRef}
      style={
        {
          "--cursor-x": position.x,
          "--cursor-y": position.y,
        } as React.CSSProperties
      }
    />
  );
};

export default GridBackground;
