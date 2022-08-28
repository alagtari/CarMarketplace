const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  color: { type: String ,required: true},
  category: { type: String ,required: true},
  description: { type: String ,required: true},
  photo: { type: String ,required: true},
  owner: { type: mongoose.Schema.Types.ObjectId},
});

module.exports = mongoose.model("car", carSchema);