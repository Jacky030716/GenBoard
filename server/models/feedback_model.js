const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  sender_id: String,
  problem_type: String,
  description: String,
});

module.exports = mongoose.model("Feedback", feedbackSchema);
