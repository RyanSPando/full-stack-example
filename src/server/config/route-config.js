(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/contacts', routes);
  };

})(module.exports);
