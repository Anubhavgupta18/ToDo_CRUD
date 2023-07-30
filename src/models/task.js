const { DataTypes } = require('sequelize');

const sequelize = require('../config/sequelize');

const taskModel = sequelize.define('task', {
    name: {
        type: DataTypes.STRING,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: true,
    tableName: 'tasks'
});


(async function () {
    const syncOptions = { timestamps: true, paranoid: true, sequelize: sequelize, alter: false };

    if (process.env.NODE_ENV == 'local') {
        syncOptions.alter = true;
    }

    await taskModel.sync(syncOptions);
})();


module.exports = taskModel;
