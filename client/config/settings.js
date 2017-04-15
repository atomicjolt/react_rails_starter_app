const fs = require('fs-extra');
const path = require('path');
const _ = require('lodash');

// There is a warning if the .env file is missing
// This is fine in a production setting, where settings
// are loaded from the env and not from a file
require('dotenv').load({ path: path.join(__dirname, '../../.env') });

const deployConfig = require('../../.s3-website.json');


const hotPort = parseInt(process.env.ASSETS_PORT, 10) || 8080;

const devRelativeOutput  = '/';
const prodRelativeOutput = '/';

const devOutput  = path.join(__dirname, '../../build/dev', devRelativeOutput);
const prodOutput = path.join(__dirname, '../../build/prod', prodRelativeOutput);

// const prodAssetsUrl = ''; // Set this to the url where the assets will be deployed.
                          // If you want the paths to be relative to the deploy then leave this
                          // value as an empty string. This value could also be a CDN or
                          // it could be the ssl version of your S3 bucket ie:
                          // https://s3.amazonaws.com/' + deployConfig.domain;

const prodAssetsUrl = `https://s3.amazonaws.com/${deployConfig.domain}`;
const devAssetsUrl = process.env.ASSETS_URL;

// Get a list of all directories in the apps directory.
// These will be used to generate the entries for webpack
const appsDir = path.join(__dirname, '../apps/');

const buildSuffix = '_bundle.js';

const htmlOptions = { // Options for building html files
  truncateSummaryAt: 1000,
  buildExtensions: ['.html', '.htm', '.md', '.markdown'], // file types to build (others will just be copied)
  markdownExtensions: ['.md', '.markdown'], // file types to process markdown
};

// -----------------------------------------------------------------------------
// Main paths for the application. Includes production and development paths.
// -----------------------------------------------------------------------------
const paths = {
  devRelativeOutput,
  prodRelativeOutput,
  devOutput,
  prodOutput,
  prodAssetsUrl,
  devAssetsUrl,
  appsDir,
};

// -----------------------------------------------------------------------------
// Helper function to generate full template paths for the given app
// -----------------------------------------------------------------------------
function templateDirs(app, dirs) {
  return _.map(dirs, templateDir => path.join(app.htmlPath, templateDir));
}

// -----------------------------------------------------------------------------
// Helper to determine if we should do a production build or not
// -----------------------------------------------------------------------------
function isProduction(stage) {
  return stage === 'production' || stage === 'staging';
}

// -----------------------------------------------------------------------------
// Generates the main paths used for output
// -----------------------------------------------------------------------------
function outputPaths(name, port, options) {

  let rootOutputPath = devOutput;
  let outputPath = options.onlyPack ?
    devOutput : path.join(devOutput, name);
  // Public path indicates where the assets will be served from. In dev this will likely be
  // localhost or a local domain. In production this could be a CDN. In developerment this will
  // point to whatever public url is serving dev assets.
  let publicPath = `${devAssetsUrl}:${port}${options.hotPack ? `/${name}` : ''}${devRelativeOutput}`;

  if (isProduction(options.stage)) {
    rootOutputPath = prodOutput;
    outputPath = options.onlyPack ?
      prodOutput : path.join(prodOutput, name);
    publicPath = prodAssetsUrl + prodRelativeOutput;
  }

  return {
    rootOutputPath,
    outputPath,
    publicPath
  };
}

// -----------------------------------------------------------------------------
// Generate settings needed for webpack
// -----------------------------------------------------------------------------
function webpackSettings(file, appPath, port, options) {
  return _.merge({
    name,
    file,
    path: appPath,
    stage: options.stage,
    production: isProduction(options.stage),
    buildSuffix,
  }, outputPaths(name, port, options));
}

// -----------------------------------------------------------------------------
// Generate all settings needed for a given application
// -----------------------------------------------------------------------------
function appSettings(name, port, options) {

  const appPath = path.join(appsDir, name);
  const htmlPath = path.join(appPath, 'html');
  const staticPath = path.join(appPath, 'static');

  const app = _.merge({
    htmlPath,
    staticPath,
    templateData: {}, // Object that will be passed to every page as it is rendered
    templateMap: {}, // Used to specify specific templates on a per file basis
    port,
    htmlOptions,
  }, webpackSettings('app.jsx', appPath, port, options));

  app.templateDirs = templateDirs(app, ['layouts']);
  return {
    [name] : app
  };
}

// -----------------------------------------------------------------------------
// Generates an app setting for all applications found in the client directory
// -----------------------------------------------------------------------------
function apps(options) {
  let port = options.port;
  return fs.readdirSync(appsDir)
    .filter(file => fs.statSync(path.join(appsDir, file)).isDirectory())
    .reduce((result, appName) => {
      const app = appSettings(appName, port, options);
      port = options.appPerPort ? port + 1 : options.port;
      return _.merge(result, app);
    }, {});
}

module.exports = {
  paths,
  hotPort,
  outputPaths,
  apps
};
