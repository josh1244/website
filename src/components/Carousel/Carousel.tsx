// Carousel Component
// This component is a feature showcase carousel that allows users to navigate through different items.
// This is used on the Scriptos website to showcase the features of the application.

// Imports
import React, { useState, useEffect } from "react";
import "./Carousel.css";

export interface CarouselItem {
  image: string;
  title: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoRotateInterval?: number;
  title?: string;
  description?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoRotateInterval = 5000,
  title = "Feature Showcase",
  description = "Explore the key features of the application:",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Go to the next card
  // Only used by auto-rotation
  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500); // Match transition duration
  };

  // When you click on a card or its indicator, it should become the active card
  // Rotate the carousel to the clicked card
  const handleCardClick = (index: number) => {
    if (isTransitioning || index === activeIndex) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto rotation using an interval
  useEffect(() => {
    if (items.length <= 1) return; // No need for auto-rotation if there's only one item

    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [activeIndex, isTransitioning, autoRotateInterval, items.length]);

  // Calculate position for each card
  const getCardPosition = (index: number) => {
    // Calculate distance from active card (with wrapping)
    let distance = index - activeIndex;

    // Handle wrapping for a circular carousel
    if (distance > items.length / 2) distance -= items.length;
    if (distance < -items.length / 2) distance += items.length;

    return {
      position: distance,
      // Active card: 0, cards to the left: negative, to the right: positive
      className: distance === 0 ? "active" : distance < 0 ? "left" : "right",
    };
  };

  // Calculate horizontal position and scale for each card
  const getCardTransform = (position: number) => {
    // Get window width to determine if we're on mobile or larger screens
    const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    const isLargeScreen = windowWidth > 1400;
    const isMobile = windowWidth <= 768;
    const isSmallMobile = windowWidth <= 480;

    if (position === 0) {
      // Active card - centered
      return `translateX(-50%) scale(1)`;
    } else if (position < 0) {
      // Left cards - adjust position based on screen size
      let offsetPercent;
      if (isLargeScreen) {
        offsetPercent = -50 + position * 110; // More spread out on larger screens
      } else {
        offsetPercent =
          -50 + position * (isSmallMobile ? 70 : isMobile ? 80 : 90);
      }
      return `translateX(${offsetPercent}%) scale(${isMobile ? 0.8 : 0.85})`;
    } else {
      // Right cards - adjust position based on screen size
      let offsetPercent;
      if (isLargeScreen) {
        offsetPercent = -50 + position * 110; // More spread out on larger screens
      } else {
        offsetPercent =
          -50 + position * (isSmallMobile ? 70 : isMobile ? 80 : 90);
      }
      return `translateX(${offsetPercent}%) scale(${isMobile ? 0.8 : 0.85})`;
    }
  };

  return (
    <div className="feature-showcase-background">
      <h2 className="feature-showcase-title">{title}</h2>
      <p className="feature-showcase-description">{description}</p>

      {/* Contains the cards */}
      <div className="carousel-container">
        <div className="carousel-stage">
          {items.map((item, index) => {
            const { position, className } = getCardPosition(index);

            // Only render cards that are visible (active, and 3 on each side)
            const shouldRender = Math.abs(position) <= 3;
            if (!shouldRender) return null;

            return (
              <div
                key={index}
                className={`carousel-card ${className}`}
                style={{
                  transform: getCardTransform(position),
                  zIndex: 10 - Math.abs(position),
                  transition: "all 0.5s ease",
                }}
                onClick={() => handleCardClick(index)}
              >
                <div className="carousel-image-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="carousel-image"
                  />
                </div>
                <div className="carousel-content">
                  <h4>{item.title}</h4>

                  {/* Only show the description on the active card. */}
                  {position === 0 && <p>{item.description}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Clickable Indicators */}
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => handleCardClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
