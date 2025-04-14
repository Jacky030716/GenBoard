const feedbackService = require("../services/feedback_service");

const feedbackController = {
    createFeedback: async (req, res) => {
        try {
            const feedback = req.body;
            const response = await feedbackService.createFeedback(feedback);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    getAllFeedback: async (req, res) => {
        try {
            const response = await feedbackService.getAllFeedback();
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};
module.exports = feedbackController;