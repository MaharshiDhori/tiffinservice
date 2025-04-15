require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Import authentication routes
const sellerRoutes = require('./routes/seller');
const customerRoutes = require('./routes/customer'); 
const orderRoutes = require('./routes/orders');
const orderItemRoutes = require('./routes/orderItem');
const paymentRoutes = require('./routes/payment');
const adminRoutes = require('./routes/admin');
const roleRoutes = require('./routes/roles');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/api/auth', authRoutes); // Set up authentication routes
app.use('/api/customer', customerRoutes); // Set up customer routes
app.use('/api/seller', sellerRoutes);
app.use('/api', orderRoutes);
app.use('/api', orderItemRoutes);
app.use('/api', paymentRoutes);
app.use('/admin', adminRoutes);  
app.use('/api/roles', roleRoutes); 
app.use('/api/users', userRoutes);         

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  // Start the server
  app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
})
.catch(err => console.error('MongoDB connection error:', err));
