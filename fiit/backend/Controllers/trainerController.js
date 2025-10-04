// Controllers/trainerController.js
const Plan = require('../models/Plan');
const User = require('../models/User');
const nodemailer = require('nodemailer');


const sendPlanToUser = async (req, res) => {
  try {
    const { userId, workout, diet } = req.body;

    // 1. Save plan to DB
    const plan = await Plan.create({ userId, workout, diet });

    // 2. Send email to user
    const user = await User.findById(userId);
    if (user && user.email) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'FreakFit012@gmail.com',
          pass: 'deuc dbug kftv itis' // App-specific password from Google
        }
      });

      await transporter.sendMail({
        from: 'FreakFit012@gmail.com',
        to: user.email,
        subject: 'Your New Workout & Diet Plan 🏋️🥗',
        html: `
          <h3>Hi ${user.name},</h3>
          <p><strong>Workout Plan:</strong><br/>${workout}</p>
          <p><strong>Diet Plan:</strong><br/>${diet}</p>
        `,
      });
    }

    res.status(200).json({ message: 'Plan sent successfully!', plan });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send plan' });
  }
};

module.exports = { sendPlanToUser };
