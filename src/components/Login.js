import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
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
      const res = await API.post('/auth/login', formData);
      alert('Logged in!');
      console.log(res.data.token);
      // Store token if needed: localStorage.setItem('token', res.data.token);
      navigate('/dashboard'); // Redirect if necessary
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
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
        Don't have an account? <a href="/register">Register</a>
      </div>

      <div className="leaf-decor top-left"></div>
      <div className="leaf-decor bottom-right"></div>
    </div>
  );
};

export default Login;
