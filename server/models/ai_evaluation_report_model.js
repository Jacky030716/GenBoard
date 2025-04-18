const mongoose = require("mongoose");

const aiEvaluationReportSchema = new mongoose.Schema({
  uid: String,
  strength: [String],
  weakness: [String]
});

module.exports = mongoose.model("AIEvaluationReport", aiEvaluationReportSchema);
