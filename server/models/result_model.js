const mongoose = require("mongoose");

const resultItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
    default: "No feedback provided",
  },
});

const resultSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  result: {
    type: [resultItemSchema],
    required: true,
  },
});

module.exports = mongoose.model("Result", resultSchema);
