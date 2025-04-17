const mongoose = require("mongoose");

const summarySectionSchema = new mongoose.Schema({
  title: { type: String },
  keyPoint: { type: String },
  decision: { type: String },
  actionItem: { type: String },
  nextStep: { type: String }
}, { _id: false }); // Disable _id for subdocuments to keep the structure clean

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
  summary: {
    type: [summarySectionSchema], 
    required: true,
  },
});

module.exports = mongoose.model("AISummarizeReport", summarizeSchema);
