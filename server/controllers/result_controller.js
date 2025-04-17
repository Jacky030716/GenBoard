const resultService = require('../services/result_service');

const resultController = {
    getResultById: async (req, res) => {
        try {
            const uid = req.params.uid;
            const response = await resultService.getResultById(uid);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    createResult: async (req, res) => {
        try {
            const { uid, result } = req.body;
            const response = await resultService.createResult(uid, result);
            res.status(201).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    updateResult: async (req, res) => {
        try {
            const { uid, result } = req.body;
            const response = await resultService.updateResult(uid, result);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}
module.exports = resultController;