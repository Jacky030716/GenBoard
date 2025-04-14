const traineeProgressRepository = require("../repositories/trainee_progress_repository");

const traineeProgressService = {
    getProgress: async (uid) =>{
        return await traineeProgressRepository.findByTraineeId(uid);
    },
    updateProgress: async (uid, newIndex, newResult) => {
        return await traineeProgressRepository.updateTrainee(uid, newIndex, newResult);
    }
}

module.exports = traineeProgressService;