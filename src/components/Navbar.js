import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ isAuthenticated, logout }) => {
  const navigate = useNavigate();

  const handleSignout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin">Admin Dashboard</Link></li>
        {isAuthenticated ? (
          <li>
            <button onClick={handleSignout}>Signout</button>
          </li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
