const TraineeProgress = require("../models/trainee_progress_model");

const traineeProgressRepository = {
  findByTraineeId: async (uid) => {
    return await TraineeProgress.findOne({ uid: uid }); // Use `findOne` to get a single document
  },
  updateTrainee: async (uid, newIndex, newResult) => {
    let traineeProgress = await TraineeProgress.findOne({ uid: uid });

    if (!traineeProgress) {
      traineeProgress = new TraineeProgress({
        uid: uid,
        currentIndex: newIndex,
        result: [
          {
            index: newResult,
            isCompleted: true,
          },
        ],
      });
      return await traineeProgress.save(); // Save the new document and return it
    }

    // Check if the index already exists in the result array
    const existingResult = traineeProgress.result.find(
      (entry) => entry.index === newResult
    );

    if (existingResult) {
      return traineeProgress; // Return the existing document without changes
    }

    // If the index does not exist, update the document
    return await TraineeProgress.findOneAndUpdate(
      { uid: uid },
      {
        $set: { currentIndex: newIndex }, // Update the currentIndex
        $push: {
          // Push a new entry into the result array
          result: {
            index: newResult,
            isCompleted: true,
          },
        },
      },
      { new: true } // Return the updated document
    );
  },
};

module.exports = traineeProgressRepository;
