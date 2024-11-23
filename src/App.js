import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Import react-router-dom
import logo from './images/logo.png';  // Import logo image

// Import page components
import Shop from './pages/Shop';
import Lookbook from './pages/Lookbook';
import Contact from './pages/Contact';
import Info from './pages/Info';

function App() {
  return (
    <Router>
      {/* Main navigation and layout */}
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <div className="buttons-container">
          {/* Navigation buttons */}
          <Link to="/shop">
            <button className="button">Shop</button>
          </Link>
          <Link to="/lookbook">
            <button className="button">Lookbook</button>
          </Link>
          <Link to="/contact">
            <button className="button">Contact</button>
          </Link>
          <Link to="/info">
            <button className="button">Info</button>
          </Link>
        </div>
      </div>

      {/* Routes to render pages */}
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;