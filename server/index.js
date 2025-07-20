import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// === ROUTE IMPORTS ===
import authRoutes from './routes/auth.js';
import packageRoutes from './routes/packageRoutes.js';
import companyProfileRoutes from './routes/CompanyProfile.js'; // ✅ Company profile route

dotenv.config();

const app = express();

// === MIDDLEWARE ===
app.use(cors({
  origin: 'http://localhost:5173', // ✅ React frontend
  credentials: true,
}));
app.use(express.json()); // ✅ Parse incoming JSON

// === MONGODB CONNECTION ===
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/travelbuddy';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch((err) => {
  console.error('❌ MongoDB connection failed:', err.message);
  process.exit(1);
});

// === ROUTES ===
app.use('/api/auth', authRoutes);                          // 🔐 Auth routes (user & company)
app.use('/api/packages', packageRoutes);                   // 🧳 Package routes
app.use('/api/company-profile', companyProfileRoutes);     // 🏢 Company profile routes

// === HEALTH CHECK ===
app.get('/', (req, res) => {
  res.status(200).send('🌍 Welcome to the TravelBuddy API');
});

// === DEBUG: List all registered routes ===
console.log('\n📋 Registered API Routes:');
app._router.stack
  .filter(r => r.route && r.route.path)
  .forEach(r => {
    const method = Object.keys(r.route.methods)[0].toUpperCase();
    console.log(`📍 ${method} ${r.route.path}`);
  });

// === 404 HANDLER ===
app.use((req, res) => {
  res.status(404).json({ error: '🚫 Route not found' });
});

// === START SERVER ===
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
