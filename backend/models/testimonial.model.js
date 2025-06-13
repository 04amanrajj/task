const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  text: { type: String, required: true },
  name: { type: String, required: true },
  companyOrDesignation: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);