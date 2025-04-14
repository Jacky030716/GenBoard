const userAuthRepository = require("../repositories/user_auth_repository");

const userAuthService = {
    getUserByEmail: async (email) => {
        return await userAuthRepository.findByEmail(email);
    },
};

module.exports = userAuthService;