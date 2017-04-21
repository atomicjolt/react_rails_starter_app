const fs = require('fs-extra');
const webpack = require('webpack');
const nodeWatch = require('node-watch');

const content = require('./content');
const webpackUtils = require('./webpack_utils');

// Settings
const webpackConfigBuilder = require('../../config/webpack.config');

// -----------------------------------------------------------------------------
// run webpack to build entries
// -----------------------------------------------------------------------------
function buildWebpackEntries(app) {
  return new Promise((resolve, reject) => {
    const webpackConfig = webpackConfigBuilder(app);
    const bundler = webpack(webpackConfig);
    const bundle = (err, stats) => {
      if (err) {
        console.error('webpack error', err);
        reject(err);
      }
      // console.log('webpack', stats.toString({ colors: true }));
      resolve({
        webpackConfig,
        webpackStats: stats.toJson()
      });
    };
    bundler.run(bundle);
  });
}

// -----------------------------------------------------------------------------
// copy over static files to build directory
// -----------------------------------------------------------------------------
function buildStatic(app) {
  try {
    console.log(`Copying static files in ${app.staticPath}`);
    fs.copy(app.staticPath, app.outputPath);
  } catch (err) {
    // No static dir. Do nothing
  }
}

// -----------------------------------------------------------------------------
// watchStatic
// Used to copy over static files if they change
// -----------------------------------------------------------------------------
function watchStatic(app) {
  console.log(`Watching static files in ${app.staticPath}`);
  nodeWatch(app.staticPath, { recursive: true }, (evt, filePath) => {
    console.log(`Change in static file ${filePath}`);
    fs.copySync(filePath, app.outputPath);
  });
}

// -----------------------------------------------------------------------------
// watchHtml
// Used to rebuild html or templates if files change.
// -----------------------------------------------------------------------------
function watchHtml(webpackAssets, app) {
  console.log(`Watching html files in ${app.htmlPath}`);
  nodeWatch(app.htmlPath, { recursive: true }, (evt, fullInputPath) => {
    console.log(`Change in html file ${fullInputPath}`);
    content.writeContent(
      app.htmlPath,
      fullInputPath,
      webpackAssets,
      app);
  });
}

function buildHtml(app, webpackAssets) {
  const pages = content.buildContents(
    app.htmlPath,
    app,
    webpackAssets
  );

  if (app.stage === 'hot') {
    watchHtml(webpackAssets, app);
  }

  return pages;
}

// -----------------------------------------------------------------------------
// main build
// -----------------------------------------------------------------------------
function build(app) {

  return new Promise((resolve) => {

    // Copy static files to build directory
    buildStatic(app);
    if (app.stage === 'hot') {
      watchStatic(app);
    }

    // Webpack build
    console.log(`Webpacking ${app.name}`);

    buildWebpackEntries(app).then((packResults) => {
      const webpackAssets = webpackUtils.loadWebpackAssets(app, packResults);

      // Build html
      console.log(`Building html for ${app.name}`);
      const pages = buildHtml(app, webpackAssets);

      resolve({
        app,
        webpackConfig : packResults.webpackConfig,
        webpackAssets,
        pages,
      });
    });

  });
}

module.exports = {
  build,
  buildHtml,
  buildWebpackEntries
};
