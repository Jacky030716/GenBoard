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
  updateResult: async (uid, newResult) => {
    return await Result.findOneAndUpdate(
      { uid: uid },
      {
        $push: { result: newResult }, // Push the new result into the result array
      },
      { new: true } // Return the updated document
    );
  },
};

module.exports = resultRepository;
