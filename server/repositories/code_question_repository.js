const CodeQuestion = require("../models/code_question_model");

const codeQuestionRepository = {
  findAll: async () => {
    return await CodeQuestion.find({});
  },
};

module.exports = codeQuestionRepository;
