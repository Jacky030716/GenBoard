const mongoose = require("mongoose");

const completedSchema = new mongoose.Schema({
  index: {
    type: String,
    required: true,
  }, // Format: "1.2"
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const traineeProgressSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  currentIndex: {
    type: String,
    default: "1.1",
  }, // Format: "1.2"
  result: {
    type: [completedSchema],
    default: [],
  },
});

module.exports = mongoose.model("TraineeProgress", traineeProgressSchema);
