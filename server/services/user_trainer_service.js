const userTrainerRepository = require('../repositories/user_trainer_repository');

const userTrainerService = {
    findById: async (uid) => {
        return await userTrainerRepository.findById(uid);
    }
};

module.exports = userTrainerService;