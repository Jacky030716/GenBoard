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
    getDepartmentOnboarding: async (req, res) => {
        try {
            const department = req.params.department;
            const response = await onboardingService.getDepartmentOnboarding(department);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

module.exports = onboardingController;