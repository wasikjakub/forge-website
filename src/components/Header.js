import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../images/logo.png'; // Import the logo

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="header-logo" />
        </Link>
      </div>
    </header>
  );
}

export default Header;