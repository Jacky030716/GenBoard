const UserAuth = require("../models/use_auth_model");

const userAuthRepository = {
  findByEmail: async (email) => {
    return await UserAuth.findOne({ email: email });
  },
  verifyPassword: async (user, password) => {
    return await UserAuth.findOne({
      email: user.email,
      password: password,
    });
  },
};

module.exports = userAuthRepository;
