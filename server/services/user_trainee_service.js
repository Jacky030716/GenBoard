const userTraineeRepository = require("../repositories/user_trainee_repository");

const userTraineeService = {
    findById: async (uid) => {
        return await userTraineeRepository.findById(uid);
    },

    findByDepartment: async (department) => {
        return await userTraineeRepository.findByDepartment(department);
    },
};

module.exports = userTraineeService;
