const codeQuestionRepository = require("../repositories/code_question_repository");

const codeQuestionService = {
  getCodeQuestion: async () => {
    return await codeQuestionRepository.findAll();
  },
};

module.exports = codeQuestionService;
