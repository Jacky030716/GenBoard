const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  host: {
    type: String,
    required: true,
  },
  participants: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Meeting", meetingSchema);
