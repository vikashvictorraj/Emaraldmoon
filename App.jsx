import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import all your components
import Header from './Header';
import Banner from './Banner';
import Profile from './Profile';
import Ourservices from './Ourservices';
import Marineprojects from './Marineprojects';
import Roadprojects from './Roadprojects'; // Fixed spelling here! Make sure your file is named Roadprojects.jsx
import Bridgeprojects from './Bridgeprojects';
import Infrastructureprojects from './Infrastructureprojects';
import Contactus from './Contactus';
import Iso from './Iso';
import Footer from './Footer';


function App() {
  return (
    <div>
    <Router>
      <div className="app-layout">
        {/* Header is locked at the top */}
        <Header />
        
        {/* Pages swap out inside this main content area */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/services" element={<Ourservices />} />
            <Route path="/road-projects" element={<Roadprojects />} />
            <Route path="/bridge-projects" element={<Bridgeprojects />} />
            <Route path="/marine-projects" element={<Marineprojects />} />
            <Route path="/infrastructure" element={<Infrastructureprojects />} />
            <Route path="/contact" element={<Contactus />} />
          </Routes>
        </main>
        
  
      <Footer/>
      </div>
    </Router>
   
    </div>
    
  );
}

export default App;