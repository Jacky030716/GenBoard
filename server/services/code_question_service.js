const CodeQuestion = require("../models/code_question_model");

const codeQuestionService = {
    getCodeQuestion: async () => {
        return await CodeQuestion.find({});
    }
};

module.exports = codeQuestionService;