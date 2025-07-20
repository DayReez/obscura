import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Company from '../models/Company.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key'; // 🔐 Use env var in production

/** -------------------------
 *  USER REGISTRATION
 *  POST /api/auth/register
 ------------------------- **/
router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required.' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({ message: '✅ User registered successfully.' });
  } catch (err) {
    console.error('❌ User registration error:', err);
    res.status(500).json({ error: 'User registration failed.', details: err.message });
  }
});

/** -------------------------
 *  COMPANY REGISTRATION
 *  POST /api/auth/signup
 ------------------------- **/
router.post('/signup', async (req, res) => {
  try {
    const { companyName, email, phone, password, companySize, industry } = req.body;

    if (!companyName || !email || !password) {
      return res.status(400).json({ error: 'Company name, email, and password are required.' });
    }

    if (!email.endsWith('@gmail.com')) {
      return res.status(400).json({ error: 'Only Gmail addresses are allowed for company registration.' });
    }

    const existingCompany = await Company.findOne({ email });
    if (existingCompany) {
      return res.status(400).json({ error: 'Company email already registered.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newCompany = new Company({
      companyName,
      email,
      phone,
      password: hashedPassword,
      companySize,
      industry,
      role: 'company'
    });

    await newCompany.save();

    res.status(201).json({ message: '✅ Company registered successfully.' });
  } catch (err) {
    console.error('❌ Error in /signup:', err);
    res.status(500).json({ error: 'Company registration failed.', details: err.message });
  }
});

/**
 * USER LOGIN
 */
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, role: 'user' },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      message: '✅ Login successful',
      token,
      role: 'user',
      name: user.name,
    });
  } catch (err) {
    console.error('❌ User login error:', err);
    res.status(500).json({ error: 'Login failed', details: err.message });
  }
});

/** -------------------------
 *  COMPANY LOGIN
 *  POST /api/auth/company-login
 ------------------------- **/
router.post('/company-login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const company = await Company.findOne({ email });
    if (!company) {
      return res.status(404).json({ error: 'Company not found.' });
    }

    const isMatch = await bcrypt.compare(password, company.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    const token = jwt.sign(
      { id: company._id, role: 'company' },
       process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: '✅ Login successful.',
      token,
      companyName: company.companyName
    });
  } catch (err) {
    console.error('❌ Company login error:', err);
    res.status(500).json({ error: 'Login failed.', details: err.message });
  }
});

export default router;
