import React, { useState } from 'react';
import '../styles/Loopingcarousel.css';
import { useEffect } from 'react';

const images = [
  '/images/Destinations/looping1.avif',
  '/images/Destinations/looping2.avif',
  '/images/Destinations/looping3.avif',
  '/images/Destinations/looping4.avif',
  '/images/Destinations/looping5.avif',
  '/images/Destinations/looping6.avif',
  '/images/Destinations/looping7.avif',


];

const LoopingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 1000); // auto-slide every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [currentIndex]);


  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      const imgIndex = (currentIndex + i) % images.length;
      visible.push(
        <div className="carousel-image" key={i}>
          <img src={images[imgIndex]} alt={`Image ${imgIndex}`} />
        </div>
      );
    }
    return visible;
  };

  return (
    <div className="carousel-container1">
      <button className="carousel-button left" onClick={handlePrev}>‹</button>
      <div className="carousel-track">
        {getVisibleImages()}
      </div>
      <button className="carousel-button right" onClick={handleNext}>›</button>
    </div>
  );
};

export default LoopingCarousel;
