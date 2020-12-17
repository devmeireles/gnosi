const category = require('./category');
const catalogue = require('./catalogue');

module.exports = function (app) {
  app.use(category);
  app.use(catalogue);
};
