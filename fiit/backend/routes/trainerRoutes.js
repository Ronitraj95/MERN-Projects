const express = require('express');
const router = express.Router();
const { getAllUsers,deleteUserByTrainer } = require('../Controllers/userController');
const auth = require('../middleware/authMiddleware');
const Plan = require('../models/Plan'); 
const { getUsersByRole } = require('../Controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const { sendPlanToUser } = require('../controllers/trainerController');

router.get('/users', auth, getAllUsers); // <- THIS IS THE MISSING ROUTE
router.post('/send-plan', auth, sendPlanToUser);
router.delete('/user/:id', auth, deleteUserByTrainer);
router.get('/admin/all', auth, getUsersByRole);
router.get('/latest-plan', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    const latestPlan = await Plan.findOne({ userId }).sort({ createdAt: -1 });

    if (!latestPlan) {
      return res.status(404).json({ message: 'No plan found' });
    }

    res.json(latestPlan);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
