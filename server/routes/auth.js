import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// POST /api/register
router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    const newUser = new User({ name, email, phone, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed.', details: err.message });
  }
});

export default router;
