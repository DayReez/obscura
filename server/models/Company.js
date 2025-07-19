// models/Company.js
import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true },  // ✅ Use companyName
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  password: { type: String, required: true },
  companySize: { type: String },
  industry: { type: String },
  role: { type: String, default: 'company' }
}, { timestamps: true });

const Company = mongoose.model('Company', companySchema);
export default Company;
