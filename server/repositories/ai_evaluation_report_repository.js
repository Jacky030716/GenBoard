const AIEvaluationReport = require("../models/ai_evaluation_report_model");

const aiEvaluationReportRepository = {
    createReport: async (uid, strength, weakness) => {
        const report = new AIEvaluationReport({
            uid: uid,
            strength: strength,
            weakness: weakness
        });
        return await report.save();
    },
    findAll: async () => {
        return await AIEvaluationReport.find({})
    },
    findById: async (uid) => {
        return await AIEvaluationReport.find({}).where({ uid: uid });
    }
};

module.exports = aiEvaluationReportRepository;
