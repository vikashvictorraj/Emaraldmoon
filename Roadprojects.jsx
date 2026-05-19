import React from 'react';
import { NavLink } from 'react-router-dom';
import './Bridgeprojects.css'; // Using the same layout CSS

const projectData = [
  { id: "R-01", title: "E311 Highway Expansion", loc: "Dubai, UAE", client: "Ministry of Infrastructure", scope: ["Asphalt paving", "Road marking", "Safety barriers", "Signage"] },
  { id: "R-02", title: "Al Barsha Internal Roads", loc: "Dubai, UAE", client: "RTA", scope: ["Kerbstone installation", "Interlock paving", "Street lighting", "Drainage systems"] },
];

const Roadprojects = () => {
  return (
    <div className="bridge-container">
      <header className="bridge-header">
        <div className="header-info">
          <div className="label-top">OUR PROJECTS —</div>
          <h1 className="main-title">PAVING THE WAY.</h1>
          <h1 className="main-title accent">CONNECTING COMMUNITIES.</h1>
          <p className="sub-text">Delivering high-quality road networks built to last.</p>
        </div>
        <div className="header-hero">ROAD IMAGE</div>
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

export default Roadprojects;