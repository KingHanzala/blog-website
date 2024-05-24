import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminKey, setAdminKey] = useState('');
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/signup', { email, password, adminKey });
      localStorage.setItem('token', response.data.token);
      history('/admin');
    } catch (error) {
      console.error('Error signing up:', error);
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
    </div>
  );
};

export default Signup;
