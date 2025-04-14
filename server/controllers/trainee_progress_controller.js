const traineeProgressService = require("../services/trainee_progress_service")

const traineeProgressController = {
    getProgress: async (req, res) => {
        try {
            const response = await traineeProgressService.getProgress(req.params.uid);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    updateProgress: async (req, res) => {
        try {
            const { newIndex, newResult } = req.body;
            const response = await traineeProgressService.updateProgress(req.params.uid, newIndex, newResult);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = traineeProgressController;