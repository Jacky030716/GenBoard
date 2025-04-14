const codeQuestionService = require("../services/code_question_service");

const codeQuestionController = {
  getCodeQuestion: async (req, res) => {
    try {
      const response = await codeQuestionService.getCodeQuestion();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = codeQuestionController;
