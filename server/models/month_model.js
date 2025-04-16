const mongoose = require("mongoose");

// Define a sub-schema for nested modules (subsections)
const moduleSubSchema = new mongoose.Schema({
  element_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  type_module: {
    type: String,
    required: true,
  }
}, { _id: false });

const moduleSchema = new mongoose.Schema({
  element_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  type_module: {
    type: String,
    required: true,
  },
  subsection: {
    type: [moduleSubSchema],
    default: []
  }
});

const Month1 = mongoose.model("month1", moduleSchema);
const Month2 = mongoose.model("month2", moduleSchema);
const Month3 = mongoose.model("month3", moduleSchema);

module.exports = { Month1, Month2, Month3 };
