const userTrainee = require('../models/user_trainee_model');

const userTraineeRepository = {
    findById: async (uid) => {
        return await userTrainee.find({}).where({ uid: uid });
    }
};

module.exports = userTraineeRepository;