const Feedback = require("../models/feedback_model");
const { getAll } = require("./onboarding_repository");

const feedbackRepository = {
    createFeedback: async (feedback) => {
        return await Feedback.create(feedback);
    },
    getAllFeedback: async () => {
        return await Feedback.find({});
    },
}

module.exports = feedbackRepository;    