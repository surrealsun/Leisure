import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <br />
      <div className="footer-container">

        <div className="footer-section contact-us">
          <h4>CONTACT US</h4>
          <p><strong>Reservations</strong> · <a href="tel:08450772222">0441-2322-2025</a></p>
          <p><strong>Address</strong> · 1, Rain Park Avenue. Cross Street Adayar, Chennai INDIA</p>
          <button className="hover-button">CONTACT US</button>
        </div>

        <div className="footer-section explore">
          <h4>EXPLORE OUR WORLD</h4>
          <ul>
            <li><a href="#">Gift cards ↗</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Cookie policy</a></li>
            <li><a href="#">Terms and conditions</a></li>
            <li><a href="#">Modern slavery statement</a></li>
            <li><a href="#">Environmental, social and governance</a></li>
          </ul>
        </div>

        <div className="footer-section join-us">
          <h4>JOIN OUR FAMILY</h4>
          <ul>
            <li><a href="#">Travel professionals ↗</a></li>
            <li><a href="#">Event planners ↗</a></li>
            <li><a href="#">Media hub ↗</a></li>
            <li><a href="#">Development ↗</a></li>
            <li><a href="#">Careers ↗</a></li>
            <li><a href="#">About Leisure ↗</a></li>
          </ul>
        </div>

        <div className="footer-section sign-up">
          <h4>SIGN UP FOR EXCLUSIVE NEWS, TRAVEL INSPIRATION AND OFFERS</h4>
          <div className="signup-form">
            <select>
              <option>Title</option>
              <option>Mr</option>
              <option>Ms</option>
            </select>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <input type="email" placeholder="Enter email address" className="email-input" />
            <p className="signup-disclaimer">
              I would like to be kept updated on exclusive news, travel inspiration and offers...
              To learn more about how we store and process your data please visit our
              <a href="#"> Privacy Policy</a>.
            </p>
            <button className="hover-button">SIGN UP</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social">
          <p>FOLLOW US</p>
          <div className="icons">
            <a href="#"><img src="/icons/instagram.png" alt="Insta" className="fab1" /></a>
            <a href="#"><img src="/icons/youtube.png" alt="Youtube" className="fab1" /></a>
            <a href="#" ><img src="/icons/linkedin.png" alt="Linkedin" className="fab1" /></a>
            <a href="#"><img src="/icons/facebook.png" alt="Facebook" className="fab1" /></a>
          </div>
        </div>

        <p className="copyright">
          © Leisure Management Limited 2025. All copyright and intellectual property rights apply.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
