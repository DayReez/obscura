// routes/companyProfile.js
import express from 'express';
import CompanyProfile from '../models/CompanyProfile.js';

const router = express.Router();

// POST /api/company-profile/save
router.post('/save', async (req, res) => {
  try {
    const { userId, name, description, photo, packages, proposals } = req.body;

    if (!userId) return res.status(400).json({ error: 'User ID is required' });

    const existingProfile = await CompanyProfile.findOne({ userId });

    if (existingProfile) {
      // Update existing
      existingProfile.name = name;
      existingProfile.description = description;
      existingProfile.photo = photo;
      existingProfile.packages = packages;
      existingProfile.proposals = proposals;
      await existingProfile.save();
      return res.json({ message: 'Profile updated successfully' });
    } else {
      // Create new
      const newProfile = new CompanyProfile({ userId, name, description, photo, packages, proposals });
      await newProfile.save();
      return res.status(201).json({ message: 'Profile created successfully' });
    }
  } catch (err) {
    console.error('❌ Failed to save company profile:', err.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
