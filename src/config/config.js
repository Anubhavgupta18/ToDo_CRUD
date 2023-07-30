const dotenv = require('dotenv');
dotenv.config();

const config = {
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        host: process.env.DB_HOSTNAME,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        dialect: 'mysql',
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
    }
};

module.exports = config;