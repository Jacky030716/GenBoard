const Guide = require("../models/guide_model");
const GuideStep = require("../models/guide_step_model");

const guideRepository = {
    findAll: async () => {
        return await Guide.find({});
    },
    findGuideStep: async (guide_id) => {
        return await GuideStep.find({}).where({ guide_id: guide_id });
    }
};

module.exports = guideRepository;