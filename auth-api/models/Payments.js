const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const { Schema } = mongoose;


// Define the Payment Schema
const PaymentSchema = new mongoose.Schema(
  {
    payment_id: {
      type: String,
      default: () => uuidv4(),
      unique: true
    },
    customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer', // Reference to the 'Customer' model
      required: true
    },
    order_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order', // Reference to the 'Order' model
      required: true
    },
    seller_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seller', // Reference to the 'Seller' model
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    payment_mode: {
      type: String,
      enum: ['credit_card', 'debit_card', 'paypal', 'bank_transfer', 'cash_on_delivery'],
      required: true
    },
    payment_date: {
      type: Date,
      default: Date.now
    },
    payment_status: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending'
    }
  },
  { timestamps: true } // Automatically add createdAt and updatedAt
);

// Export the Payment model
module.exports = mongoose.model('Payment', PaymentSchema);
