const MonthRepository = require('../repositories/month_repository');

const monthService = {
    getMonth1: async () => {
        const data = await MonthRepository.getMonth1();
        return data;
    },
    getMonth2: async () => {
        const data = await MonthRepository.getMonth2();
        return data;
    },
    getMonth3: async () => {
        const data = await MonthRepository.getMonth3();
        return data;
    }
}
module.exports = monthService;