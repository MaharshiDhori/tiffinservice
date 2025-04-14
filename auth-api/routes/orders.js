const express = require('express');
const router = express.Router();
const orderController = require('../controllers/ordersController'); 

// Create a new order
router.post('/orders', orderController.createOrder);

// Get all orders
router.get('/orders', orderController.getAllOrders);

// Get order by ID
router.get('/orders/:orderId', orderController.getOrderById);

// Update order status
router.put('/orders/:orderId/status', orderController.updateOrderStatus);

// Delete an order
router.delete('/orders/:orderId', orderController.deleteOrder);

module.exports = router;
