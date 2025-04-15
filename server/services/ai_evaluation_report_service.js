const aiEvaluationReportRepository = require("../repositories/ai_evaluation_report_repository");

const aiEvaluationReportService = {
    createReport: async(uid, strength, weakness) => {
        return await aiEvaluationReportRepository.createReport(uid, strength, weakness);
    },
    getAllReports: async() => {
        return await aiEvaluationReportRepository.findAll();
    },
    getReportById: async(uid) => {
        return await aiEvaluationReportRepository.findById(uid);
    }
};

module.exports = aiEvaluationReportService