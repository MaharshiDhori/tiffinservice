import React from 'react';
import AdminSidebar from './AdminSidebar';
import AdminDashboard from './AdminDashboard';
import './Admin.css';

const AdminPage = () => {
  return (
    <div className="admin-container">
      <header className="admin-header">
        <nav>
          <div className="logo-name">Trifi Tiffin's Admin</div>
        </nav>
      </header>
      <div className="admin-body">
        <AdminSidebar />
        <AdminDashboard />
      </div>
    </div>
  );
};

export default AdminPage;
