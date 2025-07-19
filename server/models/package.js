const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  location: String,
  days: Number,
  price: Number,
  description: String,
  itinerary: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Package', packageSchema);
