const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  description: String,
  price: Number,
  stock: Number,
  images: [String],
  category: String,
  approved: { type: Boolean, default: false }
});
module.exports = mongoose.model('Product', ProductSchema);
