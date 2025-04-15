const aiSummarizeReportService = require('../services/ai_summarize_report_service');

const aiSummarizeReportController = {
    createReport: async (req, res) => {
        try {
            const { meeting_id, participant, summarize } = req.body;
            const response = await aiSummarizeReportService.createReport(meeting_id, participant, summarize);
            res.status(201).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    getAllReports: async (req, res) => {
        try {
            const response = await aiSummarizeReportService.getAllReports();
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    getReportById: async (req, res) => {
        try {
            const meeting_id = req.params.meeting_id;
            const response = await aiSummarizeReportService.getReportById(meeting_id);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = aiSummarizeReportController;