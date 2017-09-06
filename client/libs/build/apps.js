const fs = require('fs-extra');
const _ = require('lodash');
const webpack = require('webpack');
const settings = require('../../config/settings');
const webpackConfigBuilder = require('../../config/webpack.config');

// clean up old build
function clean(apps, options) {
  // Clean dirs
  if (!options.noClean) {
    _.each(apps, (app) => {
      fs.emptyDirSync(app.outputPath);
    });
  }
}

// -----------------------------------------------------------------------------
// Build a single app
// -----------------------------------------------------------------------------
function buildApp(appName, options) {
  const apps = settings.apps(options);
  const app = _.find(apps, (e, name) => appName === name);
  const webpackCompiler = webpack(webpackConfigBuilder(app, options));

  clean([app], options);

  return {
    app,
    webpackCompiler,
  };
}

function buildAppsForMultipleServers(options) {
  const apps = settings.apps(options);
  clean(apps, options);
  return _.map(apps, app => ({
    app,
    webpackCompiler: webpack(webpackConfigBuilder(app, options)),
  }));
}

// -----------------------------------------------------------------------------
// Build all apps
// -----------------------------------------------------------------------------
function buildAppsForOneServer(options) {
  const apps = settings.apps(options);
  clean(apps, options);
  const webpackConfigs = _.map(apps, app => webpackConfigBuilder(app, options));
  const webpackCompiler = webpack(webpackConfigs);

  return {
    apps,
    webpackCompiler,
  };
}

module.exports = {
  buildApp,
  buildAppsForMultipleServers,
  buildAppsForOneServer
};
