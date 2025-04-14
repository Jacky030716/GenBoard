const Quiz = require("../models/quiz_model");
const QuizQuestion = require("../models/quiz_question_model");

const quizService = {
    getQuiz: async () => {
        return await Quiz.find({});
    },
    getQuizQuestion: async (quiz_id) => {
        return await QuizQuestion.find({}).where({ quiz_id: quiz_id });
    },
    
};

module.exports = quizService;