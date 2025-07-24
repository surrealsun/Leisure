import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import '../styles/RegionCarousel.css';
import allPackages from '../../data/allpackages';



const RegionCarousel = () => {
  const [region, setRegion] = useState('Europe');
  const navigate = useNavigate();

  const handleBook = (packageItem) => {
    const selectedPackage = { ...packageItem, region };
    localStorage.setItem('selectedPackage', JSON.stringify(selectedPackage));
    navigate('/bookings');
  };

  return (
    <div className="carousel-container">
      <h2 className="heading">Expeditions</h2>

      <div className="region-buttons">
        {Object.keys(allPackages).map((r) => (
          <button
            key={r}
            className={`region-btn ${region === r ? 'active' : ''}`}
            onClick={() => setRegion(r)}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {allPackages[region].map((item, idx) => (
          <div className="journey-card" key={idx}>
            <img src={item.image} alt={item.title} />
            <div className="caption">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button
                className="luxury-book-btn"
                onClick={() => handleBook(item)}
              >
                BOOK
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionCarousel;
