import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Protected route example
router.get('/profile', verifyToken, (req, res) => {
  // req.user contains the decoded JWT payload
  res.json({
    message: 'Protected route accessed successfully',
    user: req.user
  });
});

export default router;
