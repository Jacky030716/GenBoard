const userAuthRepository = require("../repositories/user_auth_repository");

const userAuthService = {
  getUserByEmail: async (email) => {
    return await userAuthRepository.findByEmail(email);
  },
  loginUser: async (email, password) => {
    const user = await userAuthRepository.findByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }
    const isPasswordValid = await userAuthRepository.verifyPassword(
      user,
      password
    );
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }
    return user;
  },
};

module.exports = userAuthService;
