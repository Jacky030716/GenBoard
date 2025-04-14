const UserAuth = require("../models/use_auth_model")

const userAuthRepository = {
    findByEmail: async (email) => {
        return await UserAuth.findOne({ email: email });
    }
};

module.exports = userAuthRepository;
