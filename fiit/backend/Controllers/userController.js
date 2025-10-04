const User = require('../models/User');
const Activity = require('../models/Activity');

const getDashboardData = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  const activity = await Activity.find({ userId: req.user.id }).sort({ date: -1 }).limit(7);
  res.json({ user, activity });
};

const updateProfile = async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
  res.json(updated);
};

// Get all registered users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "user"}, '-password'); // exclude password
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

const deleteUserByTrainer = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Fetch all users and trainers separately
const getUsersByRole = async (req, res) => {
  try {
    const users = await User.find({ role: "user" }, "-password");
    const trainers = await User.find({ role: "trainer" }, "-password");
    res.status(200).json({ users, trainers });
  } catch (err) {
    console.error("Error fetching users by role:", err);
    res.status(500).json({ error: "Server error" });
  }
};





module.exports = {
  getDashboardData, 
  updateProfile,
  deleteUserByTrainer,
  getAllUsers,
  getUsersByRole
};
