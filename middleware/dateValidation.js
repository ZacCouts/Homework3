const StatusCodes = require('http-status-codes');

module.exports = (req, res, next) => {
    const headerDate = req.header['date-validation'];
    const queryDate = req.query['date-validation'];
    const epochTime = Math.round(Date.now() / 1000);

    if(headerDate && queryDate === false){
        res.status(StatusCodes.UNAUTHORIZED).send('Both headerDate and queryDate are invalid')
    } else if(headerDate === false || queryDate === false){
        res.status(StatusCodes.UNAUTHORIZED).send('Either headerDate or queryDate are invalid')
    }

   next();
};
