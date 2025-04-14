const mongoose = require("mongoose");

const userTraineeSchema = new mongoose.Schema({
  uid: String,
  name: String,
  phone_number: String,
  department: String
});

module.exports = mongoose.model("UserTrainee", userTraineeSchema);
