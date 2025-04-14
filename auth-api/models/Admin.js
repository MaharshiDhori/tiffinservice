const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const AdminSchema = new mongoose.Schema(
  {
    admin_id: {
      type: String,
      default: () => uuidv4(),
      unique: true
    },
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role',  // Reference to the Role model
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Admin', AdminSchema);
