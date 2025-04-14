const mongoose = require("mongoose");

const quizQuestionSchema = new mongoose.Schema({
    question_id: {
        type: String,
        required: true
    },
    quiz_id: {
        type: String,
        required: true
    },
    question_order: {
        type: Number,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true
    },
    correct_ans: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("QuizQuestion", quizQuestionSchema);