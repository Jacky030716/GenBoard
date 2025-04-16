const monthService = require('../services/month_service');

const monthController = {
    getMonth1: async (req, res) => {
        try {
            const data = await monthService.getMonth1();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getMonth2: async (req, res) => {
        try {
            const data = await monthService.getMonth2();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getMonth3: async (req, res) => {
        try {
            const data = await monthService.getMonth3();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};
module.exports = monthController;