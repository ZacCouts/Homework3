const randAssign = require('express').Router();
const StatusCodes = require('http-status-codes');

randAssign.all('/', (req, res) => {
   if(Math.floor(Math.random() * 100) > 50){
       res.status(StatusCodes.OK).send('Hello World');
   } else{
       throw new Error('Oops');
   }
});

module.exports = randAssign
