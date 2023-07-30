const config = require("./config");
const Sequelize = require('sequelize');


const sequelize = new Sequelize(config.database.name, config.database.user, '', {
    host: config.database.host,
    dialect: config.database.dialect,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logger: false
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize; 
