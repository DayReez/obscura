import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  days: { type: Number },
  price: { type: Number, required: true },
  description: { type: String },
  itinerary: { type: String },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true
});

const Package = mongoose.model('Package', packageSchema);

export default Package;
