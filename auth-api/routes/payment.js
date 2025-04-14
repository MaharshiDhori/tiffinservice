const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController'); 

// Create a new payment
router.post('/payments', paymentController.createPayment);

// Get all payments
router.get('/payments', paymentController.getAllPayments);

// Get a specific payment by ID
router.get('/payments/:id', paymentController.getPaymentById);

module.exports = router;
