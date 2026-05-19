import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="em-header">
      {/* Brand Logo Group */}
      <div className="header-logo-group">
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="header-nav">
        <Link to="/" className="nav-link">HOME</Link>
        <Link to="/profile" className="nav-link">PROFILE</Link>
        <Link to="/services" className="nav-link">SERVICES</Link>
        
        {/* --- PROJECTS DROPDOWN TAB --- */}
        <div className="nav-dropdown">
          {/* Changed this from a span to a Link so clicking the word goes to Road Projects */}
          <Link to="/road-projects" className="nav-link dropdown-trigger" style={{ textDecoration: 'none' }}>
            PROJECTS <span className="arrow-down"></span>
          </Link>
          
        </div>

        <Link to="/contact" className="nav-link">CONTACT US</Link>
      </nav>

      {/* Header CTA Button */}
      <div className="header-cta">
        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <button className="quote-btn-sm">
            <span className="phone-icon">📞</span> GET A QUOTE
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;