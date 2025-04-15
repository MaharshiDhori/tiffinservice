// controllers/userController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Hide password
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new user (admin use only)
exports.createUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const user = new User({ username, email, password, role });
    await user.save();
    res.status(201).json({ message: 'User created successfully', user });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update user
exports.updateUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const updatedData = { username, email, role };

    // If password is provided, hash it before updating
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedData.password = hashedPassword;
    }

    // Update the user in the database
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    if (!updatedUser) return res.status(404).json({ message: 'User not found' });

    res.json({ message: 'User updated successfully', updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });

    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getProfile = async (req, res) => {
  try {
    // Get the token from the Authorization header
    const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token

    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user by ID from the decoded token
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // If token is valid and user exists, return user data
    res.status(200).json(user);

  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Token is not valid' });
  }
};