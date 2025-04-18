const AISummarizeReport = require("../models/ai_summarize_report_model");

const aiSummarizeReportRepository = {
  createReport: async (meeting_id, participant, summary) => {
    const report = new AISummarizeReport({
      meeting_id: meeting_id,
      participant: participant,
      summary: summary,
    });
    return await report.save();
  },
  findAll: async () => {
    return await AISummarizeReport.find({});
  },
  findById: async (meeting_id) => {
    return await AISummarizeReport.find({}).where({ meeting_id: meeting_id });
  },
};

module.exports = aiSummarizeReportRepository;
