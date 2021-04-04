const Express = require('express');

const BodyParser = require('body-parser');

const NoDelete = require('../middleware/noDelete');

const app = Express();

app.use(BodyParser.json());
app.use(NoDelete);

app.listen(8080);
