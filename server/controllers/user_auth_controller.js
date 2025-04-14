const userAuthService = require("../services/user_auth_service");

const  userAuthController = {
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
    }
}

module.exports = userAuthController;