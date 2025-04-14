const OrderItem = require('../models/OrderItem'); 
const Order = require('../models/Orders'); 


// Create a new OrderItem
const createOrderItem = async (req, res) => {
  try {
    const { order_id, description, item_id, quantity, amount } = req.body;

    // Validate if Order exists
    const order = await Order.findById(order_id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Validate if Item exists (if needed)
    const item = await Item.findById(item_id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Create a new OrderItem
    const newOrderItem = new OrderItem({
      order_id,
      description,
      item_id,
      quantity,
      amount
    });

    // Save to the database
    await newOrderItem.save();
    res.status(201).json({
      message: 'Order item created successfully',
      data: newOrderItem
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all OrderItems
const getAllOrderItems = async (req, res) => {
  try {
    const orderItems = await OrderItem.find().populate('order_id').populate('item_id');
    res.status(200).json({
      message: 'Order items fetched successfully',
      data: orderItems
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get OrderItem by ID
const getOrderItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const orderItem = await OrderItem.findById(id).populate('order_id').populate('item_id');

    if (!orderItem) {
      return res.status(404).json({ message: 'Order item not found' });
    }

    res.status(200).json({
      message: 'Order item fetched successfully',
      data: orderItem
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update OrderItem by ID
const updateOrderItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { order_id, description, item_id, quantity, amount } = req.body;

    // Validate if Order exists
    const order = await Order.findById(order_id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Validate if Item exists
    const item = await Item.findById(item_id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Find the OrderItem by ID and update it
    const updatedOrderItem = await OrderItem.findByIdAndUpdate(
      id,
      { order_id, description, item_id, quantity, amount },
      { new: true } // Return the updated document
    );

    if (!updatedOrderItem) {
      return res.status(404).json({ message: 'Order item not found' });
    }

    res.status(200).json({
      message: 'Order item updated successfully',
      data: updatedOrderItem
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete OrderItem by ID
const deleteOrderItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrderItem = await OrderItem.findByIdAndDelete(id);

    if (!deletedOrderItem) {
      return res.status(404).json({ message: 'Order item not found' });
    }

    res.status(200).json({
      message: 'Order item deleted successfully',
      data: deletedOrderItem
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createOrderItem,
  getAllOrderItems,
  getOrderItemById,
  updateOrderItem,
  deleteOrderItem
};
