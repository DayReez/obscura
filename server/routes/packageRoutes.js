const express = require('express');
const Package = require('../models/Package');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Middleware to verify JWT token
const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ error: 'Access denied' });

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ error: 'Invalid token' });
  }
};

// Upload package (only for tour companies)
router.post('/upload', auth, async (req, res) => {
  if (req.user.role !== 'company') {
    return res.status(403).json({ error: 'Only tour companies can upload packages' });
  }

  try {
    const newPackage = new Package({
      ...req.body,
      companyId: req.user.id
    });
    await newPackage.save();
    res.status(201).json({ message: 'Package uploaded successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to upload package' });
  }
});

// Get all packages
router.get('/', async (req, res) => {
  const packages = await Package.find().populate('companyId', 'name');
  res.json(packages);
});

module.exports = router;
