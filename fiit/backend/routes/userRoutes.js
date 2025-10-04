const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../Controllers/userController');
const auth = require('../middleware/authMiddleware');
const Plan = require('../models/Plan');


router.get('/all', getAllUsers); // Route: /api/users/all

router.get('/plans', auth, async (req, res) => {
  try {
    const plans = await Plan.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(plans);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch plans' });
  }
});



module.exports = router;
