import '../styles/Suitsandvillas.css'
import LuxuryCarousel from '../components/Suits&Villas/LuxuryCarousel';
import { motion } from 'framer-motion';


const SuitsandVillas = () => {
    return (
        <>
            <section className='vid-section'>
                <video
                    className="video-background"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src='/background-video.mp4' type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="vid-content">
                    <motion.h1 id='h1-middle'
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        EXQUISITE SUITS AND VILLAS.
                    </motion.h1>
                </div>
            </section>
            <h1 className='h1-name'>OUR SUITS</h1>
            <div className="included-section">
                <div className="included-text">
                    <h2>INCLUDED IN YOUR STAY…</h2>
                    <p>A stay in our Signature Suites & Villas promises an exceptional level of elevated service:</p>
                    <ul>
                        <li>Round-trip transfers</li>
                        <li>Dedicated Host service</li>
                        <li>Daily breakfast</li>
                        <li>Complimentary laundry service</li>
                        <li>Complimentary curated in-suite bar and coffee</li>
                        <li>
                            A fully bespoke VIP stay experience, tailored to your preferences and
                            unique to your Signature Suite or Villa
                        </li>
                    </ul>
                </div>

                <div className="included-images">
                    <img src="/images/Suits&Villas/room-small.avif" className="image small" alt="Room Detail" />
                    <img src="/images/Suits&Villas/room-large.avif" className="image large" alt="Room Overview" />
                </div>
            </div>

            <LuxuryCarousel />

        </>
    );
};

export default SuitsandVillas