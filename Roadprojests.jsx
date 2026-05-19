import React from 'react';
import './Roadprojects.css';

const projectData = [
  { id: 1, title: "Al Khawaneej Road Improvement", loc: "Dubai, UAE", client: "Dubai Municipality", status: "COMPLETED", scope: "Road improvement, asphalt paving, kerbstone, interlock & road marking works" },
  { id: 2, title: "Mina Rashid – Marine Infrastructure", loc: "Dubai, UAE", client: "P&O Marinas", status: "COMPLETED", scope: "Road and utility infrastructure, Marine access, Asphalt & paving works" },
  { id: 3, title: "Al Garhoud Bridge Project", loc: "Dubai, UAE", client: "RTA", status: "IN PROGRESS", scope: "Bridge construction, pile works, casting, asphalt paving & road works" },
  { id: 4, title: "Mushrif Infrastructure Development", loc: "Abu Dhabi, UAE", client: "ADM / Musanada", status: "COMPLETED", scope: "Infrastructure works, drainage, utility, paving, street lighting & interlock" },
  { id: 5, title: "Dubai Hills Road Works", loc: "Dubai, UAE", client: "Emaar", status: "COMPLETED", scope: "Roadworks, asphalt paving, kerbstone, signage & road marking" },
  { id: 6, title: "Port Khalid Dredging Support", loc: "Sharjah, UAE", client: "Sharjah Port Authority", status: "COMPLETED", scope: "Dredging support, marine excavation, disposal & coastal works" },
  { id: 7, title: "Al Maqta Bridge Project", loc: "Abu Dhabi, UAE", client: "ADOT", status: "COMPLETED", scope: "Bridge construction, marine works, road connection & paving" },
  { id: 8, title: "Yas Island Infrastructure Works", loc: "Abu Dhabi, UAE", client: "Miral", status: "IN PROGRESS", scope: "Infrastructure, drainage, ducting, utility, paving & street lighting" },
];

const Roadprojects = () => {
  return (
    <div className="road-projects-wrapper">
      {/* --- HEADER --- */}
      <header className="road-header">
        <div className="header-content">
          <div className="label-row">
            <span>OUR PROJECTS</span> <span className="slashes">///</span>
          </div>
          <h1 className="road-main-title">BUILT ON TRUST.</h1>
          <h1 className="road-main-title green-accent">DELIVERED WITH EXCELLENCE.</h1>
          <p className="road-subtitle">
            From advanced road networks to complex marine and infrastructure works, 
            we take pride in delivering projects that build a stronger tomorrow.
          </p>
        </div>
        <div className="road-hero-visual">
          HERO IMAGE
        </div>
      </header>

      {/* --- NAVIGATION --- */}
      <nav className="road-tabs">
        <div className="tab active">ROAD PROJECTS</div>
        <div className="tab">MARINE PROJECTS</div>
        <div className="tab">BRIDGE PROJECTS</div>
        <div className="tab">INFRASTRUCTURE</div>
      </nav>

      {/* --- RESPONSIVE GRID --- */}
      <main className="road-grid">
        {projectData.map((project) => (
          <div className="road-card" key={project.id}>
            {/* Visual Slider Mockup */}
            <div className="card-visual">
              <div className="tag-before">BEFORE</div>
              <div className="slider-handle-line">
                <div className="circle-handle">↔</div>
              </div>
              <div className="tag-after">AFTER</div>
            </div>

            {/* Info Section */}
            <div className="card-info">
              <h3>{project.title}</h3>
              <div className="info-item">
                <span className="icon">📍</span> 
                <span className="info-text"><strong>Location:</strong> {project.loc}</span>
              </div>
              <div className="info-item">
                <span className="icon">📋</span> 
                <span className="info-text">
                  <strong>Scope of Work:</strong>
                  <p className="scope-p">{project.scope}</p>
                </span>
              </div>
              <div className="info-item">
                <span className="icon">👤</span> 
                <span className="info-text"><strong>Client:</strong> {project.client}</span>
              </div>
              <div className="status-row">
                <span className="icon">✔️</span> <strong>Status:</strong>
                <span className={`status-tag ${project.status.replace(/\s+/g, '-').toLowerCase()}`}>
                  {project.status}
                </span>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            <div className="card-thumbs">
              <div className="mini-img">IMG</div>
              <div className="mini-img">IMG</div>
              <div className="mini-img">IMG</div>
              <div className="mini-img">IMG</div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Roadprojects;