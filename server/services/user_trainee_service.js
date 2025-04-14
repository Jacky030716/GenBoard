const userTraineeRepository = require("../repositories/user_trainee_repository");

const userTraineeService = {
    findById: async (uid) => {
        return await userTraineeRepository.findById(uid);
    }
};

module.exports = userTraineeService;
