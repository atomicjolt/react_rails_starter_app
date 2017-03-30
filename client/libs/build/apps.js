const fs = require('fs-extra');
const _ = require('lodash');
const path = require('path');

const settings = require('../../config/settings');
const build = require('./index');
const file = require('./file');

let launchPort = parseInt(settings.hotPort, 10);

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
  return {
    stage: options.stage,
    appName,
    appPath,
    buildSuffix: settings.buildSuffix,
    prodOutput: options.onlyPack ? settings.prodOutput : path.join(settings.prodOutput, appName),
    prodAssetsUrl: settings.prodAssetsUrl,
    devOutput: options.onlyPack ? settings.devOutput : path.join(settings.devOutput, appName),
    devAssetsUrl: settings.devAssetsUrl,
    devRelativeOutput: settings.devRelativeOutput
  };
}

// -----------------------------------------------------------------------------
// Iterate through all applications calling the callback with the webpackOptions
// -----------------------------------------------------------------------------
function iterateApps(options, cb) {
  _.each(settings.apps, (appPath, appName) => {
    cb(buildWebpackOptions(appName, appPath, options));
  });
}

// -----------------------------------------------------------------------------
// build a home page that links to each application
// -----------------------------------------------------------------------------
function buildHome(outputPath) {
  console.log('Building default home page with links to all apps');
  const links = _.map(settings.apps, (appPath, appName) =>
    `<a href="/${appName}">${appName}</a>`
  );
  const home = `<html><head></head><body>${links.join('')}</body></html>`;
  file.write(path.join(outputPath, 'index.html'), home);
}

// -----------------------------------------------------------------------------
// Wrapper to provide values for launching a webpack server
// -----------------------------------------------------------------------------
function launchHotWrapper(launchCallback, webpackOptions) {
  const servePath = path.join(settings.devOutput, webpackOptions.appName);
  launchCallback(webpackOptions, launchPort, servePath);
  launchPort += 1;
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
function buildApp(appName, stage, onlyPack, launchCallback) {
  const appPath = _.find(settings.apps, (p, name) => appName === name);
  const webpackOptions = buildWebpackOptions(appName, appPath, { stage, onlyPack });
  buildAppParts(webpackOptions, onlyPack);
  if (launchCallback) {
    launchHotWrapper(launchCallback, webpackOptions);
  }
}

// -----------------------------------------------------------------------------
// Build all apps
// -----------------------------------------------------------------------------
function buildApps(stage, onlyPack, launchCallback) {
  // Delete everything in the output path
  fs.emptydir(rootBuildPath(stage), () => {

    iterateApps({ stage, onlyPack }, (webpackOptions) => {
      buildAppParts(webpackOptions, onlyPack, launchCallback);
      if (launchCallback) {
        launchHotWrapper(launchCallback, webpackOptions);
      }
    });

    if (!onlyPack) {
      buildHome(rootBuildPath(stage));
    }
  });
}

module.exports = {
  buildApp,
  buildApps,
  buildWebpackOptions
};
