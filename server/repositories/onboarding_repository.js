const Onboarding = require("../models/onboarding_model");
const UserTrainee = require("../models/user_trainee_model");

const OnboardingRepository = {
  findById: async (uid) => {
    return await Onboarding.find({}).where({ uid: uid });
  },
  getDepartmentOnboarding: async (department) => {
    const trainees = await UserTrainee.find({ department: department });
    const onboardingData = await Onboarding.find({}).where({
      uid: { $in: trainees.map((t) => t.uid) },
    });
    return onboardingData;
  },
};

module.exports = OnboardingRepository;
