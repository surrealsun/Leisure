import React from 'react';
import backgroundVideo from '/homepage-vid-loop1.webm';
import './styles/Herosection.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <video
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={backgroundVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          Drift into the extraordinary.
        </motion.h1>

        <Link to="/packages&toursj">
          <button className="cta-button">FIND OUT MORE</button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
