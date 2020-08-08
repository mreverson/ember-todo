'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'todo-app',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyDeHl_kKM-waL-JG2SYG4_NRzPIZwv6ISA",
      authDomain: "ember-todo-app-6bee4.firebaseapp.com",
      databaseURL: "https://ember-todo-app-6bee4.firebaseio.com",
      projectId: "ember-todo-app-6bee4",
      storageBucket: "ember-todo-app-6bee4.appspot.com",
      messagingSenderId: "204055781982",
      appId: "1:204055781982:web:a53e123e28ea99367e4acf",
      measurementId: "G-LVGV2PG5ER"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
