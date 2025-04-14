const userTraineeService = require("../services/user_trainee_service");

const userTraineeController = {
  findById: async (req, res) => {
    try {
      const uid = req.params.uid;
      const response = await userTraineeService.findById(uid);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = userTraineeController;
