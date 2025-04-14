const userTrainee = require('../models/user_trainee_model');

const userTraineeRepository = {
    findById: async (uid) => {
        return await userTrainee.find({}).where({ uid: uid });
    },

    findByDepartment: async (department) => {
        return await userTrainee.find({}).where({ department: department });
    }
};


module.exports = userTraineeRepository;