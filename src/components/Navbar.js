import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from'../../src/logo.png';

const Navbar = ({ isAuthenticated, logout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignout = () => {
    logout();
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-right">
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/subscribe" onClick={toggleMenu}>Subscribe</Link></li>
          {isAuthenticated && <li><Link to="/admin" onClick={toggleMenu}>Admin Dashboard</Link></li>}
          {isAuthenticated ? (
            <li>
              <button onClick={() => { handleSignout(); toggleMenu(); }}>Signout</button>
            </li>
          ) : (
            <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
