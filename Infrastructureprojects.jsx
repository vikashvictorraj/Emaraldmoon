import React from 'react';
import { NavLink } from 'react-router-dom';
import './Bridgeprojects.css'; 

const projectData = [
  { id: "I-01", title: "Downtown Commercial Demolition", loc: "Dubai, UAE", client: "Private Developer", scope: ["Safe building demolition", "Site clearance", "Debris management"] },
  { id: "I-02", title: "Industrial Zone Utility Network", loc: "Sharjah, UAE", client: "SEWA", scope: ["Water line installation", "Ducting", "Cable works", "Drainage setup"] },
];

const Infrastructureprojects = () => {
  return (
    <div className="bridge-container">
      <header className="bridge-header">
        <div className="header-info">
          <div className="label-top">OUR PROJECTS —</div>
          <h1 className="main-title">BUILDING FOUNDATIONS.</h1>
          <h1 className="main-title accent">POWERING CITIES.</h1>
          <p className="sub-text">Safe demolition, site clearance, and utility installations for massive developments.</p>
        </div>
        <div className="header-hero">INFRA IMAGE</div>
      </header>

      {/* --- DYNAMIC TABS (EXACT MATCH) --- */}
      <nav className="tab-navigation">
        <NavLink to="/road-projects" className={({ isActive }) => isActive ? "tab-item active" : "tab-item"}>ROAD PROJECTS</NavLink>
        <NavLink to="/marine-projects" className={({ isActive }) => isActive ? "tab-item active" : "tab-item"}>MARINE PROJECTS</NavLink>
        <NavLink to="/bridge-projects" className={({ isActive }) => isActive ? "tab-item active" : "tab-item"}>BRIDGE PROJECTS</NavLink>
        <NavLink to="/infrastructure" className={({ isActive }) => isActive ? "tab-item active" : "tab-item"}>INFRASTRUCTURE</NavLink>
      </nav>

      <main className="bridge-grid">
        {projectData.map((project) => (
          <div className="bridge-card" key={project.id}>
             <div className="card-top">
              <div className="card-title-row">
                <span className="proj-id">{project.id}</span>
                <h3>{project.title}</h3>
              </div>
              <p className="card-loc">📍 Location: {project.loc}</p>
              <div className="card-scope">
                <strong>Scope of Work:</strong>
                <ul>{project.scope.map((item, i) => <li key={i}>• {item}</li>)}</ul>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Infrastructureprojects;