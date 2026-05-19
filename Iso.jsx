import React, { useState } from 'react';
import './Iso.css';

// Using ONLY your clean image assets
import iso9001Img from './assets/Quality.png';
import iso14001Img from './assets/Environment.png';
import iso45001Img from './assets/Occupation.png';

const Iso = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const certifications = [
    {
      id: 'iso-9001',
      standard: 'ISO 9001:2015',
      title: 'Quality Management System',
      regNo: 'AB50XI62025319',
      color: '#F1B31C', // Amber Gold
      imgUrl: iso9001Img,
      description: 'Governs our primary organizational frameworks to ensure elite structural execution and uncompromised quality control[cite: 8, 26].',
    },
    {
      id: 'iso-14001',
      standard: 'ISO 14001:2015',
      title: 'Environmental Management System',
      regNo: 'CD50XI62025320',
      color: '#2ECC71', // Emerald Eco Green
      imgUrl: iso14001Img,
      description: 'Demonstrates our commitment to sustainable infrastructure development, waste reduction, and eco-conscious civil engineering[cite: 69].',
    },
    {
      id: 'iso-45001',
      standard: 'ISO 45001:2018',
      title: 'Occupational Health & Safety System',
      regNo: 'EF50XI62025321',
      color: '#E74C3C', // Safety Red
      imgUrl: iso45001Img,
      description: 'Enforces rigorous risk assessment protocols, workforce protection structures, and zero-compromise on-site safety configurations[cite: 39].',
    }
  ];

  return (
    <section className="iso-section">
      <div className="iso-container">
        
        {/* Header Section */}
        <div className="iso-header">
          <span className="iso-tagline">Corporate Governance & Compliance</span>
          <h2 className="iso-main-title">EMERALD MOON CONTRACTING L.L.C </h2>
          <p className="iso-subtitle">
            Our management systems are verified, accredited, and independently certified under international statutory frameworks, 
            reflecting baseline industrial excellence across the UAE.
          </p>
        </div>

        {/* Instantly Visible Grid Layout */}
        <div className="iso-grid">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="iso-card" 
              style={{ '--accent': cert.color }}
              onClick={() => setSelectedImg({ url: cert.imgUrl, title: cert.standard })}
            >
              {/* Certificate Image Showcase Panel */}
              <div className="card-image-showcase">
                <div className="accent-top-line"></div>
                <img src={cert.imgUrl} alt={`${cert.standard} Certificate Document`} className="cert-display-img" />
                <div className="image-hover-curtain">
                  <span className="expand-badge">View Full Certificate 🔍</span>
                </div>
              </div>

              {/* Text Details Area */}
              <div className="card-text-details">
                <span className="iso-code-badge">{cert.standard}</span>
                <h3 className="iso-system-title">{cert.title}</h3>
                <p className="iso-system-desc">{cert.description}</p>
                
                {/* Meta Details Strip */}
                <div className="iso-meta-footer">
                  <div className="meta-item-row">
                    <span className="meta-lbl">Registration No:</span>
                    <span className="meta-val mono-gold">{cert.regNo}</span>
                  </div>
                  <div className="meta-item-row dash-split">
                    <span className="meta-lbl">Valid Period:</span>
                    <span className="meta-val">2026 ~ 2029 </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scope Disclaimer Box */}
        <div className="iso-scope-footer-box">
          <div className="scope-icon-badge">📋</div>
          <div className="scope-text-content">
            <h4>Certified Unified Scope of Operations </h4>
            <p>
              Execution of Infrastructure, Road & Highway Construction, Earthworks, Demolition, Drainage Networks, 
              Utility Services, Asphalt Paving, Road Safety Barriers, Steel Structures, Landscaping, Street Lighting, 
              Cable Pulling, Mechanical, Electrical & Plumbing (MEP) Works, and Civil Engineering Projects.
            </p>
          </div>
        </div>

      </div>

      {/* PREMIUM FULL-SCREEN LIGHTBOX MODAL */}
      {selectedImg && (
        <div className="lightbox-overlay" onClick={() => setSelectedImg(null)}>
          <div className="lightbox-window" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-header">
              <div className="lightbox-title-group">
                <h3>{selectedImg.title} — Official System Certificate [cite: 31]</h3>
                <p>Emerald Moon Contracting L.L.C </p>
              </div>
              <button className="close-lightbox-btn" onClick={() => setSelectedImg(null)}>&times;</button>
            </div>
            <div className="lightbox-body">
              <img src={selectedImg.url} alt="Expanded Certificate Frame" className="lightbox-full-image" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Iso;