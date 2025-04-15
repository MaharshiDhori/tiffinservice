import React from 'react';
import UserList from './UserList';

const AdminDashboard = () => {
  return (
    <>
    <section className="admin-dashboard">
      <h2>Welcome Admin</h2>
      <p>This is your dashboard. Add your stats and controls here.</p>
      <UserList />
    </section>
     
    </>
  );
};

export default AdminDashboard;
