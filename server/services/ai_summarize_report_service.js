const aiSummarizeReportRepository = require("../repositories/ai_summarize_report_repository");

const aiSummarizeReportService = {
  createReport: async (meeting_id, participant, summary) => {
    return await aiSummarizeReportRepository.createReport(
      meeting_id,
      participant,
      summary
    );
  },
  getAllReports: async () => {
    return await aiSummarizeReportRepository.findAll();
  },
  getReportById: async (meeting_id) => {
    return await aiSummarizeReportRepository.findById(meeting_id);
  },
};

module.exports = aiSummarizeReportService;
