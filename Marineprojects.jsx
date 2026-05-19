import React from 'react';
import { NavLink } from 'react-router-dom';
import './Bridgeprojects.css'; 

const projectData = [
  { id: "M-01", title: "Jumeirah Coastline Protection", loc: "Dubai, UAE", client: "Dubai Municipality", scope: ["Sheet piling", "Dredging support", "Marine infrastructure"] },
  { id: "M-02", title: "Port Rashid Dock Extension", loc: "Dubai, UAE", client: "DP World", scope: ["Platform construction", "Retaining walls", "Underwater welding"] },
];

const Marineprojects = () => {
  return (
    <div className="bridge-container">
      <header className="bridge-header">
        <div className="header-info">
          <div className="label-top">OUR PROJECTS —</div>
          <h1 className="main-title">ENGINEERING THE COAST.</h1>
          <h1 className="main-title accent">SECURING THE SHORES.</h1>
          <p className="sub-text">Advanced marine construction built to withstand harsh coastal environments.</p>
        </div>
        <div className="header-hero">MARINE IMAGE</div>
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

export default Marineprojects;