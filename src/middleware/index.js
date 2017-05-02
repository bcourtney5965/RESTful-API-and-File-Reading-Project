const bodyParser = require('body-parser');
const morgan = require('morgan');

module.exports = function mountMiddleware(app) {
  // Mount bodyParser and morgan middlewares here.
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan('combined'));
};