import React, { useState } from 'react';
import './Register.css'; // Make sure to create and link the CSS file
import { Link, useNavigate } from 'react-router-dom';
import API from '../api';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { username, email, password, confirmPassword } = formData;
    if (!username || !email || !password || !confirmPassword) {
      alert('All fields are required.');
      return false;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await API.post('/api/auth/register', formData);
      alert('Registered successfully!');
    
      console.log(res.data);
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
   <div  id='register'>
    <div  className="container">
      <h2>Register</h2>
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
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
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
        <div className="input-field">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowConfirmPassword(prev => !prev)}
          >
            {showConfirmPassword ? 'Hide' : 'Show'}
          </span>
        </div>
        <button type="submit" className="btn">Register</button>
      </form>
      <div className="login">
        Already have an account? <Link to="/login">Login</Link>
      </div>
      <div className="leaf-decor top-left"></div>
      <div className="leaf-decor bottom-right"></div>
    </div>
    </div>
  );
};

export default Register;
