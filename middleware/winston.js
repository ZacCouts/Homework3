const winston = require('winston');
const dateValid = require('dateValidation');

const logger = winston.createLogger({
    level:'info',
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        })
    ]
});

module.exports = (req, res, next) =>{
  logger.info('Current server time (epoch): ', {Date:now() / 1000});
  logger.info('HTTP verb: ', req.method);
  logger.info('URL: ', req.url);
  logger.info('Body: ', req.body);
  logger.info('Query Parameters: ', req.query);
  logger.info('Headers: ', req.headers);
  logger.info('Date Validation: ', req.dateValid);
  next();

};
