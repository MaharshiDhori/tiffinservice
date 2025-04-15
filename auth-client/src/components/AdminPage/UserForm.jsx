import React, { useEffect, useState } from "react";
import axios from "axios";

const UserForm = ({ user, onSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "customer" // Default role is customer
  });

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username,
        email: user.email,
        password: "", // Do not prefill the password for security
        confirmPassword: "", // Same for confirmPassword
        role: user.role || "customer", // Set user role (admin, chef, or customer)
      });
    }
  }, [user]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (user) {
      // Update existing user
      await axios.put(`http://localhost:5000/api/users/${user._id}`, formData);
    } else {
      // Create new user
      await axios.post("http://localhost:5000/api/users", formData);
    }
    setFormData({ username: "", email: "", password: "", confirmPassword: "", role: "customer" });
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <input
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
        required
      />
      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        required
      >
        <option value="admin">Admin</option>
        <option value="chef">Chef</option>
        <option value="customer">Customer</option>
      </select>
      <button type="submit">{user ? "Update" : "Create"} User</button>
    </form>
  );
};

export default UserForm;
