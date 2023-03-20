const winston = require('winston');
require("winston-dayly-rotate-file");

// const logger = winston.createLogger({
//     level: "debug",
//     format: winston.format.json(),
//     transports:[new winston.transports.Console()]
// })

module.exports = logger;