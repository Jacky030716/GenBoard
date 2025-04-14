const express = require("express");
const router = express.Router();
const codeQuestionController = require("../controllers/code_question_controller")

module.exports = router;

router.get("/", codeQuestionController.getCodeQuestion)