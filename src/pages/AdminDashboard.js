import React from 'react';
import '../styles/Admin.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <div className="action-item">
      <button onClick={handleAdminClick}>Create Post</button>
      </div>
      <div className="action-item">
      <button onClick={handleNotifyUsers}>Notify Users</button>
      </div>
    </div>
  );
};

async function handleAdminClick() {
    window.location.href = '/create-post'
}
async function handleNotifyUsers() {
  window.location.href = '/notify-users'
}

export default AdminDashboard;
