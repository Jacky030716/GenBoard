const mongoose = require("mongoose");

const userAuthSchema = new mongoose.Schema({
  uid: String,
  email: String,
  password: String,
  role: String // "trainer" or "trainee"
});

module.exports = mongoose.model("UserAuth", userAuthSchema);
