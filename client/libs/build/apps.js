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
// Build apps in order one at a time
// -----------------------------------------------------------------------------
function buildAppWait(app, options) {
  return new Promise(resolve => {
    const buildPromise = buildAppParts(app, options.onlyPack);
    buildPromise.then(() => {
      resolve({
        app,
        buildPromise
      });
    });
  });
}

// -----------------------------------------------------------------------------
// Build all apps
// -----------------------------------------------------------------------------
async function buildApps(options) {
  const apps = settings.apps(options);

  // Clean dirs
  if (!options.noClean) {
    _.each(apps, (app) => {
      fs.emptyDirSync(app.outputPath);
    });
  }

  if (options.order) {
    const results = [];
    for (let i = 0; i < options.order.length; i += 1) {
      const appName = options.order[i];
      results.push(await buildAppWait(apps[appName], options));
    }
    return results;
  }

  return _.map(apps, app => ({
    app,
    buildPromise: buildAppParts(app, options.onlyPack)
  }));
}

module.exports = {
  buildApp,
  buildApps
};
