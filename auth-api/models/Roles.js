const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const RoleSchema = new mongoose.Schema(
  {
    role_id: {
      type: String,
      default: () => uuidv4(),
      unique: true,
    },
    role_name: {
      type: String,
      required: true,
      unique: true,
    },
    permissions: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Role', RoleSchema);
