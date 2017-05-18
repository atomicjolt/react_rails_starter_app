const fs = require('fs-extra');
const path = require('path');
const _ = require('lodash');
const urljoin = require('url-join');

// There is a warning if the .env file is missing
// This is fine in a production setting, where settings
// are loaded from the env and not from a file
require('dotenv').load({ path: path.join(__dirname, '../../.env') });

const hotPort = parseInt(process.env.ASSETS_PORT, 10) || 8080;

const devRelativeOutput  = '/';
const prodRelativeOutput = '/assets/';

const devOutput  = path.join(__dirname, '../../build/dev', devRelativeOutput);
const prodOutput = path.join(__dirname, '../../public', prodRelativeOutput);

const prodAssetsUrl = ''; // Set this to the url where the assets will be deployed.
                          // If you want the paths to be relative to the deploy then leave this
                          // value as an empty string. This value could also be a CDN or
                          // it could be the ssl version of your S3 bucket ie:
                          // https://s3.amazonaws.com/reactrailsstarterapp.com;

// const prodAssetsUrl = `https://s3.amazonaws.com/${deployConfig.domain}`;

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
// Generates a path with the app name if needed
// -----------------------------------------------------------------------------
function withNameIfRequired(name, relativeOutput, options) {
  if (!options.onlyPack && !options.appPerPort) {
    return path.join(relativeOutput, name);
  }
  return relativeOutput;
}

// -----------------------------------------------------------------------------
// Generates the main paths used for output
// -----------------------------------------------------------------------------
function outputPaths(name, port, options) {

  let rootOutputPath = devOutput;
  let outputPath = options.onlyPack ? devOutput : path.join(devOutput, name);
  // Public path indicates where the assets will be served from. In dev this will likely be
  // localhost or a local domain. In production this could be a CDN. In development this will
  // point to whatever public url is serving dev assets.
  let publicPath = urljoin(devAssetsUrl, withNameIfRequired(name, devRelativeOutput, options));

  if (isProduction(options.stage)) {
    rootOutputPath = prodOutput;
    outputPath = options.onlyPack ? prodOutput : path.join(prodOutput, name);
    publicPath = urljoin(prodAssetsUrl, withNameIfRequired(name, prodRelativeOutput, options));
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
function webpackSettings(name, file, appPath, port, options) {
  return {
    name,
    file,
    path: appPath,
    shouldLint: options.shouldLint,
    stage: options.stage,
    production: isProduction(options.stage),
    buildSuffix,
    port,
  };
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
    htmlOptions,
  }, webpackSettings(name, 'app.jsx', appPath, port, options),
     outputPaths(name, port, options));

  app.templateDirs = templateDirs(app, ['layouts']);
  return {
    [name] : app
  };
}

// -----------------------------------------------------------------------------
// Iterate a given directory to generate app or webpack settings
// -----------------------------------------------------------------------------
function iterateDirAndPorts(dir, options, cb) {
  let port = options.port;
  return fs.readdirSync(dir)
    .filter(file => fs.statSync(path.join(dir, file)).isDirectory())
    .reduce((result, appName) => {
      const app = cb(appName, port, options);
      port = options.appPerPort ? port + 1 : options.port;
      return _.merge(result, app);
    }, {});
}

// -----------------------------------------------------------------------------
// Generates an app setting for all applications found in the client directory
// -----------------------------------------------------------------------------
function apps(options) {
  return iterateDirAndPorts(appsDir, options, appSettings);
}

module.exports = {
  paths,
  hotPort,
  outputPaths,
  apps,
  isProduction
};
