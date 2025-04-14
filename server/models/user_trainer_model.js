const mongoose = require("mongoose");

const userTrainerSchema = new mongoose.Schema({
  uid: String,
  staff_id: String,
  name: String,
  department: String
});

module.exports = mongoose.model("UserTrainer", userTrainerSchema);
