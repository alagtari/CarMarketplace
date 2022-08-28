const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true },
  password: { type: String ,required: true},
  address: { type: String ,required: true},
  phoneNumber: { type: String ,required: true},
  saved:[]
});

module.exports = mongoose.model("user", userSchema);