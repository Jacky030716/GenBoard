const express = require("express");
const router = express.Router();

const aiSummarizeReportController = require("../controllers/ai_summarize_report_controller");

module.exports = router;

router.post("/", aiSummarizeReportController.createReport);
router.get("/", aiSummarizeReportController.getAllReports);
router.get("/:meeting_id", aiSummarizeReportController.getReportById);