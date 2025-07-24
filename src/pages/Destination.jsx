import LoopingCarousel from '../components/Destination/LoopingCarousel';
import '../styles/Destinations.css';
import backgroundVideo from '/destination-bg-vid.mp4';

import { motion } from 'framer-motion';


const Destinations = () => {
  return (
    <>
      <div id="main">
        <section className='video-section1'>
             <video
               className="video-background1"
               autoPlay
               loop
               muted
               playsInline
             >
               <source src={backgroundVideo} type="video/webm" />
               Your browser does not support the video tag.
             </video>
        <div className="vid-content">
                    <motion.h1 id='h1-middle'
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        INSPIRING DESTINATIONS.
                    </motion.h1>
        </div>
        </section>
        <div className="text">
          <h2>OUR DESTINATIONS</h2>
        </div>
          <p id='text1'>Explore our handpicked locations across the globe...</p>

        <img src="/images/Destinations/world-map.png" className="map-image" alt="World Map" />

        <img src="/images/Destinations/img1.png" className="img1" alt="Destination 1" />
        <img src="/images/Destinations/img2.png" className="img2" alt="Destination 2" />

        <img src="/images/experiances.png" className="experiences-img" alt="Experiences" />
        <p className='text2'>PLAN YOUR NEXT ADVENTURE</p>
        <LoopingCarousel />
      </div>

    </>
  );
};

export default Destinations;
