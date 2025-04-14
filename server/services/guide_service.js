const guideRepository = require("../repositories/guide_repository");

const guideService = {
    getGuide: async () => {
        return await guideRepository.findAll();
    },
    getGuideStep: async (guide_id) => {
        return await guideRepository.findGuideStep(guide_id);
    },
};

module.exports = guideService;