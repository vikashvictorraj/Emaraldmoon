import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      {/* Background Media Wrapper */}
      <div className="banner-background">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="background-video"
        >
          {/* Replace this src with your actual video URL or local file path */}
          <source src="assets/bannersub1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark Overlay for content readability */}
      <div className="banner-overlay"></div>

      {/* Main Content Area - Flex Column spanning exactly 100vh */}
      <div className="banner-content-wrapper">
        
        {/* Hero Section - flex: 1 expands to fill middle space */}
        <section className="banner-hero">
          <div className="hero-text-container">
            <h1 className="hero-headline">BUILDING ROADS <br /> DELIVERING TRUST</h1>
            <p className="hero-subtitle">Infrastructure and road development <br /> specialists-UAE</p>
            <div className="hero-buttons">
              <button className="quote-btn">Get a Quote</button>
              <button className="profile-btn">View Profile</button>
            </div>
          </div>
        </section>

        {/* Partner Logos Section - locked to the bottom */}
        <section className="banner-partners">
          <p className="partners-title">AUTHORIZED & APPROVED BY</p>
          <div className="partners-logo-strip">
            <img src="https://via.placeholder.com/150x50/333/fff?text=RTA" alt="RTA Logo" className="partner-logo" />
            <img src="https://via.placeholder.com/150x50/333/fff?text=Dubai+Mun" alt="Dubai Municipality Logo" className="partner-logo" />
            <img src="https://via.placeholder.com/150x50/333/fff?text=DEWA" alt="DEWA Logo" className="partner-logo" />
            <img src="https://via.placeholder.com/150x50/333/fff?text=DP+WORLD" alt="DP WORLD Logo" className="partner-logo" />
            <img src="https://via.placeholder.com/150x50/333/fff?text=AUTH+5" alt="Authority 5 Logo" className="partner-logo" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;