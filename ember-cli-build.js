'use strict';
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('node_modules/moment/min/moment.min.js');

  return app.toTree();
};
