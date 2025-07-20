// models/CompanyProfile.js
import mongoose from 'mongoose';

const CompanyProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  photo: { type: String },
  packages: [
    {
      id: String,
      details: String,
    }
  ],
  proposals: [
    {
      id: Number,
      customerName: String,
      packageDetails: String,
      status: String,
    }
  ],
}, { timestamps: true });

const CompanyProfile = mongoose.model('CompanyProfile', CompanyProfileSchema);
export default CompanyProfile;
