const OnboardingRepository = require("../repositories/onboarding_repository")

const onboardingService = {
    getOnboarding: async (uid) => {
        return await OnboardingRepository.findById(uid);
    },
    getDepartmentOnboarding: async (department) => {
        return await OnboardingRepository.getDepartmentOnboarding(department);
    }
}

module.exports = onboardingService;