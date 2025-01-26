import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const setIsMenuOpen = (state) => {
    // Placeholder function for menu state management
    console.log('Menu state changed:', state);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h4>SAV-Tech Associate</h4>
            <p>Innovative solutions for Sugar, Power Plant, Co-Generation, Distillery, Khandsar & Jaggery industries.</p>
            <div className="footer-contact">
              <p><strong>Phone:</strong> 9422225058, 9011731731, 9822760005</p>
              <p><strong>Email:</strong> info@nrfabricator.com</p>
              <p><strong>Address:</strong> G-58, M.I.D.C, Ahmednagar, Maharashtra - 414111</p>
            </div>
          </div>

          <div className="footer-right">
            <h4>Navigation</h4>
            <ul>
              <li>
                <Link to="/home" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
              <Link to="/aboutus" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => setIsMenuOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contactpage" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-right">
            <h4>Projects</h4>
            <ul>
              <li>
                <Link to="/manufacturing" onClick={() => setIsMenuOpen(false)}>
                  Manufacturing of Machineries
                </Link>
              </li>
              <li>
                <Link to="/relay-card" onClick={() => setIsMenuOpen(false)}>
                  RelayCard
                </Link>
              </li>
              <li>
                <Link to="/industrial-panel-manufacturer" onClick={() => setIsMenuOpen(false)}>
                  Industrial Panel Manufacturing
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-links">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
