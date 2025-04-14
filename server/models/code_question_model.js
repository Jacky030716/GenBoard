const mongoose = require("mongoose");

const codeQuestionSchema = new mongoose.Schema({
    code_question_id:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    expected_ans:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("CodeQuestion", codeQuestionSchema);
