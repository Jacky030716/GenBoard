const feedbackRepository = require("../repositories/feedback_repository");

const feedbackService = {
    createFeedback: async (feedback) => {
        return await feedbackRepository.createFeedback(feedback);
    },
    getAllFeedback: async () => {
        return await feedbackRepository.getAllFeedback();
    },
};

module.exports = feedbackService;