const mongoose = require("mongoose");

const traineeProgressSchema = new mongoose.Schema({
  uid: String,
  currentIndex: Number,
  result: Array
});

module.exports = mongoose.model("TraineeProgress", traineeProgressSchema);
