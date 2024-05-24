import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      history('/admin');
    } catch (error) {
      console.error('Error logging in:', error);
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
