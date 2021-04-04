const winston = require('winston');

const logger = winston.createLogger({
    level:'info',
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console({
            format: winston.format.json(),
        })
    ]
});

module.exports = (req, res, next) =>{
  logger.info('Current server time (epoch): ${Date.now() / 1000}');

};
