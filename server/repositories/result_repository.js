const { findById } = require("../models/ai_summarize_report_model");
const Result = require("../models/result_model");

const resultRepository = {
  findById: async (uid) => {
    return await Result.find({}).where({ uid: uid });
  },
  createResult: async (uid, result) => {
    const resultItem = new Result({
      uid: uid,
      result: result,
    });
    return await resultItem.save();
  },
  updateResult: async (uid, result) => {
    return await Result.findOneAndUpdate(
      { uid: uid },
      { result: result },
      { new: true }
    );
  },
};

module.exports = resultRepository;
