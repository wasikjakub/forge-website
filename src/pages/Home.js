import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'; // Ensure this is correct path to the logo image
import './Home.css';  // If Home.css is in the same folder as Home.js

function Home() {
  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="buttons-container">
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
  );
}

export default Home;