const express = require('express');
const routesUsers = require('./routes/users.routes');
const cors = require('cors');
const logger = require('morgan');
const dotenv = require('dotenv');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express')

const options = require('./swagger')

dotenv.config();

const app = express();


app.use(express.json());
app.use(cors());
app.use(logger('dev'));

const specs = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {customSiteTitle: "Documentación API"}))


app.use(routesUsers);

module.exports = app;