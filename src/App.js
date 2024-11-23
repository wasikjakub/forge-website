import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, Link } from 'react-router-dom';

// Import your page components
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Lookbook from './pages/Lookbook';
import Info from './pages/Info';

// Import Header component
import Header from './components/Header';

function App() {
  const location = useLocation(); // To check the current route

  return (
    <div>
      {/* Show Header only if not on the Home page */}
      {location.pathname !== '/' && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/info" element={<Info />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;