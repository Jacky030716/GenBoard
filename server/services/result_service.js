const resultRepository = require('../repositories/result_repository');

const resultService = {
    getResultById: async (uid) => {
        return await resultRepository.findById(uid);
    },
    createResult: async (uid, result) => {
        return await resultRepository.createResult(uid, result);
    },
    updateResult: async (uid, result) => {
        return await resultRepository.updateResult(uid, result);
    }
};

module.exports = resultService;