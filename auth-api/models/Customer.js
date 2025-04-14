const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true
    },
    first_Name: {
      type: String,
      required: true,
      trim: true
    },
    last_Name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    address: {
      street: { type: String, required: true, trim: true },
      city: { type: String, required: true, trim: true },
      state: { type: String, required: true, trim: true },
      zipCode: { type: String, required: true, trim: true }
    },
    is_Active: {
      type: Boolean,
      default: true
    },
    role_name: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role', 
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Customer', CustomerSchema);
