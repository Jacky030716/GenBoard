const express = require("express");
const router = express.Router();

const aiEvaluationReportController = require("../controllers/ai_evaluation_report_controller")

module.exports = router;

router.post("/", aiEvaluationReportController.createReport);
router.get("/", aiEvaluationReportController.getAllReports);
router.get("/:uid", aiEvaluationReportController.getReportById);