import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

import logo from'../../src/logo.png';

const Navbar = ({ isAuthenticated, logout }) => {
  const handleMenuClick = () => {
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
      menuToggle.checked = false;
    }
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <div className="navbar-left">
        <a href="/">
        <img src={logo} href="/" alt="Logo" />
        </a>
      </div>
        <input type="checkbox" id="menu-toggle" className="menu-toggle"/>
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
        <ul className="nav-links">
          <li><Link to="/" onClick={handleMenuClick}>Home</Link></li>
          <li><Link to="/subscribe" onClick={handleMenuClick}>Subscribe</Link></li>
          {isAuthenticated ? (
            <>
              <li><Link to="/admin" onClick={handleMenuClick}>Dashboard</Link></li>
              <li><button className="link-button" onClick={() => {logout(); handleMenuClick();}}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login" onClick={handleMenuClick}>Login</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
