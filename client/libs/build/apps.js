const fs = require('fs-extra');
const _ = require('lodash');
const path = require('path');

const settings = require('../../config/settings');
const build = require('./index');

// Start at one less than the desired port so we can increment and then return
let port = parseInt(settings.hotPort, 10) - 1;

// -----------------------------------------------------------------------------
// Root of the build directory where apps will be written
// -----------------------------------------------------------------------------
function rootBuildPath(stage) {
  return stage === 'production' ? settings.prodOutput : settings.devOutput;
}

// -----------------------------------------------------------------------------
// Generates webpack options that can be provided to webpackConfigBuilder
// -----------------------------------------------------------------------------
function buildWebpackOptions(appName, appPath, options) {
  port += 1;
  return {
    stage: options.stage,
    appName,
    appPath,
    buildSuffix: settings.buildSuffix,
    prodOutput: options.onlyPack ? settings.prodOutput : path.join(settings.prodOutput, appName),
    prodAssetsUrl: settings.prodAssetsUrl,
    prodRelativeOutput: settings.prodRelativeOutput,
    devOutput: options.onlyPack ? settings.devOutput : path.join(settings.devOutput, appName),
    devAssetsUrl: settings.devAssetsUrl,
    devRelativeOutput: settings.devRelativeOutput,
    port,
    servePath: path.join(settings.devOutput, appName)
  };
}

// -----------------------------------------------------------------------------
// Iterate through all applications calling the callback with the webpackOptions
// -----------------------------------------------------------------------------
function iterateApps(options, cb) {
  return _.map(settings.apps, (appPath, appName) => {
    const webpackOptions = buildWebpackOptions(appName, appPath, options);
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
    const outputPath = rootBuildPath(webpackOptions.stage);
    build.build(outputPath, webpackOptions, settings.htmlOptions).then((result) => {
      console.log(`Finished Javascript for ${webpackOptions.appName}.`);
      console.log(`Built ${result.pages.length} pages.`);
    });
  }
}

// -----------------------------------------------------------------------------
// Build a single app
// -----------------------------------------------------------------------------
function buildApp(appName, options, launchCallback) {
  const appPath = _.find(settings.apps, (p, name) => appName === name);
  const webpackOptions = buildWebpackOptions(appName, appPath, options);
  buildAppParts(webpackOptions, options.onlyPack);
  launchHotWrapper(launchCallback, webpackOptions);
}

// -----------------------------------------------------------------------------
// Build all apps
// -----------------------------------------------------------------------------
function buildApps(options, launchCallback) {
  // Delete everything in the output path
  fs.emptyDirSync(rootBuildPath(options.stage));
  return iterateApps(options, (webpackOptions) => {
    buildAppParts(webpackOptions, options.onlyPack);
    launchHotWrapper(launchCallback, webpackOptions);
  });
}

module.exports = {
  buildApp,
  buildApps,
  buildWebpackOptions
};
