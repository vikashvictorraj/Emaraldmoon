import React from 'react';
import './Banner.css';
import bgVideo from './assets/bannersub1.mp4';
import Iso from './Iso';
import Footer from './Footer';

const Banner = () => {
  return (
    <div className="page-wrapper">
      
      {/* 1. VIEWPORT HERO SECTION (Takes up exactly 100% of screen height) */}
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
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Dark Overlay for content readability */}
        <div className="banner-overlay"></div>

        {/* Main Content Area */}
        <div className="banner-content-wrapper">
          
          {/* Hero Content */}
          <section className="banner-heero-tro">
            <div className="hext-container">
              <h1 id="hero-headline">
                BUILDING ROADS.<br />
                <span className="yellow-text">DELIVERING TRUST.</span>
              </h1>
              <p className="hero-subtitle">Infrastructure & Road Development Specialists – UAE</p>
              
              <div className="hero-buttons">
                <button className="quote-btn">Get a Quote</button>
                <button className="profile-btn">
                  <span className="play-icon">▶</span> View Projects
                </button>
              </div>
            </div>
          </section>

          {/* Partner Logos Strip - Overlaps into the section below */}
          <section className="banner-partners">
            <p className="partners-title">APPROVED BY</p>
            <div className="partners-logo-strip">
              <img src="https://via.placeholder.com/150x50/04331d/fff?text=etisalat" alt="Etisalat Logo" className="partner-logo" />
              <img src="https://via.placeholder.com/150x50/04331d/fff?text=RTA" alt="RTA Logo" className="partner-logo" />
              <img src="https://via.placeholder.com/150x50/04331d/fff?text=DEWA" alt="DEWA Logo" className="partner-logo" />
              <img src="https://via.placeholder.com/150x50/04331d/fff?text=Dubai+Municipality" alt="Dubai Municipality Logo" className="partner-logo" />
            </div>
          </section>

        </div>
      </div>

      {/* 2. SERVICES GRID SECTION (Flows naturally right below the video fold) */}
      <section className="services-grid-container">
        <div className="service-card">
          <div className="service-icon">🛣️</div>
          <h3>Road Construction</h3>
          <p>High quality road construction built to last.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">🚜</div>
          <h3>Asphalt Works</h3>
          <p>Precision asphalt paving for durability and smooth finish.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">🧱</div>
          <h3>Interlock & Paving</h3>
          <p>Reliable interlock and paving solutions for all spaces.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">🏗️</div>
          <h3>Demolition & Clearance</h3>
          <p>Safe, efficient and professional demolition & site clearance.</p>
        </div>
      </section>

      {/* 3. GREEN STATS COUNTER STRIP */}
      <section className="stats-counter-strip">
        <div className="stat-item">
          <span className="stat-number">15+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">250+</span>
          <span className="stat-label">Projects Completed</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">100+</span>
          <span className="stat-label">Skilled Professionals</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">Client Satisfaction</span>
        </div>
      </section>
      <Iso/>
      

    </div>
  );
};

export default Banner;