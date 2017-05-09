const fs = require('fs-extra');
const _ = require('lodash');

const settings = require('../../config/settings');
const build = require('./build');
const log = require('./log');

// -----------------------------------------------------------------------------
// Build a single app
// -----------------------------------------------------------------------------
function buildAppParts(app, onlyPack) {
  if (onlyPack) {
    const buildPromise = build.buildWebpackEntries(app);
    buildPromise.then(() => {
      log.out(`Finished Javascript for ${app.name}`);
    });
    return buildPromise;
  }
  const buildPromise = build.build(app);
  buildPromise.then((result) => {
    log.out(`Finished Javascript for ${app.name}.`);
    log.out(`Built ${result.pages.length} pages.`);
  });
  return buildPromise;
}

// -----------------------------------------------------------------------------
// Build a single app
// -----------------------------------------------------------------------------
function buildApp(appName, options) {
  const app = _.find(settings.apps(options).apps, (e, name) => appName === name);
  if (!options.noClean) {
    fs.emptyDirSync(app.outputPath);
  }
  return {
    app,
    buildPromise: buildAppParts(app, options.onlyPack)
  };
}

// -----------------------------------------------------------------------------
// Build all apps
// -----------------------------------------------------------------------------
function buildApps(options) {
  return _.map(settings.apps(options), (app) => {
    if (!options.noClean) {
      fs.emptyDirSync(app.outputPath);
    }
    return {
      app,
      buildPromise: buildAppParts(app, options.onlyPack)
    };
  });
}

module.exports = {
  buildApp,
  buildApps
};
