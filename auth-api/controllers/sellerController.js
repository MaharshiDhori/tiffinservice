const Seller = require('../models/Seller');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISTER
exports.register = async (req, res) => {
  try {
    const { first_Name, last_Name, email, password, seller_Id, address, role_name } = req.body;

    const existingSeller = await Seller.findOne({ $or: [{ email }, { seller_Id }] });
    if (existingSeller) {
      return res.status(400).json({ msg: 'Email or Seller ID already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newSeller = new Seller({
      first_Name,
      last_Name,
      email,
      password: hashedPassword,
      seller_Id,
      address,
      role_name
    });

    await newSeller.save();

    const populatedSeller = await Seller.findById(newSeller._id)
      .populate({
        path: 'role_name',
        populate: { path: 'permissions' }
      });

    res.status(201).json({ msg: 'Seller registered successfully', seller: populatedSeller });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const seller = await Seller.findOne({ email }).populate({
      path: 'role_name',
      populate: { path: 'permissions' }
    });

    if (!seller) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, seller.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { id: seller._id, role: seller.role_name },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      token,
      seller: {
        id: seller._id,
        first_Name: seller.first_Name,
        last_Name: seller.last_Name,
        email: seller.email,
        seller_Id: seller.seller_Id,
        role: seller.role_name
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// UPDATE
exports.updateSeller = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (updateData.password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(updateData.password, salt);
    }

    const seller = await Seller.findByIdAndUpdate(id, updateData, { new: true })
      .populate({
        path: 'role_name',
        populate: { path: 'permissions' }
      });

    if (!seller) {
      return res.status(404).json({ msg: 'Seller not found' });
    }

    res.json({ msg: 'Seller updated successfully', seller });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// DELETE
exports.deleteSeller = async (req, res) => {
  try {
    const { id } = req.params;

    const seller = await Seller.findByIdAndDelete(id);
    if (!seller) {
      return res.status(404).json({ msg: 'Seller not found' });
    }

    res.json({ msg: 'Seller deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// GET ALL SELLERS
exports.getAllSellers = async (req, res) => {
  try {
    const sellers = await Seller.find()
      .populate({
        path: 'role_name',
        populate: { path: 'permissions' }
      });

    res.status(200).json(sellers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// GET ONE SELLER
exports.getSellerById = async (req, res) => {
  try {
    const { id } = req.params;

    const seller = await Seller.findById(id)
      .populate({
        path: 'role_name',
        populate: { path: 'permissions' }
      });

    if (!seller) {
      return res.status(404).json({ msg: 'Seller not found' });
    }

    res.status(200).json(seller);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};
