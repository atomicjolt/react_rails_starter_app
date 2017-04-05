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
// Helper function to generate full template paths for the given app
// -----------------------------------------------------------------------------
function templateDirs(app){
  return _.map(app.templateDirs, templateDir => path.join(app.path, app.htmlPath, templateDir));
}

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
function buildStatic(outputPath, appPath) {
  try {
    const staticDir = `${appPath}/static`;
    console.log(`Copying static files in ${staticDir}`);
    fs.copySync(staticDir, outputPath);
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
    buildStatic(webpackOptions.appOutputPath, webpackOptions.app.path);

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
      const inputPath = path.join(webpackOptions.app.path, 'html');

      const pages = content.buildContents(
        inputPath,
        inputPath,
        webpackOptions.appOutputPath,
        webpackAssets,
        webpackOptions.stage,
        webpackOptions.buildSuffix,
        templateDirs(webpackOptions.app),
        htmlOptions
      );

      resolve({
        webpackConfig : packResults.webpackConfig,
        webpackAssets,
        pages,
      });
    });

  });
}

// -----------------------------------------------------------------------------
// watch
// -----------------------------------------------------------------------------
function appWatch(rootBuildPath, webpackOptions, htmlOptions, buildResults) {

  // Watch for content to change
  nodeWatch(webpackOptions.app.path, { recursive: true }, (evt, filePath) => {

    const outputPath = path.join(rootBuildPath, webpackOptions.appName);
    const originalInputPath = path.join(webpackOptions.app.path, webpackOptions.app.htmlPath);

    // Build the page
    const page = content.buildContent(
      filePath,
      templateDirs(webpackOptions.app),
      buildResults.webpackAssets,
      webpackOptions.stage,
      htmlOptions
    );

    page.outputFilePath = file.write(
      content.outFilePath(page, outputPath, filePath, originalInputPath),
      page.html
    );

  });
}

function watch(rootBuildPath, webpackOptions, htmlOptions) {
  return new Promise((resolve) => {
    build(rootBuildPath, webpackOptions, htmlOptions).then((buildResults) => {
      appWatch(rootBuildPath, webpackOptions, htmlOptions, buildResults);
      resolve();
    });
  });
}

module.exports = {
  watch,
  build,
  buildWebpackEntries
};
