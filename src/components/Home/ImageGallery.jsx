import React, { useState } from 'react';
import '../styles/Imagegallery.css';

const images = [
  {
    src: '/images/Home/gallery1.avif',
    title: 'THE SUITE LIFE IN AMALFI',
    description: 'Book one of our Suites at Caruso and enjoy an indulgent sanset aperitivo on a boat in Amalfi.'
  },
  {
    src: '/images/Home/gallery2.avif',
    title: 'COMPLIMENTARY SAFARI NIGHT',
    description: 'Book 6 nights and only pay for 5 when staying between our two Belmond Safaris lodges in Botswana.'
  },
  {
    src: '/images/Home/gallery3.avif',
    title: 'DISCOVER TUSCANY',
    description: 'Enjoy extra indulgence at Castello-di Casole - the perfect base from which to fall in love with wild Tuscany.'
  },
  {
    src: '/images/Home/gallery4.avif',
    title: 'MEXICO SPA RETREAT',
    description: 'Escape to Mexico\'s golden shores for authentic relaxation and mindful indulgence at Maroma in the Riviera Maya'
  }
];

const ImageHoverGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const isMobile = window.innerWidth <= 1024;

  return (
    <div className="image-gallery-wrapper">
      {isMobile ? (
        <div className="mobile-gallery">
          <br /> <br />
          <div className="image-container">
            <img src={images[currentIndex].src} alt={images[currentIndex].title} className='mobile-img'/>
          </div>
          <div className="mobile-title">{images[currentIndex].title}</div>
          <div className="nav-buttons">
            <button onClick={prevImage} className="nav-button">‹</button>
            <button onClick={nextImage} className="nav-button">›</button>
          </div>
        </div>
      ) : (
        <div className="image-gallery">
          {images.map((img, index) => (
            <div className="image-container" key={index}>
              <img src={img.src} alt={img.title} />
              <div className="overlay">
                <h2>{img.title}</h2>
                <p>{img.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageHoverGallery;
