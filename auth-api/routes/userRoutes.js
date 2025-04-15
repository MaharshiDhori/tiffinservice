// routes/userRoutes.js (or routes/user.js)
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get all users
router.get('/', userController.getAllUsers);

// Create a new user (admin use only)
router.post('/', userController.createUser);

// Update user
router.put('/:id', userController.updateUser);

// Delete user
router.delete('/:id', userController.deleteUser);

router.get('/profile', userController.getProfile);


module.exports = router;