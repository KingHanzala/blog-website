import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from'../../src/logo.png';

const Navbar = ({ isAuthenticated, logout }) => {
  const navigate = useNavigate();

  const handleSignout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Add your logo here */}
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          {isAuthenticated && <li><Link to="/admin">Admin Dashboard</Link></li>}
          {isAuthenticated ? (
            <li>
              <button onClick={handleSignout}>Signout</button>
            </li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
