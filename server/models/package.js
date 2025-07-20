import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  days: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  itinerary: { type: [String], required: true }, // ✅ Fix is here
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
}, { timestamps: true });

export default mongoose.model('Package', packageSchema);
