import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './homepage/Home'
import Chef from './chef portal/Chef';
import Menu from './menu/Menu';
import AdminPage from './components/AdminPage/AdminPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/homepage" element={<Home />} />
          <Route path="/chef-portal" element={<Chef />} />

        </Route>

        {/* Default fallback (unauthorized users) */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
