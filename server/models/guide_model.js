const mongoose = require("mongoose");

const guideSchema = new mongoose.Schema({
    guide_id: {
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
    estimated_time: {
        type: String,
        required: true
    },
    prerequisites: {
        type: [String],
        required: true
    }

});

module.exports = mongoose.model("Guide", guideSchema);