const StatusCodes = require('http-status-code');

module.exports = (req, res, next) => {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Were sorry, the error was: ' ${error.message});
};
