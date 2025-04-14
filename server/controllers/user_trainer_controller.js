const userTrainerService = require("../services/user_trainer_service");

const userTrainerController = {
    findById: async (req, res) => {
        try {
            const uid = req.params.uid;
            const response = await userTrainerService.findById(uid);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

module.exports = userTrainerController;