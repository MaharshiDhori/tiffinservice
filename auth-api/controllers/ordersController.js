const Order = require('../models/Orders'); 
const Customer = require('../models/Customer'); 
const Seller = require('../models/Seller'); 

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { customerId, sellerId, items, deliveryAddress, totalAmount } = req.body;

    // Find customer and seller
    const customer = await Customer.findById(customerId);
    const seller = await Seller.findById(sellerId);

    if (!customer || !seller) {
      return res.status(404).json({ message: 'Customer or Seller not found' });
    }

    // Calculate total amount if not provided
    let calculatedTotalAmount = totalAmount;
    if (!calculatedTotalAmount) {
      calculatedTotalAmount = items.reduce((total, item) => total + item.quantity * item.price, 0);
    }

    // Create a new order
    const order = new Order({
      customer: customerId,
      seller: sellerId,
      items,
      total_Amount: calculatedTotalAmount,
      delivery_Address: deliveryAddress
    });

    await order.save();

    return res.status(201).json({ message: 'Order created successfully', order });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('customer').populate('seller');
    return res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Get order by ID
exports.getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findOne({ order_Id: orderId }).populate('customer').populate('seller');
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    
    return res.status(200).json(order);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Update order status
exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!['pending', 'preparing', 'out_for_delivery', 'delivered', 'cancelled'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const order = await Order.findOneAndUpdate(
      { order_Id: orderId },
      { status },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    return res.status(200).json({ message: 'Order status updated', order });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findOneAndDelete({ order_Id: orderId });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    return res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};
