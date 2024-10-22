// backend/routes/userRoutes.js
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

// Password validation helper function
const validatePassword = (password) => {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return regex.test(password);
};

// POST /api/signup - Register a new user
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  if (!validatePassword(password)) {
    return res.status(400).json({
      message: 'Password must be at least 8 characters long, contain an uppercase letter, a special symbol, and a number.',
    });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
  


module.exports = router;

