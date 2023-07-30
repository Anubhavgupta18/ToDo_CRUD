const taskService = require('../services/task');
const Message = require('../utilities/message');

class controller {
    static async getAll(req, res) {
        const response = { data: [], message: Message.badRequest.message, code: Message.badRequest.code, success: false };
        try {
            const srvRes = await taskService.taskList();

            if (srvRes.success) {
                response.data = srvRes.data;
                response.message = Message.dataFound.message;
                response.code = Message.dataFound.code;
                response.success = srvRes.success;
            }
            return res.status(response.code).json(response);
        } catch (err) {
            const dataFetchingError = Message.dataFetchingError;
            return res.status(response.code).json({
                ...dataFetchingError,
                err: err
            });
        }
    }
    static async create(req, res) {
        const response = { data: {}, message: Message.badRequest.message, code: Message.badRequest.code, success: false };
        try {
            console.log('con ',req.body)
            const srvRes = await taskService.createTask(req.body);

            if (srvRes.success) {
                response.data = srvRes.data;
                response.message = Message.dataCreated.message;
                response.code = Message.dataCreated.code;
                response.success = srvRes.success;
            }

            return res.status(response.code).json(response);
        } catch (err) {
            const dataSavingError = Message.dataSavingError;
            return res.status(response.code).json({
                ...dataSavingError,
                err: err
            });
        }
    }
    static async delete(req, res) {
        const response = { message: Message.badRequest.message, code: Message.badRequest.code, success: false };
        try {
            const srvRes = await taskService.deleteTask(req.params.id);

            if (srvRes.success) {
                response.message = Message.dataDeleted.message;
                response.code = Message.dataDeleted.code;
                response.success = srvRes.success;
            }

            return res.status(response.code).json(response);
        } catch (err) {
            const dataDeletionError = Message.dataDeletionError;
            return res.status(response.code).json({
                ...dataDeletionError,
                err: err
            });
        }
    }
    static async update(req, res) {
        const response = { data: {}, message: Message.badRequest.message, code: Message.badRequest.code, success: false };
        try {
            const srvRes = await taskService.updateTask(req.body.completed, req.params.id);

            if (srvRes.success) {
                response.data = srvRes.data;
                response.message = Message.dataSaved.message;
                response.code = Message.dataSaved.code;
                response.success = srvRes.success;
            }

            return res.status(response.code).json(response);
        } catch (err) {
            const dataSavingError = Message.dataSavingError;
            return res.status(response.code).json({
                ...dataSavingError,
                err: err
            });
        }
    }
}


module.exports = controller;