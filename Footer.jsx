import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="em-footer">
      <div className="footer-container">
        
        {/* Brand & About Column */}
        <div className="footer-column brand-column">
          <div className="footer-logo-group">
            <div className="logo-icon">
              <span className="moon-crest"></span>
              <span className="building-bars">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div className="logo-text">
              <span className="brand-name">EMERALD MOON</span>
              <span className="brand-sub">CONTRACTING LLC</span>
            </div>
          </div>
          <p className="footer-about">
            Delivering trusted infrastructure, marine, bridge, and civil engineering solutions across the UAE and GCC region with unyielding quality, safety, and excellence.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="footer-column">
          <h4 className="footer-heading">QUICK LINKS</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Company Profile</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/road-projects">Projects Portfolio</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="footer-column">
          <h4 className="footer-heading">CONTACT US</h4>
          <ul className="footer-contact-list">
            <li>
              <span className="contact-icon">📍</span>
              <span>Rasis Building, Al Barsha, Dubai, UAE</span>
            </li>
            <li>
              <span className="contact-icon">📞</span>
              <span>+971 56 168 2444</span>
            </li>
            <li>
              <span className="contact-icon">✉️</span>
              <span>info@ziaalali.me</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright & Socials Bottom Bar */}
      <div className="footer-bottom">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Emerald Moon Contracting LLC. All Rights Reserved.
        </p>
        <div className="footer-socials">
          <a href="#" className="social-icon">In</a>
          <a href="#" className="social-icon">Fb</a>
          <a href="#" className="social-icon">X</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;