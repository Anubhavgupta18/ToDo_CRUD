const task = require('../models/task');

class taskService {
    static async taskList(query = {}) {
        const extra = { page: parseInt(query.page) || 1, limit: parseInt(query.limit) || 20, isAll: query.isAll };
        let response = { data: [], extra: { ...extra }, success: false };

        try {
            const totalDataCount = await task.count();
            let offset = (extra.page - 1) * extra.limit;
            let limit = extra.limit;
            if (extra.isAll) {
                offset = 0;
                limit = totalDataCount;
            }

            const docData = await task.findAll({
                offset, limit,
                attributes: ['id', 'name', 'completed'],
            });
            response.data = docData;
            response.success = true;
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async createTask(data) {
        const response = { data: {}, success: false }
        try {
            console.log(data);
            const docData = await task.create(data);

            response.data = docData;
            response.success = true;
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async deleteTask(taskId) {
        const response = { success: false };
        try {
            await task.destroy({
                where: {
                    id: taskId
                }
            });
            response.success = true;
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async updateTask(completed, taskId) {
        const response = { data: {}, success: false }
        try {
            const docData = await task.findByPk(taskId);

            docData.completed = completed;

            await docData.save();

            response.data = docData;
            response.success = true;
            return response;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = taskService;