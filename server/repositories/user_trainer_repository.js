const userTrainer = require('../models/user_trainer_model');

const userTrainerRepository = {
    findById: async (uid) => {
        return await userTrainer.find({}).where({ uid: uid });
    }
};

module.exports = userTrainerRepository;
