const express = require('express');
const sequelize = require('./config/sequelize');
const config = require('./config/config');
const taskRoute = require('./routes/task');
const PORT = config.port;

(async () => {
    const app = express();
    
    app.use(express.json());
    app.use(taskRoute);

    app.listen(PORT, async () => {
        await sequelize.authenticate();
        console.log(`Server Started at PORT: ${PORT}, DB loaded and connected!`);
    });
})();