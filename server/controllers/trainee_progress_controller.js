const traineeProgressService = require("../services/trainee_progress_service");

const traineeProgressController = {
  getProgress: async (req, res) => {
    try {
      const { uid } = req.params;

      if (!uid) {
        return res.status(400).json({ error: "User ID is required" });
      }

      const response = await traineeProgressService.getProgress(uid);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateProgress: async (req, res) => {
    try {
      const { uid } = req.params;
      const { newIndex, previousResult } = req.body;

      if (!uid) {
        return res.status(400).json({ error: "User ID is required" });
      }

      const response = await traineeProgressService.updateProgress(
        uid,
        newIndex,
        previousResult
      );
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = traineeProgressController;
