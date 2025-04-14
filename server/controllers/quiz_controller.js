const quizService = require("../services/quiz_service");

const quizController = {
    getQuiz: async (req, res) => {
        try {
            const response = await quizService.getQuiz();
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    getQuizQuestion: async (req, res) => {
        try {
            const quiz_id = req.params.quiz_id;
            const response = await quizService.getQuizQuestion(quiz_id);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = quizController;