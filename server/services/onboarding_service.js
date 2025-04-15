const { formatOnboardingData } = require("../lib/utils");
const OnboardingRepository = require("../repositories/onboarding_repository");
const userTraineeRepository = require("../repositories/user_trainee_repository");

const onboardingService = {
  getOnboarding: async (uid) => {
    const [onboardingStatus] = await OnboardingRepository.findById(uid);
    const [traineeData] = await userTraineeRepository.findById(uid);

    const normalizedData = {
      uid: uid,
      name: traineeData.name,
      start_day: onboardingStatus.start_day,
      end_day: onboardingStatus.end_day,
      status: onboardingStatus.status,
      mark: onboardingStatus.mark,
    };

    return normalizedData;
  },
  getDepartmentOnboarding: async (department) => {
    const data = await OnboardingRepository.getDepartmentOnboarding(department);
    return formatOnboardingData(data);
  },
};

module.exports = onboardingService;
