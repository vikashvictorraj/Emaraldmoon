import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for active tab routing
import './Bridgeprojects.css'; // Make sure your CSS file has the .tab-item.active styling

const projectData = [
  { id: "01", title: "Sheikh Zayed Road Bridge Construction", loc: "Dubai, UAE", client: "RTA", scope: ["Bridge construction, pile works", "Casting, pre-stressed girders", "Road works & approach ramps", "Lighting & safety works"] },
  { id: "02", title: "Al Garhoud Bridge Rehabilitation", loc: "Dubai, UAE", client: "RTA", scope: ["Bridge strengthening & repairs", "Bearing replacement", "Waterproofing & concrete works", "Road resurfacing & safety upgrades"] },
  { id: "03", title: "Muharraq Bridge Lane Extension", loc: "Abu Dhabi, UAE", client: "ADOT", scope: ["Additional lane construction", "Bridge widening & deck extension", "Barrier & lighting works", "Road marking & signage"] },
  { id: "04", title: "Al Maqta Bridge Construction", loc: "Abu Dhabi, UAE", client: "ADOT", scope: ["Bridge construction & marine works", "Pile foundation & pier construction", "Steel arch installation", "Approach roads & connections"] },
  { id: "05", title: "Road & Bridge Demolition Works", loc: "Sharjah, UAE", client: "Sharjah Municipality", scope: ["Existing bridge demolition", "Concrete crushing & removal", "Debris disposal & site clearance", "Traffic management"] },
  { id: "06", title: "Al Ain Road Bridge Overpass", loc: "Al Ain, UAE", client: "ADOT", scope: ["Overpass bridge construction", "Precast beam installation", "Approach road works", "Drainage & utility relocation"] },
];

const Bridgeprojects = () => {
  return (
    <div className="bridge-container">
      {/* --- HERO HEADER --- */}
      <header className="bridge-header">
        <div className="header-info">
          <div className="label-top">OUR PROJECTS —</div>
          <h1 className="main-title">BUILT ON TRUST.</h1>
          <h1 className="main-title accent">DELIVERED WITH EXCELLENCE.</h1>
          <p className="sub-text">
            From advanced road networks to complex marine and infrastructure works, 
            we take pride in delivering projects that build a stronger tomorrow.
          </p>
        </div>
        <div className="header-hero">
          HERO IMAGE
        </div>
      </header>

      {/* --- DYNAMIC TABS --- */}
      <nav className="tab-navigation">
        <NavLink to="/road-projects" className={({ isActive }) => isActive ? "tab-item active" : "tab-item"}>
          ROAD PROJECTS
        </NavLink>
        <NavLink to="/marine-projects" className={({ isActive }) => isActive ? "tab-item active" : "tab-item"}>
          MARINE PROJECTS
        </NavLink>
        <NavLink to="/bridge-projects" className={({ isActive }) => isActive ? "tab-item active" : "tab-item"}>
          BRIDGE PROJECTS
        </NavLink>
        <NavLink to="/infrastructure" className={({ isActive }) => isActive ? "tab-item active" : "tab-item"}>
          INFRASTRUCTURE
        </NavLink>
      </nav>

      {/* --- PROJECTS GRID --- */}
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
                <ul>
                  {project.scope.map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </div>

              <div className="card-client">
                <strong>Client / Main Contractor:</strong>
                <p>{project.client}</p>
              </div>

              <div className="card-status">
                Completion Status: <span className="status-tag">COMPLETED</span>
              </div>
            </div>

            <div className="card-visuals">
              <div className="slider-mockup">
                <div className="label-before">BEFORE</div>
                <div className="slider-bar"><div className="handle-dot">↔</div></div>
                <div className="label-after">AFTER</div>
              </div>
              <div className="card-thumbs">
                <div className="t-img">IMG</div>
                <div className="t-img">IMG</div>
                <div className="t-img">IMG</div>
                <div className="t-img">IMG</div>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* --- FOOTER --- */}
      <footer className="bridge-footer">
        <div className="highlights-flex">
          <Highlight icon="🛡️" title="ENGINEERED FOR SAFETY" desc="International standards" />
          <Highlight icon="🏅" title="QUALITY ASSURED" desc="Strict QC protocols" />
          <Highlight icon="👥" title="EXPERT TEAM" desc="Skilled professionals" />
          <Highlight icon="🕒" title="ON-TIME DELIVERY" desc="Committed to schedule" />
          <Highlight icon="🌱" title="SUSTAINABLE" desc="Eco-responsible" />
        </div>

        <div className="cta-banner">
          <div className="cta-txt">
            <h4>HAVE A PROJECT IN MIND?</h4>
            <p>Let's build something great together.</p>
          </div>
          <button className="cta-btn">GET IN TOUCH</button>
        </div>
      </footer>
    </div>
  );
};

const Highlight = ({ icon, title, desc }) => (
  <div className="h-box">
    <div className="h-icon-circle">{icon}</div>
    <div className="h-text">
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  </div>
);

export default Bridgeprojects;