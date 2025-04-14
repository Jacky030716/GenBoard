const TraineeProgress = require('../models/trainee_progress_model');

const traineeProgressRepository = {
    findByTraineeId: async (uid) => {
        return await TraineeProgress.find({ uid: uid });
    },
    updateTrainee: async (uid, newIndex, newResult) => {
        return await TraineeProgress.findOneAndUpdate(
            { uid: uid },
            { currentIndex : newIndex },
            { result: newResult},
            { new : true }
        )
    },
    
}

module.exports = traineeProgressRepository
