const Onboarding = require("../models/onboarding_model");

const OnboardingRepository = {
    findById: async (uid) => {
        return await Onboarding.find({}).where({ uid: uid });
    },
    getAll: async () => {
        return await Onboarding.find({});
    }
}

module.exports = OnboardingRepository;