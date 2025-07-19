import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Route imports
import authRoutes from './routes/auth.js';
import packageRoutes from './routes/packageRoutes.js';

dotenv.config();

const app = express();

// === MIDDLEWARE ===
app.use(cors({
  origin: 'http://localhost:5173', // ✅ Frontend URL
  credentials: true,
}));
app.use(express.json()); // ✅ Parse incoming JSON

// === MONGO DB CONNECTION ===
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
app.use('/api/auth', authRoutes);         // 🔐 Auth routes (user/company)
app.use('/api/packages', packageRoutes);  // 🧳 Travel package routes

// === ROOT ROUTE (Health Check) ===
app.get('/', (req, res) => {
  res.status(200).send('🌍 Welcome to the TravelBuddy API');
});

// === DEBUG: List all routes at startup ===
app._router.stack
  .filter(r => r.route)
  .forEach(r => console.log(`📍 ${Object.keys(r.route.methods)[0].toUpperCase()} ${r.route.path}`));

// === CATCH-ALL 404 HANDLER ===
app.use((req, res) => {
  res.status(404).json({ error: '🚫 Route not found' });
});

// === START SERVER ===
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
