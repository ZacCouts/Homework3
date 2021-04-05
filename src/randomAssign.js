const Router = require('express').Router();
const StatusCodes = require('http-status-codes');

Router.all('/', (req, res) => {
   if(Math.floor(Math.random() * 100) + 1 > 50){
       response.status(StatusCodes.OK).send('Hello World');
   } else{
       throw new Error('OOps');
   }
});

module.exports = Router
