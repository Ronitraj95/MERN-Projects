const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const createToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

exports.register = async (req, res) => {
  try {
    console.log("Register Request Body:", req.body); // Log incoming data

    const user = await User.create(req.body);
    const token = createToken(user);
    res.status(201).json({ token });
  } catch (err) {
    console.error("Registration Error:", err); // Log detailed error

    if (err.code === 11000) {
      // MongoDB duplicate key error (e.g. email already exists)
      return res.status(400).json({ error: 'Email already exists' });
    }

    if (err.name === 'ValidationError') {
      // Mongoose validation failed
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({ error: messages.join(', ') });
    }

    // Fallback for unexpected errors
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ error: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: 'Invalid email or password' });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({ token, role: user.role }); // 👈 return role in response
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};