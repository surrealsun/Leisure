import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Packages from './pages/Packages&Tours';
import Destinations from './pages/Destination';
import SuitsandVillas from './pages/Suits&Villas';
import Footer from './components/Footer';
import Scroll from './components/Scroll';
import About from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Bookings from './pages/Bookings';
import Payment from './pages/Payment';   
import Success from './pages/Success';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Scroll />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/packages&tours" element={<Packages />} />
          <Route path="/suits&villas" element={<SuitsandVillas />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/bookings" element={<Bookings />} />     
          <Route path="/payment" element={<Payment />} /> 
          <Route path="/success" element={<Success />} /> 
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
