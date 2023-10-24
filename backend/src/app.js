const express = require('express');
const routesUser = require('./routes/user.routes'),
     routerProduct = require('./routes/products.routes')
const cors = require('cors')
const logger = require('morgan');
const options = require('./swagger');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(logger('dev'));

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const specs = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {customSiteTitle: "Documentación API"}));

// Routing
const router = express.Router()
app.use('/api/sushi-store', router);
router.use('/users', routesUser);
router.use('/products', routerProduct);

module.exports = app;