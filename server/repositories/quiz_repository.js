const Quiz = require("../models/quiz_model");
const QuizQuestion = require("../models/quiz_question_model");

const quizRepository = {
    findAll: async () => {
        return await Quiz.find({});
    },
    findQuizQuestion: async (quiz_id) => {
        return await QuizQuestion.find({}).where({ quiz_id: quiz_id });
    },
};

module.exports = quizRepository;
