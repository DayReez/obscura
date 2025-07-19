const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load .env variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/travelbuddy';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch((err) => {
  console.error('❌ MongoDB connection failed:', err.message);
  process.exit(1); // Optional: exit app if DB fails
});

// Routes
const authRoutes = require('./routes/authRoutes');
const packageRoutes = require('./routes/packageRoutes'); // Adjust path as needed

app.use('/api/auth', authRoutes);         // Auth endpoints: /signup, /login
app.use('/api/packages', packageRoutes);  // Tour package endpoints

// Default route
app.get('/', (req, res) => {
  res.send('🌍 Welcome to the TravelBuddy API');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
