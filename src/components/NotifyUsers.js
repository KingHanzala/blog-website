// pages/NotifyUsers.js
import React, { useState } from 'react';
import axios from 'axios';
import getBackendURL from '../config.js';
import '../styles/NotifyUsers.css';

const backendURL = getBackendURL();

const NotifyUsers = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendEmails = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    setIsLoading(true);
    try {
      await axios.post(`${backendURL}/api/sendEmails`,
        { subject, message },
        {
          headers: {
            Authorization: `${token}`
          }
        }
      );
      setStatus('Emails sent successfully!');
    } catch (error) {
      setStatus('Failed to send emails.');
    } finally {
      setIsLoading(false);
    }
  };

  async function returnToDashboard() {
    window.location.href = '/admin'
  }

  return (
    <div className="notify-users">
      <div className="form-item">
        <button onClick={returnToDashboard}>Return To DashBoard</button>
      </div>
      <div className="notify-users-title">Send Email to Subscribers</div>
      <div className="form-item">
        <form onSubmit={handleSendEmails}>
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Send Emails</button>
        </form>
      </div>
      {status && <div classname="message-box">{status}</div>}
      {isLoading && (
        <div className="loading">
          <div className="spinner"></div>
        </div>)}
    </div>
  );
};

export default NotifyUsers;
