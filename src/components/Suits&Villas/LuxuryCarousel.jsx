import React, { useState } from "react";
import "../styles/LuxuryCarousel.css";

const slides = [
  {
    leftImage: "/images/Suits&Villas/1-left.avif",
    rightImage: "/images/Suits&Villas/1-right.avif",
    text: "FROM DEDICATED HOST SERVICE TO COMPLETE PERSONALISATION, MAKE YOUR DREAM A REALITY WITH ONE OF OUR ICONIC SUITES AND VILLAS.",
  },
  {
    leftImage: "/images/Suits&Villas/2-left.avif",
    rightImage: "/images/Suits&Villas/2-right.avif",
    text: "INDULGE IN WORLD-CLASS AMENITIES AND TIMELESS CHARM ACROSS OUR LUXURY COLLECTION.",
  },
  {
    leftImage: "/images/Suits&Villas/3-left.avif",
    rightImage: "/images/Suits&Villas/3-right.avif",
    text: "EXPERIENCE IMPECCABLE SERVICE IN SETTINGS DESIGNED TO DELIGHT THE SENSES.",
  },
  {
    leftImage: "/images/Suits&Villas/4-left.avif",
    rightImage: "/images/Suits&Villas/4-right.avif",
    text: "EVERY STAY IS AN OPPORTUNITY TO DISCOVER, TO RELAX, AND TO FEEL TRULY SPECIAL.",
  },
];

export default function LuxuryCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-content">
        <img
          src={slides[currentSlide].leftImage}
          alt="left"
          className="carousel-image"
        />
        <div className="carousel-text">
          <p className="carousel-subtitle">THE PINNACLE OF LUXURY</p>
          <h2>{slides[currentSlide].text}</h2>
          <div className="carousel-indicator">
            {currentSlide + 1} of {slides.length}
            <button onClick={nextSlide}>&rsaquo;</button>
          </div>
        </div>
        <img
          src={slides[currentSlide].rightImage}
          alt="right"
          className="carousel-image"
        />
      </div>
    </div>
  );
}
