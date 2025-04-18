const mongoose = require("mongoose");

const completedSchema = new mongoose.Schema({
  task: String, // Format: "1.2_Learn Git Rule (index + title)"
  completed: Boolean,
});

const traineeProgressSchema = new mongoose.Schema({
  uid: String,
  currentTask: String, // Format: "1.2_Learn Git Rule (index + title)"
  result: [completedSchema],
});

module.exports = mongoose.model("TraineeProgress", traineeProgressSchema);
