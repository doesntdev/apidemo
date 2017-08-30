const quoteRoutes = require('./routes');
module.exports = function(app, db) {
  quoteRoutes(app, db);
};
