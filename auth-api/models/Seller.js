const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const SellerSchema = new mongoose.Schema(
  {
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
    seller_Id: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
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

// 🔒 Pre-save hook to hash password
SellerSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('Seller', SellerSchema);
