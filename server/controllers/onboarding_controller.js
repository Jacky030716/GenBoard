const onboardingService = require("../services/onboarding_service");

const onboardingController = {
    getOnboarding: async (req, res) => {
        try {
            const uid = req.params.uid;
            const response = await onboardingService.getOnboarding(uid);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    getAllOnboarding: async (req, res) => {
        try {
            const response = await onboardingService.getAllOnboarding();
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

module.exports = onboardingController;