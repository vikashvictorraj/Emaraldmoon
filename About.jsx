import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-page">
      <div className="main-wrapper">
        
        {/* LEFT COLUMN: Content & Branding */}
        <div className="content-side">
          <header className="brand-header">
            <p className="label-top">ABOUT</p>
            <h1 className="main-logo">OUR <span className="gold">COMPANY</span></h1>
            <div className="divider"></div>
          </header>

          <div className="intro-text">
            <p>Emerald Moon Contracting LLC is a leading infrastructure and road construction company based in the UAE. We deliver high-quality, sustainable solutions for government and private sector projects.</p>
            <p>Our experienced team and modern equipment enable us to exceed expectations on every project.</p>
          </div>

          <div className="values-grid">
            <div className="v-card">
              <div className="v-icon">🛡️</div>
              <div className="v-info">
                <h4>QUALITY & SAFETY</h4>
                <p>We follow the highest standards in all operations.</p>
              </div>
            </div>
            <div className="v-card">
              <div className="v-icon">👥</div>
              <div className="v-info">
                <h4>EXPERIENCED TEAM</h4>
                <p>Skilled professionals with years of industry experience.</p>
              </div>
            </div>
            <div className="v-card">
              <div className="v-icon">🤝</div>
              <div className="v-info">
                <h4>CLIENT FOCUSED</h4>
                <p>Satisfaction is our top priority. We build relationships.</p>
              </div>
            </div>
            <div className="v-card">
              <div className="v-icon">🕒</div>
              <div className="v-info">
                <h4>ON-TIME DELIVERY</h4>
                <p>We value time and ensure delivery on schedule.</p>
              </div>
            </div>
          </div>

          <div className="utility-container">
            <div className="utility-content">
              <h3>🏗️ UTILITY PROJECTS</h3>
              <ul className="utility-list">
                <li>✔ Water Supply Networks</li>
                <li>✔ Sewerage Systems</li>
                <li>✔ Storm Water Drainage</li>
                <li>✔ Underground Ducting</li>
                <li>✔ Manholes & Chambers</li>
              </ul>
            </div>
            <div className="utility-img">
              <img src="https://planhub.com/wp-content/uploads/2023/06/Featured-image-16.jpg" alt="Utility Detail" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Visuals & Feature Card */}
        <div className="visual-side">
          <div className="worker-bg">
            <img src="src/assets/About.img.png" alt="Main Infrastructure" className="main-bg-img" />
            
            <div className="feature-overlay">
              <div className="floating-card">
                <div className="card-top">
                  <span className="check-mark">✔</span>
                  <span>CLEAR DRAINAGE BETTER LIVING</span>
                </div>
                <ul className="card-points">
                  <li>🏢 Underground Drainage Systems</li>
                  <li>⛈️ Storm Water Line</li>
                  <li>💧 LV Water Line</li>
                  <li>🌊 Efficient Water Flow</li>
                  <li>♻️ Sustainable Infrastructure</li>
                </ul>
                <div className="mini-circle">
                  <img src="About.img" alt="Circular Thumbnail" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BAR: Global Statistics */}
      <footer className="bottom-stats">
        <div className="stat-group">
          <div className="s-item"><h3>15+</h3><p>YEARS OF EXPERIENCE</p></div>
          <div className="s-item"><h3>250+</h3><p>PROJECTS COMPLETED</p></div>
          <div className="s-item"><h3>100+</h3><p>SKILLED PROFESSIONALS</p></div>
        </div>
        <div className="footer-quote">
          <p>"Building infrastructure that connects communities and <span className="gold">creates a better tomorrow.</span>"</p>
        </div>
      </footer>
    </section>
  );
};

export default About;