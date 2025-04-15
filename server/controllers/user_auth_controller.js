const userAuthService = require("../services/user_auth_service");

const userAuthController = {
  getUserByEmail: async (req, res) => {
    try {
      const email = req.params.email;
      const response = await userAuthService.getUserByEmail(email);

      if (!response) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and password are required" });
      }

      const response = await userAuthService.loginUser(email, password);

      if (!response) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = userAuthController;
