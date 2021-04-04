const express = require('express');

const BodyParser = require('body-parser');

const app = express();

app.use(BodyParser.json());

app.listen(8080);
