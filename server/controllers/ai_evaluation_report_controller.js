const aiEvaluationReportService = require("../services/ai_evaluation_report_service");

const aiEvaluationReportController = {
    createReport: async (req, res) => {
        try {
            const { uid, strength, weakness } = req.body;
            const existingReport = await aiEvaluationReportService.getReportById(uid);
            if (existingReport) {
                return res.status(400).json({ message: "Report already exists" });
            }else{
                const response = await aiEvaluationReportService.createReport(uid, strength, weakness);
                res.status(201).json(response);
            }
            
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    getAllReports: async (req, res) => {
        try {
            const response = await aiEvaluationReportService.getAllReports();
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    getReportById: async (req, res) => {
        try {
            const uid = req.params.uid;
            const response = await aiEvaluationReportService.getReportById(uid);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = aiEvaluationReportController;