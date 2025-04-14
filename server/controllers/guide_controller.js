const guideService = require("../services/guide_service");

const guideController = {
    getGuide: async (req, res) => {
        try {
            const response = await guideService.getGuide();
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    getGuideStep: async (req, res) => {
        try {
            const guide_id = req.params.guide_id;
            const response = await guideService.getGuideStep(guide_id);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = guideController