const mongoose = require("mongoose");

const onboardingSchema = new mongoose.Schema({
  uid: String,
  start_day: String,
  end_day: String,
  status: String,
  mark: Number
});

module.exports = mongoose.model("Onboarding", onboardingSchema);
