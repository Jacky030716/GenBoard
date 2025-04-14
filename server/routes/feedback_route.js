const express = require("express");
const router = express.Router();

const feedbackController = require("../controllers/feedback_controller")

module.exports = router;

router.post("/", feedbackController.createFeedback);
router.get("/", feedbackController.getAllFeedback);