const Express = require('express');

const BodyParser = require('body-parser');

const NoDelete = require('../middleware/noDelete');

const Winston = require('../middleware/winston');

const Router = require('../src/randomAssign');

const app = Express();

app.use(BodyParser.json());
app.use(NoDelete);
app.use(Router);
app.use(Winston);

app.listen(8080);
