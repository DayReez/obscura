// server/index.js

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample Route (for testing)
app.get('/', (req, res) => {
  res.send('🌍 Welcome to the TravelBuddy API');
});

// Add your other routes here like:
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/packages', require('./routes/packages'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
