const express = require('express');
const routesUser = require('./routes/user.routes');
const cors = require('cors')
const logger = require('morgan');
const options = require('./swagger');

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger('dev'));

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const specs = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {customSiteTitle: "Documentación API"}));


app.use(routesUser);

module.exports = app;