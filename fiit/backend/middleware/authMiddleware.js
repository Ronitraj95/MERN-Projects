const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1]; // grabs the actual JWT

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded || !decoded.id) {
      return res.status(403).json({ error: 'Invalid token payload' });
    }

    req.user = decoded; // includes { id, role }
    next();
  } catch (err) {
    console.error("Token verification error:", err);
    return res.status(403).json({ error: 'Invalid token' });
  }
};
