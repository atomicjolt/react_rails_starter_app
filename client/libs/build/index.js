const path      = require('path');
const fs        = require('fs-extra');
const _         = require('lodash');
const webpack   = require('webpack');
const nodeWatch = require('node-watch');

const file      = require('./file');
const content   = require('./content');

// Settings
const webpackConfigBuilder = require('../../config/webpack.config');

// -----------------------------------------------------------------------------
// run webpack to build entries
// -----------------------------------------------------------------------------
function buildWebpackEntries(webpackOptions) {
  return new Promise((resolve, reject) => {
    const webpackConfig = webpackConfigBuilder(webpackOptions);
    if (webpackOptions.stage !== 'hot') {
      const bundler = webpack(webpackConfig);
      const bundle = (err, stats) => {
        if (err) {
          console.log('webpack error', err);
          reject(err);
        }
        // console.log('webpack', stats.toString({ colors: true }));
        resolve({
          webpackConfig,
          webpackStats: stats.toJson()
        });
      };
      bundler.run(bundle);
    } else {
      resolve({
        webpackConfig,
        webpackStats: null
      });
    }
  });
}

// -----------------------------------------------------------------------------
// copy over static files to build directory
// -----------------------------------------------------------------------------
function buildStatic(staticInputPath, outputPath) {
  try {
    console.log(`Copying static files in ${staticInputPath}`);
    fs.copySync(staticInputPath, outputPath);
  } catch (err) {
    // No static dir. Do nothing
  }
}

// -----------------------------------------------------------------------------
// main build
// -----------------------------------------------------------------------------
function build(webpackOptions, htmlOptions) {

  return new Promise((resolve) => {

    // Copy static files to build directory
    const staticInputPath = path.join(webpackOptions.app.path, webpackOptions.app.staticPath);
    buildStatic(staticInputPath, webpackOptions.appOutputPath);

    // Webpack build
    console.log(`Webpacking ${webpackOptions.appName}`);

    buildWebpackEntries(webpackOptions).then((packResults) => {
      let webpackAssets = null;
      const webpackAssetsFilePath = `${packResults.webpackConfig.output.path}/${webpackOptions.appName}-webpack-assets.json`;
      if (fs.existsSync(webpackAssetsFilePath)) {
        webpackAssets = fs.readJsonSync(webpackAssetsFilePath);
      }

      // Build html
      console.log(`Building html for ${webpackOptions.appName}`);
      const htmlInputPath = path.join(webpackOptions.app.path, webpackOptions.app.htmlPath);

      const pages = content.buildContents(
        htmlInputPath,
        htmlInputPath,
        webpackOptions,
        webpackAssets,
        htmlOptions
      );

      //watchStatic(staticInputPath);
      //watchHtml(htmlInputPath, webpackAssets, webpackOptions, htmlOptions);

      resolve({
        webpackConfig : packResults.webpackConfig,
        webpackAssets,
        pages,
      });
    });

  });
}

// -----------------------------------------------------------------------------
// watchStatic
// Used to copy over static files if they change
// -----------------------------------------------------------------------------
function watchStatic(staticInputPath) {
  nodeWatch(staticInputPath, { recursive: true }, (evt, filePath) => {
    fs.copySync(filePath, webpackOptions.appOutputPath);
  });
}

// -----------------------------------------------------------------------------
// watchHtml
// Used to rebuild html or templates if files change.
// -----------------------------------------------------------------------------
function watchHtml(htmlInputPath, webpackAssets, webpackOptions, htmlOptions) {

  // Watch for content to change
  nodeWatch(htmlInputPath, { recursive: true }, (evt, fullInputPath) => {
    content.writeContent(
      htmlInputPath,
      webpackOptions.appOutputPath,
      fullInputPath,
      webpackAssets,
      webpackOptions.stage,
      buildSuffix,
      templateDirs,
      htmlOptions);

  });
}

module.exports = {
  build,
  buildWebpackEntries
};
