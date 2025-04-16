const { get } = require('mongoose');
const {Month1, Month2, Month3} = require('../models/month_model');

const MonthRepository = {
    getMonth1: async () => {
        return await Month1.find({});
    },
    getMonth2: async () => {
        return await Month2.find({});
    },
    getMonth3: async () => {
        return await Month3.find({});
    }
}

module.exports = MonthRepository;