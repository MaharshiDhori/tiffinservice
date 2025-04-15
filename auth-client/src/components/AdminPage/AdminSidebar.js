import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <ul>
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/admin/orders">Orders</Link></li>
        <li><Link to="/admin/customers">Customers</Link></li>
        <li><Link to="/admin/menu">Manage Menu</Link></li>
        <li><Link to="/login"  onClick={() => { 
              localStorage.removeItem('token');
            }}>Logout</Link></li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;
