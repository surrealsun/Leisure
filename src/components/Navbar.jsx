import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // for hamburger icons
import LoginPanel from './LoginPanel';
import './styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.9);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const toggleLogin = () => setShowLogin(!showLogin);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
    closeMenu();
  };

  const isHomePage = currentPath === '/';

  const handleBookClick = () => {
    navigate('/bookings');
    closeMenu();
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-top">
          <div className="navbar-logo">
            <a href="/" className="title-link">LEISURE</a>
          </div>
          
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={16} /> : <FaBars size={18} />}
          </div>
        </div>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={isHomePage ? 'active-link' : ''} onClick={closeMenu}>HOME</Link>
          <Link to="/destinations" className={currentPath === '/destinations' ? 'active-link' : ''} onClick={closeMenu}>DESTINATIONS</Link>
          <Link to="/packages&tours" className={currentPath === '/packages&tours' ? 'active-link' : ''} onClick={closeMenu}>PACKAGES & TOURS</Link>
          <Link to="/suits&villas" className={currentPath === '/suits&villas' ? 'active-link' : ''} onClick={closeMenu}>SUITS & VILLAS</Link>
          {/* <a href="#" onClick={closeMenu}>OCCASIONS</a>
          <a href="#" onClick={closeMenu}>OFFERS</a> */}
          <Link to="/about" className={currentPath === '/about' ? 'active-link' : ''} onClick={closeMenu}>ABOUT</Link>
          <Link to="/privacy-policy" className={currentPath === '/privacy-policy' ? 'active-link' : ''} onClick={closeMenu}>PRIVACY</Link>
        </nav>

        <div className="navbar-actions">
          {loggedInUser ? (
            <span onClick={handleLogout} className="account-link">
              {loggedInUser.name.toUpperCase()} 
            </span>
          ) : (
            <span onClick={toggleLogin} className="account-link">ACCOUNT</span>
          )}
          <button className="book-btn" onClick={handleBookClick}>BOOK</button>
        </div>
      </header>

      <LoginPanel show={showLogin} onClose={toggleLogin} />
    </>
  );
};

export default Navbar;
