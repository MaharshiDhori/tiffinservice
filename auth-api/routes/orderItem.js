const express = require('express');
const router = express.Router();
const orderItemController = require('../controllers/orderItemController'); 

// Routes for OrderItems
// Create a new order item
router.post('/order-items', orderItemController.createOrderItem);

// Get all order items
router.get('/order-items', orderItemController.getAllOrderItems);

// Get a specific order item by ID
router.get('/order-items/:id', orderItemController.getOrderItemById);

// Update an existing order item by ID
router.put('/order-items/:id', orderItemController.updateOrderItem);

// Delete an order item by ID
router.delete('/order-items/:id', orderItemController.deleteOrderItem);

module.exports = router;
