import RegionCarousel from "../components/Packages&Tour/RegionCarousel";
import '../styles/PackagesandTours.css'

import { motion } from 'framer-motion';

const Packages = () => {
  return (
    <>
      <section className='vid-section2'>
        <video
          className="video-background2"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/pack-back.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="img-content3">
          <motion.h1 id="h1-middle"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            PACKAGES & TOURS
          </motion.h1>
        </div>
      </section>
      <div style={{ textAlign: "center", marginTop : "100px" }}>
        <p>Explore our handpicked locations across the globe...</p>
      </div>
      <RegionCarousel />
      <img src="/images/experiances.png"></img>
    </>
  );
};

export default Packages;