const Customer = require('../models/Customer');

// CREATE
exports.createCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();

    const populatedCustomer = await Customer.findById(customer._id)
      .populate('user')
      .populate({
        path: 'role_name',
        populate: { path: 'permissions' }
      });

    res.status(201).json({ message: 'Customer created successfully', customer: populatedCustomer });
  } catch (error) {
    res.status(500).json({ message: 'Error creating customer', error: error.message });
  }
};

// READ ALL
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find()
      .populate('user')
      .populate({
        path: 'role_name',
        populate: { path: 'permissions' }
      });

    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching customers', error: error.message });
  }
};

// READ ONE
exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id)
      .populate('user')
      .populate({
        path: 'role_name',
        populate: { path: 'permissions' }
      });

    if (!customer) return res.status(404).json({ message: 'Customer not found' });
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching customer', error: error.message });
  }
};

// UPDATE
exports.updateCustomer = async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate({
      path: 'role_name',
      populate: { path: 'permissions' }
    });

    if (!updatedCustomer) return res.status(404).json({ message: 'Customer not found' });

    res.status(200).json({ message: 'Customer updated successfully', customer: updatedCustomer });
  } catch (error) {
    res.status(500).json({ message: 'Error updating customer', error: error.message });
  }
};

// DELETE
exports.deleteCustomer = async (req, res) => {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
    if (!deletedCustomer) return res.status(404).json({ message: 'Customer not found' });

    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting customer', error: error.message });
  }
};
