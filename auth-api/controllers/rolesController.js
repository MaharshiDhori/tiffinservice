const Role = require('../models/Roles');

// CREATE
exports.createRole = async (req, res) => {
  try {
    const { role_name, permissions } = req.body;
    const newRole = new Role({ role_name, permissions });
    await newRole.save();
    res.status(201).json({ message: 'Role created successfully.', role: newRole });
  } catch (error) {
    res.status(500).json({ message: 'Error creating role.', error: error.message });
  }
};

// READ ALL
exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching roles.', error: error.message });
  }
};

// READ ONE
exports.getRoleById = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) return res.status(404).json({ message: 'Role not found.' });
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching role.', error: error.message });
  }
};

// UPDATE
exports.updateRole = async (req, res) => {
  try {
    const { role_name, permissions } = req.body;

    const updatedRole = await Role.findByIdAndUpdate(
      req.params.id,
      { role_name, permissions },
      { new: true, runValidators: true }
    );

    if (!updatedRole) return res.status(404).json({ message: 'Role not found.' });

    res.status(200).json({ message: 'Role updated successfully.', role: updatedRole });
  } catch (error) {
    res.status(500).json({ message: 'Error updating role.', error: error.message });
  }
};

// DELETE
exports.deleteRole = async (req, res) => {
  try {
    const deletedRole = await Role.findByIdAndDelete(req.params.id);
    if (!deletedRole) return res.status(404).json({ message: 'Role not found.' });

    res.status(200).json({ message: 'Role deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting role.', error: error.message });
  }
};
