import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css'
import getBackendURL from '../config.js';

const backendURL = getBackendURL();

const Signup = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminKey, setAdminKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${backendURL}/api/signup`, { email, password, adminKey });
      login(response.data.token);
      navigate('/admin');
    } catch (error) {
      console.error('Error signing up:', error);
    } finally {
      setIsLoading(false);
    }
  };

  async function returnToLogin() {
    window.location.href = '/login'
  }

  return (
    <div className="signup">
      <div className="form-group return-to-login">
        <button onClick={returnToLogin}>Login Instead</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>
            Admin Key
          </label>
          <input
            type="text"
            placeholder="AdminKey"
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
          />
        </div>

        <button type="submit">Signup</button>
      </form>
      {isLoading && (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
};

export default Signup;
