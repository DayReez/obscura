import express from 'express';
import jwt from 'jsonwebtoken';
import Package from '../models/Package.js';

const router = express.Router();

// Middleware to verify JWT token
const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({ error: 'Token missing or malformed' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid token' });
  }
};

// Upload package (only for tour companies)
router.post('/upload', auth, async (req, res) => {
  if (req.user.role !== 'company') {
    return res.status(403).json({ error: 'Only tour companies can upload packages' });
  }

  const { title, location, days, price, description, itinerary } = req.body;

  if (!title || !location || !price) {
    return res.status(400).json({ error: 'Title, location, and price are required' });
  }

  try {
    const newPackage = new Package({
      title,
      location,
      days,
      price,
      description,
      itinerary,
      companyId: req.user.id
    });

    await newPackage.save();
    res.status(201).json({ message: 'Package uploaded successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to upload package', details: err.message });
  }
});

// Get all packages
router.get('/', async (req, res) => {
  try {
    const packages = await Package.find().populate('companyId', 'username email');
    res.json(packages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch packages', details: err.message });
  }
});

// Get single package by ID
router.get('/:id', async (req, res) => {
  try {
    const pack = await Package.findById(req.params.id).populate('companyId', 'username email');
    if (!pack) return res.status(404).json({ error: 'Package not found' });
    res.json(pack);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching package', details: err.message });
  }
});

// Delete a package (only company that created it can delete)
router.delete('/:id', auth, async (req, res) => {
  try {
    const pack = await Package.findById(req.params.id);

    if (!pack) return res.status(404).json({ error: 'Package not found' });
    if (pack.companyId.toString() !== req.user.id) {
      return res.status(403).json({ error: 'Not authorized to delete this package' });
    }

    await pack.deleteOne();
    res.json({ message: 'Package deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete package', details: err.message });
  }
});

export default router;
