const mongoose = require('mongoose')

const packageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: Number, required: true },
  destinations: [{ type: String, required: true }],
  rating: { type: Number, required: true }
});

module.exports = mongoose.model('Package', packageSchema);