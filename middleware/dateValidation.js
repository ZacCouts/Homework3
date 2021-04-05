const StatusCodes = require('http-status-codes');

module.exports = (req, res, next) => {
    const headerDate = req.header['date-validation'];
    const queryDate = req.query['date-validation'];
    const timeConvert = Math.round(Date.now() / 1000);

    if(headerDate && queryDate === false){
        res.status(StatusCodes.UNAUTHORIZED).send('Both headerDate and queryDate are invalid')
    } else if(headerDate === false || queryDate === false){
        res.status(StatusCodes.UNAUTHORIZED).send('Either headerDate or queryDate are invalid')
    } else{
        Object.keys(headerDate).forEach((key) => {
            headerDate[key] = Number.parseInt(headerDate, 10);
        });
        Object.keys(queryDate).forEach((key) => {
            queryDate[key] = Number.parseInt(queryDate, 10);
        });

        const EpochHeader = headerDate;
        const EpochQuery = queryDate;

        if(EpochHeader > (timeConvert- 300) && EpochHeader < (timeConvert + 300)) {
            req.dateValidation = EpochHeader;
            req.timeConvert = timeConvert;
        }
        if(EpochQuery > (timeConvert- 300) && EpochQuery < (timeConvert + 300)) {
            req.dateValidation = EpochQuery;
            req.timeConvert = timeConvert;
        }
    }
   next();
};
