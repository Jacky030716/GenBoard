const OnboardingRepository = require("../repositories/onboarding_repository")

const onboardingService = {
    getOnboarding: async (uid) => {
        return await OnboardingRepository.findById(uid);
    },
    getAllOnboarding: async () => {
        return await OnboardingRepository.getAll();
    }
}

module.exports = onboardingService;