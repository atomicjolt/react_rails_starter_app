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
function buildWebpackEntries(buildOptions) {
  return new Promise((resolve, reject) => {
    const webpackConfig = webpackConfigBuilder(buildOptions);
    if (buildOptions.stage !== 'hot') {
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
function build(buildOptions) {

  return new Promise((resolve) => {

    // Copy static files to build directory
    const staticInputPath = path.join(buildOptions.app.path, buildOptions.app.staticPath);
    buildStatic(staticInputPath, buildOptions.appOutputPath);

    // Webpack build
    console.log(`Webpacking ${buildOptions.appName}`);

    buildWebpackEntries(buildOptions).then((packResults) => {
      let webpackAssets = null;
      const webpackAssetsFilePath = `${packResults.webpackConfig.output.path}/${buildOptions.appName}-webpack-assets.json`;
      if (fs.existsSync(webpackAssetsFilePath)) {
        webpackAssets = fs.readJsonSync(webpackAssetsFilePath);
      }

      // Build html
      console.log(`Building html for ${buildOptions.appName}`);
      const htmlInputPath = path.join(buildOptions.app.path, buildOptions.app.htmlPath);

      const pages = content.buildContents(
        htmlInputPath,
        htmlInputPath,
        buildOptions,
        webpackAssets
      );

      //watchStatic(staticInputPath);
      //watchHtml(htmlInputPath, webpackAssets, buildOptions, htmlOptions);

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
    fs.copySync(filePath, buildOptions.appOutputPath);
  });
}

// -----------------------------------------------------------------------------
// watchHtml
// Used to rebuild html or templates if files change.
// -----------------------------------------------------------------------------
function watchHtml(htmlInputPath, webpackAssets, buildOptions, htmlOptions) {

  // Watch for content to change
  nodeWatch(htmlInputPath, { recursive: true }, (evt, fullInputPath) => {
    content.writeContent(
      htmlInputPath,
      buildOptions.appOutputPath,
      fullInputPath,
      webpackAssets,
      buildOptions.stage,
      buildSuffix,
      templateDirs,
      htmlOptions);

  });
}

module.exports = {
  build,
  buildWebpackEntries
};
