const Express = require('express');

const BodyParser = require('body-parser');

const NoDelete = require('../middleware/noDelete');

const Router = require('../src/randomAssign');

const Winston = require('../middleware/winston');

const errorHandler = require('../middleware/handler');

const dateValidate = require('../middleware/dateValidation');

const app = Express();

app.use(BodyParser.json());
app.use(NoDelete);
app.use(dateValidate);
app.use(Router);
app.use(Winston);
app.use(errorHandler);

app.listen(8080);
