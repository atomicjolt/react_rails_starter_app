const fs = require('fs-extra');
const _ = require('lodash');

const settings = require('../../config/settings');
const build = require('./index');
const buildOptionsGenerator = require('./build_options');

// -----------------------------------------------------------------------------
// Iterate through all applications calling the callback with the buildOptions
// -----------------------------------------------------------------------------
function allAppBuildOptions(options) {
  let port = parseInt(settings.hotPort, 10);
  return _.map(settings.apps, (app, appName) => {
    const buildOptions = buildOptionsGenerator(appName, app, port, options);
    port += 1;
    return buildOptions;
  });
}

// -----------------------------------------------------------------------------
// Build a single app
// -----------------------------------------------------------------------------
function buildAppParts(buildOptions, onlyPack) {
  if (onlyPack) {
    return build.buildWebpackEntries(buildOptions).then(() => {
      console.log(`Finished Javascript for ${buildOptions.appName}`);
    });
  } else {
    return build.build(buildOptions).then((result) => {
      console.log(`Finished Javascript for ${buildOptions.appName}.`);
      console.log(`Built ${result.pages.length} pages.`);
    });
  }
}

// -----------------------------------------------------------------------------
// Build a single app
// -----------------------------------------------------------------------------
function buildApp(appName, options) {
  const app = _.find(settings.apps, (e, name) => appName === name);
  const buildOptions = buildOptionsGenerator(appName, app, settings.hotPort, options);
  return {
    buildOptions,
    buildPromise: buildAppParts(buildOptions, options.onlyPack)
  };
}

// -----------------------------------------------------------------------------
// Build all apps
// -----------------------------------------------------------------------------
function buildApps(options) {
  return _.map(allAppBuildOptions(options), (buildOptions) => {
    fs.emptyDirSync(buildOptions.appOutputPath);
    return {
      buildOptions,
      buildPromise: buildAppParts(buildOptions, options.onlyPack)
    };
  });
}

module.exports = {
  buildApp,
  buildApps
};
