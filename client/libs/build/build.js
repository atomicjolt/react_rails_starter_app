const fs = require('fs-extra');
const nodeWatch = require('node-watch');
const exec = require('child_process').exec;

const content = require('./content');
const webpackUtils = require('./webpack_utils');

// -----------------------------------------------------------------------------
// copy over static files to build directory
// -----------------------------------------------------------------------------
function buildStatic(app, logger = () => {}) {
  logger('info', 'COPYING', `Copying static files in ${app.staticPath}`);
  exec(`cp -r ${app.staticPath}/. ${app.outputPath}`);
}

// -----------------------------------------------------------------------------
// watchStatic
// Used to copy over static files if they change
// -----------------------------------------------------------------------------
function watchStatic(app, logger = () => {}) {
  logger('info', 'WATCHING', `Watching static files in ${app.staticPath}`);
  nodeWatch(app.staticPath, { recursive: true }, (evt, filePath) => {
    logger('info', 'CHANGE', `Change in static file ${filePath}`);
    fs.copySync(filePath, app.outputPath);
  });
}

// -----------------------------------------------------------------------------
// watchHtml
// Used to rebuild html or templates if files change.
// -----------------------------------------------------------------------------
function watchHtml(webpackAssets, app, logger = () => {}) {
  logger('info', 'WATCHING', `Watching html files in ${app.htmlPath}`);
  nodeWatch(app.htmlPath, { recursive: true }, (evt, fullInputPath) => {
    logger('info', 'CHANGE', `Change in html file ${fullInputPath}`);
    content.writeContent(
      fullInputPath,
      webpackAssets,
      app
    );
  });
}

function buildHtml(app, webpackAssets, logger = () => {}) {
  const pages = content.buildContents(
    app.htmlPath,
    app,
    webpackAssets
  );

  if (app.stage === 'hot' && fs.existsSync(app.htmlPath)) {
    watchHtml(webpackAssets, app, logger);
  }

  return pages;
}

// -----------------------------------------------------------------------------
// main build
// -----------------------------------------------------------------------------
function build(app, logger = () => {}) {

  logger('info', 'COPYING', `Copying static files for ${app.name} to ${app.outputPath}`);

  // Ensure directory exists
  fs.ensureDirSync(app.outputPath);

  if (fs.existsSync(app.staticPath)) {
    // Copy static files to build directory
    buildStatic(app, logger);
    if (app.stage === 'hot') {
      watchStatic(app, logger);
    }
  }

  const webpackAssets = webpackUtils.loadWebpackAssets(app);

  // Build html
  logger('info', 'BUILDING', `Building html for ${app.name}`);
  const pages = buildHtml(app, webpackAssets, logger);

  return {
    app,
    webpackAssets,
    pages,
  };
}

module.exports = {
  build,
  buildHtml,
};
