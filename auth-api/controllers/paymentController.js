const Payment = require('../models/Payments'); 
const Order = require('../models/Orders');
const Customer = require('../models/Customer');
const Seller = require('../models/Seller');

// Create a new Payment
const createPayment = async (req, res) => {
  try {
    const { customer_id, order_id, seller_id, amount, payment_mode } = req.body;

    // Validate if Order exists
    const order = await Order.findById(order_id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Validate if Customer exists
    const customer = await Customer.findById(customer_id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Validate if Seller exists
    const seller = await Seller.findById(seller_id);
    if (!seller) {
      return res.status(404).json({ message: 'Seller not found' });
    }

    // Create new Payment document
    const newPayment = new Payment({
      customer_id,
      order_id,
      seller_id,
      amount,
      payment_mode
    });

    // Save the payment document to the database
    await newPayment.save();
    res.status(201).json({
      message: 'Payment created successfully',
      data: newPayment
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Fetch all Payments
const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find()
      .populate('customer_id')
      .populate('order_id')
      .populate('seller_id');
    
    res.status(200).json({
      message: 'Payments fetched successfully',
      data: payments
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Fetch Payment by ID
const getPaymentById = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findById(id)
      .populate('customer_id')
      .populate('order_id')
      .populate('seller_id');

    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    res.status(200).json({
      message: 'Payment fetched successfully',
      data: payment
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createPayment,
  getAllPayments,
  getPaymentById
};
