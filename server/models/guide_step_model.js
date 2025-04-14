const mongoose = require("mongoose");

const guideStepSchema = new mongoose.Schema({
    step_id: {
        type: String,
        required: true
    },
    guide_id: {
        type: String,
        required: true
    },
    step_order: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("GuideStep", guideStepSchema);