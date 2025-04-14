const mongoose = require("mongoose");

const summarizeSchema = new mongoose.Schema({
  meeting_id: {
    type: String,
    ref: "Meeting",
    required: true,
  },
  participant: {
    type: String,
    required: true,
  },
  summarize: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("AISummarizeReport", summarizeSchema);
