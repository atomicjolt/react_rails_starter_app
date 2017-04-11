const path = require('path');

const settings = require('../../config/settings');

// -----------------------------------------------------------------------------
// Generates webpack options that can be provided to webpackConfigBuilder
// -----------------------------------------------------------------------------
module.exports = function buildOptions(appName, app, port, options) {
  const production = options.stage === 'production' || options.stage === 'staging';

  let rootOutputPath = settings.devOutput;
  let outputPath = options.onlyPack ?
    settings.devOutput : path.join(settings.devOutput, appName);
  // Public path indicates where the assets will be served from. In dev this will likely be
  // localhost or a local domain. In production this could be a CDN. In developerment this will
  // point to whatever public url is serving dev assets.
  let publicPath = `${settings.devAssetsUrl}:${port}${settings.devRelativeOutput}`;

  if (production) {
    rootOutputPath = settings.prodOutput;
    outputPath = options.onlyPack ?
      settings.prodOutput : path.join(settings.prodOutput, appName);
    publicPath = settings.prodAssetsUrl + settings.prodRelativeOutput;
  }

  return {
    stage: options.stage,
    appName,
    app,
    buildSuffix: settings.buildSuffix,
    port,
    production,
    outputPath,
    rootOutputPath,
    publicPath,
    templateMap: app.templateMap,
    templateData: app.templateData,
    templateDirs: app.templateDirs,
    htmlOptions: settings.htmlOptions
  };
};
