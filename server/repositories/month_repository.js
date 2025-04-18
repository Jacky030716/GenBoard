const {Month1, Month2, Month3} = require('../models/month_model');

const MonthRepository = {
    getMonth1: async () => {
        return await Month1.find({}).sort({ element_id: 1 });
    },
    getMonth2: async () => {
        return await Month2.find({}).sort({ element_id: 1 });
    },
    getMonth3: async () => {
        return await Month3.find({}).sort({ element_id: 1 });
    }
}

module.exports = MonthRepository;