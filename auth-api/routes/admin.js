const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


router.post('/register', adminController.registerAdmin);

//  Login Admin
router.post('/login', adminController.loginAdmin);

// Get All Admins
router.get('/', adminController.getAllAdmins);

// Get Admin by ID
router.get('/:id', adminController.getAdminById);

// Update Admin
router.put('/:id', adminController.updateAdmin);

//  Delete Admin
router.delete('/:id', adminController.deleteAdmin);

module.exports = router;
