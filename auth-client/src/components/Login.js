import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import API from '../api';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { username, password } = formData;
    if (!username || !password) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      // Login API
      const res = await API.post('/api/auth/login', formData);
      const token = res.data.token;

      // Store token
      localStorage.setItem('token', token);

      // const token = localStorage.getItem('token');
      if (token) {
        API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }

      // Set token to header for next API call
      API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // Fetch profile
      const profileRes = await API.get('/api/users/profile'); // Adjust endpoint as needed
      console.log(profileRes);
      const user = profileRes.data;
      const role = user.role;

      // Redirect based on role
      if (role === 'admin') {
        navigate('/admin');
      } else if (role === 'chef') {
        navigate('/chef-portal');
      } else {
        // Assume customer
        navigate('/menu');
      }

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div id='login'>
      <div className="container">
        <h2>Login Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(prev => !prev)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
        <div className="register">
          Don't have an account? <Link to="/register">Register</Link>
        </div>

        <div className="leaf-decor top-left"></div>
        <div className="leaf-decor bottom-right"></div>
      </div>
    </div>
  );
};

export default Login;
