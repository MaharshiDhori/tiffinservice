const Admin = require('../models/Admin');
const Role = require('../models/Roles'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new admin with a role
exports.registerAdmin = async (req, res) => {
  try {
    const { first_name, last_name, address, email, password, role_name } = req.body;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin with this email already exists.' });
    }

    // Check if the role exists, otherwise create a new role
    let role = await Role.findOne({ role_name });
    if (!role) {
      role = new Role({
        role_name,
        permissions: ['create', 'read', 'update', 'delete'] 
      });
      await role.save();
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new admin with the role assigned
    const newAdmin = new Admin({
      first_name,
      last_name,
      address,
      email,
      password: hashedPassword,
      role: role._id 
    });

    await newAdmin.save();
    res.status(201).json({ message: 'Admin registered successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering admin.', error: err.message });
  }
};

// Login admin
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email }).populate('role'); 
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found.' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const token = jwt.sign(
      { adminId: admin._id, email: admin.email, role: admin.role.role_name }, 
      'mysecretkey',
      { expiresIn: '1d' }
    );

    res.status(200).json({ message: 'Login successful.', token });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in admin.', error: err.message });
  }
};

// Get all admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find().populate('role').select('-password');
    res.status(200).json(admins);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching admins.', error: err.message });
  }
};

// Get a single admin by ID
exports.getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id).populate('role').select('-password');
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found.' });
    }
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching admin.', error: err.message });
  }
};

// Update admin
exports.updateAdmin = async (req, res) => {
  try {
    const { first_name, last_name, address, email, password, role_name } = req.body;

    const updateFields = { first_name, last_name, address, email };

    if (role_name) {
      
      let role = await Role.findOne({ role_name });
      if (!role) {
        role = new Role({
          role_name,
          permissions: ['create', 'read', 'update', 'delete'] 
        });
        await role.save();
      }
      updateFields.role = role._id;
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateFields.password = hashedPassword;
    }

    const updatedAdmin = await Admin.findByIdAndUpdate(
      req.params.id,
      { $set: updateFields },
      { new: true, runValidators: true }
    );

    if (!updatedAdmin) {
      return res.status(404).json({ message: 'Admin not found.' });
    }

    res.status(200).json({ message: 'Admin updated successfully.', admin: updatedAdmin });
  } catch (err) {
    res.status(500).json({ message: 'Error updating admin.', error: err.message });
  }
};

// Delete admin
exports.deleteAdmin = async (req, res) => {
  try {
    const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);
    if (!deletedAdmin) {
      return res.status(404).json({ message: 'Admin not found.' });
    }
    res.status(200).json({ message: 'Admin deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting admin.', error: err.message });
  }
};
