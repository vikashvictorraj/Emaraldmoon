import React from 'react';
import './Ourservices.css';

const services = [
  { title: "ROAD CONSTRUCTION", desc: "High-quality road construction with durable materials & advanced equipment.", icon: "🚜" },
  { title: "ASPHALT PAVING", desc: "Smooth, long-lasting asphalt paving for roads, highways & urban infrastructure.", icon: "🛣️" },
  { title: "ROAD MARKING", desc: "Thermoplastic & paint road marking for safety, guidance & compliance.", icon: "📏" },
  { title: "KERBSTONE", desc: "Installation of precast kerbstones for neat edges, drainage control & road safety.", icon: "🧱" },
  { title: "INTERLOCK", desc: "Durable interlock solutions for driveways, walkways & outdoor spaces.", icon: "💠" },
  { title: "STREET LIGHT", desc: "Supply & installation of reliable street lighting systems for safe & efficient roads.", icon: "💡" },
  { title: "CONCRETE BARRIERS", desc: "Heavy-duty concrete barriers for road safety, traffic control & site protection.", icon: "🚧" },
  { title: "STEEL ROAD BARRIERS", desc: "High-strength steel barriers for highways, curves & high-risk areas.", icon: "🛤️" },
  { title: "MARINE WORKS", desc: "Comprehensive marine construction including platforms & structures.", icon: "⚓" },
  { title: "SHEET PILING", desc: "Steel sheet piling for retaining walls, cofferdams & shoreline protection.", icon: "🏗️" },
  { title: "DREDGING SUPPORT", desc: "Support services for dredging operations including equipment & logistics.", icon: "🚢" },
  { title: "MARINE INFRASTRUCTURE", desc: "Reliable marine infrastructure built to withstand harsh marine environments.", icon: "🌊" },
  { title: "STEEL BRIDGE WORKS", desc: "Design, fabrication & construction of steel bridges with high strength & durability.", icon: "🌉" },
  { title: "FABRICATION", desc: "Custom steel fabrication for structural, industrial & infrastructure requirements.", icon: "🔧" },
  { title: "DEMOLITION & CLEARANCE", desc: "Safe demolition & site clearance with proper debris management.", icon: "🔨" },
  { title: "BUILDING DEMOLITION", desc: "Controlled demolition of residential, commercial & industrial buildings.", icon: "🏢" },
  { title: "SITE CLEARANCE", desc: "Complete site clearing & grading for construction readiness.", icon: "🚜" },
  { title: "UTILITY WORKS", desc: "Expert utility solutions including drainage, water line, ducting & cable works.", icon: "⚡" },
];

const Ourservices = () => {
  return (
    <div className="services-page">
      {/* --- TOP HEADER --- */}
      <header className="header-section">
        <div className="header-left">
          <div className="label-top">OUR SERVICES —</div>
          <h1 className="main-title">COMPREHENSIVE SOLUTIONS.</h1>
          <h1 className="main-title gold-text">EXCEPTIONAL DELIVERY.</h1>
          <p className="header-desc">
            End-to-end infrastructure & construction services with a commitment to 
            <strong> quality, safety & timely execution.</strong>
          </p>
        </div>

        <div className="header-stats">
          <Stat icon="✔️" val="15+" label="YEARS OF EXPERIENCE" />
          <Stat icon="👷" val="250+" label="PROJECTS COMPLETED" />
          <Stat icon="👥" val="100+" label="SKILLED PROFESSIONALS" />
          <Stat icon="🛡️" val="100%" label="QUALITY ASSURANCE" />
        </div>

        <div className="hero-visual">
          HERO IMAGE
        </div>
      </header>

      {/* --- DIVIDER --- */}
      <div className="section-divider">
        <span>WHAT WE DO</span>
      </div>

      {/* --- SERVICES GRID --- */}
      <main className="services-grid-container">
        {services.map((item, index) => (
          <div className="s-card" key={index}>
            <div className="s-card-img">
              IMAGE
            </div>
            <div className="s-card-body">
              <div className="s-icon-box">{item.icon}</div>
              <div className="s-text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* --- FOOTER HIGHLIGHTS --- */}
      <footer className="services-footer">
        <FooterItem icon="👷" title="SAFETY FIRST" desc="We prioritize the safety of our people." />
        <FooterItem icon="🥇" title="QUALITY ASSURED" desc="We deliver superior quality." />
        <FooterItem icon="🤝" title="CLIENT FOCUSED" desc="Building lasting relationships." />
        <FooterItem icon="🕒" title="ON-TIME DELIVERY" desc="Delivered as promised." />
        <FooterItem icon="🌿" title="SUSTAINABLE" desc="Eco-friendly methods." />
      </footer>
    </div>
  );
};

/* Components */
const Stat = ({ icon, val, label }) => (
  <div className="stat-item">
    <div className="stat-circle">{icon}</div>
    <div className="stat-info">
      <strong>{val}</strong>
      <span>{label}</span>
    </div>
  </div>
);

const FooterItem = ({ icon, title, desc }) => (
  <div className="f-item">
    <span className="f-icon">{icon}</span>
    <div className="f-info">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  </div>
);

export default Ourservices;