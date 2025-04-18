const resultService = require("../services/result_service");

const resultController = {
  getResultById: async (req, res) => {
    try {
      const uid = req.params.uid;
      const response = await resultService.getResultById(uid);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  createResult: async (req, res) => {
    try {
      const { uid, result } = req.body;

      if (!uid || !result) {
        return res.status(400).json({ message: "UID and result are required" });
      }

      const existingResult = await resultService.getResultById(uid);

      if (existingResult) {
        // update the existing result
        const updatedResult = await resultService.updateResult(uid, result);
        return res.status(200).json(updatedResult);
      }else{
        // create a new result
        const newResult = await resultService.createResult(uid, result);
        return res.status(201).json(newResult);
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  updateResult: async (req, res) => {
    try {
      const { uid, result } = req.body;
      const response = await resultService.updateResult(uid, result);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
module.exports = resultController;
