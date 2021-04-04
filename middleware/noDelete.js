const statusCode = require('http-status-codes');

module.exports = (req, res, next) => {
  if (req.method === 'DELETE') {
    res.sendStatus(statusCode.METHOD_NOT_ALLOWED);
  } else {
    next();
  }
};
