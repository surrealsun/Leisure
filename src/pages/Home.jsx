import HeroSection from '../components/HeroSection';
import ImageGallery from '../components/Home/ImageGallery'
import '../styles/Home.css'

const Home = () => (
  <>
    <HeroSection />
    <p className='text1'>EXPLORE OUR LATEST OFFER</p>
    <ImageGallery />
  </>
);

export default Home;