import React from 'react';
import './Contactus.css';

const Contactus = () => {
  return (
    <div className="contact-page-wrapper">
      {/* 1. HERO BACKGROUND SECTION */}
      <section className="hero-background">
        <div className="hero-content-overlay">
          <div className="container">
            <div className="brand-logo">
              {/* <img src="logo.png" alt="Emerald Moon" /> */}
              <div className="placeholder-logo">EMERALD MOON <span>CONTRACTING LLC</span></div>
            </div>
            <h1 className="hero-headline">
              LET’S BUILD <br />
              <span className="gold-glow">SOMETHING GREAT</span> <br />
              TOGETHER
            </h1>
            <p className="hero-subtext">
              Delivering trusted infrastructure, marine, bridge, and civil engineering 
              solutions across the GCC region with quality, safety, and excellence.
            </p>
          </div>
        </div>
        {/* Placeholder for the office/man background image */}
        <div className="bg-image-container"><img src="https://media.licdn.com/dms/image/v2/D4E12AQGC0O51Z0Ha5Q/article-cover_image-shrink_600_2000/B4EZuzSTASJEAQ-/0/1768239478963?e=2147483647&v=beta&t=Q9pxgbvLXs_LUjXp78kH-XNOSnRDsNDYq5VhdkqBPWE" alt="" /></div>
      </section>

      {/* 2. INTERACTIVE DASHBOARD SECTION */}
      <section className="dashboard-section">
        <div className="container dashboard-grid">
          
          {/* Contact Info Card */}
          <div className="glass-card info-card">
            <h4 className="card-title">CONTACT INFORMATION</h4>
            <div className="info-list">
              <InfoItem icon="📍" title="HEAD OFFICE" desc="Rasis Building, Al Barsha, Dubai, UAE" />
              <InfoItem icon="📞" title="MOBILE" desc="+971 56 168 2444" />
              <InfoItem icon="✉️" title="EMAIL" desc="info@ziaalali.me" />
            </div>
            <button className="whatsapp-button">
              <span>💬</span> Chat With Us on WhatsApp
            </button>
          </div>

          {/* Branch Locations Card (The Overlapping Card) */}
          <div className="green-card branch-card">
            <h4 className="card-title-light">BRANCH LOCATIONS</h4>
            <div className="branches-flex">
              <Branch icon="🏙️" city="DUBAI" country="UAE" />
              <Branch icon="🕌" city="SAUDI" country="ARABIA" />
              <Branch icon="🏢" city="BAHRAIN" country="" />
              <Branch icon="🏗️" city="QATAR" country="" />
            </div>
          </div>

          {/* Send Message Card */}
          <div className="dark-card form-card">
            <h4 className="card-title-light">SEND US A MESSAGE</h4>
            <form className="contact-form">
              <div className="input-row">
                <div className="input-box"><span className="icon">👤</span><input type="text" placeholder="Full Name" /></div>
                <div className="input-box"><span className="icon">🏢</span><input type="text" placeholder="Company Name" /></div>
              </div>
              <div className="input-box"><span className="icon">✉️</span><input type="email" placeholder="Email Address" /></div>
              <div className="input-box"><span className="icon">📞</span><input type="tel" placeholder="Phone Number" /></div>
              <div className="input-box">
                <span className="icon">📂</span>
                <select>
                  <option>Service Required</option>
                  <option>Infrastructure</option>
                  <option>Marine</option>
                </select>
              </div>
              <div className="input-box textarea-box"><span className="icon">✏️</span><textarea placeholder="Message"></textarea></div>
              <button type="submit" className="submit-enquiry">
                 <span>✈️</span> SEND ENQUIRY
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 3. HIGHLIGHTS BAR */}
      <section className="highlights-bar">
        <div className="container highlights-flex">
          <Highlight icon="🛡️" title="SAFETY FIRST" desc="Top priority on every project" />
          <Highlight icon="🏅" title="QUALITY ASSURED" desc="Committed to standards" />
          <Highlight icon="👥" title="EXPERT TEAM" desc="Skilled professionals" />
          <Highlight icon="🕒" title="ON-TIME" desc="Projects as promised" />
          <Highlight icon="🌱" title="SUSTAINABLE" desc="Future responsibly" />
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="footer-bar">
        <div className="container footer-flex">
          <div className="footer-logo">EMERALD MOON</div>
          <p className="footer-copyright">Building trusted solutions across the GCC.</p>
          <div className="footer-contact-info">
            <span>📞 +971 56 168 2444</span>
            <span>✉️ info@ziaalali.me</span>
          </div>
          <div className="footer-socials">
            <span className="s-icon">in</span>
            <span className="s-icon">f</span>
            <span className="s-icon">📸</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* Helper Components */
const InfoItem = ({ icon, title, desc }) => (
  <div className="info-item">
    <div className="icon-circle">{icon}</div>
    <div className="text-block">
      <strong>{title}</strong>
      <p>{desc}</p>
    </div>
  </div>
);

const Branch = ({ icon, city, country }) => (
  <div className="branch-item">
    <div className="branch-icon">{icon}</div>
    <div className="branch-label">
      <strong>{city}</strong>
      <span>{country}</span>
    </div>
  </div>
);

const Highlight = ({ icon, title, desc }) => (
  <div className="h-item">
    <div className="h-icon">{icon}</div>
    <div className="h-text">
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
    
  </div>
);

export default Contactus;