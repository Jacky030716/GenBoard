const quizRepository = require("../repositories/quiz_repository");

const quizService = {
    getQuiz: async () => {
        return await quizRepository.findAll();
    },
    getQuizQuestion: async (quiz_id) => {
        return await quizRepository.findQuizQuestion(quiz_id);
    },
    
};

module.exports = quizService;