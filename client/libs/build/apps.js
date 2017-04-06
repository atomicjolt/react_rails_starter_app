const fs = require('fs-extra');
const _ = require('lodash');

const settings = require('../../config/settings');
const build = require('./index');
const buildOptions = require('./build_options');

// -----------------------------------------------------------------------------
// Iterate through all applications calling the callback with the webpackOptions
// -----------------------------------------------------------------------------
function iterateApps(options, cb) {
  let port = parseInt(settings.hotPort, 10);
  return _.map(settings.apps, (app, appName) => {
    const webpackOptions = buildOptions(appName, app, port, options);
    port += 1;
    cb(webpackOptions);
    return webpackOptions;
  });
}

// -----------------------------------------------------------------------------
// Wrapper to provide values for launching a webpack server
// -----------------------------------------------------------------------------
function launchHotWrapper(launchCallback, webpackOptions) {
  if (launchCallback) {
    launchCallback(webpackOptions);
  }
}

// -----------------------------------------------------------------------------
// Build a single app
// -----------------------------------------------------------------------------
function buildAppParts(webpackOptions, onlyPack) {
  if (onlyPack) {
    build.buildWebpackEntries(webpackOptions).then(() => {
      console.log(`Finished Javascript for ${webpackOptions.appName}`);
    });
  } else {
    build.build(webpackOptions).then((result) => {
      console.log(`Finished Javascript for ${webpackOptions.appName}.`);
      console.log(`Built ${result.pages.length} pages.`);
    });
  }
}

// -----------------------------------------------------------------------------
// Build a single app
// -----------------------------------------------------------------------------
function buildApp(appName, options, launchCallback) {
  const app = _.find(settings.apps, (e, name) => appName === name);
  const webpackOptions = buildOptions(appName, app, settings.hotPort, options);
  buildAppParts(webpackOptions, options.onlyPack);
  launchHotWrapper(launchCallback, webpackOptions);
}

// -----------------------------------------------------------------------------
// Build all apps
// -----------------------------------------------------------------------------
function buildApps(options, launchCallback) {
  return iterateApps(options, (webpackOptions) => {
    fs.emptyDirSync(webpackOptions.appOutputPath);
    buildAppParts(webpackOptions, options.onlyPack);
    launchHotWrapper(launchCallback, webpackOptions);
  });
}

module.exports = {
  buildApp,
  buildApps
};
