const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quiz_controller")

module.exports = router;

router.get("/", quizController.getQuiz);
router.get("/:quiz_id", quizController.getQuizQuestion);