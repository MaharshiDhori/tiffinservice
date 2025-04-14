const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const OrderItemSchema = new mongoose.Schema(
  {
    order_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order', // Reference to the 'Order' collection
      required: true
    },
    description: {
      type: String,
      required: true
    },
    item_id: {
        type: String,
        default: () => uuidv4(),
        unique: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    amount: {
      type: Number,
      required: true
    }
  },
  { timestamps: true } // Automatically add createdAt and updatedAt
);

module.exports = mongoose.model('OrderItem', OrderItemSchema);
