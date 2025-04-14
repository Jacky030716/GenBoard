const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
    quiz_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    total_questions: {
        type: Number,
        required: true
    },
    passing_score: {
        type: Number,
        required: true
    }
});



module.exports = mongoose.model("Quiz", quizSchema);