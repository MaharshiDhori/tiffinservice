const express = require('express');
const router = express.Router();
const roleController = require('../controllers/rolesController');
const { createRole, getAllRoles, getRoleById, updateRole, deleteRole } = require('../controllers/rolesController');

// Create role
router.post('/', roleController.createRole);

// Get all roles
router.get('/', roleController.getAllRoles);

// Get role by ID
router.get('/:id', roleController.getRoleById);

// Update role
router.put('/:id', roleController.updateRole);

// Delete role
router.delete('/:id', roleController.deleteRole);

module.exports = router;
