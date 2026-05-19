import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      {/* --- MAIN CONTENT SECTION --- */}
      <main className="profile-main-grid">
        
        {/* LEFT COLUMN: About Us & Message */}
        <div className="about-col scroll-panel">
          <div className="about-badge">ABOUT US</div>
          <h1 className="main-title">
            MANAGING DIRECTOR & <br />
            <span className="gold-text">CEO MESSAGE</span>
          </h1>
          <h3 className="sub-title">
            BUILDING STRONGER INFRASTRUCTURE. <br />
            <span className="gold-text">DELIVERING LASTING IMPACT.</span>
          </h3>
          <p className="desc-text">
            We are a UAE-based infrastructure and civil engineering company delivering world-class 
            construction solutions across roads, marine, bridges, utilities, and more.
          </p>
          <p className="desc-text">
            With a strong team, advanced equipment, and a client-first approach, we continue to 
            build lasting partnerships and deliver projects that shape a better future.
          </p>

          <div className="values-container">
            <h4 className="section-label">OUR VALUES</h4>
            <div className="values-grid">
              <Value icon="⚖️" title="INTEGRITY" />
              <Value icon="⭐" title="EXCELLENCE" />
              <Value icon="🪖" title="SAFETY" />
              <Value icon="🤝" title="TEAMWORK" />
              <Value icon="🌱" title="SUSTAINABILITY" />
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: CEO Image (Slanted on Desktop) */}
        <div className="ceo-image-col">
          <div className="ceo-frame">
            <div className="placeholder-img">
               CEO IMAGE
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Leader Card */}
        <div className="leader-col scroll-panel">
          <div className="brand-header">
            <div className="brand-logo">
              EMERALD MOON
              <small>CONTRACTING LLC</small>
            </div>
            <p className="company-context">
              A UAE-based infrastructure and civil engineering company delivering world-class construction solutions.
            </p>
          </div>

          <div className="profile-card">
            <div className="card-header">MEET OUR LEADER</div>
            <h2 className="leader-name">YASHIK ALI</h2>
            <p className="leader-title">MANAGING DIRECTOR & CEO</p>

            <div className="bio-list">
              <BioItem icon="👤" title="Visionary Leadership" desc="Leading with vision, integrity, and a hands-on approach." />
              <BioItem icon="⚙️" title="Industry Expertise" desc="Over 15 years of experience in GCC infrastructure." />
              <BioItem icon="📈" title="Strategic Growth" desc="Focused on building long-term sustainable partnerships." />
              <BioItem icon="🛡️" title="Quality Commitment" desc="Dedicated to the highest standards of safety." />
            </div>

            <blockquote className="ceo-quote">
              "Our strength lies in our people, our partnerships, and our passion for delivering infrastructure that builds a better tomorrow."
            </blockquote>
          </div>
        </div>
      </main>

      {/* --- FOOTER SECTION --- */}
      <footer className="profile-footer">
        <div className="footer-grid">
          
          {/* Map Section */}
          <div className="map-section hide-mobile">
            <div className="map-text">
              <h4>SERVING ACROSS UAE</h4>
              <p>Delivering excellence across all 7 Emirates</p>
            </div>
            <div className="placeholder-img mini">UAE MAP / MACHINERY</div>
          </div>

          {/* Stats & ISO Section */}
          <div className="stats-iso-block">
            <div className="stats-grid">
              <Stat val="15+" label="YEARS EXPERIENCE" />
              <Stat val="250+" label="PROJECTS COMPLETED" />
              <Stat val="100+" label="SKILLED PROS" />
              <Stat val="120+" label="PLANT & EQUIP" />
              <Stat val="100%" label="SATISFACTION" />
              <Stat val="ZERO" label="COMPROMISE" />
            </div>

            <div className="iso-commitment">
              <span className="iso-title">OUR COMMITMENT TO INTERNATIONAL STANDARDS</span>
              <div className="iso-flex">
                <IsoItem code="9001:2015" type="QUALITY" />
                <IsoItem code="45001:2018" type="SAFETY" />
                <IsoItem code="14001:2015" type="ENVIRONMENT" />
              </div>
            </div>
          </div>

          {/* Construction Image Section */}
          <div className="visual-section hide-tablet">
            <div className="placeholder-img mini">CONSTRUCTION / MARINE</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* Sub-components */
const Value = ({ icon, title }) => (
  <div className="value-item">
    <div className="v-icon">{icon}</div>
    <h5>{title}</h5>
  </div>
);

const BioItem = ({ icon, title, desc }) => (
  <div className="bio-item">
    <div className="b-icon">{icon}</div>
    <div className="b-text">
      <h6>{title}</h6>
      <p>{desc}</p>
    </div>
  </div>
);

const Stat = ({ val, label }) => (
  <div className="stat-box">
    <span className="s-val">{val}</span>
    <span className="s-label">{label}</span>
  </div>
);

const IsoItem = ({ code, type }) => (
  <div className="iso-badge">
    <div className="iso-circle">ISO</div>
    <div className="iso-text">
      <strong>{code}</strong>
      <span>{type} Management System</span>
    </div>
  </div>
);

export default Profile;