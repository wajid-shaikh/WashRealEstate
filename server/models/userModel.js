const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  role: { type: String, default: "user" },
  password: { type: String, required: true },
  contact: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  address: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
