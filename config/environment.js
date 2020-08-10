var dotenv = require('dotenv')
'use strict';

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'todo-app',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      projectId: 'ember-todo-app-6bee4',
      apiKey: process.env.APIKEY,
      authDomain: process.env.AUTHDOMAIN,
      databaseURL: process.env.DATABASEURL,
      storageBucket: process.env.STORAGEBUCKET,
    },
    
  };

  return ENV;
};
