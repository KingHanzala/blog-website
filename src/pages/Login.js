import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import getBackendURL from '../config.js';

const backendURL = getBackendURL();

const Login = ({login}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${backendURL}/api/login`, { email, password });
      login(response.data.token);
      navigate('/admin');
    } catch (error) {
      console.error('Error logging in:', error);
    } finally {
      setIsLoading(false);
    }
  };

  async function handleSignupClick() {
    window.location.href = '/signup'
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Email
          </label>
          <div className="input">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label>
            Password
          </label>
          <div className="input">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Login</button>
        {isLoading && (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        )}
        <div className="signup">
          <text>
            Want to become an admin?
          </text>
          <div>
            <button onClick={handleSignupClick}>Signup</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
